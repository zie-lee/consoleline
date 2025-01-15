import { SetMetadata } from '@nestjs/common';

export const API_RESULT_META = {
  SUCCESS: '__http_api_success_meta',
  ERROR: '__http_api_error_meta',
};

/** 接口相应装饰 */
export function ApiResult(options: { message?: string }) {
  const successMsg = `${options.message}成功`;
  const errorMsg = `${options.message}失败`;

  return (target, name, decorator) => {
    SetMetadata(API_RESULT_META.SUCCESS, successMsg)(decorator.value);
    SetMetadata(API_RESULT_META.ERROR, errorMsg)(decorator.value);
    return decorator;
  };
}
