declare class UploadService {
    private percent;
    /** 更新进度 */
    private updatePercent;
    private uploadStorageList;
    private uploadSystemInfoList;
    private uploadPerformanceList;
    private uploadLogList;
    private uploadRequestList;
    /** 开始上传 */
    startUpload(): Promise<void>;
}
declare const _default: UploadService;
export default _default;
//# sourceMappingURL=uploadService.d.ts.map