import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('log')
export class Log {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'create_time', type: 'datetime' })
  createTime: Date;

  @Column({ name: 'sdk_version', type: 'text' })
  sdkVersion: string;

  @Column({ name: 'description', type: 'text' })
  description: string;
}
