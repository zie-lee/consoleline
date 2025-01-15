declare class UploadService {
    private logId;
    private percent;
    private countTime;
    /** 天添加进度 */
    private addPercent;
    /** 更新进度 */
    private updatePercent;
    /** 根据时间因子处理每一项的总数 */
    private resolveCountTime;
    private applyLogId;
    private uploadStorageList;
    private uploadSystemInfoList;
    private uploadPerformanceList;
    private uploadLogList;
    private uploadRequestList;
    /** 成功上传 */
    uploadSuccHandler(): void;
    /** 失败上传 */
    uploadFailHandler(): void;
    /** 开始上传 */
    startUpload(): Promise<void>;
}
declare const _default: UploadService;
export default _default;
//# sourceMappingURL=index.d.ts.map