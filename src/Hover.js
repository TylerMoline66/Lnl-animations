import { motion } from "framer-motion";
import "./App.css";

const HoverButton = () => {
  return (
    <div className="hello">
      <motion.button
        className="button"
        whileHover={{ scale: 1.2, backgroundColor: "#ff6347" }}
        transition={{ type: "spring", stiffness: 1000 }}
      >
        Hover Me
      </motion.button>
    </div>
  );
};

export default HoverButton;
