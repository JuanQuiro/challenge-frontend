/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ActivityGauge } from "../ActivityGauge";
import "./style.css";

interface Props {
  size: "md" | "xs" | "lg" | "sm";
  legend: "false" | "right" | "bottom";
  label: boolean;
}

export const SizeMdLegendFalseWrapper = ({
  size,
  legend,
  label,
}: Props): JSX.Element => {
  return (
    <div className={`size-md-legend-false-wrapper ${legend}`}>
      <ActivityGauge
        className="activity-gauge"
        label={!!label}
        size={
          size === "lg"
            ? "lg"
            : size === "sm"
              ? "sm"
              : size === "xs"
                ? "xs"
                : "md"
        }
      />
      {["bottom", "right"].includes(legend) && (
        <div className="legend">
          <div className="legend-series">
            <div className="color">
              {legend === "right" && <div className="div" />}
            </div>
            <div className="text-wrapper">Series 1</div>
          </div>
          <div className="legend-series-2">
            <div className="color-2">
              {legend === "right" && <div className="color-3" />}
            </div>
            <div className="text-wrapper">Series 2</div>
          </div>
          <div className="legend-series-3">
            <div className="color-4">
              {legend === "right" && <div className="color-5" />}
            </div>
            <div className="text-wrapper">Series 3</div>
          </div>
        </div>
      )}
    </div>
  );
};

SizeMdLegendFalseWrapper.propTypes = {
  size: PropTypes.oneOf(["md", "xs", "lg", "sm"]),
  legend: PropTypes.oneOf(["false", "right", "bottom"]),
  label: PropTypes.bool,
};
