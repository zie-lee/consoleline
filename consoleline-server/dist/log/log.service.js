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
exports.LogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const log_entity_1 = require("../entity/log.entity");
const typeorm_2 = require("typeorm");
const request_item_entity_1 = require("../entity/request-item.entity");
const storage_item_entity_1 = require("../entity/storage-item.entity");
const log_item_entity_1 = require("../entity/log-item.entity");
const system_info_item_entity_1 = require("../entity/system-info-item.entity");
const performance_item_entity_1 = require("../entity/performance-item.entity");
let LogService = class LogService {
    constructor(logRepository, logItemRepository, requestItemRepository, storageItemRepository, systemInfoItemRepository, performanceItemRepository) {
        this.logRepository = logRepository;
        this.logItemRepository = logItemRepository;
        this.requestItemRepository = requestItemRepository;
        this.storageItemRepository = storageItemRepository;
        this.systemInfoItemRepository = systemInfoItemRepository;
        this.performanceItemRepository = performanceItemRepository;
    }
    async queryLogDetail(params) {
        if (!params.logId)
            return new log_entity_1.Log();
        const log = await this.logRepository.findOneBy({ id: params.logId });
        return log || new log_entity_1.Log();
    }
    async queryLogList(params) {
        if (!params.logId)
            return [];
        return await this.logItemRepository.findBy({ logId: params.logId });
    }
    async queryRequestList(params) {
        if (!params.logId)
            return [];
        return await this.requestItemRepository.findBy({ logId: params.logId });
    }
    async queryStorageList(params) {
        if (!params.logId)
            return [];
        return await this.storageItemRepository.findBy({ logId: params.logId });
    }
    async querySystemInfoList(params) {
        if (!params.logId)
            return [];
        return await this.systemInfoItemRepository.findBy({ logId: params.logId });
    }
    async queryPerformanceList(params) {
        if (!params.logId)
            return [];
        return await this.performanceItemRepository.findBy({ logId: params.logId });
    }
};
exports.LogService = LogService;
exports.LogService = LogService = __decorate([
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
], LogService);
//# sourceMappingURL=log.service.js.map