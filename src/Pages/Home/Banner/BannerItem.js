import React from "react";

const BannerItem = ({slide}) => {
    const { image, prev, id, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carosel-image">
        <img src={image} className="w-full" alt="" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-3/4">
        <a href={`#slide${prev}`} className="btn btn-circle mx-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle btn-error">
          ❯
        </a>
      </div>

      <div className="absolute flex justify-start md:left-20 left-5 right-5 top-1/4">
        <h1 className="md:text-6xl text-2xl text-white font-bold">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>
      <div className="absolute flex justify-start left-20 right-5 top-2/4">
        <h1 className="md:text-2xl hidden md:block text-white">
          There are many variations of passages of available, but <br /> the
          majority have suffered alteration in some form
        </h1>
      </div>
      <div className="absolute flex justify-start left-20 right-5 top-2/3">
        <button className="btn btn-error hidden md:block">Discover More</button>
        <button className="btn btn-outline btn-warning mx-5 hidden md:block">
          Latest Project
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
