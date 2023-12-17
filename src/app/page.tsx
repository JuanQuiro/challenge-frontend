import React from "react";
import SectionOne from "./components/SectionLanding/Section1";
import SectionTwo from "./components/SectionLanding/Section2";
import Sectionthree from "./components/SectionLanding/Section3";
import SectionFour from "./components/SectionLanding/Section4";
import SectionFive from "./components/SectionLanding/Section5";
import SectionSix from "./components/SectionLanding/Section6";
import SectionSeven from "./components/SectionLanding/Section7";
import Footer from "./components/SectionLanding/Footer";

export default function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <Sectionthree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </>
  );
}
