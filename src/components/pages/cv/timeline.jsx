import clsx from "clsx";
import { motion } from "framer-motion";
import * as React from "react";
import { BsFillCalendarFill } from "react-icons/bs";

const TimelineElement = ({ title, index, children, subtitle }) => (
  <motion.div
    className={clsx(
      "mb-8",
      "flex",
      "justify-between",
      "items-center",
      "w-full",
    )}>
    <motion.div
      className={clsx(
        "z-20",
        "flex",
        "items-center",
        "order-1",
        "bg-gray-800",
        "shadow-xl",
        "w-8",
        "h-8",
        "rounded-full",
      )}
      variants={{
        hidden: {
          y: -100,
          transition: {
            y: { stiffness: 1000, velocity: 500 },
          },
        },
        show: {
          y: 0,
          transition: {
            y: { stiffness: 1000 },
          },
        },
      }}>
      <span
        className={clsx("mx-auto", "font-semibold", "text-lg", "text-white")}>
        {index}
      </span>
    </motion.div>
    <motion.div
      className={clsx(
        "order-1",
        "bg-navy-600",
        "rounded-lg",
        "shadow-xl",
        "w-10/12",
        "px-6",
        "py-4",
      )}
      variants={{
        hidden: {
          opacity: 0,
          y: 25,
          transition: {
            y: { stiffness: 1000, velocity: -100 },
          },
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            y: { stiffness: 1000 },
          },
        },
      }}>
      <h3 className={clsx("mb-2", "font-bold", "text-gray-300", "text-xl")}>
        {title}
      </h3>
      {subtitle && (
        <h4 className={clsx("text-gray-300", "mb-4")}>{subtitle}</h4>
      )}
      <div className={clsx("text-gray-400")}>{children}</div>
    </motion.div>
  </motion.div>
);

const values = [
  {
    title: "BlueMouse GmbH",
    subtitle: "Internship",
    date: "August 2020 - August 2021",
  },
  {
    title: "IMS Aarau",
    subtitle: "Computing College",
    text:
      "Studying at the Computing College in Aarau with a focus on software development and economics.",
    date: "2017 - 2021",
  },
  {
    title: "Montpellier, France",
    subtitle: "Language Stay",
    date: "September 2020",
  },
  {
    title: "Bezirksschule Zofingen",
    subtitle: "Junior High School",
    text:
      "Studied at the Junior High School in Zofingen at which I initially dipped my feet into programming and coded a game with Unity & C#.",
    date: "2013 - 2017",
  },
  {
    title: "Quartierschule Mühlethal",
    subtitle: "Primary School",
    text: "Visited the primary school in Mühlethal and skipped the 5th grade.",
    date: "2009 - 2013",
  },
];

const Timeline = () => {
  return (
    <div className={clsx("container", "mx-auto", "w-full", "h-full")}>
      <div
        className={clsx(
          "relative",
          "wrap",
          "overflow-hidden",
          "p-10",
          "pb-2",
          "h-full",
        )}>
        <motion.div
          className={clsx(
            "absolute",
            "border-opacity-20",
            "border-gray-700",
            "h-full",
            "border",
            "left-14",
          )}
          transition={{ staggerChildren: 0.07 }}
          initial="hidden"
          animate="show"
        />
        {values.map((v, i) => (
          <TimelineElement index={i + 1} key={v.title} {...v}>
            <p>{v.text}</p>
            <div className={clsx("flex", "flex-row", "items-center", "mt-4")}>
              <BsFillCalendarFill className={clsx("mr-4")} />
              <span>{v.date}</span>
            </div>
          </TimelineElement>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
