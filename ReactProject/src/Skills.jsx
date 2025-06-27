import {SiPython,SiJava,SiMysql,SiHtml5,SiJavascript,SiReact,SiCss3,SiNodedotjs} from 'react-icons/si';
   
function Skills(){
    const skills = [
        { name: "Python", level: "Intermediate", icon: <SiPython /> },
        { name: "Java", level: "Intermediate", icon: <SiJava /> },
        { name: "SQL", level: "Intermediate", icon: <SiMysql /> },
        { name: "HTML", level: "Intermediate", icon: <SiHtml5 /> },
        { name: "JavaScript", level: "Basics", icon: <SiJavascript /> },
        { name: "React", level: "Basics", icon: <SiReact /> },
        { name: "CSS", level: "Intermediate", icon: <SiCss3 /> },
        
    ];
    return (
        <>
            <div className="skills">
                <h2>Skills</h2>
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill.icon}
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}</span>
                    </div>
                ))}
                
            </div>
        </>
        
    );
}
export default Skills