"use strict";

import { IBasicCrypto } from "./global-context/basic-crypto";

/**
 * An interface that represents the global context of an environment, which includes basic support
 * of [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).
 * 
 * @hidden
 */
export type IGlobalContext = IGlobalContext.Standard | IGlobalContext.Microsoft;

export namespace IGlobalContext
{
    export interface Standard
    {
        readonly crypto: IBasicCrypto;
    }

    export interface Microsoft
    {
        readonly msCrypto: IBasicCrypto;
    }
}
