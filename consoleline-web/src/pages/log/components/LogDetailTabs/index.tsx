import './index.less'

interface Iprops {
  tabs: Array<string>;
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

const LogDetailTabs = ({ tabs, currentTab, setCurrentTab }: Iprops) => {
  return (
    <div className="log-detail-tabs">
      {tabs.map((tab: string) => (
          <div className={ currentTab === tab ? 'tab-item active': 'tab-item' } key={tab} onClick={() => setCurrentTab(tab)}>
            {tab}
          </div>
        ))}
    </div>
  );
};
 
export default LogDetailTabs;