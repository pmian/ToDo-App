import React from "react";
import bgImage from "../assets/images/todo-homepage-image.jpg";

const BackgroundImage = ({ children }) => {
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
