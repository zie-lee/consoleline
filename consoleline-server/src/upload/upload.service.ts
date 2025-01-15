import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from '../entity/log.entity';
import { Repository } from 'typeorm';
import { uploadLogListReq } from './dto/uploadLogList.dto';
import { LogItem } from '../entity/log-item.entity';
import splitArr from '../utils/splitArr';
import { uploadRequestListReq } from './dto/uploadRequestList.dto';
import { RequestItem } from '../entity/request-item.entity';
import { uploadStorageListReq } from './dto/uploadStorageList.dto';
import { StorageItem } from '../entity/storage-item.entity';
import { uploadSystemInfoListReq } from './dto/uploadSystemInfoList.dto';
import { SystemInfoItem } from '../entity/system-info-item.entity';
import { uploadPerformanceListReq } from './dto/uploadPerformanceList.dto';
import { PerformanceItem } from '../entity/performance-item.entity';
import jsonToString from '../utils/jsonToString';
import applyLogIdReq from './dto/applyLogId.dto';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(Log)
    private logRepository: Repository<Log>,

    @InjectRepository(LogItem)
    private logItemRepository: Repository<LogItem>,

    @InjectRepository(RequestItem)
    private requestItemRepository: Repository<RequestItem>,

    @InjectRepository(StorageItem)
    private storageItemRepository: Repository<StorageItem>,

    @InjectRepository(SystemInfoItem)
    private systemInfoItemRepository: Repository<SystemInfoItem>,

    @InjectRepository(PerformanceItem)
    private performanceItemRepository: Repository<PerformanceItem>,
  ) {}

  async applyLogId(params: applyLogIdReq): Promise<string> {
    const log = new Log();
    log.description = params.description || '';
    log.sdkVersion = params.sdkVersion || '';
    log.createTime = new Date();
    const res = await this.logRepository.insert(log);
    return res.identifiers[0].id;
  }

  /** 批量插入实体 */
  async batchInsertEntity(list, entityType: Repository<any>): Promise<void> {
    await entityType.createQueryBuilder().insert().values(list).execute();
  }

  /** 保存console日志 */
  async uploadLogList(params: uploadLogListReq): Promise<string> {
    const list = [];
    for (const item of params.logList) {
      const logItem = new LogItem();
      logItem.info = JSON.stringify(item.info);
      logItem.logId = params.logId;
      logItem.time = new Date(+item.time);
      logItem.type = item.type;
      list.push(logItem);
    }

    for (const items of splitArr(list, 50)) {
      await this.batchInsertEntity(items, this.logItemRepository);
    }

    return params.logId;
  }

  /** 上传接口列表 */
  async uploadRequestList(params: uploadRequestListReq): Promise<string> {
    const list = [];
    for (const item of params.requestList || []) {
      const requestItem = new RequestItem();
      requestItem.logId = params.logId;
      requestItem.url = item.url;
      requestItem.method = item.method;

      requestItem.body = jsonToString(item.body);
      requestItem.query = jsonToString(item.query || '{}');
      requestItem.requestHeaders = jsonToString(item.requestHeaders || '[]');
      requestItem.startTime = new Date(+item.startTime);

      requestItem.responseHeaders = jsonToString(item.responseHeaders || '[]');
      requestItem.response = jsonToString(item.response);
      requestItem.responseType = item.responseType || '';
      requestItem.status = item.status || 404;
      requestItem.endTime = new Date(+item.endTime);

      list.push(requestItem);
    }

    for (const items of splitArr(list, 10)) {
      await this.batchInsertEntity(items, this.requestItemRepository);
    }

    return params.logId;
  }

  /** 上传缓存信息 */
  async uploadStorageList(params: uploadStorageListReq): Promise<string> {
    const list = [];
    for (const item of params.storageList) {
      const storage = new StorageItem();
      storage.logId = params.logId;
      storage.key = item.key;
      storage.type = item.type;
      storage.value = item.value;
      list.push(storage);
    }

    for (const items of splitArr(list, 50)) {
      await this.batchInsertEntity(items, this.storageItemRepository);
    }

    return params.logId;
  }

  /** 上传系统信息 */
  async uploadSystemInfoList(params: uploadSystemInfoListReq): Promise<string> {
    const list = [];
    for (const item of params.systemInfoList) {
      const systemInfoItem = new SystemInfoItem();
      systemInfoItem.logId = params.logId;
      systemInfoItem.info = item;
      list.push(systemInfoItem);
    }

    for (const items of splitArr(list, 50)) {
      await this.batchInsertEntity(items, this.systemInfoItemRepository);
    }

    return params.logId;
  }

  /** 上传性能指标 */
  async uploadPerformanceList(
    params: uploadPerformanceListReq,
  ): Promise<string> {
    const list = [];
    for (const item of params.performanceList) {
      const performanceItem = new PerformanceItem();
      performanceItem.logId = params.logId;
      performanceItem.key = item.key;
      performanceItem.value = item.value;
      list.push(performanceItem);
    }

    for (const items of splitArr(list, 50)) {
      await this.batchInsertEntity(items, this.performanceItemRepository);
    }

    return params.logId;
  }
}
