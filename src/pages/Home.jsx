
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundParticles from "../components/BackgroundParticles";
import { useRef, useState } from "react";

function Home() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

const aboutRef = useRef(null);
const featureRef = useRef(null);
const navigate = useNavigate();

const scrollToAbout = () => {
  aboutRef.current?.scrollIntoView({
    behavior: "smooth",
  });
};

const scrollToFeatures = () => {
  featureRef.current?.scrollIntoView({
    behavior: "smooth",
  });
};
  const features = [
  {
    icon: "📷",
    title: "Camera Scan",
    desc: "Scan real-world objects instantly.",
    path: "/camera",
  },

  {
    icon: "🖼️",
    title: "Upload Image",
    desc: "Upload any image for STEM analysis.",
    path: "/upload",
  },

  {
    icon: "📚",
    title: "History",
    desc: "Track all previous scans.",
    path: "/history",
  },

  {
    icon: "📝",
    title: "Quiz Generator",
    desc: "Test your knowledge instantly.",
    path: "/quiz",
  },

  {
  icon: "⭐",
  title: "Saved Lessons",
  path: "/saved-lessons",
},
];

  return (
  <div className="min-h-screen bg-black text-white overflow-x-hidden relative z-10">

    <BackgroundParticles />
      {/* Navbar */}
      <nav
      
  className="
  flex
  justify-between
  items-center
  px-6
  md:px-10
  py-6
  sticky
  top-0
  z-50
  "
>

  <h1 className="text-3xl font-bold text-cyan-400">
    STEMVerse AI
  </h1>

  {/* Desktop Navbar */}
  <div className="hidden md:flex items-center gap-8 text-lg">

  <button
    onClick={scrollToAbout}
    className="hover:text-cyan-400"
  >
    About
  </button>

  <button
    onClick={scrollToFeatures}
    className="hover:text-cyan-400"
  >
    Features
  </button>

  <button
    onClick={() => navigate("/dashboard")}
    className="hover:text-cyan-400"
  >
    Dashboard
  </button>

  <button
    onClick={() => navigate("/profile")}
    className="hover:text-cyan-400"
  >
    Profile
  </button>

  <button
    onClick={() => navigate("/login")}
    className="
      bg-cyan-500
      px-5
      py-2
      rounded-lg
      hover:bg-cyan-600
    "
  >
    Login
  </button>

</div>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-3xl"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? "✖" : "☰"}
  </button>

</nav>
{
  menuOpen && (
    <div
      className="
      md:hidden
      bg-zinc-900
      border-t
      border-zinc-800
      px-6
      py-5
      flex
      flex-col
      gap-4
      "
    >

      <button onClick={scrollToAbout}>
        About
      </button>

      <button onClick={scrollToFeatures}>
        Features
      </button>

      <button
  onClick={() => navigate("/dashboard")}
>
  Dashboard
</button>

<button
  onClick={() => navigate("/profile")}
>
  Profile
</button>

<button
  onClick={() => navigate("/login")}
>
  Login
</button>

      

    </div>
  )
}

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 md:px-12 lg:px-20 min-h-[85vh]">
        
        {/* Left */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            Turn Any Object
            <br />
            Into A STEM Lesson
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 mt-6 text-base sm:text-lg md:text-xl max-w-xl"
          >
            Learn science from anything around you using AI-powered
            object recognition, image upload and camera scanning.
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
  onClick={() => navigate("/register")}
  className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold"
>
              Get Started
            </button>

            <button
              onClick={() => setShowVideo(true)}
              className="
              border
              border-cyan-500
              hover:bg-cyan-500
              px-8
              py-3
              rounded-xl
              font-semibold"
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center order-first lg:order-last">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-cyan-500/10 border border-cyan-400 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.3)]"
          >
            <span className="text-6xl sm:text-7xl md:text-8xl">
              🌍
            </span>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="px-6 md:px-12 lg:px-20 py-24 bg-zinc-950"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Meet The Creator
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex justify-center">
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-8xl">
              👨‍💻
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">
              Pugazhanthi VK
            </h3>

            <p className="mt-4 text-gray-400 text-lg">
              B.E Computer Science Engineering
            </p>

            <p className="mt-2 text-gray-400 text-lg">
              Jaya Engineering College
            </p>

            <div className="mt-8 space-y-5 text-gray-300 leading-8">

  <p>
    STEMVerse AI was developed to transform
    everyday objects into interactive STEM lessons.
  </p>

  <p>
    Students often learn science theoretically
    without seeing how concepts work in the real world.
    STEMVerse AI bridges that gap using Artificial
    Intelligence and Computer Vision.
  </p>

  <p>
    By simply uploading an image or scanning an object,
    students instantly receive STEM concepts,
    explanations, applications and quizzes.
  </p>

  <p>
    Built using React, Node.js, Express,
    MongoDB and Google's Gemini AI.
  </p>

</div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featureRef}
        className="px-6 md:px-12 lg:px-20 py-24"
      >
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
          Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
  key={index}
  whileHover={{ scale: 1.05 }}
  onClick={() => navigate(feature.path)}
  className="
    bg-zinc-900
    p-8
    rounded-2xl
    border
    border-zinc-800
    cursor-pointer
    hover:border-cyan-400
    transition
  "
>
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-4 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
        {
  showVideo && (
    <div
      className="
      fixed
      inset-0
      bg-black/80
      flex
      justify-center
      items-center
      z-50
      px-4
      "
    >

      <div
        className="
        bg-zinc-900
        p-4
        rounded-2xl
        w-full
        max-w-4xl
        "
      >

        <button
          onClick={() => setShowVideo(false)}
          className="
          mb-4
          text-red-400
          hover:text-red-500
          "
        >
          Close
        </button>

        <video
          controls
          autoPlay
          className="w-full rounded-xl"
        >
          <source
            src="/demo.mp4"
            type="video/mp4"
          />
        </video>

      </div>

    </div>
  )
}
      </section>
    </div>
    
  );
}

export default Home;