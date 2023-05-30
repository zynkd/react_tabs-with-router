import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { Tabs } from '../components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();

  const selectedTab = tabs.find((tab) => tab.id === tabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        tabs={tabs}
        selectedTab={tabId}
      />

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};

export default TabsPage;