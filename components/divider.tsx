"use client";
import React from "react";
import { motion } from "framer-motion";

const Divider = () => {
  return (
    <motion.div className=" bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block"></motion.div>
  );
};

export default Divider;
