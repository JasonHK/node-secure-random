"use strict";

/**
 * Represents an error that occurs when the `Buffer` object is not available in the current
 * environment.
 */
export class BufferUnavailableError extends Error
{
    /**
     * Initialize a new `BufferUnavailableError` instance.
     */
    public constructor()
    {
        super("The `Buffer` object was not available in this environment.");
    }
}
