import axios from 'axios';
import baseConstant from '../constants/baseConstant';
import modal from '../components/Modal';


export const sendRequest = <T>(url: string, data?: unknown): Promise<T>=> {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${baseConstant.API_BASE_URL}/${url}`,
            params: data || {},
        }).then((result) => {
            if (result?.data?.code !== 100001) {
                // 接口异常
                modal.showModal(result?.data?.message);
                resolve(undefined  as T);
            } else {
                resolve(result?.data?.data as T);
            }
        }).catch((err) => {
            const message = err?.data?.message || err?.message || '接口相应失败，请稍后再试';
            modal.showModal(message);
            reject(err);
        });
    });
}