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
  const skillsRowRef = useRef(null);
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
    const row = skillsRowRef.current;
    if (!row) return;

    const isSp = () => window.innerWidth <= 767;

    const updateScrollHint = () => {
      if (isSp()) {
        setShowScrollHint(false);
        return;
      }

      const maxScroll = row.scrollWidth - row.clientWidth;

      if (maxScroll <= 0) {
        setShowScrollHint(false);
        return;
      }

      setShowScrollHint(row.scrollLeft < maxScroll - 10);
    };

    const handleWheel = (e) => {
      if (isSp()) return;
      if (row.scrollWidth <= row.clientWidth) return;

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        row.scrollLeft += e.deltaY;
      }
    };

    updateScrollHint();

    row.addEventListener("scroll", updateScrollHint, { passive: true });
    row.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", updateScrollHint);

    return () => {
      row.removeEventListener("scroll", updateScrollHint);
      row.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", updateScrollHint);
    };
  }, []);

  return (
    <section className="skillsSection">
      <div className="skillsHeader">
        <h1 className="skillsTitle">Skills</h1>
        <div className="skillsTitleUnderline" />
      </div>

      <p className="skillsIntro">
        Technologies and tools I use to build responsive, scalable, and user-focused web applications.
      </p>

      <div className="skillsViewport">
        <div className="skillsRow" ref={skillsRowRef}>
          {skillGroups.map((group) => (
            <article className="skillCard" key={group.category}>
              <h2 className="skillCard__category">{group.category}</h2>

              <div className="skillCard__list">
                {group.skills.map((skill) => (
                  <div className="skillCard__item" key={skill.name}>
                    <div className="skillCard__head">
                      <div className="skillCard__info">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="skillCard__icon"
                        />
                        <span className="skillCard__name">{skill.name}</span>
                      </div>

                      <span className="skillCard__level">{skill.level}</span>
                    </div>

                    <div className="skillCard__bar">
                      <div
                        className="skillCard__barFill"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {showScrollHint && (
          <div className="skillsScrollHint">
            <span className="skillsScrollHint__text">Scroll right</span>
            <span className="skillsScrollHint__arrow">→</span>
          </div>
        )}
      </div>
    </section>
  );
}