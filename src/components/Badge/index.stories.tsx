import Badge from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Badge",
  },
};

export const Positive: Story = {
  args: {
    ...Primary.args,
    variant: "positive",
  },
};

export const Negative: Story = {
  args: {
    ...Primary.args,
    variant: "negative",
  },
};
