import BaseStore from "./BaseStore";
export default class LogStore {
    store: BaseStore;
    /** 输入项 */
    setLogItem(log: any): void;
    /** 清除所有 */
    removeLogList(): Promise<void>;
    /** 获取总比批次 */
    getBatchCount(): number;
    createBatchQuery(): () => Promise<{
        list: any;
        hasMore: boolean;
    }>;
}
//# sourceMappingURL=logStore.d.ts.map