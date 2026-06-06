import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const user = JSON.parse(
  localStorage.getItem("user")
);
  const [stats, setStats] = useState({
  totalScans: 0,
  savedLessons: 0,
  quizzesGenerated: 0,
});

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/";
};

useEffect(() => {

  const fetchStats = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/ai/dashboard-stats"
      );

      setStats(response.data);

    } catch (error) {

      console.error(error);

    }
  };

  fetchStats();

}, []);
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 py-8">

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          My Profile
        </h1>

        <p className="text-gray-400 mt-3">
          Manage your STEMVerse AI account
        </p>

      </div>

      {/* Profile Card */}
       
       <button
  onClick={() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  }}
  className="
    mt-6
    bg-red-500
    px-5
    py-2
    rounded-lg
  "
>
  Logout
</button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        p-8
        "
      >

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Avatar */}
          <div
            className="
            w-32
            h-32
            rounded-full
            bg-cyan-500
            flex
            items-center
            justify-center
            text-5xl
            "
          >
            👨‍💻
          </div>

          {/* User Details */}
          <div>

            <h2 className="text-3xl font-bold">
               {user?.name || "STEMVerse User"}
            </h2>

            <p className="text-gray-400 mt-2">
                {user?.email}
            </p>

            <p className="text-gray-400 mt-2">
               B.E Computer Science Engineering
            </p>

            <p className="text-gray-400">
              Jaya Engineering College
            </p>

            <p className="text-gray-400">
              STEMVerse AI Creator
            </p>

          </div>

        </div>

      </motion.div>

      {/* Statistics */}
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
        mt-10
        "
      >

        <div className="bg-zinc-900 rounded-2xl p-6">
          <h3 className="text-cyan-400 text-4xl font-bold">
            {stats.totalScans}
          </h3>

          <p className="text-gray-400 mt-2">
            Total Scans
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <h3 className="text-cyan-400 text-4xl font-bold">
            {stats.savedLessons}
          </h3>

          <p className="text-gray-400 mt-2">
            Saved Lessons
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <h3 className="text-cyan-400 text-4xl font-bold">
            {stats.quizzesGenerated}
          </h3>

          <p className="text-gray-400 mt-2">
            Quizzes Generated
          </p>
        </div>

      </div>
      
      {/* About */}
      <div
        className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        p-8
        mt-10
        "
      >

        <h2 className="text-2xl font-bold mb-4">
          About
        </h2>

        <p className="text-gray-300 leading-8">
          Passionate about Artificial Intelligence,
          STEM Education and innovative technologies.
          STEMVerse AI was created to help students
          understand science through real-world
          objects using AI-powered explanations,
          quizzes and learning paths.
        </p>

      </div>

    </div>
  );
}

export default Profile;