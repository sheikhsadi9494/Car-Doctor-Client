import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import "./Banner.css";
import BannerItem from "./BannerItem";

const bannerData = [
  {
      image: img1,
      prev: 6,
      id: 1,
      next: 2
  },
  {
      image: img2,
      prev: 1,
      id: 2,
      next: 3
  },
  {
      image: img3,
      prev: 2,
      id: 3,
      next: 4
  },
  {
      image: img4,
      prev: 3,
      id: 4,
      next: 5
  },
  {
      image: img5,
      prev: 4,
      id: 5,
      next: 6
  },
  {
      image: img6,
      prev: 5,
      id: 6,
      next: 1
  }
]

const Banner = () => {

  return (
    <div className="carousel md:w-5/6 mx-auto md:mt-5 md:rounded-xl mb-11 container">
      {
        bannerData.map(slide => <BannerItem key={slide.id} slide={slide} />)
      }

      {/* <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" alt="" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-3/4">
          <a href="#slide1" className="btn btn-circle mx-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}

    </div>
  );
};

export default Banner;
