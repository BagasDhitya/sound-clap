import React, { FC } from "react";

interface Card {
  id: string | number;
  image?: string;
  title?: string;
  subtitle?: string;
}

const Card: FC<Card> = ({ id, image, title, subtitle }) => {
  return (
    <div className="card card-side bg-white" key={id}>
      <figure>
        <img src={image} className="w-40 h-40 rounded-md ml-5" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{subtitle}</p>
        <div className="card-actions mt-10">
          <button className="bg-orange-clap text-white">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
