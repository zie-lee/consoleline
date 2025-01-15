"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const upload_service_1 = require("./upload.service");
const uploadLogList_dto_1 = require("./dto/uploadLogList.dto");
const uploadRequestList_dto_1 = require("./dto/uploadRequestList.dto");
const uploadStorageList_dto_1 = require("./dto/uploadStorageList.dto");
const uploadSystemInfoList_dto_1 = require("./dto/uploadSystemInfoList.dto");
const uploadPerformanceList_dto_1 = require("./dto/uploadPerformanceList.dto");
const api_result_decorator_1 = require("../decorators/api-result.decorator");
const applyLogId_dto_1 = require("./dto/applyLogId.dto");
let UploadController = class UploadController {
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    async applyLogId(params) {
        return this.uploadService.applyLogId(params);
    }
    async uploadLogList(params) {
        return this.uploadService.uploadLogList(params);
    }
    async uploadRequestList(params) {
        return this.uploadService.uploadRequestList(params);
    }
    async uploadStorageList(params) {
        return this.uploadService.uploadStorageList(params);
    }
    async uploadSystemInfoList(params) {
        return this.uploadService.uploadSystemInfoList(params);
    }
    async uploadPerformanceList(params) {
        return this.uploadService.uploadPerformanceList(params);
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Post)('applyLogId'),
    (0, api_result_decorator_1.ApiResult)({ message: '申请日志id' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [applyLogId_dto_1.default]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "applyLogId", null);
__decorate([
    (0, common_1.Post)('uploadLogList'),
    (0, api_result_decorator_1.ApiResult)({ message: '上传log记录' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [uploadLogList_dto_1.uploadLogListReq]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadLogList", null);
__decorate([
    (0, common_1.Post)('uploadRequestList'),
    (0, api_result_decorator_1.ApiResult)({ message: '上传接口记录' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [uploadRequestList_dto_1.uploadRequestListReq]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadRequestList", null);
__decorate([
    (0, common_1.Post)('uploadStorageList'),
    (0, api_result_decorator_1.ApiResult)({ message: '上传缓存信息' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [uploadStorageList_dto_1.uploadStorageListReq]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadStorageList", null);
__decorate([
    (0, common_1.Post)('uploadSystemInfoList'),
    (0, api_result_decorator_1.ApiResult)({ message: '上传缓上传设备系统信息存信息' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [uploadSystemInfoList_dto_1.uploadSystemInfoListReq]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadSystemInfoList", null);
__decorate([
    (0, common_1.Post)('uploadPerformanceList'),
    (0, api_result_decorator_1.ApiResult)({ message: '上传性能指标信息' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [uploadPerformanceList_dto_1.uploadPerformanceListReq]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadPerformanceList", null);
exports.UploadController = UploadController = __decorate([
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [upload_service_1.UploadService])
], UploadController);
//# sourceMappingURL=upload.controller.js.map