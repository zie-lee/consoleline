import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('performance_item')
export class PerformanceItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'log_id', type: 'text' })
  logId: string;

  @Column({ name: 'key', type: 'text' })
  key: string;

  @Column({ name: 'value', type: 'text' })
  value: string;
}
