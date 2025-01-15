import { CallHandler, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class ResultTransformInterceptor {
    private reflector;
    constructor(reflector: Reflector);
    intercept(context: ExecutionContext, next: CallHandler): import("rxjs").Observable<{
        code: number;
        message: any;
        data: any;
    }>;
}
