import axios from "axios";

const API_URL = "https://api-todo-ebon.vercel.app/api/v1";

const getApiKey = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/api-key?email=${email}`);
    return response.data.data.apiKey;
  } catch (error) {
    console.error("Error getting API key:", error);
    throw error;
  }
};

export { getApiKey };
