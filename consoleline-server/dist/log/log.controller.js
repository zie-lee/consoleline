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
exports.LogController = void 0;
const common_1 = require("@nestjs/common");
const log_service_1 = require("./log.service");
const queryLogDetail_dto_1 = require("./dto/queryLogDetail.dto");
const queryRequestList_dto_1 = require("./dto/queryRequestList.dto");
const queryStorageList_dto_1 = require("./dto/queryStorageList.dto");
const querySystemInfoList_dto_1 = require("./dto/querySystemInfoList.dto");
const queryPerformanceList_dto_1 = require("./dto/queryPerformanceList.dto");
const queryLogList_dto_1 = require("./dto/queryLogList.dto");
let LogController = class LogController {
    constructor(logService) {
        this.logService = logService;
    }
    async queryLogDetail(params) {
        return this.logService.queryLogDetail(params);
    }
    async queryLogList(params) {
        return this.logService.queryLogList(params);
    }
    async queryRequestList(params) {
        return this.logService.queryRequestList(params);
    }
    async queryStorageList(params) {
        return this.logService.queryStorageList(params);
    }
    async querySystemInfoList(params) {
        return this.logService.querySystemInfoList(params);
    }
    async queryPerformanceList(params) {
        return this.logService.queryPerformanceList(params);
    }
};
exports.LogController = LogController;
__decorate([
    (0, common_1.Get)('queryLogDetail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queryLogDetail_dto_1.queryLogDetailReq]),
    __metadata("design:returntype", Promise)
], LogController.prototype, "queryLogDetail", null);
__decorate([
    (0, common_1.Get)('queryLogList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queryLogList_dto_1.queryLogListReq]),
    __metadata("design:returntype", Promise)
], LogController.prototype, "queryLogList", null);
__decorate([
    (0, common_1.Get)('queryRequestList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queryRequestList_dto_1.queryRequestListReq]),
    __metadata("design:returntype", Promise)
], LogController.prototype, "queryRequestList", null);
__decorate([
    (0, common_1.Get)('queryStorageList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queryStorageList_dto_1.queryStorageListReq]),
    __metadata("design:returntype", Promise)
], LogController.prototype, "queryStorageList", null);
__decorate([
    (0, common_1.Get)('querySystemInfoList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [querySystemInfoList_dto_1.querySystemInfoListReq]),
    __metadata("design:returntype", Promise)
], LogController.prototype, "querySystemInfoList", null);
__decorate([
    (0, common_1.Get)('queryPerformanceList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queryPerformanceList_dto_1.queryPerformanceListReq]),
    __metadata("design:returntype", Promise)
], LogController.prototype, "queryPerformanceList", null);
exports.LogController = LogController = __decorate([
    (0, common_1.Controller)('log'),
    __metadata("design:paramtypes", [log_service_1.LogService])
], LogController);
//# sourceMappingURL=log.controller.js.map