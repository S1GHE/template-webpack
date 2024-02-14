import { Configuration } from "webpack"
import { BuildOptions } from "./types";
import {buildDevServer, buildLoader, buildPlugin, buildResolve} from "./build";


export const webpackConfig = ({paths, env}: BuildOptions):Configuration => {
    return {
        mode: env.mode,
        entry: paths.entry,
        output:{
            filename: "[name].[contenthash:8].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugin(paths),
        module:{
            rules: buildLoader(env)
        },
        resolve: buildResolve(),
        devtool: env.isDev ? "inline-source-map" : undefined,
        devServer: env.isDev ? buildDevServer(env): undefined
    }
}