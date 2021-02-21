import clsx from "clsx";
import * as React from "react";
import { BiLinkExternal } from "react-icons/bi";

const AboutCard = ({ text, title, linkText = "Learn More", url, ...props }) => (
  <div
    className={clsx(
      "shadow-lg",
      "rounded",
      "bg-navy-600",
      "p-8",
      "flex",
      "flex-col",
      "justify-between",
    )}
    {...props}>
    <div>
      <p className={clsx("text-gray-400", "mb-1")}>{text}</p>
      <span className={clsx("text-3xl", "mb-6", "block")}>{title}</span>
    </div>
    <a
      href={url}
      target="_blank"
      className={clsx(
        "hover:text-orange-400",
        "transition-colors",
        "text-right",
      )}>
      {linkText} <BiLinkExternal className={clsx("inline")} />
    </a>
  </div>
);

export default AboutCard;
