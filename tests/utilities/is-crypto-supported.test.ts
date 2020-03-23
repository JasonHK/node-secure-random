"use strict";

import NodeWebCrypto from "node-webcrypto-ossl";

import { IGlobalContext } from "src/interfaces/global-context";
import { isCryptoSupported } from "src/utilities/is-crypto-supported";

const crypto = new NodeWebCrypto();

describe(
    "isCryptoSupported(context)",
    () =>
    {
        test(
            "Case: Web Crypto API supported environment",
            () =>
            {
                // Standard
                {
                    const context: IGlobalContext.Standard = { crypto };
                    expect(isCryptoSupported(context)).toBe(true);
                };

                // Microsoft
                {
                    const context: IGlobalContext.Microsoft = { msCrypto: crypto };
                    expect(isCryptoSupported(context)).toBe(true);
                };
            });

        test(
            "Case: Web Crypto API unsupported environment",
            () =>
            {
                expect(isCryptoSupported({})).toBe(false);
            });
    });
