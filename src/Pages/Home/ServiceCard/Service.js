import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Service = ({ service }) => {
  const { title, img, price } = service;

  return (
    <div className="card card-compact bg-base-100 border-solid border-2 border-gray-200">
      <figure className="pt-4 px-4">
        <img className="rounded-xl w-full" style={{ height: "250px"}} src={img} alt="Shoes" />
      </figure>
      <div className="card-body mb-4">
        <h2 className="card-title text-2xl">{title}</h2>
        <div>
          <p className="text-xl font-semibold text-orange-500 flex justify-between content-center">
            Price: $ {price} <FaArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
