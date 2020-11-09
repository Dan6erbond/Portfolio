import { motion } from "framer-motion";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import "./banner.scss";

const Banner = ({ image, children, bannerHeight }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <div className="full-page center">
      <div className="content">
        <motion.div
          initial={false}
          animate={isVisible ? "visible" : "hidden"}
          className="banner"
        >
          <div className="banner-content">
            <motion.div
              variants={{
                hidden: {
                  translateY: "-20%",
                  opacity: "0",
                },
                visible: {
                  translateY: "0%",
                  opacity: "1",
                },
              }}
              transition={{ duration: 0.6 }}
              className=""
            >
              <div
                className="banner-image"
                style={{
                  height: bannerHeight || "50vh",
                }}
              >
                <Img className="image" fluid={image} />
              </div>
            </motion.div>
            <motion.div className="content-container">
              <motion.div
                variants={{
                  hidden: {
                    translateY: "20%",
                    opacity: "0",
                  },
                  visible: {
                    translateY: "0%",
                    opacity: "1",
                  },
                }}
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  imageSrc: PropTypes.string,
  children: PropTypes.node,
  bannerHeight: PropTypes.string,
};

export default Banner;