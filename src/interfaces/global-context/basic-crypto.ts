"use strict";

/**
 * An interface that represents the members of [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
 * which were essential for this library.
 * 
 * @hidden
 */
export interface IBasicCrypto
{
    getRandomValues<T extends Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | null>(array: T): T;
}
