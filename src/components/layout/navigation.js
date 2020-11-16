import { motion } from "framer-motion";
import { Link } from "gatsby";
import React from "react";
import { Navbar } from "react-bootstrap";
import MenuToggle from "./menuToggle";
import NavLogo from "./navLogo";

const Navigation = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <React.Fragment>
      <motion.div initial={false} animate={menuOpen ? "open" : "closed"}>
        <MenuToggle toggle={toggleMenu} />

        <motion.div
          transition={{ duration: 0.15 }}
          className="menu"
          variants={{
            open: {
              opacity: 1,
              visibility: "visible",
            },
            closed: {
              opacity: 0,
              transitionEnd: {
                visibility: "hidden",
              },
            },
          }}
          onClick={toggleMenu}
        >
          <Link to="/">
            <Navbar.Brand className="logo">
              <NavLogo /> {siteTitle}
            </Navbar.Brand>
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
};

export default Navigation;
