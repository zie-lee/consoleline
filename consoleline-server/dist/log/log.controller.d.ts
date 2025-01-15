import { LogService } from './log.service';
import { queryLogDetailReq } from './dto/queryLogDetail.dto';
import { queryRequestListReq } from './dto/queryRequestList.dto';
import { queryStorageListReq } from './dto/queryStorageList.dto';
import { querySystemInfoListReq } from './dto/querySystemInfoList.dto';
import { queryPerformanceListReq } from './dto/queryPerformanceList.dto';
import { PerformanceItem } from 'src/entity/performance-item.entity';
import { SystemInfoItem } from 'src/entity/system-info-item.entity';
import { StorageItem } from 'src/entity/storage-item.entity';
import { RequestItem } from 'src/entity/request-item.entity';
import { LogItem } from 'src/entity/log-item.entity';
import { queryLogListReq } from './dto/queryLogList.dto';
import { Log } from 'src/entity/log.entity';
export declare class LogController {
    private readonly logService;
    constructor(logService: LogService);
    queryLogDetail(params: queryLogDetailReq): Promise<Log>;
    queryLogList(params: queryLogListReq): Promise<Array<LogItem>>;
    queryRequestList(params: queryRequestListReq): Promise<Array<RequestItem>>;
    queryStorageList(params: queryStorageListReq): Promise<Array<StorageItem>>;
    querySystemInfoList(params: querySystemInfoListReq): Promise<Array<SystemInfoItem>>;
    queryPerformanceList(params: queryPerformanceListReq): Promise<Array<PerformanceItem>>;
}
