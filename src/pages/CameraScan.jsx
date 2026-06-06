import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

function CameraScan() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraStarted, setCameraStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      videoRef.current.srcObject = stream;
      setCameraStarted(true);
    } catch (error) {
      console.error(error);
      alert("Unable to access camera");
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");

    context.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const imageData = canvas.toDataURL("image/png");

    setCapturedImage(imageData);
  };

  const retakePhoto = () => {
    setCapturedImage(null);
  };

  const handleAnalyze = async () => {
  try {

    if (!capturedImage) {
      alert("Capture an image first");
      return;
    }

    const blob = await fetch(capturedImage)
      .then((res) => res.blob());

    const formData = new FormData();

    formData.append(
      "image",
      blob,
      "camera-capture.png"
    );

    const response = await axios.post(
      "http://localhost:5000/api/ai/analyze-image",
      formData
    );

    navigate("/result", {
      state: {
        image: capturedImage,
        analysis: response.data.result,
      },
    });

  } catch (error) {

    console.error(error);

    alert("Analysis failed");

  }
};
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-10">

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Camera Scan
        </h1>

        <p className="text-gray-400 mt-3">
          Capture an object and analyze it using STEMVerse AI.
        </p>

      </div>

      {!cameraStarted && (
        <button
          onClick={startCamera}
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl mb-8"
        >
          Open Camera
        </button>
      )}

      {/* Camera + Preview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Camera */}
        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">

          <h2 className="text-2xl font-semibold mb-4">
            Live Camera
          </h2>

          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="
            w-full
            rounded-2xl
            border
            border-cyan-500
            "
          />

        </div>

        {/* Preview */}
        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">

          <h2 className="text-2xl font-semibold mb-4">
            Preview
          </h2>

          {capturedImage ? (
            <img
              src={capturedImage}
              alt="Captured"
              className="
              w-full
              rounded-2xl
              border
              border-cyan-500
              "
            />
          ) : (
            <div
              className="
              h-80
              flex
              items-center
              justify-center
              text-gray-500
              border
              border-dashed
              border-zinc-700
              rounded-2xl
              "
            >
              No image captured yet
            </div>
          )}

        </div>

      </div>

      {/* Buttons */}
      {cameraStarted && (
        <div className="flex flex-wrap gap-4 mt-8">

          <button
            onClick={capturePhoto}
            className="
            bg-green-500
            hover:bg-green-600
            px-6
            py-3
            rounded-xl
            font-semibold
            "
          >
            Capture Photo
          </button>

          <button
            onClick={retakePhoto}
            className="
            bg-yellow-500
            hover:bg-yellow-600
            px-6
            py-3
            rounded-xl
            font-semibold
            text-black
            "
          >
            Retake
          </button>

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="
            bg-cyan-500
            hover:bg-cyan-600
            px-6
            py-3
            rounded-xl
            font-semibold
            disabled:opacity-50
            "
            >
            {loading
            ? "Analyzing..."
            : "Analyze Image"}
          </button>
        </div>
      )}

      <canvas
        ref={canvasRef}
        style={{ display: "none" }}
      />

    </div>
  );
}

export default CameraScan;