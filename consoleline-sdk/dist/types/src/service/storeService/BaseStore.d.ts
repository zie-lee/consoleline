/** 作为存储基础信息的基础类，操作类 */
export default class BaseStore {
    BATCH_SIZE: number;
    store: any;
    name: string;
    ready: boolean;
    idSet: Set<unknown>;
    batchCount: number;
    tempList: any[];
    constructor(name: string, size: number);
    private onReady;
    getBatchCount(): number;
    /** 向store添加收集到的某一项 */
    setItem(item: any): Promise<void>;
    /** 检查疲劳添加indexdb */
    private batchUpdate;
    /**  清除 */
    clear(): Promise<void>;
    private canIUseIndexDB;
    createBatchQuery(): () => Promise<{
        list: any;
        hasMore: boolean;
    }>;
}
//# sourceMappingURL=BaseStore.d.ts.map