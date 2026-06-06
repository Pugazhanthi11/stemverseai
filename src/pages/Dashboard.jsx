import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
  totalScans: 0,
  savedLessons: 0,
  quizzesGenerated: 0,
});

useEffect(() => {

  const fetchStats = async () => {

    try {

      const response = await axios.get(
        "https://stemverseai1.onrender.com/api/ai/dashboard-stats"
      );

      setStats(response.data);

    } catch (error) {

      console.error(error);

    }
  };

  fetchStats();

}, []);
  const cards = [
  {
    icon: "📷",
    title: "Camera Scan",
    description: "Scan real-world objects instantly",
    path: "/camera",
  },

  {
    icon: "🖼️",
    title: "Upload Image",
    description: "Upload any image for STEM analysis",
    path: "/upload",
  },

  {
    icon: "📚",
    title: "History",
    description: "View your previous scans",
    path: "/history",
  },

  {
    icon: "👤",
    title: "Profile",
    description: "Manage your account",
    path: "/profile",
  },
];

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-10">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          STEMVerse AI
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Welcome Back 👋
        </p>

        <p className="text-gray-500">
          Ready to explore STEM concepts today?
        </p>
      </div>

      {/* Banner */}
      <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 mb-12">
        <h2 className="text-3xl font-bold">
          Turn Any Object Into A STEM Lesson
        </h2>

        <p className="text-gray-400 mt-4">
          Scan, upload and learn science using AI.
        </p>

        <button
  onClick={() => navigate("/upload")}
  className="
  mt-6
  bg-cyan-500
  px-6
  py-3
  rounded-xl
  font-semibold
  hover:bg-cyan-600
"
>
  Start Learning
</button>
      </div>

      {/* Quick Actions */}
      <h2 className="text-3xl font-bold mb-8">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {cards.map((card, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(card.path)}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            className="bg-zinc-900 border border-zinc-800 hover:border-cyan-400 rounded-2xl p-8 cursor-pointer transition-all"
          >
            <div className="text-6xl">
              {card.icon}
            </div>

            <h3 className="text-2xl font-semibold mt-4">
              {card.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {card.description}
            </p>
          </motion.div>
        ))}

      </div>

      {/* Statistics */}
      <div className="mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Quick Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-2xl p-6">
            <h3 className="text-cyan-400 text-5xl font-bold">
              {stats.totalScans}
            </h3>

            <p className="text-gray-400 mt-2">
              Total Scans
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <h3 className="text-cyan-400 text-5xl font-bold">
              {stats.savedLessons}  
            </h3>

            <p className="text-gray-400 mt-2">
              Saved Lessons
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <h3 className="text-cyan-400 text-5xl font-bold">
              {stats.quizzesGenerated}
            </h3>

            <p className="text-gray-400 mt-2">
              Quizzes Generated
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;
