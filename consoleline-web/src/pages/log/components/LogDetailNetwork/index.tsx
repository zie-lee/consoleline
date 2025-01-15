import React, { useState } from "react";
import './index.less'
import { IRequestItem } from "../../types/request.type";

interface Iprops {
    requestList: Array<IRequestItem>,
    hidden: boolean,
}

const emptyFn =(data: unknown) => {
    Promise.resolve(data)
}

const LogDetaiNetwork = ({ requestList, hidden }: Iprops) => {

    const [expandId, setExpandId] = useState('');

    return (
        <div className="log-detail-network" hidden={hidden}>
            <table className="request-table">
                <thead>
                    <tr className="request-title-row">
                        <th className="request-title req-url-row">Request url(100)</th>
                        <th className="request-title">Method</th>
                        <th className="request-title">Status</th>
                        <th className="request-title">Cost Time (ms)</th>
                    </tr>
                </thead>
                <tbody>
                    {requestList.map((request) => {
                        request.status = request.status || 404;
                        const queryObj = JSON.parse(request.query || '{}');
                        const costTime = new Date(request.endTime).getTime() - new Date(request.startTime).getTime(); 
                        const reqHeaders = JSON.parse(request.requestHeaders || '[]');
                        const responseHeaders = JSON.parse(request.responseHeaders || '[]');

                        let body = request.body;
                        let response = request.response;
                        try {
                            response = JSON.stringify(JSON.parse(response), undefined, 2);
                        } catch (error) {
                            emptyFn(error);
                        }

                        try {
                            body = JSON.stringify(JSON.parse(body), undefined, 2);
                        } catch (error) {
                            emptyFn(error);
                        }

                        return (
                            <React.Fragment key={request.id}>
                                <tr className="request-item" onClick={() => setExpandId(request.id === expandId ?  '' : request.id)}>
                                    <td className={request.status >= 400 ? "request-url request-url-fail" : 'request-url' }>{request.url}</td>
                                    <td className={'request-method'}>{request.method}</td>

                                    {request.status < 300  && <td className="request-success">{request.status}</td>}
                                    {request.status < 400 && request.status >= 300  && <td className="request-warn">{request.status}</td>}
                                    {request.status >= 400  && <td className="request-fail">{request.status}</td>}

                                    {costTime < 600 && <td className="request-success">{costTime}</td>}
                                    {costTime >= 600 && costTime < 2000 && <td className="request-warn">{costTime}</td>}
                                    {costTime > 2000 && <td className="request-success">{costTime}</td>}
                                </tr>
                                { request.id === expandId &&
                                    <tr>
                                        <td colSpan={4} className="request-info-wrapper">
                                            <div className="request-info">
                                                <div className="request-info-title">Query String Parameters</div>
                                                {Object.keys(queryObj).map((key: string, index: number) => (
                                                    <div className="request-info-row" key={index}>
                                                        <div className="request-info-key">{key}</div>
                                                        <div className="request-info-value">{queryObj[key]}</div>
                                                    </div>
                                                ))}
                                                <div className="request-info-title">Request Headers</div>
                                                {reqHeaders.map((item: { key: string, value: string }, index: number) => (
                                                    <div className="request-info-row" key={index}>
                                                        <div className="request-info-key">{item.key}</div>
                                                        <div className="request-info-value">{item.value}</div>
                                                    </div>
                                                ))}
                                                <div className="request-info-title">Form Data</div>
                                                {body && <pre className="reuest-pre">{body}</pre>}
                                                <div className="request-info-title">Response Headers</div>
                                                {responseHeaders.map((item: { key: string, value: string }, index: number) => (
                                                    <div className="request-info-row" key={index}>
                                                        <div className="request-info-key">{item.key}</div>
                                                        <div className="request-info-value">{item.value}</div>
                                                    </div>
                                                ))}
                                                <div className="request-info-title">Response</div>
                                                {response &&  <pre className="reuest-pre">{response}</pre>}
                                            </div>
                                        </td>
                                    </tr>
                                }
                            </React.Fragment>
                        )
                    })}
                </tbody>
            </table>
            {requestList.length === 0 && <div className="empty-row">暂无数据~</div>}
        </div>
    );
};
 
export default LogDetaiNetwork;