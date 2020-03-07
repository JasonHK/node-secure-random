"use strict";

import { OutputType } from "./output-type";

import { IOutputTypesMap } from "./interfaces/output-types-map";

/**
 * An abstract representation of a secure random implementation. All secure random implementations
 * were inherited from this class.
 */
export abstract class SecureRandom
{
    /**
     * Initialize a new `SecureRandom` instance.
     */
    public constructor()
    {
        if (new.target === SecureRandom)
        {
            throw new TypeError(`Cannot create an instance of the abstract class \`${ SecureRandom.name }\`.`);
        }
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to an `Array`.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @return The `Promise` containing the `Array` the binary stream was converted to.
     */
    public abstract getRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.ARRAY]>;

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to the given type.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @param type   The type of output the binary stream will be converted to.
     * @return The `Promise` containing the object the binary stream was converted to.
     */
    public abstract getRandomBytes<T extends OutputType>(length: number, type: T): Promise<IOutputTypesMap[T]>;

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to an `Array`.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @return The `Array` the binary stream was converted to.
     */
    public abstract getRandomBytesSync(length: number): IOutputTypesMap[OutputType.ARRAY];

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to the given type.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @param type   The type of output the binary stream will be converted to.
     * @return The object the binary stream was converted to.
     */
    public abstract getRandomBytesSync<T extends OutputType>(length: number, type: T): IOutputTypesMap[T];

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to an `Array`.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @return The `Promise` containing the `Array` the binary stream was converted to.
     */
    public getArrayOfRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.ARRAY]>
    {
        return this.getRandomBytes(length, OutputType.ARRAY);
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to an `Array`.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @return The `Array` the binary stream was converted to.
     */
    public getArrayOfRandomBytesSync(length: number): IOutputTypesMap[OutputType.ARRAY]
    {
        return this.getRandomBytesSync(length, OutputType.ARRAY);
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to an `ArrayBuffer`.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @return The `Promise` containing the `ArrayBuffer` the binary stream was converted to.
     */
    public getArrayBufferOfRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.ARRAY_BUFFER]>
    {
        return this.getRandomBytes(length, OutputType.ARRAY_BUFFER);
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to an `ArrayBuffer`.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @return The `ArrayBuffer` the binary stream was converted to.
     */
    public getArrayBufferOfRandomBytesSync(length: number): IOutputTypesMap[OutputType.ARRAY_BUFFER]
    {
        return this.getRandomBytesSync(length, OutputType.ARRAY_BUFFER);
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to an `Buffer`.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @return The `Promise` containing the `Buffer` the binary stream was converted to.
     */
    public getBufferOfRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.BUFFER]>
    {
        return this.getRandomBytes(length, OutputType.BUFFER);
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to an `Buffer`.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @return The `Buffer` the binary stream was converted to.
     */
    public getBufferOfRandomBytesSync(length: number): IOutputTypesMap[OutputType.BUFFER]
    {
        return this.getRandomBytesSync(length, OutputType.BUFFER);
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to an `Uint8Array`.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @return The `Promise` containing the `Uint8Array` the binary stream was converted to.
     */
    public getUint8ArrayOfRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.UINT8_ARRAY]>
    {
        return this.getRandomBytes(length, OutputType.UINT8_ARRAY);
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to an `Uint8Array`.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @return The `Uint8Array` the binary stream was converted to.
     */
    public getUint8ArrayOfRandomBytesSync(length: number): IOutputTypesMap[OutputType.UINT8_ARRAY]
    {
        return this.getRandomBytesSync(length, OutputType.UINT8_ARRAY);
    }
}
