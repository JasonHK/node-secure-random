"use strict";

import { getSecureRandom } from "./utilities/get-secure-random";

/**
 * A `SecureRandom` implementation for the current environment.
 * 
 * @since 0.0.1
 */
export const SecureRandom = getSecureRandom();

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

export * from "./abstract-secure-random";
export * from "./output-type";

export * from "./errors/buffer-unavailable-error";
export * from "./errors/crypto-unsupported-error";
export * from "./errors/unknown-output-type-error";

export * from "./interfaces/output-types";
export * from "./interfaces/output-types-map";
