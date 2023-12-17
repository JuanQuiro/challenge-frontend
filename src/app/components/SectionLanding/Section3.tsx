import React from "react";
import { Button } from "@nextui-org/react";

export default function SectionOne() {
  return (
    <div className="mx-32 mb-24 my-60 lg:mt-16 lg:direction-alternate-reverse">
      <div className="card lg:card-side bg-primary shadow-xl">
        <div className="card-body ">
          <h2 className="card-title mt-32 text-3xl text-white">
            Give us a shot
          </h2>
          <p className="text-white/60">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div className="flex mb-1 ">
            <Button className="w-32 h-8 p-5 mr-5">Learn more</Button>
            <Button className="w-32 h-8 p-5 bg-[#7F56D9] text-white">
              Get started
            </Button>
          </div>
        </div>

        <figure>
          <img src="bannerImg.png" alt="Album" />
        </figure>
      </div>
    </div>
  );
}
