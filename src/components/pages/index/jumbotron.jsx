import clsx from "clsx";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";
import { BsArrowRightShort, BsCheckCircle } from "react-icons/bs";
import Waves from "../../../assets/waves.inline.svg";
import { socials } from "../../../utils/helpers";

const tagwords = ["Creative", "Efficient", "Driven"];

const Jumbotron = React.forwardRef(({ profileImg }, ref) => {
  return (
    <article
      itemScope
      itemType="http://schema.org/Author"
      className={clsx("flex", "items-center", "min-h-screen")}
      ref={ref}>
      <div className={clsx("relative", "w-full")}>
        <div
          className={clsx(
            "flex",
            "flex-col",
            "justify-between",
            "px-12",
            "max-w-screen-2xl",
            "mx-auto",
          )}>
          <div className={clsx("z-10", "mb-8", "md:mb-4")}>
            <h1
              itemProp="name"
              id="RaviAnand Mohabir"
              className={clsx(
                "text-4xl",
                "md:text-6xl",
                "font-bold",
                "font-title",
                "bg-clip-text",
                "text-transparent",
                "bg-gradient-to-b",
                "from-red-600",
                "to-orange-500",
                "mb-4",
              )}>
              RaviAnand Mohabir
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 75 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className={clsx(
                "inline-block",
                "p-6",
                "rounded",
                "shadow-xl",
                "max-w-7xl",
                "bg-navy-700",
              )}>
              <p className={clsx("mb-2")}>
                I am a software engineer based in Switzerland, with experience
                in frontend frameworks and backend development.
              </p>
              <Link to="/contact" className={clsx("float-right")}>
                Contact Me{" "}
                <BsArrowRightShort
                  className={clsx("inline", "animate-bounce-x")}
                />
              </Link>
            </motion.div>
          </div>
          <div
            className={clsx(
              "w-full",
              "md:w-3/4",
              "mx-auto",
              "z-10",
              "flex",
              "flex-col-reverse",
              "md:flex-row",
              "justify-evenly",
              "px-4",
            )}>
            <motion.div
              className={clsx("w-full", "max-w-md", "pr-4")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }}>
              <Img
                className={clsx("w-full", "shadow")}
                fluid={profileImg?.childImageSharp.fluid}
                alt="RaviAnand Mohabir"
              />
            </motion.div>
            <div
              className={clsx(
                "flex",
                "justify-evenly",
                "flex-col",
                "text-2xl",
                "items-end",
              )}>
              <motion.ul
                className={clsx("text-right", "md:text-left")}
                transition={{ staggerChildren: 0.07 }}
                initial="hidden"
                animate="show">
                {tagwords.map((tagword) => (
                  <motion.li
                    key={tagword}
                    className={clsx("mb-4")}
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
                    <BsCheckCircle className={clsx("inline", "mr-2")} />
                    {tagword}
                  </motion.li>
                ))}
              </motion.ul>
              <ul className={clsx("text-right", "md:text-left")}>
                {["github", "linkedIn"].map((social) => (
                  <li className={clsx("mb-4")}>
                    <a
                      key={social}
                      href={socials[social].url}
                      target="_blank"
                      className={clsx(
                        "transition-colors",
                        "hover:text-orange-500",
                      )}>
                      {React.createElement(socials[social].icon, {
                        className: clsx("inline", "mr-2"),
                      })}
                      {socials[social].name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={clsx(
              "absolute",
              "bottom-0",
              "right-0",
              "left-0",
              "w-full",
            )}>
            <Waves
              className={clsx("text-navy-600", "fill-current", "w-full")}
            />
          </div>
        </div>
      </div>
    </article>
  );
});

export default Jumbotron;
