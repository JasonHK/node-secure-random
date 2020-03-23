"use strict";

import getGlobalThis from "globalthis";
import { mocked } from "ts-jest/utils";

import { isNode } from "src/utilities/is-node";

jest.mock("globalthis");
const getGlobalThisMocked = mocked(getGlobalThis);

afterAll(() => { getGlobalThisMocked.mockRestore(); });

describe(
    "isNode()",
    () =>
    {
        test(
            "Case: Node.js runtime environment",
            () =>
            {
                getGlobalThisMocked.mockReturnValueOnce(
                    {
                        process: {
                            versions: {
                                node: process.versions.node,
                            },
                        },
                    } as typeof globalThis);
                    
                expect(isNode()).toBe(true);
            });

        test(
            "Case: Other environment",
            () =>
            {
                getGlobalThisMocked.mockReturnValueOnce({} as typeof globalThis);
                expect(isNode()).toBe(false);
            });
    });
