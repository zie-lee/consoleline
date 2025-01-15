export default class StoragePlugin {

    public init() {}

    /** 获取cookie */
    public getStorageList() {
        const result = [];
        const cookies = document.cookie.split(';').filter(x => !!x);
        for (const cookie of cookies) {
            result.push({ key: cookie.split('=')[0], value: cookie.split('=')[1], type: 'Cookie' });
        }
        for (const key of Object.keys(window.sessionStorage)) {
            result.push({ key: key, value: window.sessionStorage[key], type: 'SessionStorage' })
        }
        for (const key of Object.keys(window.localStorage)) {
            result.push({ key: key, value: window.localStorage[key], type: 'LocalStorage' })
        }
        return result;
    }

}