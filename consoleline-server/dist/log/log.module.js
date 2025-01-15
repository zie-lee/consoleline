"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogModule = void 0;
const common_1 = require("@nestjs/common");
const log_controller_1 = require("./log.controller");
const log_service_1 = require("./log.service");
const typeorm_1 = require("@nestjs/typeorm");
const log_entity_1 = require("../entity/log.entity");
const log_item_entity_1 = require("../entity/log-item.entity");
const request_item_entity_1 = require("../entity/request-item.entity");
const storage_item_entity_1 = require("../entity/storage-item.entity");
const system_info_item_entity_1 = require("../entity/system-info-item.entity");
const performance_item_entity_1 = require("../entity/performance-item.entity");
let LogModule = class LogModule {
};
exports.LogModule = LogModule;
exports.LogModule = LogModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([log_entity_1.Log]),
            typeorm_1.TypeOrmModule.forFeature([log_item_entity_1.LogItem]),
            typeorm_1.TypeOrmModule.forFeature([request_item_entity_1.RequestItem]),
            typeorm_1.TypeOrmModule.forFeature([storage_item_entity_1.StorageItem]),
            typeorm_1.TypeOrmModule.forFeature([system_info_item_entity_1.SystemInfoItem]),
            typeorm_1.TypeOrmModule.forFeature([performance_item_entity_1.PerformanceItem]),
        ],
        controllers: [log_controller_1.LogController],
        providers: [log_service_1.LogService],
        exports: [log_service_1.LogService],
    })
], LogModule);
//# sourceMappingURL=log.module.js.map