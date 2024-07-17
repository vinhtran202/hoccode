import React, { useState } from "react";
import { X, Plus } from "react-feather";

export default function CardAdd({ cardData, ind }) {
  const [card, setCard] = useState("");
  const [show, setShow] = useState(false);

  const saveCard = () => {
    if (!card) {
      return;
    }
    cardData(card, ind);
    setCard("");
    setShow(false);
  };

  const closeBtn = () => {
    setCard("");
    setShow(false);
  };

  return (
    <div>
      <div className="flex flex-col">
        {show && (
          <div>
            <textarea
              value={card}
              onChange={(e) => setCard(e.target.value)}
              className="p-1 w-full rounded-md border-2 bg-zinc-700 border-zinc-900"
              name=""
              id=""
              cols="30"
              rows="2"
              placeholder="Enter a title for this card"
            ></textarea>
            <div className="flex p-1">
              <button
                onClick={saveCard}
                className="bg-sky-600 rounded p-1 text-white mr-2"
              >
                Add Card
              </button>
              <button
                onClick={closeBtn}
                className="hover:bg-gray-600 rounded p-1"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}
        {!show && (
          <button
            onClick={() => setShow(true)}
            className="flex p-1 w-full justify-start rounded items-center mt-1 hover:bg-gray-500 h-8"
          >
            <Plus size={16} />
            Add a Card
          </button>
        )}
      </div>
    </div>
  );
}
