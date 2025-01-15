import BaseStore from "./BaseStore";
export default class RequestStore {
    map: {};
    store: BaseStore;
    /** 监控到新请求 */
    onRequestOpen(request: any): void;
    /** 监控到header设置 */
    onRequestSetHeader(__requestId: string, key: string, value: string): void;
    /** 监控到状态改变 */
    onRequestReadyStateChange(item: any): Promise<void>;
    /** 获取总比批次 */
    getBatchCount(): number;
    /** 输入项 */
    setLogItem(log: any): void;
    /** 清除所有 */
    removeRequestList(): Promise<void>;
    createBatchQuery(): () => Promise<{
        list: any;
        hasMore: boolean;
    }>;
}
//# sourceMappingURL=requestStore.d.ts.map