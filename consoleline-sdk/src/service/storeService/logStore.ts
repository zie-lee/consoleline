import BaseStore from "./BaseStore";

export default class LogStore {
    public store = new BaseStore('Log', 50);

    /** 输入项 */
    public setLogItem(log) {
        this.store.setItem(log);
    }

    /** 清除所有 */
    public async removeLogList() {
        await this.store.clear();
    }

    /** 获取总比批次 */
    public getBatchCount() {
        return this.store.getBatchCount();
    }

    // 分段查询所有接口记录
    public createBatchQuery() {
        const query = this.store.createBatchQuery();
        return query;
    }
}