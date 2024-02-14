import path from 'path';
import { BuildEnv, BuildPaths} from './webpack/types';
import { webpackConfig } from './webpack/webpackConfig';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "main.tsx"),
    build: path.resolve(__dirname, "build"),
    template: path.resolve(__dirname, "public", "index.html"),
    static: {
        cssFileName: "css/[name].[contenthash:8].css",
        cssChunkName: "css/[name].[contenthash:8].css",
    }
}

export default (envWebpack: BuildEnv) =>{
    const env: BuildEnv = {
        mode: envWebpack.mode || "development",
        port: envWebpack.port || 3000,
        isDev: envWebpack.mode === "development"
    }

    
    return webpackConfig({
        paths, env,
    })
}