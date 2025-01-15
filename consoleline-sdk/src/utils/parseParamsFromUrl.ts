export default (href) => {
    const urls = href.split('?').filter(x => x && x.indexOf('=') > -1);
    const result = [];
    for (const url of urls) {
        const groups = url.split('&').filter(x => x && x.indexOf('=') > -1);
        for (const item of groups) {
            const [key, value] = item.split('=');
            result.push({ key, value });
        }
    }
    return result;
}