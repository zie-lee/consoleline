import { ILogDetail } from '../../types/logDetail.types';
import './index.less'
import moment from 'moment';

const LogDetailTitle = ({ log } :{ log: ILogDetail | undefined }) => {
  return (
    <div className="log-detail-title">
        <div className='log-info'>
            <span className='info-item'>日志ID: {log?.id}</span>
            <span className='info-item'>JS-SDK版本: {log?.sdkVersion}</span>
            <span className='info-item'>
                上传时间: {log?.createTime ? moment(new Date(log?.createTime)).format('YYYY/MM/DD HH:mm:ss') : '--'}
            </span>
        </div>
        <div className="sdk-info">
            {log?.description || '这里可以写一写项目相关的信息，比如项目版本，项目名称，当前环境等信息，在实例化SDK对应的参数是description'}
        </div>
    </div>
  );
};
 
export default LogDetailTitle;