"use strict";

import { SecureRandomNode } from "src/secure-random-node";

import { executeSecureRandomInstanceTest } from "./_secure-random";

describe(
    "SecureRandomNode",
    () =>
    {
        describe(
            "Instance Methods",
            () =>
            {
                executeSecureRandomInstanceTest(new SecureRandomNode());
            });
    });
