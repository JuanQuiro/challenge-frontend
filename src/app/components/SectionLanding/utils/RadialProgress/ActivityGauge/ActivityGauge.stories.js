import { ActivityGauge } from ".";

export default {
  title: "Components/ActivityGauge",
  component: ActivityGauge,
  argTypes: {
    size: {
      options: ["md", "xs", "lg", "sm"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "md",
    label: true,
    className: {},
  },
};
