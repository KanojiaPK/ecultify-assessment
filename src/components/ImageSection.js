import React from "react";
import placeHolderIMG from "../assets/placeHolder.png";

const ImageSection = () => {
  return (
    //simple two images below hero section
    <section className="w-full h-auto p-10 mb-20 mt-80 lg:p-20">
      <div className="flex flex-col items-center justify-center w-auto gap-10 lg:flex-row md:flex-col">
        <img
          src={placeHolderIMG}
          alt="Placeholder"
          className=" w-84  lg:w-[45rem] lg:h-[25rem]"
        />
        <img
          src={placeHolderIMG}
          alt="Placeholder"
          className=" w-84  lg:w-[45rem] lg:h-[25rem]"
        />
      </div>
    </section>
  );
};

export default ImageSection;
