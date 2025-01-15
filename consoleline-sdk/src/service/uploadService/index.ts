import instanceService from "../instanceService";
import PerformancePlugin from "../../plugins/performance";
import SystemPlugin from "../../plugins/system";
import StoragePlugin from "../../plugins/storage";
import storeService from "../storeService";
import { request } from './request';
import { APLLY_LOG_ID, UPLOAD_CONSOLE_LIST, UPLOAD_PERFORMANCE, UPLOAD_REQUEST_LIST, UPLOAD_STORAGE_LIST, UPLOAD_SYSTEM_INFO } from './api';
import modal from "../../utils/modal";

class UploadService {
    private logId = '';
    private percent = 0;
    private countTime = 0;


    /** 天添加进度 */
    private addPercent(num: number) {
        this.updatePercent(this.percent + num)
    }

    /** 更新进度 */
    private updatePercent(percent: number) {
        this.percent = percent;
        modal.showLoading(this.percent);
    }

    /** 根据时间因子处理每一项的总数 */
    private resolveCountTime() {
        const logCount = storeService.logStore.getBatchCount();
        const reqCount = storeService.requestStore.getBatchCount();
        this.countTime = logCount * 2 + reqCount * 5;
    }

    private async applyLogId() {
        const result = await request<string>(APLLY_LOG_ID, {
            description: instanceService.options.description || '',
            sdkVersion:  '1.0.0',
        })
        if (result) this.logId = result;
        this.addPercent(5);
    }

    private async uploadStorageList () {
        if (!this.logId) return;
        const storagePlugin: StoragePlugin = instanceService.consoleLine.storagePlugin;
        const storageList = storagePlugin.getStorageList();
        await request(UPLOAD_STORAGE_LIST, { logId: this.logId, storageList });
        this.addPercent(5);
    }

    private async uploadSystemInfoList () {
        if (!this.logId) return;
        const systemPlugin: SystemPlugin = instanceService.consoleLine.systemPlugin;
        const systemInfoList = systemPlugin.getSystemInfoList();
        await request(UPLOAD_SYSTEM_INFO, { logId: this.logId, systemInfoList });
        this.addPercent(5);
    }

    private async uploadPerformanceList () {
        if (!this.logId) return;
        const performancePlugin: PerformancePlugin = instanceService.consoleLine.performancePlugin;
        const performanceList = performancePlugin.getPerformanceList();
        await request(UPLOAD_PERFORMANCE, { logId: this.logId, performanceList });
        this.addPercent(5);
    }

    private async uploadLogList () {
        if (!this.logId) return;
        const query = storeService.logStore.createBatchQuery();
        let hasMore = true;
        let batchNumber = 0;
        while(hasMore) {
            this.resolveCountTime();
            const info = await query();
            hasMore = info.hasMore;
            if ((info.list || []).length > 0) {
                await request(UPLOAD_CONSOLE_LIST, { logId: this.logId, logList: info.list });
                batchNumber ++;
                this.addPercent(Math.ceil(batchNumber * 2 / this.countTime * 100))
            }
        }
    }

    private async uploadRequestList () {
        if (!this.logId) return;
        const query = storeService.requestStore.createBatchQuery();
        let hasMore = true;
        let batchNumber = 0;
        while(hasMore) {
            this.resolveCountTime();
            const info = await query();
            hasMore = info.hasMore;
            if ((info.list || []).length > 0) {
                await request(UPLOAD_REQUEST_LIST, { logId: this.logId, requestList: info.list });
                batchNumber ++;
                this.addPercent(Math.ceil(batchNumber * 5 / this.countTime * 100));
            }
        }
    }

    /** 成功上传 */
    uploadSuccHandler() {
        this.updatePercent(100);
        setTimeout(() => {
            modal.hideLoading();
            modal.showModal({
                title: '日志上传成功',
                message: `日志ID: ${this.logId}`,
                click: () => modal.copyText(`${instanceService.previewBaseUrl}?logId=${this.logId}`),
                buttonTxt: '复制日志连接',
            })
        }, 300);
    }

    /** 失败上传 */
    uploadFailHandler() {
        this.updatePercent(0);
        modal.hideLoading();
        modal.showModal({
            title: '日志上传失败',
            message: `请联系开发同学检查`,
            buttonTxt: '我知道了',
        })
    }

    /** 开始上传 */
    public async startUpload() {
        this.updatePercent(0);
        this.resolveCountTime();
        try {
            await this.applyLogId();
            await this.uploadStorageList();
            await this.uploadSystemInfoList();
            await this.uploadPerformanceList();
            await this.uploadLogList();
            await this.uploadRequestList();
            if (this.logId) {
                this.uploadSuccHandler();
            } else {
                this.uploadFailHandler();
            }
        } catch (error) {
            this.uploadFailHandler();
            console.log(error);
        }
    }

}


export default new UploadService();