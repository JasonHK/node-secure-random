"use strict";

import { OutputType } from "../output-type";

import { IOutputTypesMap } from "./output-types-map";

/**
 * An interface that represents the possible output types that will be returned by a `SecureRandom`
 * instance.
 */
export type IOutputTypes = IOutputTypesMap[OutputType];
