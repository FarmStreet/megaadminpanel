import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildResolvers} from "./buildResolvers";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {paths, mode} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: "[name].[contenthash].js",
            clean: true
        },
        resolve: buildResolvers(),
        module: {
            rules: buildLoaders(),
        },
        plugins: buildPlugins(options)
    }
}