import * as localforage from 'localforage';
import createUUID from '../../utils/createUUID';

/** 作为存储基础信息的基础类，操作类 */
export default class BaseStore {
    public BATCH_SIZE = 100;
    public store = null;
    public name = '';
    public ready = false;
    public idSet = new Set(); // 存入indexdb时候对应的id
    public batchCount = 0;

    public tempList = [];

    constructor(name: string, size: number) {
        localforage.setDriver(this.canIUseIndexDB() ? localforage.INDEXEDDB : localforage.LOCALSTORAGE);
        this.name = name;
        this.BATCH_SIZE = size;
        this.store = localforage.createInstance({ name: `Consoleline${name}Store` });
        this.store.ready(() => this.onReady());
    }

    private async onReady() {
        await this.store.clear();
        this.ready = true;
        await this.batchUpdate();
    }

    public getBatchCount() {
        return this.batchCount + (this.tempList.length > 0 ? 1 : 0);
    }

    /** 向store添加收集到的某一项 */
    public async setItem(item: any) {
        this.tempList.push(item);
        // 检查是否需要批量加入indexdb
        await this.batchUpdate();
    }

    /** 检查疲劳添加indexdb */
    private async batchUpdate() {
        if (this.tempList.length >= this.BATCH_SIZE && this.ready) {
            const id = createUUID();
            await this.store.setItem(id, JSON.stringify(this.tempList));
            this.idSet.add(id);
            this.tempList = [];
            this.batchCount ++;
        }
    }

    /**  清除 */
    public async clear() {
        this.idSet.clear();
        this.batchCount = 0;
        await this.store.clear();
        this.tempList = [];
    }

    private canIUseIndexDB() {
        return !!(
            window.indexedDB ||
            (window as any).mozIndexedDB ||
            (window as any).webkitIndexedDB ||
            (window as any).msIndexedDB
        )
    }

    // 分段查询所有接口记录
    public createBatchQuery() {
        let useTemp = this.tempList.length > 0;
        const keys = Array.from(this.idSet);
        const query = async () => {
            if (useTemp) {
                useTemp = false;
                return { list: this.tempList, hasMore: keys.length > 0 };
            } else {
                const key = keys.pop();
                const item = await this.store.getItem(key);
                return { list: JSON.parse(item), hasMore: keys.length > 0 };
            }
        }
        return query;
    }
}