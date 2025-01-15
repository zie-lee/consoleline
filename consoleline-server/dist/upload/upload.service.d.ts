import { Log } from '../entity/log.entity';
import { Repository } from 'typeorm';
import { uploadLogListReq } from './dto/uploadLogList.dto';
import { LogItem } from '../entity/log-item.entity';
import { uploadRequestListReq } from './dto/uploadRequestList.dto';
import { RequestItem } from '../entity/request-item.entity';
import { uploadStorageListReq } from './dto/uploadStorageList.dto';
import { StorageItem } from '../entity/storage-item.entity';
import { uploadSystemInfoListReq } from './dto/uploadSystemInfoList.dto';
import { SystemInfoItem } from '../entity/system-info-item.entity';
import { uploadPerformanceListReq } from './dto/uploadPerformanceList.dto';
import { PerformanceItem } from '../entity/performance-item.entity';
import applyLogIdReq from './dto/applyLogId.dto';
export declare class UploadService {
    private logRepository;
    private logItemRepository;
    private requestItemRepository;
    private storageItemRepository;
    private systemInfoItemRepository;
    private performanceItemRepository;
    constructor(logRepository: Repository<Log>, logItemRepository: Repository<LogItem>, requestItemRepository: Repository<RequestItem>, storageItemRepository: Repository<StorageItem>, systemInfoItemRepository: Repository<SystemInfoItem>, performanceItemRepository: Repository<PerformanceItem>);
    applyLogId(params: applyLogIdReq): Promise<string>;
    batchInsertEntity(list: any, entityType: Repository<any>): Promise<void>;
    uploadLogList(params: uploadLogListReq): Promise<string>;
    uploadRequestList(params: uploadRequestListReq): Promise<string>;
    uploadStorageList(params: uploadStorageListReq): Promise<string>;
    uploadSystemInfoList(params: uploadSystemInfoListReq): Promise<string>;
    uploadPerformanceList(params: uploadPerformanceListReq): Promise<string>;
}
