"use strict";

import { OutputType } from "src/output-type";

export interface IOutputTypesStaticMap
{
    [OutputType.ARRAY]       : typeof Array;
    [OutputType.ARRAY_BUFFER]: typeof ArrayBuffer;
    [OutputType.BUFFER]      : typeof Buffer;
    [OutputType.UINT8_ARRAY] : typeof Uint8Array;
}
