import React from "react";
import "./styles/Skills.scss";
import {skills,frameworks,backend,tools} from "./SkillItems"
const Skills = () => {

  


  return (
    <div className="section-skills">
<div className="skills-container">
    <div className="skills">
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <img src={skill.image} alt={`${skill.name} logo`} />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
    <div className="skills">
      {frameworks.map((items,index)=>{
        return(
        <div key={index} className="skill">
          <img src={items.image} alt={`${items.name} logo`}/>
          <p>{items.name}</p>
          </div>)
      })}
    </div>
    <div className="skills">
      {backend.map((items,index)=>{
        return(
        <div key={index} className="skill">
          <img src={items.image} alt={`${items.name} logo`}/>
          <p>{items.name}</p>
          </div>)
      })}
    </div>
    <div className="skills">
      {tools.map((items,index)=>{
        return(
        <div key={index} className="skill">
          <img src={items.image} alt={`${items.name} logo`}/>
          <p>{items.name}</p>
          </div>)
      })}
    </div>
</div>

    </div>
  );
};

export default Skills;
