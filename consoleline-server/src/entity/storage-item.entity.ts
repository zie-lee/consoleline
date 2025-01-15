import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('storage_item')
export class StorageItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'log_id', type: 'text' })
  logId: string;

  @Column({ name: 'type', type: 'text' })
  type: string;

  @Column({ name: 'key', type: 'text' })
  key: string;

  @Column({ name: 'value', type: 'text' })
  value: string;
}
