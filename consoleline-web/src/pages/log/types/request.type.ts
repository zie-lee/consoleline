export type IRequestItem = {
    id: string;
    url: string;
    method: string;
    status: number;
    startTime: string;
    endTime: string;
    query: string;
    requestHeaders: string;
    responseHeaders: string;
    body: string;
    response: string;
}