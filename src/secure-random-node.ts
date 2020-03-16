"use strict";

import { BoundMethod } from "@aloreljs/bound-decorator";

import { getVariableName } from "@jasonhk/variable-name";
import { randomBytes } from "crypto";

import { AbstractSecureRandom } from "./abstract-secure-random";
import { OutputType } from "./output-type";

import { UnknownOutputTypeError } from "./errors/unknown-output-type-error";

import { IOutputTypes } from "./interfaces/output-types";
import { IOutputTypesMap } from "./interfaces/output-types-map";

/**
 * A `SecureRandom` implementation for the [Node.js](https://nodejs.org/) runtime environment.
 */
export class SecureRandomNode extends AbstractSecureRandom
{
    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to an `Array`.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @returns The `Promise` containing the `Array` the binary stream was converted to.
     */
    public getRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.ARRAY]>;

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to the given type.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @param type   The type of output the binary stream will be converted to.
     * @returns The `Promise` containing the object the binary stream was converted to.
     */
    public getRandomBytes<T extends OutputType>(length: number, type: T): Promise<IOutputTypesMap[T]>;
    
    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to the given type.
     */
    @BoundMethod()
    public getRandomBytes(length: number, type?: OutputType): Promise<IOutputTypes>
    {
        if (typeof length !== "number")
        {
            throw new TypeError(`\`${ getVariableName({ length }) }\`is not a number.`);
        }
        else if ((typeof type !== "string") && (typeof type !== "undefined"))
        {
            throw new TypeError(`\`${ getVariableName({ type }) }\`is not a string.`);
        }

        type = type ?? OutputType.ARRAY;

        return new Promise(
            (resolve, reject) =>
            {
                randomBytes(
                    length,
                    (error, buffer) =>
                    {
                        if (!!error) { reject(error); }
                        
                        try
                        {
                            resolve(this._transformRandomBytes(buffer, type));
                        }
                        catch (error)
                        {
                            reject(error);
                        }
                    });
            });
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to an `Array`.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @returns The `Array` the binary stream was converted to.
     */
    public getRandomBytesSync(length: number): IOutputTypesMap[OutputType.ARRAY];

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to the given type.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @param type   The type of output the binary stream will be converted to.
     * @returns The object the binary stream was converted to.
     */
    public getRandomBytesSync<T extends OutputType>(length: number, type: T): IOutputTypesMap[T];

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * synchronously. Then convert the binary stream to the given type.
     */
    @BoundMethod()
    public getRandomBytesSync(length: number, type?: OutputType): IOutputTypes
    {
        if (typeof length !== "number")
        {
            throw new TypeError(`\`${ getVariableName({ length }) }\`is not a number.`);
        }
        else if ((typeof type !== "string") && (typeof type !== "undefined"))
        {
            throw new TypeError(`\`${ getVariableName({ type }) }\`is not a string.`);
        }

        type = type ?? OutputType.ARRAY;

        return this._transformRandomBytes(randomBytes(length), type);
    }

    /**
     * Convert the received binary stream to the given type.
     * 
     * @param buffer The binary stream.
     * @param type   The type of output the binary stream will be converted to.
     * @returns The object the binary stream was converted to.
     */
    private _transformRandomBytes(buffer: Buffer, type: OutputType): IOutputTypes
    {
        type = type.toLowerCase() as OutputType;

        switch (type)
        {
            case OutputType.ARRAY:
                return Array.from(buffer);
            case OutputType.ARRAY_BUFFER:
                return buffer.buffer;
            case OutputType.BUFFER:
                return buffer;
            case OutputType.UINT8_ARRAY:
                return new Uint8Array(buffer.buffer);
            default:
                throw new UnknownOutputTypeError(type);
        }
    }
}
