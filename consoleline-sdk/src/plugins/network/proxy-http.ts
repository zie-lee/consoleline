import storeService from "../../service/storeService";
import createUUID from "../../utils/createUUID";
import parseParamsFromUrl from "../../utils/parseParamsFromUrl";


const HttpRequestObject = window.XMLHttpRequest || (window as any).ActiveXObject;
if (window.XMLHttpRequest) window.XMLHttpRequest = HttpRequestObject;
if ((window as any).ActiveXObject) (window as any).ActiveXObject = HttpRequestObject;


const oriOpen = XMLHttpRequest.prototype.open;
const oriSend = XMLHttpRequest.prototype.send;
const oriSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;

XMLHttpRequest.prototype.open = function(...args) {
    const [method, url] = args;
    this.__requestId = createUUID();
    storeService.requestStore.onRequestOpen({
        __requestId: this.__requestId,
        method, url,
        query: parseParamsFromUrl(url),
    });
    this.onreadystatechange = function() {
        const request = {
            __requestId: this.__requestId,
            done: this.readyState === 4,
            status: this.status,
            response: this.responseText,
            responseType: this.responseType,
            responseHeaders: [],
        }
        if (this.readyState === 4 && this.getAllResponseHeaders) {
            const responseHeaderStr = this.getAllResponseHeaders();
            for (const item of responseHeaderStr.split('\r\n')) {
                const [key, value = ''] = item.split(':');
                request.responseHeaders.push({ key, value });
                if (key === 'content-type' && !request.responseType) {
                    if (value.indexOf('/json') > -1) {
                        request.responseType = 'json';
                    } else if (value.indexOf('text') > -1) {
                        request.responseType = 'text';
                    }
                }
            }
        }
        storeService.requestStore.onRequestReadyStateChange(request)
    }
    return oriOpen.apply(this, args);
}

XMLHttpRequest.prototype.send = function(...args) {
    return oriSend.apply(this, args);
}

XMLHttpRequest.prototype.setRequestHeader = function(...args) {
    const [key, value] = args
    storeService.requestStore.onRequestSetHeader(this.__requestId, key, value);
    return oriSetRequestHeader.apply(this, args);
}