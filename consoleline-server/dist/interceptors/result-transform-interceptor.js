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
exports.ResultTransformInterceptor = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const logger = require("jason-logger");
const operators_1 = require("rxjs/operators");
const api_result_decorator_1 = require("../decorators/api-result.decorator");
const errorCodeConstant_1 = require("../constants/errorCodeConstant");
let ResultTransformInterceptor = class ResultTransformInterceptor {
    constructor(reflector) {
        this.reflector = reflector;
    }
    intercept(context, next) {
        const target = context.getHandler();
        const ctx = context.getArgByIndex(1);
        const message = this.reflector.get(api_result_decorator_1.API_RESULT_META.SUCCESS, target);
        logger.log(`URL: ${ctx.req.url}; MTHOD: ${ctx.req.method}`);
        console.log('BODY:', ctx.req.body);
        console.log('QUERY:', ctx.req.query);
        return next.handle().pipe((0, operators_1.map)((data) => {
            return {
                code: errorCodeConstant_1.default.SUCCESS.code,
                message: message || errorCodeConstant_1.default.SUCCESS.message,
                data: data,
            };
        }));
    }
};
exports.ResultTransformInterceptor = ResultTransformInterceptor;
exports.ResultTransformInterceptor = ResultTransformInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], ResultTransformInterceptor);
//# sourceMappingURL=result-transform-interceptor.js.map