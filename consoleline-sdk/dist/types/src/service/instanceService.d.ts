export type IConsoleLine = {
    /** 当前项目版本 */
    version?: string;
    /** 图标主题色 */
    themeColor?: string;
    /** api base uerl */
    uploadBaseUrl: string;
    /**  日志预览链接 */
    previewBaseUrl: string;
    /** 项目描述或版本信息 */
    description?: string;
};
declare class InstanceService {
    consoleLine: any;
    vconsole: any;
    uploadBaseUrl: string;
    previewBaseUrl: string;
    options: IConsoleLine;
    /** 设置当前实例 */
    setInstance(ins: any): void;
    /** 设置vconsole实例 */
    setVconsole(vconsole: any): void;
    /** 设置初始化配置项 */
    setInitOptions(options: IConsoleLine): void;
}
declare const _default: InstanceService;
export default _default;
//# sourceMappingURL=instanceService.d.ts.map