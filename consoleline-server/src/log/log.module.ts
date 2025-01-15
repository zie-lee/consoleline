import { Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { LogService } from './log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from 'src/entity/log.entity';
import { LogItem } from 'src/entity/log-item.entity';
import { RequestItem } from 'src/entity/request-item.entity';
import { StorageItem } from 'src/entity/storage-item.entity';
import { SystemInfoItem } from 'src/entity/system-info-item.entity';
import { PerformanceItem } from 'src/entity/performance-item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Log]),
    TypeOrmModule.forFeature([LogItem]),
    TypeOrmModule.forFeature([RequestItem]),
    TypeOrmModule.forFeature([StorageItem]),
    TypeOrmModule.forFeature([SystemInfoItem]),
    TypeOrmModule.forFeature([PerformanceItem]),
  ],
  controllers: [LogController],
  providers: [LogService],
  exports: [LogService],
})
export class LogModule {}
