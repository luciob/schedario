import TabList, { TabItemProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/TabList",
  component: TabList,
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabs: TabItemProps[] = [
  { id: "emails", label: "Emails", selected: true },
  { id: "files", label: "Files", badge: { label: "Warning", variant: "negative" } },
  { id: "edits", label: "Edits" },
  { id: "dashboard", label: "Dashboard" },
  { id: "messages", label: "Messages" },
];

export const Primary: Story = {
  args: {
    onClick: (id: string) => console.log(id),
    selectedTab: "emails",
    tabs,
    variant: "pill",
  },
};

export const Underline: Story = {
  args: {
    ...Primary.args,
    variant: "underline",
  },
};
