"use strict";

import { OutputType } from "src/output-type";

import { IOutputTypesStatic } from "./_interfaces/output-types-static";

export const OUTPUT_TYPES_MAP = new Map<OutputType, IOutputTypesStatic>(
    [
        [OutputType.ARRAY,        Array],
        [OutputType.ARRAY_BUFFER, ArrayBuffer],
        [OutputType.BUFFER,       Buffer],
        [OutputType.UINT8_ARRAY,  Uint8Array],
    ]);
