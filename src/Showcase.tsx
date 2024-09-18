import { useState } from "react";
import TabList, { TabItemProps } from "./components/TabList";
import { TabVariant } from "./components/Tab";

interface ShowcaseProps {
  variant?: TabVariant;
}

const tabs: TabItemProps[] = [
  { id: "emails", label: "Emails", selected: true },
  { id: "files", label: "Files", badge: { label: "Warning", variant: "negative" } },
  { id: "edits", label: "Edits" },
  { id: "dashboard", label: "Dashboard" },
  { id: "messages", label: "Messages" },
];

const Showcase = ({ variant = "pill" }: ShowcaseProps) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  return (
    <main>
      <TabList onClick={setSelectedTab} selectedTab={selectedTab} tabs={tabs} variant={variant} />
      <div
        className={`tab-content ${selectedTab}`}
        aria-labelledby={selectedTab}
        id={`content-${selectedTab}`}
        tabIndex={0}
        role="tabpanel"
      >
        {new Array(6).fill(null).map((_, index) => (
          <article key={index} />
        ))}
      </div>
    </main>
  );
};

export default Showcase;
