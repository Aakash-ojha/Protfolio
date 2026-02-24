import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, delay: "0s" },
  { name: "CSS", icon: SiCss3, delay: "0.2s" },
  { name: "JavaScript", icon: SiJavascript, delay: "0.4s" },
  { name: "React", icon: SiReact, delay: "0.6s" },
  { name: "Tailwind", icon: SiTailwindcss, delay: "0.8s" },
  { name: "Node.js", icon: SiNodedotjs, delay: "1.0s" },
  { name: "Express", icon: SiExpress, delay: "1.2s" },
  { name: "MongoDB", icon: SiMongodb, delay: "1.4s" },
  { name: "Python", icon: SiPython, delay: "1.6s" },
];

const SkillCard = () => {
  return (
    <>
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div
            key={index}
            style={{ animationDelay: skill.delay }}
            className=" animate-float flex flex-col justify-center items-center gap-5 p-4 w-26 h-26 bg-slate-900/50 border border-slate-800 rounded-2xl shadow-xl hover:border-orange-500/50 transition-colors duration-300"
          >
            <Icon size={48} className="text-slate-600" />
            <span className="text-gray-300 font-medium text-sm">
              {skill.name}
            </span>
          </div>
        );
      })}
    </>
  );
};
const Skills = () => {
  return (
    <div
      className="flex flex-col gap-10 justify-center items-center mt-20"
      id="skills"
    >
      <span className="font-mono text-2xl">My Skills</span>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        <SkillCard />
      </div>
    </div>
  );
};

export default Skills;
