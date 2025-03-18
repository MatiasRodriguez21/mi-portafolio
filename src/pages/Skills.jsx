// src/pages/Skills.jsx
import React from "react";
import { Icon } from "@iconify/react";

// Datos de habilidades con solo íconos
const skillsData = [
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "React", icon: "logos:react" },
  { name: "Node.js", icon: "logos:nodejs" },
  { name: "Python", icon: "logos:python" },
  { name: "Django", icon: "logos:django" },
  { name: "HTML5", icon: "logos:html-5" }, // Código para HTML5
  { name: "MySQL", icon: "logos:mysql" },
  { name: "MongoDB", icon: "logos:mongodb" },
  { name: "Git/GitHub", icon: "logos:git" },
];

const Skills = () => {
  return (
    <section id="skills" className="container my-5">
      <h2 className="text-center">Habilidades</h2>
      <div className="row">
        {skillsData.map((skill, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="skill-card text-center">
              <Icon icon={skill.icon} className="skill-icon" />
              <h5>{skill.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;