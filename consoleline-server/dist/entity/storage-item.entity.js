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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageItem = void 0;
const typeorm_1 = require("typeorm");
let StorageItem = class StorageItem {
};
exports.StorageItem = StorageItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StorageItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'log_id', type: 'text' }),
    __metadata("design:type", String)
], StorageItem.prototype, "logId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type', type: 'text' }),
    __metadata("design:type", String)
], StorageItem.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'key', type: 'text' }),
    __metadata("design:type", String)
], StorageItem.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'value', type: 'text' }),
    __metadata("design:type", String)
], StorageItem.prototype, "value", void 0);
exports.StorageItem = StorageItem = __decorate([
    (0, typeorm_1.Entity)('storage_item')
], StorageItem);
//# sourceMappingURL=storage-item.entity.js.map