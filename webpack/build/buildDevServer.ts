import { BuildEnv } from "../types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(env: BuildEnv): DevServerConfiguration {
    return {
        port: env.port,
        open: true,
    }
}