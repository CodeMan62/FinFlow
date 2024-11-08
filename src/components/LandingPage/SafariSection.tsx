import React from "react";
import Safari from "../ui/safari";
import myImage from "./test.jpg";

const SafariSection = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto px-4 mt-10 mb-14">
      <p className="text-4xl mb-9 text-center bg-gradient-to-t from-white to-orange-400 text-transparent bg-clip-text font-bold">
        Take a look!
      </p>
      <div className="md:w-[1000px] lg:w-[1300px] flex items-center justify-center mx-auto">
        <Safari
          url="https://FinFlow.com/dashboard"
          className="size-full dark"
          src="https://i.postimg.cc/90LvBpCs/Only-Dashboard-1.jpg"
        />
      </div>
    </div>
  );
};

export default SafariSection;
