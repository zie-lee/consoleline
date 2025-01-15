import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from 'src/entity/log.entity';
import { LogItem } from '../entity/log-item.entity';
import { RequestItem } from '../entity/request-item.entity';
import { PerformanceItem } from '../entity/performance-item.entity';
import { StorageItem } from '../entity/storage-item.entity';
import { SystemInfoItem } from '../entity/system-info-item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Log]),
    TypeOrmModule.forFeature([LogItem]),
    TypeOrmModule.forFeature([RequestItem]),
    TypeOrmModule.forFeature([StorageItem]),
    TypeOrmModule.forFeature([PerformanceItem]),
    TypeOrmModule.forFeature([SystemInfoItem]),
  ],
  controllers: [UploadController],
  providers: [UploadService],
  exports: [UploadService],
})
export class UploadModule {}
