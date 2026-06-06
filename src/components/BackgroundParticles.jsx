import { motion } from "framer-motion";

function BackgroundParticles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="
        absolute
        top-20
        left-20
        w-96
        h-96
        bg-cyan-500/20
        rounded-full
        blur-3xl
        "
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
        className="
        absolute
        top-1/3
        right-20
        w-[500px]
        h-[500px]
        bg-blue-500/20
        rounded-full
        blur-3xl
        "
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, -70, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-10
        left-1/2
        w-[400px]
        h-[400px]
        bg-purple-500/20
        rounded-full
        blur-3xl
        "
      />

      <motion.div
  animate={{
    x: [0, 120, 0],
    y: [0, -80, 0],
  }}
  transition={{
    duration: 35,
    repeat: Infinity,
  }}
  className="
  absolute
  top-[40%]
  left-[30%]
  w-[600px]
  h-[600px]
  bg-cyan-500/10
  rounded-full
  blur-3xl
  "
/>

      {/* Large STEM Icons */}

<div className="absolute top-10 left-[8%] text-cyan-400/40 text-8xl">
  ⚛️
</div>

<div className="absolute top-[15%] right-[12%] text-blue-400/40 text-8xl">
  🧬
</div>

<div className="absolute top-[40%] left-[5%] text-purple-400/40 text-7xl">
  🔬
</div>

<div className="absolute top-[55%] right-[8%] text-cyan-400/40 text-7xl">
  🧪
</div>

<div className="absolute top-[75%] left-[15%] text-blue-400/40 text-8xl">
  📡
</div>

<div className="absolute top-[25%] left-[35%] text-cyan-400/30 text-6xl">
  ⚙️
</div>

<div className="absolute top-[60%] right-[35%] text-purple-400/30 text-6xl">
  💡
</div>

<div className="absolute top-[80%] right-[18%] text-cyan-400/30 text-6xl">
  🔭
</div>

<div className="absolute top-[35%] right-[45%] text-blue-400/30 text-6xl">
  📐
</div>

<div className="absolute top-[12%] left-[45%] text-purple-400/30 text-6xl">
  🧲
</div>

    </div>
  );
}

export default BackgroundParticles;