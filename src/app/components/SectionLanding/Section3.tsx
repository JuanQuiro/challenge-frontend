import React from "react";
import { Button } from "@nextui-org/react";

export default function SectionOne() {
  return (
    <div className="mx-5 sm:mx-32 mb-24 my-40 lg:mt-0 ">
      <div className="card lg:card-side bg-primary shadow-xl">
        <div className="card-body ">
          <h2 className="card-title mt-0 lg:mt-32 text-3xl text-white">
            Give us a shot
          </h2>
          <p className="text-white">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div className="grid lg:flex lg:mb-[4rem] ">
            <Button className="w-full lg:w-32 h-8 p-5 mr-5 text-black font-semibold">
              Learn more
            </Button>
            <Button className="w-full lg:w-32 lg:mt-0 mt-3 h-8 p-5 bg-[#7F56D9] text-white">
              Get started
            </Button>
          </div>
        </div>

        <figure className="bg-black">
          <img
            className="object-contain"
            src="/bannerImg.png"
            alt="Image Banner"
          />
        </figure>
      </div>
    </div>
  );
}
