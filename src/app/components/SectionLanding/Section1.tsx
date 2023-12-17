import React from "react";
import { Card, Input, Button } from "@nextui-org/react";
import Image from "next/image";
import { HelpIcon } from "./assest/HelpIcon";
import table from "./assest/table.png";
import { ActivityGaugeScreen } from "./utils/RadialProgress/screens/ActivityGaugeScreen";

export default function SectionOne() {
  return (
    <div className="mb-80">
      <div className="hero min-h-screen">
        <Card className="hero-content my-5 bg-primary py-56 px-4 md:px-64 text-center">
          <div className="max-w-xl">
            <h3
              className="text-7xl  bg-clip-text text-transparent bg-gradient-to-t from-gray-400 font-semibold 
              to-white"
            >
              Grow your users.<br></br>Smarter.
            </h3>
            <p className="py-6 text-[#E9D7FE] text-lg">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
            <span></span>
            <section className="grid  grid-cols-0 lg:grid-cols-3">
              <div className="col-span-3 lg:col-span-2 ml-0 lg:ml-24">
                <Input
                  type="email"
                  label="Email"
                  description={
                    <p>
                      We care about your data in our
                      <span className="link"> privacy policy.</span>
                    </p>
                  }
                  placeholder="Enter your name"
                  endContent={<HelpIcon />}
                />
              </div>
              <div className="col-span-3 lg:col-span-1 items-center">
                <Button
                  color="primary"
                  className="bg-[#7E56D9] w-full lg:w-auto mt-3"
                >
                  Get started
                </Button>
              </div>
            </section>
          </div>
        </Card>
      </div>
      <div className="flex justify-center items-center">
        <div className="card bg-white w-full sm:w-3/6 p-3  shadow-xl absolute z-10">
          <div className="py-2 pl-2">
            <h2 className="font-semibold">Users over time</h2>
          </div>
          <figure>
            <Image src={table} alt="Shoes" />
            <div className="absolute bottom-[-30px] right-0 z-20">
              <ActivityGaugeScreen />
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}
