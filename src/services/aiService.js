import axios from "axios";

const API = "https://stemverseai1.onrender.com/api/ai";

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
