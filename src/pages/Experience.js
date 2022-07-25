import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Colegiul National "Vasile Lucaciu", Baia Mare
          </h3>
          <p> I graduated high school in Mathematics - Computer science. </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            UTCN - Facultatea de Inginerie specializarea Calculatoare, Baia Mare
          </h3>
          <p> Degree in Computer Science Engineering. </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" 2022 - present "
          iconStyle={{ background: "#E1C16E", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Faro Development - Internship
          </h3>
          <p>
            I am working on an Internship as a Front-End Developer on ReactJS.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
