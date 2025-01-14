import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  item1: string;
  item2: string;
  icon1:string;
  icon2: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, item1, item2, icon1, icon2 }) => {
  return (
    <div className="flex flex-col bg-black lg:w-[340px] w-[300px]   items-center text-white py-4 rounded-2xl cursor-pointer hover:shadow-lg hover:scale-105 transition duration-200">
      <h1 className=" text-center">{title}</h1>
      <img className="h-60 w-60" src={imageUrl} alt="" />

      <div className="flex justify-between px-6 gap-4 pb-5 ">
        <div className="flex flex-col items-center">
          <img className="h-[60px] w-[60px]" src={icon1} alt="" />
          <button className=" border-2 border-white w-32 h-10 rounded-xl hover:bg-white hover:text-black">
            {item1}
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img className="h-[60px] w-[60px]" src={icon2} alt="" />
          <button className=" border-2 border-white w-32 h-10 rounded-xl hover:bg-white hover:text-black">
            {item2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
