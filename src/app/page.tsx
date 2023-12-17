import React from "react";
import SectionOne from "./components/SectionLanding/Section1";
import SectionTwo from "./components/SectionLanding/Section2";

export default function Home() {
  return (
    <>
      <div className="mb-80">
        <SectionOne />
      </div>
      <SectionTwo />
    </>
  );
}
