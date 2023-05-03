import React from "react";
import "./styles/Experience.scss";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Experience = () => {
  return (
    <div className="section-experience">
      <Timeline position="alternate">
        <TimelineItem className="item">
          <TimelineSeparator className="separator">
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="content-right">
            <h3 className="title">Full Stack Web Developer</h3>
            <p>
              Kodego.ph <br />
              May 29, 2022 - Present
            </p>
          </TimelineContent>
        </TimelineItem>
        {/*  */}
        <TimelineItem>
          <TimelineSeparator className="separator">
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="content-left">
            <h3 className="title">Customer Service Representative</h3>
            <p>
              Sitel-Max Hub La Union. <br />
              June 1, 2022 - February 2, 2022
            </p>
          </TimelineContent>
        </TimelineItem>
        {/*  */}
        <TimelineItem>
          <TimelineSeparator className="separator">
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="content-right">
            {" "}
            <h3 className="title">Customer Service Representative</h3>
            <p>
              Teleperformance - Baguio.
              <br />
              November 25, 2019 – June 11, 2020
            </p>
          </TimelineContent>
        </TimelineItem>
        {/*  */}
        <TimelineItem>
          <TimelineSeparator className="separator">
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="content-left">
            <h3 className="title">Customer Service Representative</h3>
            <p>
              Teleperformance - Baguio.
              <br />
              November 25, 2019 – June 11, 2020
            </p>
          </TimelineContent>
        </TimelineItem>

        {/*  */}

        <TimelineItem>
          <TimelineSeparator className="separator">
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="content-right">
            <h3 className="title">Computer Servicing System NCII</h3>
            <p>
              Training for Work Scholarship Program (TESDA) Lorma Colleges
              <br />
              April 16- May 29 , 2018
            </p>
          </TimelineContent>
        </TimelineItem>
        {/*  */}
        {/*  */}
        <TimelineItem>
          <TimelineSeparator className="separator">
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="content-left">
            <h3 className="title">
              Bachelore's Desgree Information Technology <br />
            </h3>
            <p>
              Saint Louis College
              <br />
              2013 - 2017
            </p>
          </TimelineContent>
        </TimelineItem>
        {/*  */}
        <TimelineItem>
          <TimelineSeparator className="separator">
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent className="content-right">
            {" "}
            <h3 className="title">Internship</h3>
            <p>
              PC4me <br />
              August 17, 2017 – November 23, 2017
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Experience;
