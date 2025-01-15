import { CallHandler, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as logger from 'jason-logger';
import { map } from 'rxjs/operators';
import { API_RESULT_META } from '../decorators/api-result.decorator';
import errorCodeConstant from 'src/constants/errorCodeConstant';

@Injectable()
export class ResultTransformInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    const target = context.getHandler();
    const ctx = context.getArgByIndex(1);
    const message = this.reflector.get(API_RESULT_META.SUCCESS, target);

    logger.log(`URL: ${ctx.req.url}; MTHOD: ${ctx.req.method}`);
    console.log('BODY:', ctx.req.body);
    console.log('QUERY:', ctx.req.query);

    return next.handle().pipe(
      map((data) => {
        return {
          code: errorCodeConstant.SUCCESS.code,
          message: message || errorCodeConstant.SUCCESS.message,
          data: data,
        };
      }),
    );
  }
}
