"use strict";

import isNumber from "lodash.isnumber";

export function validateNumber(payload: unknown, name: string): asserts payload is number
{
    if (!isNumber(payload))
    {
        throw new TypeError(`\`${ name }\` is not a number.`);
    }
}
