import React from "react";
import placeHolderIMG from "../assets/placeHolder2.png";

const Quotes = () => {
  // Dummy data to map over
  const cards = Array(3).fill({
    title: "Title",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story",
  });

  return (
    <section className="flex items-center justify-center w-full h-auto p-10 mt-10 lg:p-20 md:p-15 ">
      <div className="w-full">
        <h2 className="flex items-center justify-center text-2xl font-bold lg:justify-start lg:items-start">
          Heading
        </h2>
        <h3 className="flex items-center justify-center text-xl lg:justify-start lg:items-start">
          Subheading
        </h3>

        {/* {Mapping cards } */}
        <div className="flex flex-col w-full gap-12 mt-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border h-auto w-full rounded-[13px] p-6 flex flex-col"
            >
              {/* Card content with image on the left */}
              <div className="flex flex-col lg:flex-row">
                <img
                  src={placeHolderIMG}
                  alt="placeholder"
                  className="flex items-center justify-center w-full  h-52 lg:mr-4 min-w-[12rem] lg:w-48 md:h-52 "
                />
                <div className="flex flex-col mt-10 lg:m-0">
                  <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold">{card.title}</h2>
                    <p className="text-gray-500 text-md">{card.description}</p>
                  </div>
                  <div className="flex items-center justify-center mt-14 lg:justify-start lg:items-start">
                    <button className="px-4 py-2 text-black bg-gray-300 border border-black rounded hover:bg-gray-400 ">
                      Button
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
