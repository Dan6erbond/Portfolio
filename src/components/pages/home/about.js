import { motion } from "framer-motion";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VizSensor from "react-visibility-sensor";
import "./about.scss";
import SkillBar from "./skill-bar";

const About = ({ aboutRef }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const skills = [
    { skillName: "Java", skillStrength: 9 },
    { skillName: "Kotlin", skillStrength: 6 },
    { skillName: "Python", skillStrength: 9 },
    { skillName: "C#", skillStrength: 8 },
    { skillName: "HTML/CSS", skillStrength: 9 },
    { skillName: "PHP", skillStrength: 6 },
    { skillName: "Js/Ts", skillStrength: 8 },
    { skillName: "SQL", skillStrength: 6 },
    { skillName: "C++", skillStrength: 3 },
  ];

  return (
    <VizSensor
      partialVisibility
      onChange={isVisible1 => {
        if (isVisible1 && !isVisible) {
          setIsVisible(true);
        }
      }}
    >
      <motion.div
        initial={false}
        animate={isVisible ? "visible" : "hidden"}
        ref={aboutRef}
      >
        <Container fluid="md">
          <Row>
            <Col sm={12} md={4} lg={6}>
              <motion.div
                variants={{
                  hidden: {
                    translateX: "-20%",
                    opacity: 0,
                  },
                  visible: {
                    translateX: 0,
                    opacity: 1,
                  },
                }}
                transition={{ duration: 0.6 }}
                className="center-container"
              >
                <div className="content about">
                  <div className="profile-img" />
                  <p style={{ margin: 0 }}>
                    I enjoy creating front-end and back-end applications for
                    mobile and desktop devices alike. My goal is to create
                    seamless experiences for the users of my applications and
                    speedy performance.
                    <br />
                    <br />
                    Recently I have been working with C# ASP.NET Web APIs and
                    React front-end applications.
                  </p>
                  <br />
                  <Link
                    className="btn btn-outline-primary flat-button"
                    to="/about"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            </Col>
            <Col sm={12} md={8} lg={6}>
              <motion.div
                variants={{
                  hidden: {
                    translateX: "20%",
                    opacity: 0,
                  },
                  visible: {
                    translateX: 0,
                    opacity: 1,
                  },
                }}
                transition={{ duration: 0.6 }}
              >
                {skills.map((s, i) => (
                  <SkillBar
                    key={i}
                    skillName={s.skillName}
                    skillStrength={s.skillStrength}
                  />
                ))}
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </VizSensor>
  );
};

About.propTypes = {
  aboutRef: PropTypes.func,
};

export default About;
