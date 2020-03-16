"use strict";

/**
 * An enum consists of the options of available output types.
 * 
 * @since 0.0.1
 */
export const enum OutputType
{
    /**
     * Set the output type as `Array`.
     * 
     * @since 0.0.1
     */
    ARRAY = "array",

    /**
     * Set the output type as `ArrayBuffer`.
     * 
     * @since 0.0.1
     */
    ARRAY_BUFFER = "arraybuffer",

    /**
     * Set the output type as `Buffer`.
     * 
     * @since 0.0.1
     */
    BUFFER = "buffer",

    /**
     * Set the output type as `Uint8Array`.
     * 
     * @since 0.0.1
     */
    UINT8_ARRAY = "uint8array",
}
