"use strict";

import isObject from "lodash.isobject";
import isString from "lodash.isstring";

/**
 * A utility function to determine whether the library is running in [Node.js](https://nodejs.org/)
 * runtime or not.
 * 
 * @hidden
 * 
 * @returns Return `true` when the library is running in Node.js runtime, otherwise, return `false`.
 */
export function isNode(): boolean
{
    return (
        Reflect.has(globalThis, "process") &&
        isObject(process) &&
        isObject(process.versions) &&
        isString(process.versions.node)
    );
}
