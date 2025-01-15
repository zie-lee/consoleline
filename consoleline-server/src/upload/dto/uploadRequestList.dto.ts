class RequestItem {
  id: string;
  method: string;
  url: string;
  body: string;
  query: string;
  requestHeaders: string;
  response: string;
  responseType: string;
  responseHeaders: string;
  status: number;
  startTime: string | number;
  endTime: string | number;
}

export class uploadRequestListReq {
  logId: string;
  requestList: Array<RequestItem>;
}
