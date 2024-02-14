import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildEnv } from "../types";


export const buildLoader = (env: BuildEnv): Array<RuleSetRule> => {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            env.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes(".module."),
                        localIdentName: env.isDev
                            ? "[path][name]__[local]--[hash:base64:8]"
                            : "[hash:base64:8]"
                    },
                }
            },
            "sass-loader",
        ]
    }

    return [typeScriptLoader, cssLoader]
}