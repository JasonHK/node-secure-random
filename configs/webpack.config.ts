"use strict";

import Path from "path";
import TerserWebpackPlugin from "terser-webpack-plugin";
import TSLoader from "ts-loader";
import Webpack from "webpack";
import WebpackBundleAnalyzer from "webpack-bundle-analyzer";

const DIRECTORY_ROOT: string = Path.resolve(__dirname, "../");

const DIRECTORY_DIST: string = Path.resolve(DIRECTORY_ROOT, "./dist");
const DIRECTORY_SRC: string = Path.resolve(DIRECTORY_ROOT, "./src");

function ConfigurationFactory(env: string | Record<string, string | number | boolean>, argv: Webpack.CliConfigOptions): Webpack.Configuration
{
    const isProduction: boolean = (argv.mode === "production");

    const enableWatch: boolean = false;
    const enableSourceMap: boolean = true;

    const enableBundleAnalyzer: boolean = true;
    const openBundleAnalyzerReport: boolean = null;

    const configuration: Webpack.Configuration = {
        entry: {
            "secure-random.browser": Path.resolve(DIRECTORY_SRC ,"index.ts"),
            "secure-random.browser.min": Path.resolve(DIRECTORY_SRC ,"index.ts"),
        },
        output: {
            path: DIRECTORY_DIST,
            filename: "[name].js",
        },
        node: {
            __dirname: false,
            __filename: false,
            Buffer: false,
            console: false,
            global: false,
            process: false,
            setImmediate: false,
            "crypto": "empty",
        },
        resolve: {
            extensions: [".ts", ".tsx", ".ejs", ".mjs", ".js"],
            alias: {
                // [Path.resolve(DIRECTORY_SRC, "./secure-random-node.ts")]: "@jasonhk/noop-package",
            },
        },
        module: {
            rules: [
                {
                    test: /\.ts$/i,
                    exclude: [
                        /node_modules/,
                    ],
                    loader: "ts-loader",
                    options: {
                        configFile: Path.resolve(DIRECTORY_SRC, "tsconfig.json"),
                    } as TSLoader.Options,
                },
                {
                    test: /\.ts$/i,
                    include: [
                        Path.resolve(DIRECTORY_SRC ,"constants.ts"),
                    ],
                    exclude: /node_modules/,
                    loader: "string-replace-loader",
                    options: {
                        multiple: [
                            {
                                search: "export const FLAG_BROWSER_ONLY_BUILD: boolean = false;",
                                replace: "export const FLAG_BROWSER_ONLY_BUILD: boolean = true;",
                            },
                        ],
                    },
                },
                {
                    test: /\.ts$/i,
                    include: [
                        Path.resolve(DIRECTORY_SRC ,"./utilities/get-secure-random.ts"),
                    ],
                    exclude: /node_modules/,
                    loader: "string-replace-loader",
                    options: {
                        search: "FLAG_NODE_AVAILABLE && isNode()",
                        replace: "false",
                    },
                },
            ],
        },
        plugins: [],
        optimization: {
            minimizer: [
                new TerserWebpackPlugin(
                    {
                        test: /\.m?js$/i,
                        include: /\.min\.js$/i,
                    }),
            ],
        },
        watch: enableWatch,
    };

    if (enableBundleAnalyzer)
    {
        configuration.plugins.push(
            new WebpackBundleAnalyzer.BundleAnalyzerPlugin(
                {
                    analyzerMode: "static",
                    openAnalyzer: (typeof openBundleAnalyzerReport === "boolean") ? openBundleAnalyzerReport : isProduction,
                }));
    }

    if (enableSourceMap)
    {
        configuration.module.rules.push(
            {
                enforce: "pre",
                test: /\.js$/i,
                loader: "source-map-loader",
            });

        configuration.devtool = "source-map";
    }

    return configuration;
}

export = ConfigurationFactory;
