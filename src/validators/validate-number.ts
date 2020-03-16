"use strict";

import isNumber from "lodash.isnumber";

/**
 * Validates whether the payload is a number or not.
 * 
 * @hidden
 * 
 * @param payload An object to be determined.
 */
export function validateNumber(payload: unknown, name: string): asserts payload is number
{
    if (!isNumber(payload))
    {
        throw new TypeError(`\`${ name }\` is not a number.`);
    }
}
