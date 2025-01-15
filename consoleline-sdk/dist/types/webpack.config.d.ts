export let entry: string;
export let target: string[];
export let watch: boolean;
export let mode: string;
export namespace output {
    let path: any;
    let filename: string;
    namespace library {
        export let name: string;
        export let type: string;
        export let umdNamedDefine: boolean;
        let _export: string;
        export { _export as export };
    }
}
export namespace resolve {
    let extensions: string[];
}
export namespace module {
    let rules: ({
        test: RegExp;
        loader: string;
        use?: undefined;
    } | {
        test: RegExp;
        use: {
            loader: string;
            options: {
                configFile: any;
            };
        }[];
        loader?: undefined;
    })[];
}
//# sourceMappingURL=webpack.config.d.ts.map