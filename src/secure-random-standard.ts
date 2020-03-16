"use strict";

import { BoundMethod } from "@aloreljs/bound-decorator";
import { getVariableName } from "@jasonhk/variable-name";
import getGlobalThis from "globalthis";
import isFunction from "lodash.isfunction";

import { AbstractSecureRandom } from "./abstract-secure-random";
import { OutputType } from "./output-type";

import { BufferUnavailableError } from "./errors/buffer-unavailable-error";
import { CryptoUnsupportedError } from "./errors/crypto-unsupported-error";
import { UnknownOutputTypeError } from "./errors/unknown-output-type-error";

import { IGlobalContext } from "./interfaces/global-context";
import { IBasicCrypto } from "./interfaces/global-context/basic-crypto";
import { IOutputTypes } from "./interfaces/output-types";
import { IOutputTypesMap } from "./interfaces/output-types-map";

import { isCryptoSupported } from "./utilities/is-crypto-supported";

/**
 * A `SecureRandom` implementation for environments that support the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).
 */
export class SecureRandomStandard extends AbstractSecureRandom
{
    private readonly _context: IGlobalContext;

    public get [Symbol.toStringTag](): string { return "SecureRandomStandard"; }

    private get _crypto(): IBasicCrypto
    {
        return (this._context as IGlobalContext.Standard).crypto ?? (this._context as IGlobalContext.Microsoft).msCrypto;
    }

    /**
     * Initialize a new `SecureRandomStandard` instance.
     */
    public constructor()
    {
        const context = getGlobalThis();
        if (!isCryptoSupported(context)) { throw new CryptoUnsupportedError(); }

        super();
        this._context = context;
    }

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to an `Array`.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @returns The `Promise` containing the `Array` the binary stream was converted to.
     */
    public async getRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.ARRAY]>;

    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to the given type.
     * 
     * @param length The length (in byte) of the generated binary stream.
     * @param type   The type of output the binary stream will be converted to.
     * @returns The `Promise` containing the object the binary stream was converted to.
     */
    public async getRandomBytes<T extends OutputType>(length: number, type: T): Promise<IOutputTypesMap[T]>;
    
    /**
     * Generate a binary stream of cryptographically strong random values of the given length
     * asynchronously. Then convert the binary stream to the given type.
     */
    @BoundMethod()
    public async getRandomBytes(length: number, type?: OutputType): Promise<IOutputTypes>
    {
        return this.getRandomBytesSync(length, type);
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

        const array = new Uint8Array(length);
        this._crypto.getRandomValues(array);

        switch (type)
        {
            case OutputType.ARRAY:
                return Array.from(array);
            case OutputType.ARRAY_BUFFER:
                return array.buffer;
            case OutputType.BUFFER:
                if (Reflect.has(this._context, "Buffer") && isFunction(Buffer))
                {
                    return Buffer.from(array);
                }
                else
                {
                    throw new BufferUnavailableError();
                }
            case OutputType.UINT8_ARRAY:
                return array;
            default:
                throw new UnknownOutputTypeError(type);
        }
    }
}
