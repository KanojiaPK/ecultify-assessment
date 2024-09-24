import React from "react";
import placeHolderIMG from "../assets/placeHolder2.png";

const Quotes = () => {
  // Dummy data to map over
  const cards = Array(9).fill({
    title: "Title",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story",
  });

  return (
    <section className="flex items-center justify-center w-full h-auto p-10 mt-10 lg:p-20 md:p-15">
      <div className="w-full">
        <h2 className="flex items-center justify-center text-2xl font-bold lg:justify-start lg:items-start">
          Heading
        </h2>
        <h3 className="flex items-center justify-center text-xl lg:justify-start lg:items-start">
          Subheading
        </h3>

        {/* Grid layout with card content */}
        <div className="grid w-full grid-cols-1 gap-10 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border h-auto rounded-[13px] p-6 flex flex-col"
            >
              {/* Card component */}
              <div className="flex flex-col">
                <img
                  src={placeHolderIMG}
                  alt="placeholder"
                  className="flex items-center justify-center w-full h-52 min-w-[12rem] lg:w-[52%] lg:h-48 md:h-52"
                />
                <div className="flex flex-col mt-10">
                  <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold">{card.title}</h2>
                    <p className="text-gray-500 text-md">{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
