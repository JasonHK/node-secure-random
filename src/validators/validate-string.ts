"use strict";

import isString from "lodash.isstring";

export function validateString(payload: unknown, name: string): asserts payload is string
{
    if (!isString(payload))
    {
        throw new TypeError(`\`${ name }\` is not a string.`);
    }
}
