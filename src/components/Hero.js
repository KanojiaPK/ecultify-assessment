import React from "react";

const Hero = () => {
  return (
    // hero section
    <section>
      <h1 className="flex items-center justify-center mt-40 font-bold text-7xl bold">
        Title
      </h1>
      <h2 className="flex items-center justify-center mt-3 text-3xl text-gray-500 font-[inter]">
        Subtitle
      </h2>
      <div className="flex items-center justify-center gap-4 mt-4">
        <button className="w-32 px-4 py-2 bg-gray-300 border rounded-lg hover:bg-gray-400">
          Button
        </button>
        <button className="w-32 px-4 py-2 text-white bg-black border rounded-lg hover:bg-white hover:text-black hover:bg-gray-200">
          Button
        </button>
      </div>
    </section>
  );
};

export default Hero;
