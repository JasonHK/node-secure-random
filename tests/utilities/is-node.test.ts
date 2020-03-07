"use strict";

import { readFileSync } from "fs";
import Module from "module";
import Path from "path";
import * as TSNode from "ts-node";
import { Script, createContext } from "vm";

import { isNode } from "src/utilities/is-node";

describe(
    "isNode(): boolean",
    () =>
    {
        test(
            "Case: Node.js runtime",
            () =>
            {
                expect(isNode()).toBe(true);
            });

        test(
            "Case: Non-Node.js environment",
            () =>
            {
                const compiler = TSNode.create({ project: Path.resolve(__dirname, "../tsconfig.json") });
                
                const modulePath = require.resolve("src/utilities/is-node");
                const moduleName = Path.basename(modulePath);
                const moduleCode = compiler.compile(readFileSync(modulePath, "utf8"), moduleName);

                const context = createContext({ require });
                const script = new Script(`
                    const { isNode } = (
                        () =>
                        {
                            const module = ${ Module.wrap(moduleCode) }

                            const _module = { exports: {} };
                            module(_module.exports, require, _module);

                            return _module.exports;
                        })();

                    isNode();`);

                expect(script.runInContext(context)).toBe(false);
            });
    });
