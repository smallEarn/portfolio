import React, { useMemo, useState } from "react";
// import { SkillsProgress } from "../components/SkillsProgress";
import "../styles/portfolio.scss";

import ProfileImage from "../assets/img/profile.png";
import ResumePage from "./ResumePage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import SkillsProgress from "./SkillsProgress";
export default function Portfolio() {
  const tabs = useMemo(
    () => [
      { key: "about", label: "About" },
      { key: "skills", label: "Skills" },
      { key: "projects", label: "Projects" },
      { key: "resume", label: "Resume" },
      { key: "contact", label: "Contact" },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (e, key) => {
    e.preventDefault();
    setActiveTab(key);
  };

  return (
    <section className="page">
      <section className="shell">
        <section className="sidebar">
          <div className="inner">
            <div className="profile">
              <div className="avatarWrap">
                <img src={ProfileImage} alt="Profile" />
              </div>
              <h1>Precious Genodeala</h1>
              <p className="role">Full-stack Developer</p>
            </div>

            <div className="divider" />

            <div className="contactList">
              <div className="contactItem">
                <div className="iconBox">✉</div>
                <div className="contactMeta">
                  <span className="label">EMAIL</span>
                  <span className="value">joygenodeala@gmail.com</span>
                </div>
              </div>

              <div className="contactItem">
                <div className="iconBox">📱</div>
                <div className="contactMeta">
                  <span className="label">PHONE</span>
                  <span className="value">+63 905 236 8129</span>
                </div>
              </div>

              <div className="contactItem">
                <div className="iconBox">📍</div>
                <div className="contactMeta">
                  <span className="label">LOCATION</span>
                  <span className="value">Consing Village, Bgry. Caduha-an Cadiz City</span>
                </div>
              </div>
            </div>

            <div className="social">
              <a href="https://www.linkedin.com/in/precious-genodeala-591346153/" aria-label="LinkedIn">
                in
              </a>
              <a href="https://github.com/thy-preciousgenodeala/" aria-label="GitHub">
                ⌂
              </a>
              <a href="https://smallearn.github.io/portfolio/" aria-label="Porfolio">
                P
              </a>
              <a
                href="#"
                aria-label="Email"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("contact");
                }}
              >
                ✉️
              </a>
            </div>
          </div>
        </section>

        <section className="main">
          <div className="main__inner">
            <div className="main__topbar">
              <div className="main__tabs">
                {tabs.map((t) => (
                  <a
                    key={t.key}
                    href="#"
                    data-tab={t.key}
                    className={[
                      "main__tab",
                      activeTab === t.key ? "main__tab--active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={(e) => handleTabClick(e, t.key)}
                  >
                    {t.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="main__content">
              {activeTab === "about" && (
                <div className="tab-content active" id="about">
                  <div className="main__header">
                    <h1 className="main__title">About Me</h1>
                    <div className="main__underline"></div>
                  </div>

                  <div className="main__about">
                    <p className="main__text">
                      I’m a Full-Stack Developer who enjoys building practical, user-friendly web applications that solve real problems. 
                      I work on both the front end and back end, turning ideas into clean, functional, and reliable systems. 
                      I care about writing organized code, creating smooth user experiences, and making sure everything works securely and efficiently behind the scenes. 
                      I’m always learning, improving my skills, and looking for better ways to build things.
                      I’m excited to join a team where I can contribute, grow, and help create meaningful digital products.
                    </p>
                    <p className="main__text">
                      If you're seeking a skilled Full-stack Developer to breathe
                      life into your project and exceed your expectations, I am
                      here to collaborate and create magic together.
                    </p>
                  </div>

                  <div className="main__doing">
                    <h3 className="main__sectionTitle">What I'm Doing</h3>

                    <div className="main__grid">
                      <article className="main__card">
                        <div className="main__badge">🖥️</div>
                        <div className="main__cardBody">
                          <h3 className="main__cardTitle">Front-End</h3>
                          <p className="main__cardText">
                            I create responsive and user-friendly interfaces, including layouts, forms, dashboards, and interactive components using HTML, CSS, JavaScript, and modern frameworks.
                          </p>
                        </div>
                      </article>

                      <article className="main__card">
                        <div className="main__badge">🧠</div>
                        <div className="main__cardBody">
                          <h3 className="main__cardTitle">Back-End</h3>
                          <p className="main__cardText">
                            I develop secure and scalable server-side systems, handling authentication, business logic, APIs, and overall application functionality using technologies like PHP and Node.js.
                          </p>
                        </div>
                      </article>

                      <article className="main__card">
                        <div className="main__badge">🗃️</div>
                        <div className="main__cardBody">
                          <h3 className="main__cardTitle">Database</h3>
                          <p className="main__cardText">
                            I design and manage structured databases to ensure efficient, secure, and reliable data storage and retrieval using systems such as MySQL, PostgreSQL, or MongoDB.
                          </p>
                        </div>
                      </article>

                      <article className="main__card">
                        <div className="main__badge">🚀</div>
                        <div className="main__cardBody">
                          <h3 className="main__cardTitle">Deployment</h3>
                          <p className="main__cardText">
                            I configure servers, integrate APIs, optimize performance, and deploy applications using modern tools such as Docker and cloud platforms to ensure smooth and reliable operation.
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "skills" &&  <SkillsProgress/>}

              {activeTab === "projects" && <ProjectsPage/>}

              {activeTab === "resume" &&  <ResumePage/>}

              {activeTab === "contact" && <ContactPage/>}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}