class LogItem {
  info: string;
  type: string;
  time: string | number;
}

export class uploadLogListReq {
  logId: string;

  logList: Array<LogItem>;
}
