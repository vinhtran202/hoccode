export const loginRequest = async (email, password) => {
  const apiUrl = import.meta.env.VITE_SERVER_POSTAPI;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return response.json();
};
