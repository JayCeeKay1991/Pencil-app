import "./Loading.css";
import React from "react";
import Lottie from "react-lottie";
import animationData from "./logo-animation.json";
import animationTwoData from "./logo-animation 2.json";
import { motion, AnimatePresence } from "framer-motion";

export function Loading() {

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

  return (
    <AnimatePresence>
      <motion.div
        className="loading"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="load-wrap">
          <Lottie options={defaultOptions} height={600} width={600} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};