import React from "react";

export default function SectionOne() {
  return (
    <div className="mx-2 lg:mx-32 mb-24">
      <div className="card lg:card-side bg-primary shadow-xl">
        <figure>
          <img src="bannerImg2.png" alt="Album" />
        </figure>
        <div className="card-body ">
          <div>
            <div className="rating mt-20">
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
