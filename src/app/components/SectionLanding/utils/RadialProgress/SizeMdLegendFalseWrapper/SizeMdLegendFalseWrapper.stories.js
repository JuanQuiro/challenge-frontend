import { SizeMdLegendFalseWrapper } from ".";

export default {
  title: "Components/SizeMdLegendFalseWrapper",
  component: SizeMdLegendFalseWrapper,
  argTypes: {
    size: {
      options: ["md", "xs", "lg", "sm"],
      control: { type: "select" },
    },
    legend: {
      options: ["false", "right", "bottom"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "md",
    legend: "false",
    label: true,
  },
};
