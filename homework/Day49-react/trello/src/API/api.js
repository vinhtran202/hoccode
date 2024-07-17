// api.js
const API_BASE_URL = "https://api-exercise-trello.vercel.app/api/v1";

export const createCard = async (listId, card) => {
  const response = await fetch(`${API_BASE_URL}/cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ listId, ...card }),
  });
  return response.json();
};

export const updateCard = async (cardId, card) => {
  const response = await fetch(`${API_BASE_URL}/cards/${cardId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });
  return response.json();
};

export const deleteCard = async (cardId) => {
  const response = await fetch(`${API_BASE_URL}/cards/${cardId}`, {
    method: "DELETE",
  });
  return response.json();
};
