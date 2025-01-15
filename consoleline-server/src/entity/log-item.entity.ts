import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('log_item')
export class LogItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'log_id', type: 'text' })
  logId: string;

  @Column({ name: 'info', type: 'text' })
  info: string;

  @Column({ name: 'type', type: 'text' })
  type: string;

  @Column({ name: 'time', type: 'datetime' })
  time: Date;
}
