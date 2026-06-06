import { analyzeImage } from "../services/aiService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ImageUpload() {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleAnalyze = async () => {
  if (!imageFile) {
    alert("Please upload an image first");
    return;
  }

  try {
    setLoading(true);

    const result = await analyzeImage(imageFile);

    console.log(result);

    navigate("/result", {
  state: {
    analysis: result.result,
    image: selectedImage,
    scanId: result.scanId,
  },
});

  } catch (error) {

    console.error(error);

    alert("Analysis Failed");

  } finally {

    setLoading(false);

  }
};

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 py-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          Upload Image
        </h1>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-10">
          Upload any object image and let STEMVerse AI generate STEM concepts,
          explanations and learning content.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Upload Section */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8">

            <h2 className="text-2xl font-semibold mb-6">
              Select Image
            </h2>

            <label
              className="
              flex
              flex-col
              items-center
              justify-center
              w-full
              h-64
              border-2
              border-dashed
              border-cyan-500
              rounded-2xl
              cursor-pointer
              hover:bg-zinc-800
              transition
            "
            >
              <span className="text-5xl mb-3">
                🖼️
              </span>

              <span className="text-gray-300 text-center px-4">
                Click to Upload Image
              </span>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="
              mt-6
              w-full
              bg-cyan-500
              hover:bg-cyan-600
              py-4
              rounded-xl
              font-semibold
              transition
            "
            >
              {loading
                ? "Analyzing..."
                : "Analyze Image"}
            </button>

          </div>

          {/* Preview Section */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8">

            <h2 className="text-2xl font-semibold mb-6">
              Preview
            </h2>

            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Preview"
                className="
                w-full
                max-h-[450px]
                object-cover
                rounded-2xl
                border
                border-cyan-500
              "
              />
            ) : (
              <div
                className="
                h-64
                md:h-[450px]
                flex
                items-center
                justify-center
                border
                border-zinc-700
                rounded-2xl
                text-gray-500
              "
              >
                No Image Selected
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ImageUpload;