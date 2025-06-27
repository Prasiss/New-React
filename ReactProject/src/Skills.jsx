import {
  SiPython,
  SiMysql,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiCss3,
  SiNodedotjs
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "Python", level: "Intermediate", icon: <SiPython className="skill-icon python" /> },
    { name: "Java", level: "Intermediate", icon: <FaJava className="skill-icon java" /> },
    { name: "SQL", level: "Intermediate", icon: <SiMysql className="skill-icon sql" /> },
    { name: "HTML", level: "Intermediate", icon: <SiHtml5 className="skill-icon html" /> },
    { name: "JavaScript", level: "Basics", icon: <SiJavascript className="skill-icon js" /> },
    { name: "React", level: "Basics", icon: <SiReact className="skill-icon react" /> },
    { name: "CSS", level: "Intermediate", icon: <SiCss3 className="skill-icon css" /> },
    { name: "Node.js", level: "Basics", icon: <SiNodedotjs className="skill-icon node" /> },
  ];

  return (
    <div className="skills-section">
      <h2 className="titleName">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
