"use strict";

import { OutputType } from "src/output-type";

import { IOutputTypesStaticMap } from "./output-types-static-map";

export type IOutputTypesStatic = IOutputTypesStaticMap[OutputType];
