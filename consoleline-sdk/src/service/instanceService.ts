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
}

class InstanceService {
    public consoleLine = null;
    public vconsole = null;
    public uploadBaseUrl = '';
    public previewBaseUrl = '';
    public options = {} as IConsoleLine


    /** 设置当前实例 */
    public setInstance(ins) {
        this.consoleLine = ins;
    }

    /** 设置vconsole实例 */
    public setVconsole(vconsole) {
        this.vconsole = vconsole;
    }

    /** 设置初始化配置项 */
    public setInitOptions(options: IConsoleLine) {
        this.options = options;
        this.uploadBaseUrl = options.uploadBaseUrl;
        this.previewBaseUrl = options.previewBaseUrl;
    }
}

export default new InstanceService();