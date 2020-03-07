"use strict";

import { OutputType } from "../output-type";

export interface IOutputTypesMap
{
    [OutputType.ARRAY]       : number[];
    [OutputType.ARRAY_BUFFER]: ArrayBuffer;
    [OutputType.BUFFER]      : Buffer;
    [OutputType.UINT8_ARRAY] : Uint8Array;
}
