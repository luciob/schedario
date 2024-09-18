import Typography from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Typography",
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Typography",
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    variant: "s",
  },
};
