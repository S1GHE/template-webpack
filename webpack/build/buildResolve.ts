import { ResolveOptions } from "webpack";

// TODO --- Необходимо доделать alias
export const buildResolve = ():ResolveOptions => {
    return {
        extensions: [
            ".tsx", ".ts", ".js"
        ]
    }
}