import React from "react";

export default function SectionOne() {
  return (
    <div className="mx-2 sm:mx-32 mb-24 my-60 lg:mt-16 ">
      <div className="card lg:card-side bg-primary shadow-xl">
        <figure className="bg-black">
          <img
            src="/bannerImg2.png"
            alt="Renee Wells - Product Designer, Quotient"
          />
        </figure>
        <div className="card-body ">
          <div>
            <div className="rating lg:mt-20">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <h2 className="card-title text-lg  text-white">
            Love the simplicity of the service and the prompt customer support.
            We can’t imagine working without it.
          </h2>
          <div className=" text-white text-lg font-semibold leading-7">
            — Renee Wells
            <p className="text-white/60 font-light">
              Product Designer, Quotient
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
