"use client";
import { motion, MotionConfig } from "motion/react";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiFunimation, SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { twMerge } from "tailwind-merge";

export default function Bento() {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <div className="mx-auto max-w-4xl grid grid-cols-12 gap-4 grid-flow-dense">
        <HeaderBlock />
        <SocialBlock />
        <AboutBlock />
      </div>
    </div>
  );
}

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      className={twMerge(
        `col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6`,
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => {
  return (
    <Block className={twMerge(`col-span-12 row-span-2 md:col-span-6`)}>
      <img
        src="https://api.dicebear.com/9.x/micah/svg?seed=Aiden"
        alt="avatar"
        className="mb-4 size-14 rounded-full"
      />
      <h1 className="mb-12 text-4xl font-medium font-inter leading-tight">
        Hi,I'm Farhan Quadri.
        <span className="text-zinc-400">
          I Build Cool website like this one
        </span>
      </h1>
      <a
        href="#"
        className="flex items-center text-red-300 font-inter hover:underline"
      >
        Contact Me <FiArrowRight />
      </a>
    </Block>
  );
};

const SocialBlock = () => {
  return (
    <>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className={twMerge(`col-span-6 bg-blue-500 md:col-span-3`)}
      >
        <a
          href="#"
          className="grid place-content-center h-full text-3xl text-white"
        >
          <SiLinkedin />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className={twMerge(`col-span-6 bg-green-500 md:col-span-3`)}
      >
        <a
          href="#"
          className="grid place-content-center h-full text-3xl text-zinc-800"
        >
          <SiGithub />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className={twMerge(`col-span-6 bg-zinc-50 md:col-span-3`)}
      >
        <a
          href="#"
          className="grid place-content-center h-full text-3xl text-zinc-800"
        >
          <SiFunimation />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className={twMerge(`col-span-6 bg-red-500 md:col-span-3`)}
      >
        <a
          href="#"
          className="grid place-content-center h-full text-3xl text-white"
        >
          <SiGmail />
        </a>
      </Block>
    </>
  );
};

const AboutBlock = () => {
  return (
    <Block className={`col-span-12 text-3xl leading-snug`}>
      <p className="font-poppins font-semibold ">
        My Passion is building cool stuff.
        <span className="text-zinc-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
          veritatis qui! Fugiat minus repellat accusantium magnam est, quidem
          vel natus modi voluptas? Qui quo nesciunt modi optio exercitationem
          error magni.
        </span>
      </p>
    </Block>
  );
};
