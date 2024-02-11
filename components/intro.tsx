"use client";
import Image from "next/image";
import pic from "@/public/link pic(2).jpg";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  const [hello, setHello] = useState(false);

  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={pic}
              alt="Prathmesh Portrait"
              quality="95"
              priority={true}
              className=" h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl sm:h-36 sm:w-36"
            />
          </motion.div>

          <motion.div
            whileHover={{ rotate: 30 }}
            whileTap={{
              scaleY: 0.8,
              rotate: 30,
              borderRadius: "100%",
            }}
            onMouseEnter={() => setHello(true)}
            onMouseLeave={() => setHello(false)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <span className=" absolute bottom-0 right-0 text-4xl sm:text-5xl ">
              👋
            </span>
          </motion.div>
          {hello ? (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={`absolute bottom-20 right-[-1rem] sm:top-[-1.5rem] sm:right-[-1.9rem]`}
            >
              <h1 className="text-hello text-xl sm:text-4xl">Hello!</h1>
            </motion.div>
          ) : null}
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Prathmesh.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3+ years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">Frontend/React</span>.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-center justify-center sm:flex-row gap-3 px-4 text-md font-medium"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3  flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition border border-black/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/prathmesh-temkar/"
          target="_blank"
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full text-lg outline-none focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Prathmesh-temkar"
          target="_blank"
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full text-lg outline-none focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition border border-black/10"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
