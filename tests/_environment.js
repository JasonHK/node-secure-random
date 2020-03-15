"use strict";

const JestEnvironmentNode = require("jest-environment-node");

/**
 * A temporary fix for issues related to [facebook/jest#2549](https://github.com/facebook/jest/issues/2549).
 */
class Environment extends JestEnvironmentNode
{
    constructor(config, context)
    {
        super(config, context);
        this.global = global;
    }

    runScript(script)
    {
        return script.runInThisContext();
    }
}

module.exports = Environment;
