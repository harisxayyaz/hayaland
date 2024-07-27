import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  item1: string;
  item2: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, item1, item2 }) => {
  return (
    <div className="flex flex-col bg-black w-80 items-center text-white py-4 rounded-2xl">
      <h1 className=" text-center">{title}</h1>
      <img className='h-60 w-60' src={imageUrl} alt="" />

      <div className="flex justify-between px-6 gap-4 pb-5 ">
        <div className="flex flex-col items-center">
          <img
            className="h-[60px] w-[60px]"
            src="./hayaland-icons/4.svg"
            alt=""
          />
          <button className=" border-2 border-white w-32 h-10 rounded-xl hover:bg-white hover:text-black">
            {item1}
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="h-[60px] w-[60px]"
            src="./hayaland-icons/3.svg"
            alt=""
          />
          <button className=" border-2 border-white w-32 h-10 rounded-xl hover:bg-white hover:text-black">
            {item2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
