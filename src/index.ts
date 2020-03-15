"use strict";

import { ISecureRandomStatic } from "./interfaces/secure-random-static";

import { isNode } from "./utilities/is-node";

/**
 * A `SecureRandom` implementation for the current environment.
 * 
 * @since 0.0.1
 */
export const SecureRandom = getSecureRandomImplementation();

/**
 * A `SecureRandom` instance.
 * 
 * @hidden
 */
const secureRandom = new SecureRandom();

/**
 * Generate a binary stream of cryptographically strong random values of the given length
 * asynchronously. Then convert the binary stream to the given type.
 * 
 * @since 0.0.1
 */
export const getRandomBytes = secureRandom.getRandomBytes;

/**
 * Generate a binary stream of cryptographically strong random values of the given length
 * synchronously. Then convert the binary stream to the given type.
 * 
 * @since 0.0.1
 */
export const getRandomBytesSync = secureRandom.getRandomBytesSync;

/**
 * Generate a binary stream of cryptographically strong random values of the given length
 * asynchronously. Then convert the binary stream to an `Array`.
 * 
 * @since 0.0.1
 */
export const getArrayOfRandomBytes = secureRandom.getArrayOfRandomBytes;

/**
 * Generate a binary stream of cryptographically strong random values of the given length
 * synchronously. Then convert the binary stream to an `Array`.
 * 
 * @since 0.0.1
 */
export const getArrayOfRandomBytesSync = secureRandom.getArrayOfRandomBytesSync;

/**
 * Generate a binary stream of cryptographically strong random values of the given length
 * asynchronously. Then convert the binary stream to an `ArrayBuffer`.
 * 
 * @since 0.0.1
 */
export const getArrayBufferOfRandomBytes = secureRandom.getArrayBufferOfRandomBytes;

/**
 * Generate a binary stream of cryptographically strong random values of the given length
 * synchronously. Then convert the binary stream to an `ArrayBuffer`.
 * 
 * @since 0.0.1
 */
export const getArrayBufferOfRandomBytesSync = secureRandom.getArrayBufferOfRandomBytesSync;

/**
 * Generate a binary stream of cryptographically strong random values of the given length
 * asynchronously. Then convert the binary stream to an `Buffer`.
 * 
 * @since 0.0.1
 */
export const getBufferOfRandomBytes = secureRandom.getBufferOfRandomBytes;

/**
 * Generate a binary stream of cryptographically strong random values of the given length
 * synchronously. Then convert the binary stream to an `Buffer`.
 * 
 * @since 0.0.1
 */
export const getBufferOfRandomBytesSync = secureRandom.getBufferOfRandomBytesSync;

/**
 * Generate a binary stream of cryptographically strong random values of the given length
 * asynchronously. Then convert the binary stream to an `Uint8Array`.
 * 
 * @since 0.0.1
 */
export const getUint8ArrayOfRandomBytes = secureRandom.getUint8ArrayOfRandomBytes;

/**
 * Generate a binary stream of cryptographically strong random values of the given length
 * synchronously. Then convert the binary stream to an `Uint8Array`.
 * 
 * @since 0.0.1
 */
export const getUint8ArrayOfRandomBytesSync = secureRandom.getUint8ArrayOfRandomBytesSync;

/**
 * Select a `SecureRandom` implementation that was for the current environment.
 * 
 * @hidden
 * 
 * @returns A `SecureRandom` implementation.
 */
function getSecureRandomImplementation(): ISecureRandomStatic
{
    if (isNode())
    {
        return (require("./secure-random-node") as typeof import("./secure-random-node")).SecureRandomNode;
    }
    else
    {
        return (require("./secure-random-standard") as typeof import("./secure-random-standard")).SecureRandomStandard;
    }
}

export * from "./abstract-secure-random";
export * from "./output-type";

export * from "./errors/buffer-unavailable-error";
export * from "./errors/crypto-unsupported-error";
export * from "./errors/unknown-output-type-error";

export * from "./interfaces/output-types";
export * from "./interfaces/output-types-map";
