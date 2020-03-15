"use strict";

import { SecureRandomStandard } from "src/secure-random-standard";

import { readFileSync } from "fs";
import Module from "module";
import NodeWebCrypto from "node-webcrypto-ossl";
import Path from "path";
import * as TSNode from "ts-node";
import { Script, createContext } from "vm";

import { executeSecureRandomInstanceTest } from "./_secure-random";

describe(
    "SecureRandomStandard",
    () =>
    {
        describe(
            "Instance Methods",
            () =>
            {
                // const compiler = TSNode.create({ project: Path.resolve(__dirname, "./tsconfig.json") });
                
                // const modulePath = require.resolve("src/secure-random-standard");
                // const moduleCode = compiler.compile(readFileSync(modulePath, "utf8"), modulePath);

                // const context = createContext(
                //     {
                //         Array,
                //         ArrayBuffer,
                //         Buffer,
                //         RangeError,
                //         Uint8Array,
                //         crypto: new NodeWebCrypto(),
                //         require(id: string): any
                //         {
                //             if (id.startsWith("./") || id.startsWith("../"))
                //             {
                //                 return require(Path.resolve(Path.dirname(modulePath), id));
                //             }
                //             else
                //             {
                //                 return require(id);
                //             }
                //         },
                //     });

                // const script = new Script(`
                //     const { SecureRandomStandard } = (
                //         () =>
                //         {
                //             const module = ${ Module.wrap(moduleCode) }

                //             const _module = { exports: {} };
                //             module(_module.exports, require, _module);

                //             return _module.exports;
                //         })();

                //     new SecureRandomStandard();`);
                    
                // SecureRandomInstanceTest(script.runInContext(context));
                    
                globalThis["crypto"] = new NodeWebCrypto();
                executeSecureRandomInstanceTest(new SecureRandomStandard());
            });
    });
