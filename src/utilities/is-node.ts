"use strict";

import getGlobalThis from "globalthis";
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
    const _globalThis = getGlobalThis();
    
    return (
        Reflect.has(_globalThis, "process") &&
        isObject(_globalThis.process) &&
        isObject(_globalThis.process.versions) &&
        isString(_globalThis.process.versions.node)
    );
}
