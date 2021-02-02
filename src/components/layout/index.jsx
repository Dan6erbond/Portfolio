import "@fontsource/exo";
import "@fontsource/oxygen";
import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../../assets/logo_orange_gradient.inline.svg";
import { socials } from "../../utils/helpers";
import Fab from "../fab";

const Layout = ({ children, className }) => {
  const paths = [
    {
      path: "/projects",
      title: "Projects",
    },
    {
      path: "/cv",
      title: "Resume",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];

  return (
    <React.Fragment>
      <nav
        className={clsx(
          "fixed",
          "bottom-0",
          "md:bottom-auto",
          "md:top-0",
          "w-screen",
          "dark:bg-navy-800",
          "z-50",
        )}>
        <div
          className={clsx(
            "py-2",
            "px-4",
            "h-20",
            "mx-auto",
            "max-w-screen-2xl",
            "flex",
            "items-center",
            "uppercase",
          )}>
          <Link to="/">
            <Logo className={clsx("h-8", "w-auto", "inline", "mr-2")} />
          </Link>
          <div className={clsx("mx-auto")}></div>
          {paths.map(({ title, path }) => (
            <Link
              key={path}
              to={path}
              className={clsx(
                "text-gray-400",
                "mr-4",
                "md:mr-8",
                "hover:text-orange-400",
                "transition-colors",
              )}
              activeClassName={clsx("text-orange-500")}>
              {title}
            </Link>
          ))}
        </div>
      </nav>
      <div className={clsx("pb-20", "md:pb-0", "pt-10", "md:pt-20")}>
        <main className={clsx("min-h-screen", "pb-10", className)}>
          {children}
        </main>
        <footer
          className={clsx(
            "mt-4",
            "pt-8",
            "pb-4",
            "px-6",
            "bg-navy-600",
            "flex",
            "flex-wrap",
            "justify-between",
            "items-center",
          )}>
          <div className={clsx("inline-block", "mb-2", "md:mb-0")}>
            © Copyright 2021 - RaviAnand Mohabir
          </div>
          <div>
            <ul>
              {Object.keys(socials).map((social) => (
                <li className={clsx("mb-2")}>
                  <a
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
        </footer>
      </div>
      <Fab>
        <a className={clsx("h-4/6", "w-4/6")} href="mailto:moravrav@gmail.com">
          <HiOutlineMail className={clsx("h-full", "w-full")} />
        </a>
      </Fab>
    </React.Fragment>
  );
};

export default Layout;
