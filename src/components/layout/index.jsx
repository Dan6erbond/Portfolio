import clsx from "clsx";
import React from "react";
import "@fontsource/exo";
import "@fontsource/oxygen";
import Logo from "../../assets/logo_orange_gradient.inline.svg";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <nav className={clsx("fixed", "bottom-0", "md:top-0", "w-screen")}>
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
      <main className={clsx("min-h-full", "pb-20", "md:pb-0", "md:pt-20")}>
        {children}
      </main>
    </React.Fragment>
  );
};

export default Layout;
