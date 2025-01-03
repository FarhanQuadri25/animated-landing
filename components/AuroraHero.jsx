"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "motion/react";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

const AuroraHero = () => {
  const COLORS = ["#13FFAA", "#524dff", "#df2482", "#DD335C"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#020617 50%,${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen  place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative flex flex-col z-10 items-center">
        <span className="mb-1.5 font-poppins font-semibold inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          New Landing Page
        </span>
        <h1 className="max-w-5xl bg-gradient-to-br font-poppins from-white to-gray-400 bg-clip-text text-center text-6xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-8xl md:leading-tight">
          This is a Analyzing App
        </h1>
        <p className="my-6 max-w-xl font-poppins text-center font-normal  text-base leading-relaxed md:text-lg md:leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          eligendi consequatur excepturi, nostrum similique dolor suscipit et a
          magnam repudiandae laborum, unde itaque sapiente ad fugiat expedita.
          Eligendi, eum maxime?
        </p>
        <motion.button
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          style={{ border, boxShadow }}
          className="flex rounded-3xl justify-center group relative font-poppins font-bold items-center hover:bg-gray-950/50 px-4 py-2"
        >
          Start Free Trial{" "}
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default AuroraHero;
