import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

@Injectable()
export class LogService {
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

  /** 根据日志id查询日志详情 */
  async queryLogDetail(params: queryLogDetailReq): Promise<Log> {
    if (!params.logId) return new Log();
    const log = await this.logRepository.findOneBy({ id: params.logId });
    return log || new Log();
  }

  /** 根据日志id查询log记录 */
  async queryLogList(params: queryLogListReq): Promise<Array<LogItem>> {
    if (!params.logId) return [];
    return await this.logItemRepository.findBy({ logId: params.logId });
  }

  /** 根据日志id查询请求记录 */
  async queryRequestList(
    params: queryRequestListReq,
  ): Promise<Array<RequestItem>> {
    if (!params.logId) return [];
    return await this.requestItemRepository.findBy({ logId: params.logId });
  }

  /** 根据日志id查询缓存记录 */
  async queryStorageList(
    params: queryStorageListReq,
  ): Promise<Array<StorageItem>> {
    if (!params.logId) return [];
    return await this.storageItemRepository.findBy({ logId: params.logId });
  }

  /** 根据日志id查询系统信息记录 */
  async querySystemInfoList(
    params: querySystemInfoListReq,
  ): Promise<Array<SystemInfoItem>> {
    if (!params.logId) return [];
    return await this.systemInfoItemRepository.findBy({ logId: params.logId });
  }

  /** 根据日志id查询性能记录 */
  async queryPerformanceList(
    params: queryPerformanceListReq,
  ): Promise<Array<PerformanceItem>> {
    if (!params.logId) return [];
    return await this.performanceItemRepository.findBy({ logId: params.logId });
  }
}
