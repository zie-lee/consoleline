import { IPerformance } from '../../types/performance.type';
import './index.less'

interface Iprops {
    performanceList: Array<IPerformance>,
    hidden: boolean,
}

const LogDetaiPerformance = ({ performanceList, hidden }: Iprops) => {
  return (
    <div className="log-detail-performance" hidden={hidden}>
        {performanceList.map((info: { key: string, value: string }, index: number) => (
            <div key={index} className="info-item">
                <span className="info-key">{info.key}</span>
                <span className="info-value">{info.value}</span>
            </div>
        ))}
        {performanceList.length === 0 && <div className="empty-row">暂无数据~</div>}
    </div>
  );
};
 
export default LogDetaiPerformance;