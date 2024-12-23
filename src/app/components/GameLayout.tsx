import React, { useState } from "react";
import Card from "./Card";

const GameLayout = () => {
  const [selectedCard, setselectedCard] = useState<number | null>(null);
  const noOfCards = 16;
  const handleClicked = (id: number) => {
    setselectedCard((prevSelected) => (prevSelected === id ? null : id));
  };

 
  return (
    <>
      <h1 className="text-xl font-bold text-blue-600">Cards Game</h1>

      <div className="grid grid-cols-4 gap-5">
    
        {Array.from({ length: noOfCards }).map((_, index) => (
          <Card
            isSelected={selectedCard === index}
            handleClicked={handleClicked}
            key={index}
            id={index}
          />
        ))}
      </div>
    </>
  );
};

export default GameLayout;
 