import CustomTabs from "./CustomTabs";
import "./styles.css";
function RandomComponent() {
  return <div>Random Content</div>;
}

export default function Tabs() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is Content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is Content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];
  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }
  return <CustomTabs tabsContent={tabs} onChange={handleChange} />;
}
