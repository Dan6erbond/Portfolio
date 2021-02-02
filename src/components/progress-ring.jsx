import { motion } from "framer-motion";
import * as React from "react";

const ProgressRing = React.memo(
  ({
    size = 120,
    stroke = "currentColor",
    strokeWidth = 4,
    progress,
    ...props
  }) => {
    const radius = size / 2 - strokeWidth * 2;
    const circumference = radius * 2 * Math.PI;

    return (
      <svg height={size} width={size} {...props}>
        <motion.circle
          stroke={stroke}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
          initial={{
            strokeDashoffset: circumference,
          }}
          animate={{
            strokeDashoffset: circumference - progress * circumference,
          }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        />
      </svg>
    );
  },
);

export default ProgressRing;
