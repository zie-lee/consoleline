import instanceService from "../instanceService";
import BaseStore from "./BaseStore";

export default class RequestStore {
    public map = {};
    public store = new BaseStore('Request', 10);

    /** 监控到新请求 */
    public onRequestOpen(request) {
        if (`${instanceService.uploadBaseUrl}/upload`.indexOf(request.url) === -1) {
            this.map[request.__requestId] = {
                __requestId: request.__requestId,
                method: request.method,
                url: request.url,
                query: request.query,
                requestHeaders: [],
                startTime: new Date().getTime(),
                endTime: new Date().getTime(),
            };
        }
    }

    /** 监控到header设置 */
    public onRequestSetHeader(__requestId: string, key: string, value: string) {
        const request = this.map[__requestId];
        if (!request) return;
        request.requestHeaders.push({ key, value });
        this.map[request.__requestId] = request;
    }

    /** 监控到状态改变 */
    public async onRequestReadyStateChange(item) {
        const request = this.map[item.__requestId];
        if (!request) return;
        request.status = item.status;
        request.response = item.response;
        request.endTime = new Date().getTime();
        request.responseType = item.responseType;
        request.responseHeaders = item.responseHeaders || [];
        this.map[request.__requestId] = request;
        // 请求完整结束
        if (item.done) {
            await this.store.setItem(request);
            delete this.map[request.__requestId];
        }
    }

    /** 获取总比批次 */
    public getBatchCount() {
        return this.store.getBatchCount() + (Object.keys(this.map).length > 0 ? 1 : 0);
    }

    /** 输入项 */
    public setLogItem(log) {
        this.store.setItem(log);
    }

    /** 清除所有 */
    public async removeRequestList() {
        this.map = {};
        await this.store.clear();
    }

    // 分段查询所有接口记录
    public createBatchQuery() {
        const baseQuery = this.store.createBatchQuery();
        let useTemp = Object.keys(this.map).length > 0;
        const query = async () => {
            if (useTemp) {
                const list = [];
                for (const key of Object.keys(this.map)) {
                    if (this.map[key]) list.push(this.map[key])
                }
                useTemp = false;
                return { list, hasMore: true };
            } else {
                return await baseQuery();
            }
        }
        return query;
    }
}