import uploadService from "../../service/uploadService";
import instanceService from "../../service/instanceService";
import storeService from "../../service/storeService";

export default class LogPlugin {

    private logTypes = ['info', 'log', 'error', 'debug', 'warn', 'table'];
    private oriConsole = {
        log: window.console.log,
        info: window.console.info,
        error: window.console.error,
        debug: window.console.debug,
        warn: window.console.warn,
        table: window.console.table,
    }

    constructor() {
        this.proxyConsole();
        this.bindError();
        this.catchSourceError();
        this.bindUnHandledRejection();
    }

    private proxyConsole() {
        const oriConsole = this.oriConsole;
        for (const type of this.logTypes) {
            window.console[type] = function(...args) {
                oriConsole[type](...args);
                const info = args.map(item => ({
                    value: item,
                    valueType: item === null ? 'null' : typeof item,
                }));
                storeService.logStore.setLogItem({ type, info, time: new Date().getTime() });
            }.bind(window.console)
        }
    }

    /** 错误捕获 */
    private bindError() {
        window.addEventListener('error', async (event) => {
            let msg = event.message;
            if (event.filename) {
                msg += `\n${event.filename.replace(location.origin, '')}`;
            }
            if (event.lineno || event.colno) {
                msg += `:${event.lineno}:${event.colno}`;
            }
            if (!!event.error && !!event.error.stack) {
                msg += event.error.stack.toString();
            }
            await storeService.logStore.setLogItem({
                type: 'error',
                info: [{ value: msg, valueType: 'string' }],
                time: new Date().getTime(),
            })
        })
    }

    /** 资源错误捕获 */
    private catchSourceError() {
        window.addEventListener('error', async (event) => {
            const sourceTypes = ['link', 'video', 'script', 'img', 'audio'];
            const target: any = event.target;
            if (sourceTypes.indexOf(target.localName) > -1) {
                const src = target.href || target.src || target.currentSrc;
                await storeService.logStore.setLogItem({
                    type: 'error',
                    info: [{ type: 'string', value: `GET [${target.localName}] error: ${src}` }],
                    time: new Date().getTime(),
                });
            }
        }, true);
    }

    /** 捕获unchatch错误 */
    private bindUnHandledRejection() {
        window.addEventListener('unhandledrejection', async (err) => {
            let error =  `type: ${err.type} ${err.reason || ''}`;
            let log =  { value: error, valueType: 'string' }
            if (typeof err.reason === 'object') {
                error =  `type: ${err.type}`;
                log = { value: error, valueType: 'string' };
                if (err.reason.stack) log.value = err.reason.stack;
            }
            await storeService.logStore.setLogItem({
                type: 'error',
                info: [log],
                time: new Date().getTime(),
            });
        });
    }

    public init() {
        const logTab = instanceService.vconsole.pluginList.default;
        logTab.trigger('addTool', (toolList) => {
            toolList[0].onClick = async () => {
                await storeService.logStore.removeLogList();
                await storeService.requestStore.removeRequestList();
                toolList[0].onClick();
            }
            toolList.splice(1, 2);
            toolList.unshift({
                name: '上传日志',
                global: false,
                onClick: async () => {
                    uploadService.startUpload();
                }
            });
            instanceService.vconsole.compInstance.pluginList.default.toolbarList = toolList;
            instanceService.vconsole.compInstance.pluginList = instanceService.vconsole.compInstance.pluginList;
        })
    }
}