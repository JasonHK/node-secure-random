"use strict";

import { ISecureRandomStatic } from "../interfaces/secure-random-static";

import { FLAG_BROWSER_ONLY_BUILD } from "../constants";

import { isNode } from "./is-node";

/**
 * @hidden
 */
const FLAG_NODE_AVAILABLE = !FLAG_BROWSER_ONLY_BUILD;

/**
 * Select a `SecureRandom` implementation that was suitable for the current environment.
 * 
 * @hidden
 * 
 * @returns A `SecureRandom` implementation.
 */
export function getSecureRandom(): ISecureRandomStatic
{
    if (FLAG_NODE_AVAILABLE && isNode())
    {
        const { SecureRandomNode } = require("../secure-random-node") as typeof import("../secure-random-node");
        return SecureRandomNode;
    }
    else
    {
        const { SecureRandomStandard } = require("../secure-random-standard") as typeof import("../secure-random-standard");
        return SecureRandomStandard;
    }
}
