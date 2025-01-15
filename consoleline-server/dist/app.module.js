"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const upload_module_1 = require("./upload/upload.module");
const log_entity_1 = require("./entity/log.entity");
const log_module_1 = require("./log/log.module");
const log_item_entity_1 = require("./entity/log-item.entity");
const request_item_entity_1 = require("./entity/request-item.entity");
const performance_item_entity_1 = require("./entity/performance-item.entity");
const storage_item_entity_1 = require("./entity/storage-item.entity");
const system_info_item_entity_1 = require("./entity/system-info-item.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'gz-cynosdbmysql-grp-rzt7at17.sql.tencentcdb.com',
                port: 22730,
                username: 'root',
                password: 'console-line01',
                database: 'consoleline',
                entities: [
                    log_entity_1.Log,
                    log_item_entity_1.LogItem,
                    request_item_entity_1.RequestItem,
                    performance_item_entity_1.PerformanceItem,
                    storage_item_entity_1.StorageItem,
                    system_info_item_entity_1.SystemInfoItem,
                ],
                synchronize: true,
                autoLoadEntities: true,
            }),
            upload_module_1.UploadModule,
            log_module_1.LogModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map