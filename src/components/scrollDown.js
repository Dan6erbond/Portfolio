import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import "./scrollDown.scss";

const ScrollDown = ({ targetRef, label }) => {
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 80);

  return (
    <div className="scroll-down">
      <motion.button
        onClick={() => scrollToRef(targetRef)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowAltCircleDown />
      </motion.button>
      <span>{label}</span>
    </div>
  );
};

ScrollDown.propTypes = {
  targetRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  label: PropTypes.string,
};

export default ScrollDown;
