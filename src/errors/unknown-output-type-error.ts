"use strict";

/**
 * Represents an error that occurs when the requested output type was not supported by the
 * `SecureRandom` implementation.
 */
export class UnknownOutputTypeError extends TypeError
{
    /**
     * The requested output type.
     */
    public readonly type: string;

    /**
     * Initialize a new `UnknownOutputTypeError` instance.
     */
    public constructor(type: string)
    {
        super(`The requested output type "${ type }" was not supported.`);
        this.type = type;
    }
}
