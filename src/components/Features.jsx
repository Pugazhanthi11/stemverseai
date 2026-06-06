import { motion } from "framer-motion";

const features = [
  {
    icon: "📷",
    title: "Camera Scan",
    desc: "Scan real-world objects instantly."
  },
  {
    icon: "🖼",
    title: "Upload Image",
    desc: "Upload any image for STEM analysis."
  },
  
  {
    icon: "📚",
    title: "History",
    desc: "Track all previous scans."
  },
  {
    icon: "📝",
    title: "Quiz Generator",
    desc: "Test your knowledge instantly."
  },
  {
    icon: "⭐",
    title: "Saved Lessons",
    desc: "Bookmark lessons for later."
  }
];

function Features() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24">

      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
        Features
      </h2>

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        "
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="
            bg-zinc-900
            p-8
            rounded-2xl
            border
            border-zinc-800
            "
          >
            <div className="text-5xl">
              {feature.icon}
            </div>

            <h3 className="mt-4 text-2xl font-semibold">
              {feature.title}
            </h3>

            <p className="mt-3 text-gray-400">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Features;