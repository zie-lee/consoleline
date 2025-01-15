import moment from 'moment';
import { useState } from "react";
import ReactJson from 'react-json-view';
import './index.less'
import { ILogItem } from '../../types/log.type';
interface LogInfo {
    value: string;
    valueType: string;
}

interface Iprops {
    logList: Array<ILogItem>,
    hidden: boolean,
}


const LogDetailLog = ({ hidden, logList }: Iprops) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [expandLog, setExpandLog] = useState(undefined as {id: string, value: any} | undefined);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const changeShowObject = (obj: {id: string, value: any}) => {
        setExpandLog(obj.id === expandLog?.id ? undefined : obj)
    }

    return (
        <div className="log-detail-log" hidden={hidden}>
            {logList.map((item) => {
                const infoList = JSON.parse(item.info) || [];
                return (
                    <div className="log-item" key={item.id}>
                        <div className="log-info-wrapper">
                            <div className="log-info-row">
                                {infoList.map((log: LogInfo, idx: number) => (
                                    log.valueType === 'object'
                                        ? <span className={`log-type-${item.type} log-${log.valueType}`} key={idx} onClick={() => changeShowObject({ value: log.value, id: item.id })}>
                                            <span className={expandLog?.id === item.id ? 'arrow-down' : 'arrow-right'}></span>Object
                                        </span>
                                        : <span className={`log-type-${item.type}`} key={idx}>{log.value}</span>
                                    
                                ))}
                            </div>
                            {expandLog?.id === item.id &&<ReactJson src={expandLog.value} name="展开信息" theme="summerfruit:inverted" />}
                        </div>
                        <span className="log-time">
                            { moment(new Date(item.time)).format('YYYY/MM/DD HH:mm:ss') }
                        </span>
                    </div>
                )
            })}
            {logList.length === 0 && <div className="empty-row">暂无数据~</div>}
        </div>
    );
};
 
export default LogDetailLog;