import { useState } from "react";
import LogDetailHeader from "./components/LogDetailHeader";
import LogDetailTitle from "./components/LogDetailTitle";
import LogDetailTabs from "./components/LogDetailTabs";
import LogDetaiSystem from "./components/LogDetaiSystem";
import LogDetailPerformance from "./components/LogDetailPerformance";
import LogDetailStorage from "./components/LogDetailStorage";
import LogDetailNetwork from "./components/LogDetailNetwork";
import LogDetailLog from "./components/LogDetailLog";
import apiConfig from "../../request/apiConfig";
import useRequestHook from "../../hooks/useRequestHook";
import { ILogDetail } from "./types/logDetail.types";
import { IPerformance } from "./types/performance.type";
import { IStorageItem } from "./types/storage.type";
import { ISystemInfoItem } from "./types/system.type";
import { IRequestItem } from "./types/request.type";
import { ILogItem } from "./types/log.type";
import useRouteParamsHook from "../../hooks/useRouteParamsHook";


const LogDetail = () => {

    const tabs = ['Log', 'Network', 'System', 'Storage', 'Performance'];
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const query = useRouteParamsHook<{ logId: string }>()

    const params = { logId: query.logId};
    
    const [detail] = useRequestHook<{logId: string}, ILogDetail>(apiConfig.queryLogDetail, params);
    const [performanceList] = useRequestHook<{logId: string}, Array<IPerformance>>(apiConfig.queryPerformanceList, params);
    const [storageList] = useRequestHook<{logId: string}, Array<IStorageItem>>(apiConfig.queryStorageList, params);
    const [systemList] = useRequestHook<{logId: string}, Array<ISystemInfoItem>>(apiConfig.querySystemInfoList, params);
    const [requestList] = useRequestHook<{logId: string}, Array<IRequestItem>>(apiConfig.queryRequestList, params);
    const [logList] = useRequestHook<{logId: string}, Array<ILogItem>>(apiConfig.queryLogList, params);

    return (
        <div>
            <LogDetailHeader></LogDetailHeader>
            <LogDetailTitle log={detail}></LogDetailTitle>
            <LogDetailTabs
                tabs={tabs}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
            <LogDetailLog hidden={currentTab !== tabs[0]} logList={logList || []}></LogDetailLog>
            <LogDetailNetwork  hidden={currentTab !== tabs[1]} requestList={requestList || []} />
            <LogDetaiSystem hidden={currentTab !== tabs[2]} systemInfo={systemList || []} />
            <LogDetailStorage hidden={currentTab !== tabs[3]} storageList={storageList || []} />
            <LogDetailPerformance hidden={currentTab !== tabs[4]} performanceList={performanceList || []}/>
        </div>
    )
}

export default LogDetail;
