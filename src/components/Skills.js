import React from "react";
import "./styles/Skills.scss";
import Htmlicon from "./images/html5.png";
import Cssicon from "./images/css.png";
import Jsicon from "./images/js.png";
import BS from "./images/bootstrap.png";
import Reacticon from "./images/react.png";
import Muiicon from "./images/mui.png";
import Github from "./images/github.png";
import Postman from "./images/postman.png";
import Nodejs from "./images/nodejs.png";
import Expressjs from "./images/Expressjs.png";
import MySQL from "./images/wb.png";
import Sourcetree from "./images/sourcetree.png";
import TypeScript from "./images/typescript.png"
import Nextjs from "./images/nextjs.png"
import Tailwind from "./images/tailwind-css.png"
import MongoDB from "./images/mongodb.svg"
import GitLab from "./images/gitlabss.png"
import WinSCP from "./images/winscp.png"
import Sass from "./images/sass.png";
const Skills = () => {
  return (
    <div className="section-skills">
      {/* heading */}
      <div className="skill-heading">
        <h3>Skills and Tools</h3>
      </div>
      {/* heading end */}
      {/* start of content */}
      <div className="container ">
        {/* start top */}
        <div className=" top">
          <div className="languages">
            {/* html */}
            <div>
              <img src={Htmlicon} alt="html icon" />
              <p>HTML</p>
            </div>
      {/* javascript */}
            <div>
              <img src={Jsicon} alt="html icon" />
              <p>JavaScript</p>
            </div>
            {/* typescript */}
            <div>
              <img src={TypeScript} alt="html icon" />
              <p>TypeScript</p>
            </div>
            {/* react */}
            <div>
              <img src={Reacticon} alt="html icon" />
              <p>React.Js</p>
            </div>
            {/* next */}
            <div>
              <img src={Nextjs} alt="html icon" />
              <p>Next.Js</p>
            </div>

          </div>
          <div className="styles">
            {/* css */}
            <div>
              <img src={Cssicon} alt="html icon" />
              <p>CSS</p>
            </div>
            {/* bootstrap */}
            <div>
              <img src={BS} alt="html icon" />
              <p>BootStrap</p>
            </div>
            {/* sass */}
            <div>
              <img src={Sass} alt="html icon" />
              <p>Sass</p>
            </div>
            {/* MUI */}
            <div>
              <img src={Muiicon} alt="html icon" />
              <p>Material UI</p>
            </div>
            {/* tailwind */}
              <div>
              <img src={Tailwind} alt="html icon" />
              <p>Tailwind</p>
            </div>
          </div>
        </div>
        {/* end top */}

        {/* start tools */}
        <div className="bottom">
            {/* nodejs */}
            <div>
              <img src={Nodejs} alt="html icon" />
              <p>Nodejs</p>
            </div>
            {/* express */}
            <div>
              <img src={Expressjs} className="express" alt="html icon" />
              <p>Express Js</p>
            </div>
          {/* mysql */}
          <div>
            <img src={MySQL} alt="html icon" />
            <p>MySQL WorkBench</p>
          </div>
          {/* mongodb */}
          <div>
            <img src={MongoDB} alt="html icon" className="w-[200px]" />
            <p>MongoDB</p>
          </div>
          {/* sourcetree */}
          <div>
            <img src={Sourcetree} alt="html icon" />
            <p>Sourcetree</p>
          </div>
          {/* github */}
          <div>
            <img src={Github} alt="html icon" />
            <p>GitHub</p>
          </div>
          {/* gitlab */}
          <div>
            <img src={GitLab} alt="html icon" />
            <p>GitLab</p>
          </div>
          {/* postman */}
          <div>
            <img src={Postman} alt="html icon" />
            <p>Postman</p>
          </div>
          {/* winscp */}
          <div>
            <img src={WinSCP} alt="html icon" />
            <p>WinSCP</p>
          </div>

        </div>
        {/* end tools */}
      </div>
      {/* end of content */}
    </div>
  );
};

export default Skills;
