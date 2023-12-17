/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";

export default function SectionFive() {
  return (
    <div className="flex justify-center">
      <div className="w-[1300px] h-[688px] py-24  flex-col justify-center items-center gap-16 inline-flex">
        <div className="self-stretch px-8 justify-center items-center gap-16 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">
            <div className="self-stretch h-[174px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-gray-900 text-5xl font-semibold leading-[60px]">
                No long-term contracts. No catches.
              </div>
              <div className="self-stretch text-slate-600 text-xl font-normal  leading-[30px]">
                Start your 30-day free trial today.
              </div>
            </div>
            <div className="justify-start items-start  sm:mt-0 md:mt-[40px] lg:mt-[-45px]  xl:mt-[-45px]  gap-3 inline-flex">
              <div className="px-[18px] py-3 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-1.5 flex">
                <div className="px-0.5 justify-center items-center flex">
                  <div className="text-slate-700 text-base font-semibold leading-normal">
                    Learn more
                  </div>
                </div>
              </div>
              <div className="px-[18px] py-3 bg-violet-500 rounded-lg shadow border border-violet-500 justify-center items-center gap-1.5 flex">
                <div className="px-0.5 justify-center items-center flex">
                  <div className="text-white text-base font-semibold leading-normal">
                    Get started
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[576px] h-[496px] relative">
            <img
              className="w-40 h-60 left-[296px] top-0 absolute"
              src="/Image160x240.png"
            />
            <img
              className="w-48 h-32 left-[384px] top-[256px] absolute"
              src="/Image192x128.png"
            />
            <img
              className="w-48 h-32 left-0 top-[256px] absolute"
              src="/Image192x128-2.png"
            />
            <img
              className="w-40 h-60 left-[208px] top-[256px] absolute"
              src="/Image160x240-2.png"
            />
            <img
              className="w-40 h-40 left-[120px] top-[80px] absolute"
              src="/Image160x160.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
