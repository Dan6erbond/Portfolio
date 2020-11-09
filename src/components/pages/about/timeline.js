import React from "react";
import { FaBuilding, FaSchool } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import FrenchFlag from "../../../assets/french_flag.svg";
import "./timeline.scss";

const timelineElements = [
  {
    active: false,
    name: "BlueMouse GmbH",
    subtitle: "Internship",
    description:
      "Will spend a year as an intern at the BlueMouse GmbH developing websites.",
    date: "2020 - 2021",
    icon: <FaBuilding style={{ width: "24px" }} />,
  },
  {
    active: true,
    name: "IMS Aarau",
    subtitle: "Computing College",
    description:
      "Studying at the Computing College in Aarau with a focus on software development.",
    date: "2017 - present",
    icon: <FaSchool style={{ width: "24px" }} />,
  },
  {
    active: false,
    name: "Studied in Montpellier, France",
    subtitle: "Language Stay",
    description:
      "Spent three weeks at the ILA French language school in Montpellier to brush up on my French skills.",
    date: "September 2020",
    icon: <FrenchFlag />,
  },
  {
    active: false,
    name: "Bezirksschule Zofingen",
    subtitle: "Junior High School",
    description:
      "Studied at the junior highschool in Zofingen and started taking computer science courses.",
    date: "2013 - 2017",
    icon: <FaSchool style={{ width: "24px" }} />,
  },
  {
    active: false,
    name: "Quartierschule Mühlethal",
    subtitle: "Primary School",
    date: "2009 - 2013",
    description: "Skipped the 5th grade in primary school.",
    icon: <FaSchool style={{ width: "24px" }} />,
  },
];

const Timeline = () => {
  return (
    <>
      <VerticalTimeline>
        {timelineElements.map((e, i) => (
          <VerticalTimelineElement
            key={i}
            className={
              e.active ? "vertical-timeline-element-active" : undefined
            }
            date={e.date}
            icon={e.icon}
          >
            <h3 className="vertical-timeline-element-title">{e.name}</h3>
            {e.subtitle ? (
              <h4 className="vertical-timeline-element-subtitle">
                {e.subtitle}
              </h4>
            ) : null}
            {e.description ? <p>{e.description}</p> : null}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
