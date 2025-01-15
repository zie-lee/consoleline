export declare const API_RESULT_META: {
    SUCCESS: string;
    ERROR: string;
};
export declare function ApiResult(options: {
    message?: string;
}): (target: any, name: any, decorator: any) => any;
