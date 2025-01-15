declare class LogItem {
    info: string;
    type: string;
    time: string | number;
}
export declare class uploadLogListReq {
    logId: string;
    logList: Array<LogItem>;
}
export {};
