import { useEffect, useRef, useState } from "react";

import dockerIcon from "../assets/img/icon-docker.png";
import laravelIcon from "../assets/img/icon-laravel.png";
import gitIcon from "../assets/img/icon-git.png";
import javascriptIcon from "../assets/img/icon-javascript.png";
import phpIcon from "../assets/img/icon-php.png";
import mysqlIcon from "../assets/img/icon-mysql.png";
import restIcon from "../assets/img/icon-rest.png";
import htmlIcon from "../assets/img/icon-html.png";
import cssIcon from "../assets/img/icon-css3.png";
import reactIcon from "../assets/img/icon-react.png";
import nginxIcon from "../assets/img/icon-nginx.png";
import linuxIcon from "../assets/img/icon-linux.png";
import wordpressIcon from "../assets/img/icon-wordpress.png";

import "../styles/skills.scss";

export default function SkillsProgress() {
  const rowRef = useRef(null);
  const lineRef = useRef(null);
  const fillRef = useRef(null);
  const [showScrollHint, setShowScrollHint] = useState(true);

  const skillGroups = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", icon: htmlIcon, level: "Advanced", percent: 90 },
        { name: "CSS", icon: cssIcon, level: "Advanced", percent: 88 },
        { name: "JavaScript", icon: javascriptIcon, level: "Intermediate", percent: 75 },
        { name: "React", icon: reactIcon, level: "Intermediate", percent: 70 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "PHP", icon: phpIcon, level: "Intermediate", percent: 75 },
        { name: "Laravel", icon: laravelIcon, level: "Intermediate", percent: 78 },
        { name: "REST API", icon: restIcon, level: "Intermediate", percent: 80 },
        { name: "MySQL", icon: mysqlIcon, level: "Intermediate", percent: 76 },
      ],
    },
    {
      category: "DevOps / Tools",
      skills: [
        { name: "Git", icon: gitIcon, level: "Advanced", percent: 85 },
        { name: "Docker", icon: dockerIcon, level: "Intermediate", percent: 72 },
        { name: "Linux", icon: linuxIcon, level: "Intermediate", percent: 74 },
        { name: "Nginx", icon: nginxIcon, level: "Intermediate", percent: 70 },
      ],
    },
    {
      category: "CMS",
      skills: [{ name: "WordPress", icon: wordpressIcon, level: "Advanced", percent: 88 }],
    },
  ];

  useEffect(() => {
    const row = rowRef.current;
    const line = lineRef.current;
    const fill = fillRef.current;

    if (!row || !line || !fill) return;

    const updateIndicator = () => {
      const maxScroll = row.scrollWidth - row.clientWidth;
      const lineWidth = line.clientWidth;

      if (maxScroll <= 0) {
        fill.style.width = `${lineWidth}px`;
        fill.style.transform = "translateX(0px)";
        setShowScrollHint(false);
        return;
      }

      const visibleRatio = row.clientWidth / row.scrollWidth;
      const fillWidth = Math.max(40, lineWidth * visibleRatio);
      const maxTravel = lineWidth - fillWidth;
      const scrollRatio = row.scrollLeft / maxScroll;
      const x = maxTravel * scrollRatio;

      fill.style.width = `${fillWidth}px`;
      fill.style.transform = `translateX(${x}px)`;

      setShowScrollHint(row.scrollLeft < maxScroll - 10);
    };

    const handleWheel = (e) => {
      if (row.scrollWidth <= row.clientWidth) return;

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        row.scrollLeft += e.deltaY;
      }
    };

    updateIndicator();

    row.addEventListener("scroll", updateIndicator, { passive: true });
    row.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", updateIndicator);

    return () => {
      row.removeEventListener("scroll", updateIndicator);
      row.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", updateIndicator);
    };
  }, []);

  return (
    <div className="main__skills">
      <div className="titleRow">
        <h1 className="pageTitle">Skills</h1>
        <div className="titleUnderline" />
      </div>

      <p className="main__skillsIntro">
        Technologies and tools I use to build responsive, scalable, and user-focused web applications.
      </p>

      <div className="main__skillsViewport">
        <div className="main__skillsRow" ref={rowRef}>
          {skillGroups.map((group) => (
            <article className="main__skillCard" key={group.category}>
              <h2 className="main__skillCategory">{group.category}</h2>

              <div className="main__skillList">
                {group.skills.map((skill) => (
                  <div className="main__skillItem" key={skill.name}>
                    <div className="main__skillTop">
                      <div className="main__skillInfo">
                        <img src={skill.icon} alt={skill.name} className="main__skillIcon" />
                        <span className="main__skillName">{skill.name}</span>
                      </div>

                      <span className="main__skillLevel">{skill.level}</span>
                    </div>

                    <div className="main__skillBar">
                      <div
                        className="main__skillFill"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

       
      </div>

       {showScrollHint && (
          <div className="main__scrollHint">
            <span className="main__scrollHintText">Scroll right</span>
            <span className="main__scrollHintArrow">→</span>
          </div>
        )}
    </div>
  );
}