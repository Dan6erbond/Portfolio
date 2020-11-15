import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Navbar } from "react-bootstrap";
import NavLogo from "./navLogo";

const Header = ({ siteTitle }) => {
  const [showShadow, setShowShadow] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };
    return () => {
      window.onscroll = null;
    };
  });

  return (
    <React.Fragment>
      <Navbar fixed="top" bg="white" className={showShadow && "shadow"}>
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
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
