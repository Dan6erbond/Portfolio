import clsx from "clsx";
import * as React from "react";
import ProgressRing from "../../progress-ring";

const Language = ({ children, progress, flag: Flag, centerFlag = false }) => (
  <div className={clsx("flex", "items-center")}>
    <div
      style={{ height: 120, width: 120 }}
      className={clsx("relative", "mr-4")}>
      <div className={clsx("absolute", "z-10")}>
        <ProgressRing progress={progress} className={clsx("text-navy-600")} />
      </div>
      <div
        className={clsx("rounded-full", "overflow-hidden", "relative")}
        style={{
          height: 90,
          width: 90,
          marginLeft: 15,
          marginTop: 15,
        }}>
        <Flag
          className={clsx(
            "absolute",
            "h-full",
            "w-auto",
            centerFlag && ["left-1/2", "transform", "-translate-x-1/2"],
          )}
        />
      </div>
    </div>
    <div>{children}</div>
  </div>
);

export default Language;
