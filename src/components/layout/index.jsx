import "@fontsource/exo";
import "@fontsource/oxygen";
import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import Logo from "../../assets/logo_orange_gradient.inline.svg";

const Layout = ({ children, className }) => {
  return (
    <React.Fragment>
      <Helmet>
        <body className={clsx("dark:text-white", "dark:bg-navy-800")} />
      </Helmet>
      <nav
        className={clsx(
          "fixed",
          "bottom-0",
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
          )}>
          <Link to="/">
            <Logo className={clsx("h-8", "w-auto", "inline", "mr-2")} />
          </Link>
          <div className={clsx("mx-auto")}></div>
          <Link
            to="/about"
            className={clsx(
              "text-gray-400",
              "mr-8",
              "hover:text-orange-400",
              "transition-colors",
            )}
            activeClassName={clsx("text-orange-500")}>
            About
          </Link>
          <Link
            to="/projects"
            className={clsx(
              "text-gray-400",
              "mr-8",
              "hover:text-orange-400",
              "transition-colors",
            )}
            activeClassName={clsx("text-orange-500")}>
            Projects
          </Link>
          <Link
            to="/cv"
            className={clsx(
              "text-gray-400",
              "mr-8",
              "hover:text-orange-400",
              "transition-colors",
            )}
            activeClassName={clsx("text-orange-500")}>
            Resume
          </Link>
        </div>
      </nav>
      <main
        className={clsx(
          "min-h-full",
          "pb-20",
          "md:pb-10",
          "pt-10",
          "md:pt-20",
          className,
        )}>
        {children}
      </main>
    </React.Fragment>
  );
};

export default Layout;
