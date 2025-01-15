import { useState } from "react";
import './index.less'
import { IStorageItem } from "../../types/storage.type";

interface Iprops {
    storageList: Array<IStorageItem>,
    hidden: boolean,
}

const LogDetailStorage = ({ storageList, hidden }: Iprops) => {

    const [currentTab, setTab] = useState('Cookie');
    const storages = storageList.filter(item => item.type === currentTab);

  return (
    <div className="log-detail-storage" hidden={hidden}>
      <div className="tabs">
        {['Cookie', 'LocalStorage', 'SessionStorage'].map((tab: string) => (
            <div key={tab} className={currentTab === tab ? 'tab-item active' : 'tab-item'} onClick={() => setTab(tab)}>{tab}</div>
        ))}
      </div>
      {storages.map((info: { key: string, value: string; type: string }, index: number) => (
        <div key={index} className="info-item">
            <span className="info-key">{info.key}</span>
            <span className="info-value">{info.value}</span>
        </div>
      ))}
      {storages.length === 0 && <div className="empty-row">暂无数据~</div>}
    </div>
  );
};
 
export default LogDetailStorage;