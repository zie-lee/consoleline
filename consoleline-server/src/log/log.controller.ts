import { Controller, Get, Query } from '@nestjs/common';
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

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  /** 根据日志id查询日志详情 */
  @Get('queryLogDetail')
  async queryLogDetail(@Query() params: queryLogDetailReq): Promise<Log> {
    return this.logService.queryLogDetail(params);
  }

  /** 根据日志id查询log记录 */
  @Get('queryLogList')
  async queryLogList(
    @Query() params: queryLogListReq,
  ): Promise<Array<LogItem>> {
    return this.logService.queryLogList(params);
  }

  /** 根据日志id查询请求记录 */
  @Get('queryRequestList')
  async queryRequestList(
    @Query() params: queryRequestListReq,
  ): Promise<Array<RequestItem>> {
    return this.logService.queryRequestList(params);
  }

  /** 根据日志id查询缓存记录 */
  @Get('queryStorageList')
  async queryStorageList(
    @Query() params: queryStorageListReq,
  ): Promise<Array<StorageItem>> {
    return this.logService.queryStorageList(params);
  }

  /** 根据日志id查询系统信息记录 */
  @Get('querySystemInfoList')
  async querySystemInfoList(
    @Query() params: querySystemInfoListReq,
  ): Promise<Array<SystemInfoItem>> {
    return this.logService.querySystemInfoList(params);
  }

  /** 根据日志id查询性能记录 */
  @Get('queryPerformanceList')
  async queryPerformanceList(
    @Query() params: queryPerformanceListReq,
  ): Promise<Array<PerformanceItem>> {
    return this.logService.queryPerformanceList(params);
  }
}
