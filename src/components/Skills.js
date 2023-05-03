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
            <div>
              <img src={Htmlicon} alt="html icon" />
              <p>HTML</p>
            </div>

            <div>
              <img src={Jsicon} alt="html icon" />
              <p>JavaScript</p>
            </div>
            <div>
              <img src={Reacticon} alt="html icon" />
              <p>React.Js</p>
            </div>
            <div>
              <img src={Nodejs} alt="html icon" />
              <p>Nodejs</p>
            </div>
            <div>
              <img src={Expressjs} className="express" alt="html icon" />
              <p>Express Js</p>
            </div>
          </div>
          <div className="styles">
            <div>
              <img src={Cssicon} alt="html icon" />
              <p>CSS</p>
            </div>
            <div>
              <img src={BS} alt="html icon" />
              <p>BootStrap</p>
            </div>
            <div>
              <img src={Sass} alt="html icon" />
              <p>Sass</p>
            </div>

            <div>
              <img src={Muiicon} alt="html icon" />
              <p>Material UI</p>
            </div>
          </div>
        </div>
        {/* end top */}

        {/* start tools */}
        <div className="bottom">
          <div>
            <img src={MySQL} alt="html icon" />
            <p>MySQL WorkBench</p>
          </div>
          <div>
            <img src={Sourcetree} alt="html icon" />
            <p>Sourcetree</p>
          </div>
          <div>
            <img src={Github} alt="html icon" />
            <p>GitHub</p>
          </div>
          <div>
            <img src={Postman} alt="html icon" />
            <p>Postman</p>
          </div>
        </div>
        {/* end tools */}
      </div>
      {/* end of content */}
    </div>
  );
};

export default Skills;
