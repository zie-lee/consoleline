import { IConsoleLine } from './service/instanceService';
import LogPlugin from './plugins/log';
import SystemPlugin from './plugins/system';
import StoragePlugin from './plugins/storage';
import PerformancePlugin from './plugins/performance';
import { NetworkPlugin } from './plugins/network';
export default class ConsoleLine {
    logPlugin: LogPlugin | null;
    systemPlugin: SystemPlugin | null;
    storagePlugin: StoragePlugin | null;
    performancePlugin: PerformancePlugin | null;
    networkPlugin: NetworkPlugin | null;
    constructor(options: IConsoleLine);
    /** 初始化 */
    private onReady;
}
//# sourceMappingURL=index.d.ts.map