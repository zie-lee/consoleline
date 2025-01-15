class StorageItem {
  type: string;
  key: string;
  value: string;
}

export class uploadStorageListReq {
  logId: string;
  storageList: Array<StorageItem>;
}
