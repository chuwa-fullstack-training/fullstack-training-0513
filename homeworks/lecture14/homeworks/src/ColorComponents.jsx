import React, { useState, useEffect } from "react";

const ColorComponents = () => {
  const initialCards = [
    { id: 1, name: "Card 1", color: "white" },
    { id: 2, name: "Card 2", color: "white" },
    { id: 3, name: "Card 3", color: "white" },
    { id: 4, name: "Card 4", color: "white" },
    { id: 5, name: "Card 5", color: "white" },
    { id: 6, name: "Card 6", color: "white" },
  ];
  const colors = ["red", "pink", "yellow"];
  const [cards, setCards] = useState(initialCards);
  const [selectedName, setSelectedName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleNameChange = (e) => {
    setSelectedName(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleCardNameChange = (id, newName) => {
    setCards(
      cards.map((card) => (card.id === id ? { ...card, name: newName } : card))
    );
  };

  useEffect(() => {
    if (selectedName && selectedColor) {
      setCards(
        cards.map((card) =>
          card.name === selectedName ? { ...card, color: selectedColor } : card
        )
      );
      setSelectedName("");
      setSelectedColor("");
    }
  }, [selectedName, selectedColor, cards]);

  return (
    <>
      <div className="row my-5 mx-5 justify-content-center">
        <label className="col-4">
          Choose name:
          <select value={selectedName} onChange={handleNameChange}>
            <option value="">Choose a name</option>
            {cards.map((card) => (
              <option key={card.id} value={card.name}>
                {card.name}
              </option>
            ))}
          </select>
        </label>
        <label className="col-4">
          Choose color:
          <select value={selectedColor} onChange={handleColorChange}>
            <option value="">Choose a color</option>
            {colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="row my-5 mx-5">
        {cards.map((card) => (
          <div className="col-4 px-2 py-2" key={card.id}>
            <div
              className="card"
              style={{
                backgroundColor: card.color,
              }}
            >
              <div className="card-body">
                <input
                  value={card.name}
                  onChange={(e) =>
                    handleCardNameChange(card.id, e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ColorComponents;
