import { expect, fireEvent, fn, within } from "@storybook/test";
import TabList, { TabItemProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/TabList",
  component: TabList,
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

const onClickMock = fn((id: string) => console.log(`Tab ${id} clicked`));

const tabs: TabItemProps[] = [
  { id: "emails", label: "Emails", selected: true },
  { id: "files", label: "Files", badge: { label: "Warning", variant: "negative" } },
  { id: "edits", label: "Edits" },
  { id: "dashboard", label: "Dashboard" },
  { id: "messages", label: "Messages" },
];

export const Primary: Story = {
  args: {
    onClick: onClickMock,
    selectedTab: "emails",
    tabs,
    variant: "pill",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabList = canvas.getByRole("tablist");
    if (!tabList) {
      return;
    }

    const tabId = Math.ceil(Math.random() * tabs.length);
    const tab = canvas.getAllByRole("tab")[tabId];
    if (!tab) {
      return;
    }

    fireEvent.click(tab);
    await expect(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);
    await expect(onClickMock).toHaveBeenCalledWith(tabs[tabId].id);
  },
};

export const Underline: Story = {
  args: {
    ...Primary.args,
    variant: "underline",
  },
};
