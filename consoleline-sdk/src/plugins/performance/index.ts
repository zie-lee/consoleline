export default class PerformancePlugin {
    public init() {}

    /** 获取性能指标信息 */
    public getPerformanceList() {
        const performanceInfo = [];
        const performance = window.performance;
        const timing = performance.timing;
        performanceInfo.push({ key: '白屏时间', value: (timing.responseStart - timing.navigationStart) + ' ms' });
        performanceInfo.push({ key: 'DNS查询耗时', value: (timing.domainLookupEnd - timing.domainLookupStart) + ' ms' });
        performanceInfo.push({ key: 'TCP链接耗时', value: (timing.connectEnd - timing.connectStart) + ' ms' });
        performanceInfo.push({ key: 'HTTP请求耗时', value: (timing.responseEnd - timing.responseStart) + ' ms' });
        performanceInfo.push({ key: '解析DOM树耗时', value: (timing.domComplete - timing.domInteractive) + ' ms' });
        performanceInfo.push({ key: 'DOM Ready耗时', value: (timing.domContentLoadedEventEnd - timing.navigationStart) + ' ms' });
        for (const performance of window.performance.getEntries()) {
            if (performance.entryType !== 'navigation') {
                performanceInfo.push({ key: performance.name, value: Math.round(performance.duration) + ' ms' });
            }
        }
        return performanceInfo;
    }
}