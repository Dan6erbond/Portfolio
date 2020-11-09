import PropTypes from "prop-types";
import React from "react";
import VizSensor from "react-visibility-sensor";
import "./skill-bar.scss";

const SkillBar = ({ skillName, skillStrength }) => {
  const [barWidth, setBarWidth] = React.useState(0);

  return (
    <VizSensor
      onChange={isVisible => {
        if (isVisible && barWidth === 0) {
          setBarWidth(skillStrength * 10);
        }
      }}
    >
      <div className="skill">
        <p>{skillName}</p>
        <div className="bar">
          <div style={{ width: `${barWidth}%` }} />
          <span>{skillStrength}/10</span>
        </div>
      </div>
    </VizSensor>
  );
};

SkillBar.propTypes = {
  skillName: PropTypes.string,
  skillStrength: PropTypes.number,
};

export default SkillBar;
