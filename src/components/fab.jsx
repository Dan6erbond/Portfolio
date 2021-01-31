import clsx from "clsx";
import { motion } from "framer-motion";
import * as React from "react";

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const Fab = ({ className, children }) => {
  const [bottom, setBottom] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const windowSize = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const scrollDistance = window.pageYOffset;
      setBottom(bodyHeight - windowSize - scrollDistance + 16);
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  });

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: Math.min(-140 + bottom, 0) }}
      className={clsx(
        "h-16",
        "w-16",
        "rounded-full",
        "fixed",
        "bottom-24",
        "md:bottom-6",
        "right-4",
        "bg-gradient-to-br",
        "from-red-500",
        "to-orange-600",
        "transition-all",
        "hover:opacity-90",
        "flex",
        "justify-center",
        "items-center",
        "z-50",
        className,
      )}
      transition={spring}>
      {children}
    </motion.div>
  );
};

export default Fab;
