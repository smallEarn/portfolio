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

export function SkillsProgress() {
  return (
    <div className="main__skills">
      <div className="titleRow">
        <h1 className="pageTitle">Skills</h1>
        <div className="titleUnderline" />
      </div>
      <p className="main__skillsIntro">
        A collection of technologies and tools I use to build modern, scalable, and efficient web applications across the full stack.
        </p>
      <div className="main__skillsGrid">

        {/* Frontend */}
        <article className="main__skillCard">
          <h2 className="main__skillCategory">Frontend</h2>

          <div className="main__skillIcons">
            <img src={htmlIcon} alt="HTML" />
            <img src={cssIcon} alt="CSS" />
            <img src={javascriptIcon} alt="JavaScript" />
            <img src={reactIcon} alt="React" />
          </div>
        </article>

        {/* Backend */}
        <article className="main__skillCard">
          <h2 className="main__skillCategory">Backend</h2>

          <div className="main__skillIcons">
            <img src={phpIcon} alt="PHP" />
            <img src={laravelIcon} alt="Laravel" />
            <img src={restIcon} alt="REST API" />
            <img src={mysqlIcon} alt="MySQL" />
          </div>
        </article>

        {/* DevOps */}
        <article className="main__skillCard">
          <h2 className="main__skillCategory">DevOps / Tools</h2>

          <div className="main__skillIcons">
            <img src={gitIcon} alt="Git" />
            <img src={dockerIcon} alt="Docker" />
            <img src={linuxIcon} alt="Linux" />
            <img src={nginxIcon} alt="Nginx" />
          </div>
        </article>

        {/* CMS */}
        <article className="main__skillCard">
          <h2 className="main__skillCategory">CMS</h2>

          <div className="main__skillIcons">
            <img src={wordpressIcon} alt="WordPress" />
          </div>
        </article>

      </div>
    </div>
  );
}