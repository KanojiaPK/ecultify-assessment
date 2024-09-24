import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFigma,
} from "react-icons/fa";

const Footer = () => {
  // Arrays for data
  const socialIcons = [FaTwitter, FaInstagram, FaYoutube, FaLinkedin];
  const useCases = [
    "UI design",
    "UX design",
    "Wireframing",
    "Diagramming",
    "Brainstorming",
    "Online whiteboard",
    "Team collaboration",
  ];
  const exploreItems = [
    "Design",
    "Prototyping",
    "Development features",
    "Design systems",
    "Collaboration features",
    "Design process",
    "FigJam",
  ];
  const resources = [
    "Blog",
    "Best practices",
    "Colors",
    "Color wheel",
    "Support",
    "Developers",
    "Resource library",
  ];

  const renderList = (title, items) => (
    <div>
      <h3 className="mb-4 font-bold">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="w-full p-8 mt-16 bg-white border-t-2 ">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col">
          <FaFigma className="w-8 h-8 mb-4" />
          <div className="flex space-x-4">
            {socialIcons.map((Icon, index) => (
              <Icon key={index} className="w-6 h-6" />
            ))}
          </div>
        </div>
        {renderList("Use cases", useCases)}
        {renderList("Explore", exploreItems)}
        {renderList("Resources", resources)}
      </div>
    </footer>
  );
};

export default Footer;
