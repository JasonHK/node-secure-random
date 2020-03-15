"use strict";

import { AbstractSecureRandom } from "src/abstract-secure-random";
import { OutputType } from "src/output-type";
import { UnknownOutputTypeError } from "src/errors/unknown-output-type-error";
import { IOutputTypes } from "src/interfaces/output-types";

import { OUTPUT_LENGTHS } from "./_output-lengths";
import { OUTPUT_LENGTHS_INVALID } from "./_output-lengths-invalid";
import { OUTPUT_TYPES_MAP } from "./_output-types-map";

import { IOutputTypesStatic } from "./_interfaces/output-types-static";

export function executeSecureRandomInstanceTest(instance: AbstractSecureRandom): void
{
    describe(
        "getRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.ARRAY]>",
        () =>
        {
            executeMethodTest(instance.getRandomBytes, Array);
        });

    describe(
        "getRandomBytes<T extends OutputType>(length: number, type: T): Promise<IOutputTypesMap[T]>",
        () =>
        {
            executeMethodWithOptionsTest(instance.getRandomBytes);
        });
    
    describe(
        "getRandomBytesSync(length: number): IOutputTypesMap[OutputType.ARRAY]",
        () =>
        {
            executeMethodTest(instance.getRandomBytesSync, Array);
        });

    describe(
        "getRandomBytesSync<T extends OutputType>(length: number, type: T): IOutputTypesMap[T]",
        () =>
        {
            executeMethodWithOptionsTest(instance.getRandomBytesSync);
        });

    describe(
        "getArrayOfRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.ARRAY]>",
        () =>
        {
            executeMethodTest(instance.getArrayOfRandomBytes, Array);
        });

    describe(
        "getArrayOfRandomBytesSync(length: number): IOutputTypesMap[OutputType.ARRAY]",
        () =>
        {
            executeMethodTest(instance.getArrayOfRandomBytesSync, Array);
        });

    describe(
        "getArrayBufferOfRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.ARRAY_BUFFER]>",
        () =>
        {
            executeMethodTest(instance.getArrayBufferOfRandomBytes, ArrayBuffer);
        });

    describe(
        "getArrayBufferOfRandomBytesSync(length: number): IOutputTypesMap[OutputType.ARRAY_BUFFER]",
        () =>
        {
            executeMethodTest(instance.getArrayBufferOfRandomBytesSync, ArrayBuffer);
        });

    describe(
        "getBufferOfRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.BUFFER]>",
        () =>
        {
            executeMethodTest(instance.getBufferOfRandomBytes, Buffer);
        });

    describe(
        "getBufferOfRandomBytesSync(length: number): IOutputTypesMap[OutputType.BUFFER]",
        () =>
        {
            executeMethodTest(instance.getBufferOfRandomBytesSync, Buffer);
        });

    describe(
        "getUint8ArrayOfRandomBytes(length: number): Promise<IOutputTypesMap[OutputType.UINT8_ARRAY]>",
        () =>
        {
            executeMethodTest(instance.getUint8ArrayOfRandomBytes, Uint8Array);
        });

    describe(
        "getUint8ArrayOfRandomBytesSync(length: number): IOutputTypesMap[OutputType.UINT8_ARRAY]",
        () =>
        {
            executeMethodTest(instance.getUint8ArrayOfRandomBytesSync, Uint8Array);
        });

    function executeMethodTest<T extends IOutputTypesStatic>(method: RandomMethod<InstanceType<T>>, type: T): void
    {
        for (const length of OUTPUT_LENGTHS)
        {
            test(
                `Case: Length of ${ length } byte(s)`,
                async () =>
                {
                    const bytes = await method(length);
                    expect(bytes).toBeInstanceOf(type);

                    switch (type)
                    {
                        case Array:
                            expect(bytes).toHaveLength(length);
                            break;
                        default:
                            expect((bytes as unknown as Exclude<typeof bytes, unknown[]>).byteLength).toBe(length);
                            break;
                    }
                });
        }

        test(
            "Case: Invalid length",
            async () =>
            {
                expect.assertions(OUTPUT_LENGTHS_INVALID.length);

                for (const length of OUTPUT_LENGTHS_INVALID)
                {
                    try
                    {
                        await method(length);
                    }
                    catch (error)
                    {
                        expect(error).toBeInstanceOf(RangeError);
                    }
                }
            });
    }

    function executeMethodWithOptionsTest(method: RandomMethodWithOptions<IOutputTypes>): void
    {
        for (const [type, constructor] of OUTPUT_TYPES_MAP)
        {
            describe(
                `Case: Output type is "${ type }"`,
                () =>
                {
                    executeMethodTest(
                        (length) => { return method(length, type); },
                        constructor);
                });
        }

        test(
            "Case: Unknown output type",
            async () =>
            {
                expect.hasAssertions();

                try
                {
                    await method(0, "" as OutputType);
                }
                catch (error)
                {
                    expect(error).toBeInstanceOf(UnknownOutputTypeError);
                }
            });
    }
}

interface RandomMethod<T>
{
    (length: number): T | Promise<T>;
}

interface RandomMethodWithOptions<T>
{
    (length: number, type: OutputType): T | Promise<T>;
}
