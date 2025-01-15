import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('request_item')
export class RequestItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'log_id', type: 'text' })
  logId: string;

  @Column({ name: 'method', type: 'text' })
  method: string;

  @Column({ name: 'url', type: 'text' })
  url: string;

  @Column({ name: 'body', type: 'text' })
  body: string;

  @Column({ name: 'query', type: 'text' })
  query: string;

  @Column({ name: 'request_headers', type: 'text' })
  requestHeaders: string;

  @Column({ name: 'response', type: 'text' })
  response: string;

  @Column({ name: 'response_type', type: 'text' })
  responseType: string;

  @Column({ name: 'response_headers', type: 'text' })
  responseHeaders: string;

  @Column({ name: 'status', type: 'int' })
  status: number;

  @Column({ name: 'start_time', type: 'datetime' })
  startTime: Date;

  @Column({ name: 'end_time', type: 'datetime' })
  endTime: Date;
}
