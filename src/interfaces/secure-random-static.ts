"use strict";

import { AbstractSecureRandom } from "../abstract-secure-random";

/**
 * An interface that represents the static members of a `SecureRandom` class.
 * 
 * @hidden
 */
export interface ISecureRandomStatic<T extends AbstractSecureRandom = AbstractSecureRandom>
{
    /**
     * Initialize a new `SecureRandom` instance.
     */
    new(...args: unknown[]): T;
}
