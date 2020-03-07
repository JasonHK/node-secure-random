"use strict";

import isFunction from "lodash.isfunction";
import isObject from "lodash.isobject";

import { IGlobalContext } from "../interfaces/global-context";

/**
 * A utility function to determine whether the given environment support the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
 * or not.
 * 
 * @hidden
 * 
 * @param context A environment to be determine.
 * @returns Return `true` if the environment support the Web Crypto API, otherwise, return `false`.
 */
export function isCryptoSupported(context: unknown): context is IGlobalContext
{
    return (
        isObject(context) &&
        (
            (
                Reflect.has(context, "crypto") &&
                Reflect.has((context as IGlobalContext.Standard).crypto, "getRandomValues") &&
                isFunction((context as IGlobalContext.Standard).crypto.getRandomValues)
            ) || (
                Reflect.has(context, "msCrypto") &&
                Reflect.has((context as IGlobalContext.Microsoft).msCrypto, "getRandomValues") &&
                isFunction((context as IGlobalContext.Microsoft).msCrypto.getRandomValues)
            )
        )
    );
}
