import React from "react";
import partsImg from "../../../assets/images/about_us/parts.jpg";
import personImg from "../../../assets/images/about_us/person.jpg";

const AboutUs = () => {
  return (
      <div className="hero my-10 md:my-24 md:w-5/6 pb-20 mx-auto " style={{border: '2px solid white'}}>
        <div className="hero-content flex-col-reverse lg:flex-row">
          <div className="md:w-1/2 relative">
            <img
              src={personImg}
              className="md:w-4/5 md:mt-0 mt-4 h-full rounded-lg shadow-2xl"
              alt=""
            />
            <img
              src={partsImg}
              className="w-2/3 md:block rounded-lg shadow-2xl absolute right-5 top-1/2 border-solid border-8 border-white"
              alt=""
            />
          </div>
          <div className="md:w-1/2">
            <p className="pb-2 text-orange-500 font-bold text-1xl">About us</p>
            <h1 className="text-5xl leading-tight font-bold mb-6">
              We are qualified & of experience in this field
            </h1>
            <p className="mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="mb-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button style={{border: 'none'}} className="btn border bg-orange-600 hover:bg-orange-600 ">Get More Info</button>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;
