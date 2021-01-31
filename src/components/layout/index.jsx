import "@fontsource/exo";
import "@fontsource/oxygen";
import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";
import Logo from "../../assets/logo_orange_gradient.inline.svg";

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
                "mr-8",
                "hover:text-orange-400",
                "transition-colors",
              )}
              gatsbyLinkProps={{ activeClassName: clsx("text-orange-500") }}>
              {title}
            </Link>
          ))}
        </div>
      </nav>
      <main
        className={clsx(
          "min-h-screen",
          "pb-20",
          "md:pb-10",
          "pt-10",
          "md:pt-20",
          className,
        )}>
        {children}
      </main>
      <footer className={clsx("mt-4", "py-8", "px-6", "bg-navy-600")}>
        Footer.
      </footer>
    </React.Fragment>
  );
};

export default Layout;
