/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import F1 from "./assest/FeaturedIcon.svg";
import F2 from "./assest/FeaturedIcon2.svg";
import F3 from "./assest/FeaturedIcon3.svg";
import Image from "next/image";

export default function SectionOne() {
  const tecnologias = [
    {
      tecnologia: "Share team inboxes",
      titulo:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      imagen: F1,
    },
    {
      tecnologia: "Deliver instant answers",
      titulo:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
      imagen: F2,
    },
    {
      tecnologia: "Manage your team with reports",
      titulo:
        "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
      imagen: F3,
    },
  ];

  return (
    <>
      <div className="mt-50 sm:mx-36 mx-0">
        <div className=" text-center">
          <div className=" text-center justify-center">
            <p className="badge bg-[#E9D7FE] border-1 text-[#6941C6] ">
              Integrations
            </p>
            <p className="text-3xl font-semibold">
              Get more value from your tools
            </p>
            <p className="py-6 ">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {tecnologias.map((tecnologia, index) => (
            <div key={index} className="col-span-1 p-4 rounded-lg">
              <div className="flex py-3 justify-center">
                <Image
                  src={tecnologia.imagen}
                  height={50}
                  width={50}
                  alt={`tecnologia.tecno`}
                />
              </div>
              <h2 className="text-xl font-bold">{tecnologia.tecnologia}</h2>
              <h3 className="text-sm py-4 text-gray-600">
                {tecnologia.titulo}
              </h3>
              <div className="flex justify-center text-[#6941C6]">
                <p className="mr-2 link ">View Integration</p>
                <svg
                  className="w-4 h-4 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.707 3.293a1 1 0 010 1.414L7.414 9H16a1 1 0 110 2H7.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
