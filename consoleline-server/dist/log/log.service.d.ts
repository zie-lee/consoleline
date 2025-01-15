import { Log } from 'src/entity/log.entity';
import { Repository } from 'typeorm';
import { RequestItem } from 'src/entity/request-item.entity';
import { StorageItem } from 'src/entity/storage-item.entity';
import { LogItem } from 'src/entity/log-item.entity';
import { queryLogDetailReq } from './dto/queryLogDetail.dto';
import { queryLogListReq } from './dto/queryLogList.dto';
import { queryRequestListReq } from './dto/queryRequestList.dto';
import { queryStorageListReq } from './dto/queryStorageList.dto';
import { querySystemInfoListReq } from './dto/querySystemInfoList.dto';
import { SystemInfoItem } from 'src/entity/system-info-item.entity';
import { queryPerformanceListReq } from './dto/queryPerformanceList.dto';
import { PerformanceItem } from 'src/entity/performance-item.entity';
export declare class LogService {
    private logRepository;
    private logItemRepository;
    private requestItemRepository;
    private storageItemRepository;
    private systemInfoItemRepository;
    private performanceItemRepository;
    constructor(logRepository: Repository<Log>, logItemRepository: Repository<LogItem>, requestItemRepository: Repository<RequestItem>, storageItemRepository: Repository<StorageItem>, systemInfoItemRepository: Repository<SystemInfoItem>, performanceItemRepository: Repository<PerformanceItem>);
    queryLogDetail(params: queryLogDetailReq): Promise<Log>;
    queryLogList(params: queryLogListReq): Promise<Array<LogItem>>;
    queryRequestList(params: queryRequestListReq): Promise<Array<RequestItem>>;
    queryStorageList(params: queryStorageListReq): Promise<Array<StorageItem>>;
    querySystemInfoList(params: querySystemInfoListReq): Promise<Array<SystemInfoItem>>;
    queryPerformanceList(params: queryPerformanceListReq): Promise<Array<PerformanceItem>>;
}
