function useRouteParamsHook<T>() {
    const arr = (location.hash || '').split('?').filter(x => x.indexOf('=')> -1);
    const result = {} as {[key: string]: string};
    for (const item of arr) {
        for (const info of item.split('&').filter(x => !!x)) {
            const [key, value] = info.split('=');
            result[key] = encodeURIComponent(value || '')
        }
    }
    return result as T;
}

export default useRouteParamsHook;