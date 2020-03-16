"use strict";

import isString from "lodash.isstring";

/**
 * Validates whether the payload is a string or not.
 * 
 * @hidden
 * 
 * @param payload An object to be determined.
 */
export function validateString(payload: unknown, name: string): asserts payload is string
{
    if (!isString(payload))
    {
        throw new TypeError(`\`${ name }\` is not a string.`);
    }
}
