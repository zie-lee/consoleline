export default class SystemPlugin {

    public init() {}

    /** 系统设备信息 */
    public getSystemInfoList() {
        const systemInfo = [];
        let logMsg = [];
        const ua = navigator.userAgent;
        // wechat client version
        const wxVersionMatch = ua.match(/MicroMessenger\/([\d\.]+)/i);
        const wxVersion = wxVersionMatch && wxVersionMatch[1] ? wxVersionMatch[1] : null;
        const isMiniprogram = location.host === 'servicewechat.com';
        // location
        if (!isMiniprogram) {
            console.info('[system]', 'Location:', location.href);
            systemInfo.push('Location: ' + location.href)
        }
        // device & system
        const ipod = ua.match(/(ipod).*\s([\d_]+)/i),
        ipad = ua.match(/(ipad).*\s([\d_]+)/i),
        iphone = ua.match(/(iphone)\sos\s([\d_]+)/i),
        android = ua.match(/(android)\s([\d\.]+)/i),
        mac = ua.match(/(Mac OS X)\s([\d_]+)/i);
        if (android) {
            systemInfo.push('Android ' + android[2])
        } else if (iphone) {
            logMsg.push('iPhone, iOS ' + iphone[2].replace(/_/g,'.'));
            systemInfo.push('iPhone, iOS ' + iphone[2].replace(/_/g,'.'))
        } else if (ipad) {
            logMsg.push('iPad, iOS ' + ipad[2].replace(/_/g, '.'));
            systemInfo.push('iPad, iOS ' + ipad[2].replace(/_/g, '.'))
        } else if (ipod) {
            logMsg.push('iPod, iOS ' + ipod[2].replace(/_/g, '.'));
            systemInfo.push('iPod, iOS ' + ipod[2].replace(/_/g, '.'))
        } else if (mac) {
            logMsg.push('Mac, MacOS ' + mac[2].replace(/_/g, '.'));
            systemInfo.push('Mac, MacOS ' + mac[2].replace(/_/g, '.'))
        }
        if (wxVersion) {
            logMsg.push('WeChat ' + wxVersion);
            systemInfo.push('WeChat ' + wxVersion)
        }
        console.info('[system]', 'Client: ', logMsg.length ? logMsg.join(', ') : 'Unknown');
        systemInfo.push('Client: ' + logMsg.length ? logMsg.join(', ') : 'Unknown')
        // network type
        let network: any = ua.toLowerCase().match(/ nettype\/([^ ]+)/g);
        if (network && network[0]) {
            network = network[0].split('/');
            logMsg = [network[1]];
            console.info('[system]', 'Network: ', logMsg.length ? logMsg.join(', ') : 'Unknown');
        }
        // User Agent
        systemInfo.push('UA:' + ua)
        systemInfo.push('Screen Size: ' + `${window.screen.width} x ${window.screen.height}`)
        systemInfo.push('Pixel Ratio: ' + window.devicePixelRatio);
        return systemInfo;
    }
}