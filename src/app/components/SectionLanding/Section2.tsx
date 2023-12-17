/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import notion from "./assest/notion.svg";
import slack from "./assest/slack.svg";
import gDrive from "./assest/g-drive.svg";
import intercom from "./assest/intercom.svg";
import jira from "./assest/jira.svg";
import dropbox from "./assest/dropbox.svg";
import Image from "next/image";

export default function SectionOne() {
  const tecnologias = [
    {
      tecnologia: "Notion integration",
      titulo: "Notion Integration",
      imagen: notion,
    },
    {
      tecnologia: "Slack integration",
      titulo: "Slack Integration",
      imagen: slack,
    },
    {
      tecnologia: "Google Drive integration",
      titulo: "Google Drive Integration",
      imagen: gDrive,
    },
    {
      tecnologia: "Intercom integration",
      titulo: "Intercom Integration",
      imagen: intercom,
    },
    {
      tecnologia: "Jira integration",
      titulo: "Jira Integration",
      imagen: jira,
    },
    {
      tecnologia: "Dropbox integration",
      titulo: "Dropbox Integration",
      imagen: dropbox,
    },
  ];

  return (
    <>
      <div className=" min-h-screen mx-36 my-5">
        <div className=" text-center">
          <div className=" text-center justify-center">
            <p className="badge bg-[#E9D7FE] border-1 text-[#6941C6] ">
              Integrations
            </p>
            <p className="text-3xl font-semibold">
              Get more value from your tools
            </p>
            <p className="py-6">
              Connect your tools, connect your teams. With over 100 apps already
              available in our directory, your team’s favourite tools are just a
              click away.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
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
                Work faster and smarter by integrating directly with Notion,
                right in the app.
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
