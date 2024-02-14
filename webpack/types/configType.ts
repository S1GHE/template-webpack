export type BuildModule = "production" | "development";

export interface BuildPaths {
    entry: string;
    build: string;
    template: string;
    static: {
        cssFileName: string;
        cssChunkName: string;
    }
}

export interface BuildEnv{
    mode: BuildModule;
    port: number;
    isDev: boolean;
}

export interface BuildOptions{
    paths: BuildPaths;
    env: BuildEnv;
}