import { UploadService } from './upload.service';
import { uploadLogListReq } from './dto/uploadLogList.dto';
import { uploadRequestListReq } from './dto/uploadRequestList.dto';
import { uploadStorageListReq } from './dto/uploadStorageList.dto';
import { uploadSystemInfoListReq } from './dto/uploadSystemInfoList.dto';
import { uploadPerformanceListReq } from './dto/uploadPerformanceList.dto';
import applyLogIdReq from './dto/applyLogId.dto';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    applyLogId(params: applyLogIdReq): Promise<string>;
    uploadLogList(params: uploadLogListReq): Promise<string>;
    uploadRequestList(params: uploadRequestListReq): Promise<string>;
    uploadStorageList(params: uploadStorageListReq): Promise<string>;
    uploadSystemInfoList(params: uploadSystemInfoListReq): Promise<string>;
    uploadPerformanceList(params: uploadPerformanceListReq): Promise<string>;
}
