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
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const log_entity_1 = require("../entity/log.entity");
const typeorm_2 = require("typeorm");
const log_item_entity_1 = require("../entity/log-item.entity");
const splitArr_1 = require("../utils/splitArr");
const request_item_entity_1 = require("../entity/request-item.entity");
const storage_item_entity_1 = require("../entity/storage-item.entity");
const system_info_item_entity_1 = require("../entity/system-info-item.entity");
const performance_item_entity_1 = require("../entity/performance-item.entity");
const jsonToString_1 = require("../utils/jsonToString");
let UploadService = class UploadService {
    constructor(logRepository, logItemRepository, requestItemRepository, storageItemRepository, systemInfoItemRepository, performanceItemRepository) {
        this.logRepository = logRepository;
        this.logItemRepository = logItemRepository;
        this.requestItemRepository = requestItemRepository;
        this.storageItemRepository = storageItemRepository;
        this.systemInfoItemRepository = systemInfoItemRepository;
        this.performanceItemRepository = performanceItemRepository;
    }
    async applyLogId(params) {
        const log = new log_entity_1.Log();
        log.description = params.description || '';
        log.sdkVersion = params.sdkVersion || '';
        log.createTime = new Date();
        const res = await this.logRepository.insert(log);
        return res.identifiers[0].id;
    }
    async batchInsertEntity(list, entityType) {
        await entityType.createQueryBuilder().insert().values(list).execute();
    }
    async uploadLogList(params) {
        const list = [];
        for (const item of params.logList) {
            const logItem = new log_item_entity_1.LogItem();
            logItem.info = JSON.stringify(item.info);
            logItem.logId = params.logId;
            logItem.time = new Date(+item.time);
            logItem.type = item.type;
            list.push(logItem);
        }
        for (const items of (0, splitArr_1.default)(list, 50)) {
            await this.batchInsertEntity(items, this.logItemRepository);
        }
        return params.logId;
    }
    async uploadRequestList(params) {
        const list = [];
        for (const item of params.requestList || []) {
            const requestItem = new request_item_entity_1.RequestItem();
            requestItem.logId = params.logId;
            requestItem.url = item.url;
            requestItem.method = item.method;
            requestItem.body = (0, jsonToString_1.default)(item.body);
            requestItem.query = (0, jsonToString_1.default)(item.query || '{}');
            requestItem.requestHeaders = (0, jsonToString_1.default)(item.requestHeaders || '[]');
            requestItem.startTime = new Date(+item.startTime);
            requestItem.responseHeaders = (0, jsonToString_1.default)(item.responseHeaders || '[]');
            requestItem.response = (0, jsonToString_1.default)(item.response);
            requestItem.responseType = item.responseType || '';
            requestItem.status = item.status || 404;
            requestItem.endTime = new Date(+item.endTime);
            list.push(requestItem);
        }
        for (const items of (0, splitArr_1.default)(list, 10)) {
            await this.batchInsertEntity(items, this.requestItemRepository);
        }
        return params.logId;
    }
    async uploadStorageList(params) {
        const list = [];
        for (const item of params.storageList) {
            const storage = new storage_item_entity_1.StorageItem();
            storage.logId = params.logId;
            storage.key = item.key;
            storage.type = item.type;
            storage.value = item.value;
            list.push(storage);
        }
        for (const items of (0, splitArr_1.default)(list, 50)) {
            await this.batchInsertEntity(items, this.storageItemRepository);
        }
        return params.logId;
    }
    async uploadSystemInfoList(params) {
        const list = [];
        for (const item of params.systemInfoList) {
            const systemInfoItem = new system_info_item_entity_1.SystemInfoItem();
            systemInfoItem.logId = params.logId;
            systemInfoItem.info = item;
            list.push(systemInfoItem);
        }
        for (const items of (0, splitArr_1.default)(list, 50)) {
            await this.batchInsertEntity(items, this.systemInfoItemRepository);
        }
        return params.logId;
    }
    async uploadPerformanceList(params) {
        const list = [];
        for (const item of params.performanceList) {
            const performanceItem = new performance_item_entity_1.PerformanceItem();
            performanceItem.logId = params.logId;
            performanceItem.key = item.key;
            performanceItem.value = item.value;
            list.push(performanceItem);
        }
        for (const items of (0, splitArr_1.default)(list, 50)) {
            await this.batchInsertEntity(items, this.performanceItemRepository);
        }
        return params.logId;
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(log_entity_1.Log)),
    __param(1, (0, typeorm_1.InjectRepository)(log_item_entity_1.LogItem)),
    __param(2, (0, typeorm_1.InjectRepository)(request_item_entity_1.RequestItem)),
    __param(3, (0, typeorm_1.InjectRepository)(storage_item_entity_1.StorageItem)),
    __param(4, (0, typeorm_1.InjectRepository)(system_info_item_entity_1.SystemInfoItem)),
    __param(5, (0, typeorm_1.InjectRepository)(performance_item_entity_1.PerformanceItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UploadService);
//# sourceMappingURL=upload.service.js.map