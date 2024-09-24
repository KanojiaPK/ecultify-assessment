import React from "react";
import Avatar from "../assets/Avatar.png";

const Quotes = () => {
  // Dummy data to map over
  const cards = Array(9).fill({
    quote: '"Quotes"',
    title: "Title",
    description: "Description",
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

        {/* {Mapping over the Quote cards } */}
        <div className="grid w-full grid-cols-1 gap-10 mt-6 md:grid-cols-2 lg:grid-cols-3 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border h-auto rounded-[13px] p-6 flex flex-col "
            >
              <h2 className="text-2xl font-bold">{card.quote}</h2>
              <div className="flex flex-row mt-4">
                <img src={Avatar} alt="avatar" className="w-12 h-12" />
                <div className="flex flex-col mx-4">
                  <h2 className="font-bold">{card.title}</h2>
                  <p>{card.description}</p>
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
