import Tab from ".";
import { Meta, StoryObj } from "@storybook/react";
import { expect, fireEvent, fn, within } from "@storybook/test";

const meta = {
  title: "Components/Tab",
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

const onClickMock = fn(() => console.log("Tab clicked"));

export const Primary: Story = {
  args: {
    id: "tab-id",
    label: "Label",
    onClick: onClickMock,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole("tab");
    if (!tab) {
      return;
    }

    fireEvent.click(tab);
    await expect(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);
  },
};

export const PillBadge: Story = {
  args: {
    ...Primary.args,
    badge: {
      label: "Badge",
      variant: "negative",
    },
  },
};

export const PillSelected: Story = {
  args: {
    ...Primary.args,
    selected: true,
  },
};

export const Underline: Story = {
  args: {
    ...Primary.args,
    variant: "underline",
  },
};

export const UnderlineBadge: Story = {
  args: {
    ...PillBadge.args,
    variant: "underline",
  },
};

export const UnderlineSelected: Story = {
  args: {
    ...PillSelected.args,
    variant: "underline",
  },
};
