import React, { useState } from "react";

interface TCard {
  id: number;
  isSelected: boolean;
  handleClicked: (id: number) => void;
}

const Card: React.FC<TCard> = ({ id, isSelected, handleClicked }) => {
  return (
    <div
      className={`w-[240px] h-[240px] ${
        isSelected ? "bg-green-400" : "bg-blue-300"
      } border-2 rounded-lg  border-green-500`}
      onClick={() => handleClicked(id)}
    ></div>
  );
};

export default Card;
