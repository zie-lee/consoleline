"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadModule = void 0;
const common_1 = require("@nestjs/common");
const upload_controller_1 = require("./upload.controller");
const upload_service_1 = require("./upload.service");
const typeorm_1 = require("@nestjs/typeorm");
const log_entity_1 = require("../entity/log.entity");
const log_item_entity_1 = require("../entity/log-item.entity");
const request_item_entity_1 = require("../entity/request-item.entity");
const performance_item_entity_1 = require("../entity/performance-item.entity");
const storage_item_entity_1 = require("../entity/storage-item.entity");
const system_info_item_entity_1 = require("../entity/system-info-item.entity");
let UploadModule = class UploadModule {
};
exports.UploadModule = UploadModule;
exports.UploadModule = UploadModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([log_entity_1.Log]),
            typeorm_1.TypeOrmModule.forFeature([log_item_entity_1.LogItem]),
            typeorm_1.TypeOrmModule.forFeature([request_item_entity_1.RequestItem]),
            typeorm_1.TypeOrmModule.forFeature([storage_item_entity_1.StorageItem]),
            typeorm_1.TypeOrmModule.forFeature([performance_item_entity_1.PerformanceItem]),
            typeorm_1.TypeOrmModule.forFeature([system_info_item_entity_1.SystemInfoItem]),
        ],
        controllers: [upload_controller_1.UploadController],
        providers: [upload_service_1.UploadService],
        exports: [upload_service_1.UploadService],
    })
], UploadModule);
//# sourceMappingURL=upload.module.js.map