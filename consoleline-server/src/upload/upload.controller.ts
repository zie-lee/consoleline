import { Body, Controller, Post } from '@nestjs/common';
import { UploadService } from './upload.service';
import { uploadLogListReq } from './dto/uploadLogList.dto';
import { uploadRequestListReq } from './dto/uploadRequestList.dto';
import { uploadStorageListReq } from './dto/uploadStorageList.dto';
import { uploadSystemInfoListReq } from './dto/uploadSystemInfoList.dto';
import { uploadPerformanceListReq } from './dto/uploadPerformanceList.dto';
import { ApiResult } from 'src/decorators/api-result.decorator';
import applyLogIdReq from './dto/applyLogId.dto';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  /** 发起上传前申请唯一id */
  @Post('applyLogId')
  @ApiResult({ message: '申请日志id' })
  async applyLogId(@Body() params: applyLogIdReq): Promise<string> {
    return this.uploadService.applyLogId(params);
  }

  /** 上传log记录*/
  @Post('uploadLogList')
  @ApiResult({ message: '上传log记录' })
  async uploadLogList(@Body() params: uploadLogListReq): Promise<string> {
    return this.uploadService.uploadLogList(params);
  }

  /** 上传接口记录*/
  @Post('uploadRequestList')
  @ApiResult({ message: '上传接口记录' })
  async uploadRequestList(
    @Body() params: uploadRequestListReq,
  ): Promise<string> {
    return this.uploadService.uploadRequestList(params);
  }

  /** 上传缓存信息 */
  @Post('uploadStorageList')
  @ApiResult({ message: '上传缓存信息' })
  async uploadStorageList(
    @Body() params: uploadStorageListReq,
  ): Promise<string> {
    return this.uploadService.uploadStorageList(params);
  }

  /** 上传设备系统信息 */
  @Post('uploadSystemInfoList')
  @ApiResult({ message: '上传缓上传设备系统信息存信息' })
  async uploadSystemInfoList(
    @Body() params: uploadSystemInfoListReq,
  ): Promise<string> {
    return this.uploadService.uploadSystemInfoList(params);
  }

  /** 上传性能指标信息 */
  @Post('uploadPerformanceList')
  @ApiResult({ message: '上传性能指标信息' })
  async uploadPerformanceList(
    @Body() params: uploadPerformanceListReq,
  ): Promise<string> {
    return this.uploadService.uploadPerformanceList(params);
  }
}
