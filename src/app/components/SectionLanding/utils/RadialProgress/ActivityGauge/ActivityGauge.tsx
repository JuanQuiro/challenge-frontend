/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  size: "md" | "xs" | "lg" | "sm";
  label: boolean;
  className: any;
}

export const ActivityGauge = ({
  size,
  label,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`activity-gauge ${size} ${className}`}>
      <div className="overlap">
        <div className="ring-outer">
          <div className="overlap-group">
            <img
              className="line"
              alt="Line"
              src={
                size === "lg"
                  ? "https://c.animaapp.com/vX2E0f3n/img/line-95.svg"
                  : size === "sm"
                    ? "https://c.animaapp.com/vX2E0f3n/img/line-92.svg"
                    : size === "xs"
                      ? "https://c.animaapp.com/vX2E0f3n/img/line-89.svg"
                      : "https://c.animaapp.com/vX2E0f3n/img/line-98.svg"
              }
            />
          </div>
        </div>
        <div className="ring-middle">
          <div className="line-wrapper">
            <img
              className="img"
              alt="Line"
              src={
                size === "lg"
                  ? "https://c.animaapp.com/vX2E0f3n/img/line-94.svg"
                  : size === "sm"
                    ? "https://c.animaapp.com/vX2E0f3n/img/line-91.svg"
                    : size === "xs"
                      ? "https://c.animaapp.com/vX2E0f3n/img/line-88.svg"
                      : "https://c.animaapp.com/vX2E0f3n/img/line-97.svg"
              }
            />
          </div>
        </div>
        <div className="ring-inner">
          <div className="img-wrapper">
            <img
              className="line-2"
              alt="Line"
              src={
                size === "lg"
                  ? "https://c.animaapp.com/vX2E0f3n/img/line-93.svg"
                  : size === "sm"
                    ? "https://c.animaapp.com/vX2E0f3n/img/line-90.svg"
                    : size === "xs"
                      ? "https://c.animaapp.com/vX2E0f3n/img/line-87.svg"
                      : "https://c.animaapp.com/vX2E0f3n/img/line-96.svg"
              }
            />
          </div>
        </div>
        <div className={`label size-9-${size} label-${label}`}>
          {label && <>Active users</>}

          {!label && <>1,000</>}
        </div>
        {label && <div className="number">1,000</div>}
      </div>
    </div>
  );
};

ActivityGauge.propTypes = {
  size: PropTypes.oneOf(["md", "xs", "lg", "sm"]),
  label: PropTypes.bool,
};
