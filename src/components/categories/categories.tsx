import React from "react";
import image1 from "../../svg/categories/cat1.svg";
import image2 from "../../svg/categories/cat2.svg";
import image3 from "../../svg/categories/cat3.svg";
import banner from "../../svg/categories/banner.svg";

const Categories = () => {
  return (
    <div className="content-categories">
      <div className="content-categories__images">
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image3} alt="image3" />
      </div>
      <div className="content-categories__banner">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Categories;
