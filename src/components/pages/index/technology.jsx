import clsx from "clsx";
import { motion } from "framer-motion";
import Img from "gatsby-image";
import * as React from "react";
import { useInView } from "react-intersection-observer";

const Technology = ({
  logo,
  title,
  repositories,
  imgPos = "left",
  lang,
  description,
  proficiency,
}) => {
  const [ref, visible] = useInView();

  const lastRepositoryPushed = React.useMemo(
    () =>
      repositories.reduce(
        (acc, curr) =>
          acc
            ? new Date(acc.node.pushedAt) > new Date(curr.node.pushedAt)
              ? acc
              : curr
            : curr,
        null,
      ),
    [repositories],
  );

  const repositoryWithPrimary = React.useMemo(
    () =>
      repositories
        .sort((r1, r2) =>
          new Date(r1.node.pushedAt) > new Date(r2.node.pushedAt) ? -1 : 1,
        )
        .find((r) => r.node.primaryLanguage.name === lang),
    [repositories],
  );

  return (
    <motion.div
      className={clsx(
        "py-16",
        "px-8",
        "flex",
        {
          "flex-wrap": imgPos === "left",
          "flex-wrap-reverse": imgPos === "right",
        },
        "justify-between",
      )}
      ref={ref}
      initial={false}
      animate={visible ? "visible" : "hidden"}>
      {imgPos === "left" && (
        <motion.div
          className={clsx("p-8", "w-full", "md:w-1/3", "text-center")}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ ease: "easeInOut", duration: 1 }}>
          <Img
            className={clsx("shadow")}
            fixed={logo?.childImageSharp.fixed}
            alt={title}
          />
        </motion.div>
      )}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: imgPos === "left" ? 75 : -75 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className={clsx(
          "flex-full",
          "md:flex-1",
          "rounded",
          "shadow-lg",
          "p-8",
          "bg-navy-700",
        )}>
        <h3 className={clsx("text-2xl")}>{title}</h3>
        <br />
        {description && (
          <div className={clsx("text-gray-500", "mb-4")}>{description}</div>
        )}
        <p>
          <b>Showcase project:</b>{" "}
          <a
            className={clsx("underline", "text-navy-200")}
            href={(repositoryWithPrimary || lastRepositoryPushed).node.url}
            target="_blank">
            {(repositoryWithPrimary || lastRepositoryPushed).node.name}
          </a>
          <br />
          <b>Number of repositories:</b> {repositories.length}
          <br />
        </p>
        <br />
        {proficiency && (
          <div className={clsx("flex", "flex-wrap", "items-center")}>
            <span className={clsx("mr-4")}>
              <b>Proficiency:</b>
            </span>
            <span>
              {[...Array(proficiency).keys()].map((k) => (
                <div
                  key={k}
                  className={clsx(
                    "transition-colors",
                    "inline-block",
                    "rounded-full",
                    "h-4",
                    "w-4",
                    "p-1",
                    "border-2",
                    "border-orange-400",
                    "mr-2",
                  )}>
                  <div
                    className={clsx(
                      "transition-colors",
                      "rounded-full",
                      "h-full",
                      "w-full",
                      "bg-orange-400",
                    )}></div>
                </div>
              ))}
            </span>
            <span className={clsx("ml-2")}>{proficiency}/5</span>
          </div>
        )}
      </motion.div>
      {imgPos === "right" && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          className={clsx("p-8", "w-full", "md:w-1/3", "text-center")}
          transition={{ ease: "easeInOut", duration: 1 }}>
          <Img
            className={clsx("shadow")}
            fixed={logo?.childImageSharp.fixed}
            alt={title}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Technology;
