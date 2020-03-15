"use strict";

/**
 * Represents an error that occurs when the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
 * is not supported in the current environment.
 */
export class CryptoUnsupportedError extends Error
{
    /**
     * Initialize a new `CryptoUnsupportedError` instance.
     */
    public constructor()
    {
        super("The Web Crypto API was not supported in this environment.");
    }
}
