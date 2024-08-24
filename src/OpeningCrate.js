import React from "react";

import { motion } from "framer-motion";
import "./App.css";
import closedCrate from "./assets/closed-wooden-crate-Photoroom.png";
import openCrate from "./assets/open-wooden-crate-Photoroom.png";
import star from "./assets/simple-star-Photoroom.png";

const AnimatedBox = () => {
  return (
    <div style={{ position: "relative", width: "300px", height: "300px" }}>
      <motion.img
        src={closedCrate}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
      />

      <motion.img
        src={openCrate}
        alt="Open Box"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />

      {/* <motion.img
        src={star}
        alt="Object"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "50px",
          height: "50px",
          transform: "translate(-50%, -50%)",
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: -100, opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
      /> */}
    </div>
  );
};

export default AnimatedBox;
