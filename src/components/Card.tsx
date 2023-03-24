import React, { FC } from "react";

interface Card {
  id: string | number;
  image?: string;
  title?: string;
}

const Card: FC<Card> = ({ id, image, title }) => {
  return (
    <div className="card card-side bg-white shadow-xl" key={id}>
      <figure>
        <img src={image} className="w-40 h-40 rounded-md ml-10" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
