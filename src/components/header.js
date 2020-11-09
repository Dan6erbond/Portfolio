import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Navbar } from "react-bootstrap";
import NavLogo from "./navLogo";

const Header = ({ siteTitle }) => (
  <React.Fragment>
    <Navbar bg="white">
      <Link to="/">
        <Navbar.Brand>
          <NavLogo /> {siteTitle}
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end" />
    </Navbar>
    <br />
  </React.Fragment>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
