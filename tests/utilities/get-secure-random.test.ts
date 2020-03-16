"use strict";

import { mocked } from "ts-jest/utils";

import { SecureRandomNode } from "src/secure-random-node";
import { SecureRandomStandard } from "src/secure-random-standard";
import { getSecureRandom } from "src/utilities/get-secure-random";
import { isNode } from "src/utilities/is-node";

jest.mock("src/utilities/is-node");
const isNodeMocked = mocked(isNode);

afterAll(() => { isNodeMocked.mockRestore(); });

describe(
    "getSecureRandom(): ISecureRandomStatic",
    () =>
    {
        test(
            "Case: Node.js runtime environment",
            () =>
            {
                isNodeMocked.mockReturnValueOnce(true);
                expect(getSecureRandom()).toBe(SecureRandomNode);
            });

        test(
            "Case: Other environment",
            () =>
            {
                isNodeMocked.mockReturnValueOnce(false);
                expect(getSecureRandom()).toBe(SecureRandomStandard);
            });
    });
