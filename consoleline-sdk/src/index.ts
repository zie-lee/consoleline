import VConsole from 'vconsole';
import { updateVconsoleLog } from './utils/logoUI';
import instanceService, { IConsoleLine } from './service/instanceService';
import LogPlugin from './plugins/log';
import SystemPlugin from './plugins/system';
import StoragePlugin from './plugins/storage';
import PerformancePlugin from './plugins/performance';
import { NetworkPlugin } from './plugins/network';

export default class ConsoleLine {
    public logPlugin = null as LogPlugin | null;
    public systemPlugin = null as SystemPlugin | null;
    public storagePlugin = null as StoragePlugin | null;
    public performancePlugin = null as PerformancePlugin | null;
    public networkPlugin = null as NetworkPlugin | null;


    constructor(options: IConsoleLine) {
        const vconsole = new VConsole({ onReady: this.onReady.bind(this) });

        this.logPlugin = new LogPlugin();
        this.systemPlugin = new SystemPlugin();
        this.storagePlugin = new StoragePlugin();
        this.performancePlugin = new PerformancePlugin();
        this.networkPlugin = new NetworkPlugin();

        instanceService.setInstance(this);
        instanceService.setVconsole(vconsole);
        instanceService.setInitOptions(options);
    }

    /** 初始化 */
    private onReady() {
        updateVconsoleLog(instanceService.options.themeColor);
        this.logPlugin?.init();
        this.systemPlugin?.init();
        this.storagePlugin?.init();
        this.performancePlugin?.init();
        this.networkPlugin?.init();
    }
}