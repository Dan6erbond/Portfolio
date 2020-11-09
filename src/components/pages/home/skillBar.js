import PropTypes from "prop-types";
import React from "react";
import { useIsVisible } from "../../../utils/useIsVisible";
import "./skillBar.scss";

const SkillBar = ({ skillName, skillStrength }) => {
  const ref = React.useRef();
  const visible = useIsVisible({ element: ref });

  React.useEffect(() => {
    if (visible && barWidth === 0) {
      setBarWidth(skillStrength * 10);
    }
  }, [visible]);

  const [barWidth, setBarWidth] = React.useState(0);

  return (
    <div className="skill" ref={ref}>
      <p>{skillName}</p>
      <div className="bar">
        <div style={{ width: `${barWidth}%` }} />
        <span>{skillStrength}/10</span>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  skillName: PropTypes.string,
  skillStrength: PropTypes.number,
};

export default SkillBar;
