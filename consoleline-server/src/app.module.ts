import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadModule } from './upload/upload.module';
import { Log } from './entity/log.entity';
import { LogModule } from './log/log.module';
import { LogItem } from './entity/log-item.entity';
import { RequestItem } from './entity/request-item.entity';
import { PerformanceItem } from './entity/performance-item.entity';
import { StorageItem } from './entity/storage-item.entity';
import { SystemInfoItem } from './entity/system-info-item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'xxxx',
      port: 8888,
      username: 'xxx',
      password: 'xxxx',
      database: 'xxx',
      entities: [
        Log,
        LogItem,
        RequestItem,
        PerformanceItem,
        StorageItem,
        SystemInfoItem,
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UploadModule,
    LogModule,
  ],
})
export class AppModule {}
