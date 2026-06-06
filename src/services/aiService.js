import axios from "axios";

const API = "http://localhost:5000/api/ai";

export const analyzeImage = async (imageFile) => {
  const formData = new FormData();

  formData.append("image", imageFile);

  const response = await axios.post(
    `${API}/analyze-image`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};