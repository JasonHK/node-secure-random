"use strict";

import { SecureRandomNode } from "src/secure-random-node";

import { SecureRandomInstanceTest } from "./_secure-random";

describe(
    "SecureRandomNode",
    () =>
    {
        describe("Instance Methods", () => { SecureRandomInstanceTest(new SecureRandomNode()); });
    });
