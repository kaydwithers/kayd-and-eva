import { Tab } from "./Tab/Tab";

type TabProps = {
  activeTab: string;
  tabs: {
    id: string;
    label: string;
  }[];
  onPress: (next: string) => void;
};

export const Tabs = ({ activeTab, tabs, onPress }: TabProps) => {
  return (
    <ul className="flex">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          isActive={activeTab === tab.id}
          tab={tab}
          onPress={onPress}
        />
      ))}
    </ul>
  );
};
