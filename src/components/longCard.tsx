import React from "react";

interface CardProps {
  imageUrl: string;
  text1: string;
  text2: string;
}

const LongCard: React.FC<CardProps> = ({ imageUrl, text1, text2 }) => {
  return (
    <div className="flex flex-col w-[260px] h-[400px] text-black py-4 rounded-3xl cursor-pointer hover:shadow-lg hover:scale-105 transition duration-200">
      <div className=" flex h-[50%] bg-black rounded-t-2xl justify-center items-center">
        <img className="h-[130px] w-[130px]" src={imageUrl} alt="" />
      </div>
      <div className="flex flex-col justify-evenly h-[50%] bg-gray-200 rounded-b-2xl text-center px-4">
        <p className=" font-bold">{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default LongCard;
