import axios from 'axios';
import qs from 'qs';
import modal from '../../utils/modal';
import instanceService from '../instanceService';


export const request = <T>(url: string, data?: object): Promise<T>=> {
    return new Promise((resolve, reject) => {
        axios({
            method:'POST',
            url: `${instanceService.uploadBaseUrl}${url}`,
            data: qs.stringify(data || {}),
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