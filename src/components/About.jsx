import { motion } from "framer-motion";

function About() {
  return (
    <section
      className="
      px-6
      md:px-12
      lg:px-20
      py-24
      bg-zinc-950
      "
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
        text-3xl
        md:text-5xl
        font-bold
        text-center
        mb-16
        "
      >
        Meet The Creator
      </motion.h2>

      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-12
        items-center
        "
      >
        {/* Left */}
        <div className="flex justify-center">

          <div
            className="
            w-60
            h-60
            md:w-80
            md:h-80
            rounded-full
            bg-cyan-500/20
            border
            border-cyan-400
            flex
            items-center
            justify-center
            text-8xl
            "
          >
            👨‍💻
          </div>

        </div>

        {/* Right */}
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

          <p className="mt-6 text-gray-300 leading-8">
            Passionate about Artificial Intelligence,
            STEM Education and innovative technology.
            STEMVerse AI was created to help students
            understand science through real-world objects
            using AI-powered image recognition and
            interactive explanations.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;