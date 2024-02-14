import { BuildPaths } from "../types";
import {ProgressPlugin} from "webpack";
import HTMLWebpackPlugins from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugin = (paths: BuildPaths): Array<ProgressPlugin> => {
    return [
        new HTMLWebpackPlugins({
            template: paths.template
        }),
        new MiniCssExtractPlugin({
            filename: paths.static.cssFileName,
            chunkFilename: paths.static.cssChunkName,
        }),
        new ProgressPlugin()
    ]
}