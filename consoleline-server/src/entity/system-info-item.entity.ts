import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('system_info_item')
export class SystemInfoItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'log_id', type: 'text' })
  logId: string;

  @Column({ name: 'info', type: 'text' })
  info: string;
}
