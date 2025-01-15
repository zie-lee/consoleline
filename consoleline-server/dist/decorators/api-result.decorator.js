"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_RESULT_META = void 0;
exports.ApiResult = ApiResult;
const common_1 = require("@nestjs/common");
exports.API_RESULT_META = {
    SUCCESS: '__http_api_success_meta',
    ERROR: '__http_api_error_meta',
};
function ApiResult(options) {
    const successMsg = `${options.message}成功`;
    const errorMsg = `${options.message}失败`;
    return (target, name, decorator) => {
        (0, common_1.SetMetadata)(exports.API_RESULT_META.SUCCESS, successMsg)(decorator.value);
        (0, common_1.SetMetadata)(exports.API_RESULT_META.ERROR, errorMsg)(decorator.value);
        return decorator;
    };
}
//# sourceMappingURL=api-result.decorator.js.map