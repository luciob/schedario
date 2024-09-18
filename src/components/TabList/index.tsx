import { KeyboardEvent, useCallback, useState } from "react";
import Tab, { TabProps, TabVariant } from "../Tab";
import style from "./index.module.css";

export type TabItemProps = Omit<TabProps, "onClick" | "variant">;

export interface TabListProps {
  /**
   * Tab list label
   */
  label?: string;
  /**
   * Tab click handler
   */
  onClick?: (tabId: string) => void;
  /**
   * Identifier of the selected tab
   */
  selectedTab: string;
  /**
   * Array of available tabs
   */
  tabs: TabItemProps[];
  /**
   * Tabs variant
   */
  variant?: TabVariant;
}

const TabList = ({ label, onClick: extOnClick, selectedTab: extSelectedTab, tabs, variant = "pill" }: TabListProps) => {
  const [selectedTab, setSelectedTab] = useState(extSelectedTab);
  const [focusedTab, setFocusedTab] = useState(extSelectedTab);

  const onClick = useCallback(
    (tabId: string) => {
      setSelectedTab(tabId);
      extOnClick && extOnClick(tabId);
    },
    [extOnClick]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      let focusIndex = tabs.findIndex(({ id: tabId }) => tabId === focusedTab);
      if (focusIndex === -1) {
        focusIndex = 0;
      }

      switch (e.key) {
        case "ArrowLeft":
          focusIndex = (focusIndex === 0 ? tabs.length : focusIndex) - 1;
          setFocusedTab(tabs[focusIndex].id);
          break;
        case "ArrowRight":
          focusIndex = (focusIndex + 1) % tabs.length;
          setFocusedTab(tabs[focusIndex].id);
          break;
        case " ":
        case "Enter":
          onClick(tabs[focusIndex].id);
          break;
        default:
          break;
      }
    },
    [focusedTab, onClick, tabs]
  );

  return (
    <div
      className={`${style.tabList} ${style[variant]}`}
      onKeyDown={onKeyDown}
      role="tablist"
      aria-label={label || "tab-list"}
    >
      {tabs.map((tab) => (
        <Tab
          key={`tab-${tab.id}`}
          {...tab}
          onClick={onClick}
          focused={tab.id === focusedTab}
          selected={tab.id === selectedTab}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default TabList;
