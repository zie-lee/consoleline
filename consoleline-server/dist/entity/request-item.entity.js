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
exports.RequestItem = void 0;
const typeorm_1 = require("typeorm");
let RequestItem = class RequestItem {
};
exports.RequestItem = RequestItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RequestItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'log_id', type: 'text' }),
    __metadata("design:type", String)
], RequestItem.prototype, "logId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'method', type: 'text' }),
    __metadata("design:type", String)
], RequestItem.prototype, "method", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'url', type: 'text' }),
    __metadata("design:type", String)
], RequestItem.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'body', type: 'text' }),
    __metadata("design:type", String)
], RequestItem.prototype, "body", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'query', type: 'text' }),
    __metadata("design:type", String)
], RequestItem.prototype, "query", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'request_headers', type: 'text' }),
    __metadata("design:type", String)
], RequestItem.prototype, "requestHeaders", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'response', type: 'text' }),
    __metadata("design:type", String)
], RequestItem.prototype, "response", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'response_type', type: 'text' }),
    __metadata("design:type", String)
], RequestItem.prototype, "responseType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'response_headers', type: 'text' }),
    __metadata("design:type", String)
], RequestItem.prototype, "responseHeaders", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'int' }),
    __metadata("design:type", Number)
], RequestItem.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'start_time', type: 'datetime' }),
    __metadata("design:type", Date)
], RequestItem.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'end_time', type: 'datetime' }),
    __metadata("design:type", Date)
], RequestItem.prototype, "endTime", void 0);
exports.RequestItem = RequestItem = __decorate([
    (0, typeorm_1.Entity)('request_item')
], RequestItem);
//# sourceMappingURL=request-item.entity.js.map