import { useEffect, useState } from "react";
import { sendRequest } from "../request/sendRequest";


/** 接口请求hook */
function useRequestHook<IParams, IData>(apiUrl: string, initialParams: IParams): [IData| undefined, boolean, (params: IParams) => void] {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(undefined as IData);

    function request(params: IParams) {
        setLoading(true)
        sendRequest<IData>(apiUrl, params).then((result) => {
            setData(result);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
            setData(undefined as IData);
        });
    }

    useEffect(() => {
        request(initialParams)
    }, []);

    return [data, loading, request];
}

export default  useRequestHook;