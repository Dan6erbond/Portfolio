import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import "./scroll-down.scss";

const ScrollDown = ({ targetRef, label }) => {
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

  return (
    <div className="scroll-down">
      <motion.button
        onClick={() => scrollToRef(targetRef)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faArrowAltCircleDown} />
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
