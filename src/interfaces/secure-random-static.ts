"use strict";

import { SecureRandom } from "../secure-random";

/**
 * An interface that represents the static members of a `SecureRandom` class.
 * 
 * @hidden
 */
export interface ISecureRandomStatic<T extends SecureRandom = SecureRandom>
{
    /**
     * Initialize a new `SecureRandom` instance.
     */
    new(...args: unknown[]): T;
}
