"use strict";

import { ISecureRandomStatic } from "../interfaces/secure-random-static";

import { isNode } from "./is-node";

/**
 * Select a `SecureRandom` implementation that was suitable for the current environment.
 * 
 * @hidden
 * 
 * @returns A `SecureRandom` implementation.
 */
export function getSecureRandom(): ISecureRandomStatic
{
    if (isNode())
    {
        return (require("../secure-random-node") as typeof import("../secure-random-node")).SecureRandomNode;
    }
    else
    {
        return (require("../secure-random-standard") as typeof import("../secure-random-standard")).SecureRandomStandard;
    }
}
