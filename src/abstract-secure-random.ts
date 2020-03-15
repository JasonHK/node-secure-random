"use strict";

import { BoundClass, BoundMethod } from "@aloreljs/bound-decorator";

import { OutputType } from "./output-type";

import { IOutputTypesMap } from "./interfaces/output-types-map";

/**
 * An abstract representation of a secure random implementation. All secure random implementations
 * were inherited from this class.
 * 
 * @since 0.0.1
 */
@BoundClass()
export abstract class AbstractSecureRandom
{
    /**
     * Initialize a new `SecureRandom` instance.
     * 
     * @since 0.0.1
     */
    public constructor()
    {
        if (new.target === AbstractSecureRandom)
        {
            throw new TypeError(`Cannot create an instance of the abstract class \`${ AbstractSecureRandom.name }\`.`);
        }
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to an `Array`.
     * 
     * @since 0.0.1
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @returns The `Promise` containing the `Array` the binary stream was converted to.
     */
    public abstract getRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.ARRAY]>;

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to the given type.
     * 
     * @since 0.0.1
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @param type   The type of output the binary stream will be converted to.
     * @returns The `Promise` containing the object the binary stream was converted to.
     */
    public abstract getRandomBytes<T extends OutputType>(length: number, type: T): Promise<IOutputTypesMap[T]>;

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to an `Array`.
     * 
     * @since 0.0.1
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @returns The `Array` the binary stream was converted to.
     */
    public abstract getRandomBytesSync(length: number): IOutputTypesMap[OutputType.ARRAY];

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to the given type.
     * 
     * @since 0.0.1
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @param type   The type of output the binary stream will be converted to.
     * @returns The object the binary stream was converted to.
     */
    public abstract getRandomBytesSync<T extends OutputType>(length: number, type: T): IOutputTypesMap[T];

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to an `Array`.
     * 
     * @since 0.0.1
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @returns The `Promise` containing the `Array` the binary stream was converted to.
     */
    @BoundMethod()
    public getArrayOfRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.ARRAY]>
    {
        return this.getRandomBytes(length, OutputType.ARRAY);
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to an `Array`.
     * 
     * @since 0.0.1
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @returns The `Array` the binary stream was converted to.
     */
    @BoundMethod()
    public getArrayOfRandomBytesSync(length: number): IOutputTypesMap[OutputType.ARRAY]
    {
        return this.getRandomBytesSync(length, OutputType.ARRAY);
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to an `ArrayBuffer`.
     * 
     * @since 0.0.1
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @returns The `Promise` containing the `ArrayBuffer` the binary stream was converted to.
     */
    @BoundMethod()
    public getArrayBufferOfRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.ARRAY_BUFFER]>
    {
        return this.getRandomBytes(length, OutputType.ARRAY_BUFFER);
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to an `ArrayBuffer`.
     * 
     * @since 0.0.1
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @returns The `ArrayBuffer` the binary stream was converted to.
     */
    @BoundMethod()
    public getArrayBufferOfRandomBytesSync(length: number): IOutputTypesMap[OutputType.ARRAY_BUFFER]
    {
        return this.getRandomBytesSync(length, OutputType.ARRAY_BUFFER);
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to an `Buffer`.
     * 
     * @since 0.0.1
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @returns The `Promise` containing the `Buffer` the binary stream was converted to.
     */
    @BoundMethod()
    public getBufferOfRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.BUFFER]>
    {
        return this.getRandomBytes(length, OutputType.BUFFER);
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to an `Buffer`.
     * 
     * @since 0.0.1
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @returns The `Buffer` the binary stream was converted to.
     */
    @BoundMethod()
    public getBufferOfRandomBytesSync(length: number): IOutputTypesMap[OutputType.BUFFER]
    {
        return this.getRandomBytesSync(length, OutputType.BUFFER);
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to an `Uint8Array`.
     * 
     * @since 0.0.1
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @returns The `Promise` containing the `Uint8Array` the binary stream was converted to.
     */
    @BoundMethod()
    public getUint8ArrayOfRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.UINT8_ARRAY]>
    {
        return this.getRandomBytes(length, OutputType.UINT8_ARRAY);
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to an `Uint8Array`.
     * 
     * @since 0.0.1
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @returns The `Uint8Array` the binary stream was converted to.
     */
    @BoundMethod()
    public getUint8ArrayOfRandomBytesSync(length: number): IOutputTypesMap[OutputType.UINT8_ARRAY]
    {
        return this.getRandomBytesSync(length, OutputType.UINT8_ARRAY);
    }
}
