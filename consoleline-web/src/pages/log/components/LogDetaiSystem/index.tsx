import { ISystemInfoItem } from '../../types/system.type';
import './index.less'

interface Iprops {
    systemInfo: Array<ISystemInfoItem>,
    hidden: boolean,
}

const LogDetaiSystem = ({ systemInfo, hidden }: Iprops) => {
  return (
    <div className="log-detail-system-panel" hidden={hidden}>
      {systemInfo.map((item: ISystemInfoItem) => (<div className="info-item" key={item.id}>{item.info}</div>))}
      {systemInfo.length === 0 && <div className="empty-row">暂无数据~</div>}
    </div>
  );
};
 
export default LogDetaiSystem;