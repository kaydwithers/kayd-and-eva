type TabProps = {
  isActive: boolean;
  tab: {
    id: string;
    label: string;
  };
  onPress: (next: string) => void;
};

export const Tab = ({ isActive, tab, onPress }: TabProps) => {
  return (
    <li>
      <button
        className={`py-4 px-6 border-b ${
          isActive ? "border-white" : "border-transparent"
        }`}
        onClick={() => onPress(tab.id)}
      >
        {tab.label}
      </button>
    </li>
  );
};
