export const profileRequest = async (token) => {
  const response = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    return false;
  }
  return response.json();
};
