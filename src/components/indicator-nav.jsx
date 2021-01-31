import clsx from "clsx";
import { AnimateSharedLayout, motion } from "framer-motion";
import * as React from "react";

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const Indicator = ({ id, activeId }) =>
  activeId === id ? (
    <motion.div
      className={clsx(
        "transition-colors",
        "inline-block",
        "rounded-full",
        "h-4",
        "w-4",
        "p-1",
        "border-2",
        "border-orange-400",
        "mr-4",
      )}
      layoutId="indicator"
      transition={spring}>
      <div
        className={clsx(
          "transition-colors",
          "rounded-full",
          "h-full",
          "w-full",
          "bg-orange-400",
        )}></div>
    </motion.div>
  ) : (
    <div className={clsx("h-4", "w-4", "p-1", "mr-4")} />
  );

const IndicatorNav = ({
  items,
  activeItemId,
  className,
  breakpoint = "md",
}) => (
  <div
    className={clsx(
      "hidden",
      `${breakpoint}:flex`,
      "pr-12",
      "justify-center",
      "flex-col",
      className,
    )}>
    <AnimateSharedLayout>
      {items.map(({ text, id }) => (
        <div key={id} className={clsx("mb-12", "flex", "items-center")}>
          <Indicator id={id} activeId={activeItemId} />
          {text}
        </div>
      ))}
    </AnimateSharedLayout>
  </div>
);

export default IndicatorNav;
