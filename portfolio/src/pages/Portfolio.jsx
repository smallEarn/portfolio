import React, { useMemo, useState } from "react";
import { SkillsProgress } from "../pages/SkillsProgress";
import "./portfolio.scss";

export default function Portfolio() {
  const tabs = useMemo(
    () => [
      { key: "about", label: "About" },
      { key: "resume", label: "Resume" },
      { key: "portfolio", label: "Portfolio" },
      { key: "blog", label: "Blog" },
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
                <div className="avatar">🙂</div>
              </div>
              <h1>Precious Genodeala</h1>
              <p className="role">Software Engineer</p>
            </div>

            <div className="divider" />

            <div className="contactList">
              <div className="contactItem">
                <div className="iconBox">✉</div>
                <div className="contactMeta">
                  <span className="label">EMAIL</span>
                  <span className="value">aakashrajbanshi58@...</span>
                </div>
              </div>

              <div className="contactItem">
                <div className="iconBox">📱</div>
                <div className="contactMeta">
                  <span className="label">PHONE</span>
                  <span className="value">+977 9812345678</span>
                </div>
              </div>

              <div className="contactItem">
                <div className="iconBox">📍</div>
                <div className="contactMeta">
                  <span className="label">LOCATION</span>
                  <span className="value">Kathmandu, Nepal</span>
                </div>
              </div>
            </div>

            <div className="social">
              <a href="#" aria-label="LinkedIn">
                in
              </a>
              <a href="#" aria-label="GitHub">
                ⌂
              </a>
              <a href="#" aria-label="Google">
                G
              </a>
              <a href="#" aria-label="Twitter">
                𝕏
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
                      A passionate Flutter developer with strong expertise in
                      cross-platform apps, REST APIs, UI/UX, widgets, and state
                      management solutions. Proven track record in delivering
                      cutting-edge solutions, including API integration,
                      third-party libraries, and performance optimization.
                    </p>

                    <br className="main__break" />

                    <p className="main__text">
                      If you're seeking a skilled Flutter developer to breathe
                      life into your project and exceed your expectations, I am
                      here to collaborate and create magic together.
                    </p>
                  </div>

                  <div className="main__doing">
                    <h3 className="main__sectionTitle">What I'm Doing</h3>

                    <div className="main__grid">
                      <article className="main__card">
                        <div className="main__badge">📱</div>
                        <div className="main__cardBody">
                          <h3 className="main__cardTitle">Mobile Apps</h3>
                          <p className="main__cardText">
                            Professional development of applications for Android
                            and iOS.
                          </p>
                        </div>
                      </article>

                      <article className="main__card">
                        <div className="main__badge">⌘</div>
                        <div className="main__cardBody">
                          <h3 className="main__cardTitle">Web Development</h3>
                          <p className="main__cardText">
                            High-quality development of sites at the professional level.
                          </p>
                        </div>
                      </article>

                      <article className="main__card">
                        <div className="main__badge">✎</div>
                        <div className="main__cardBody">
                          <h3 className="main__cardTitle">UI/UX Design</h3>
                          <p className="main__cardText">
                            The most modern and high-quality design made at a professional level.
                          </p>
                        </div>
                      </article>

                      <article className="main__card">
                        <div className="main__badge">🗄</div>
                        <div className="main__cardBody">
                          <h3 className="main__cardTitle">Backend Development</h3>
                          <p className="main__cardText">
                            High-performance backend services designed for scalability and seamless UX.
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                  <SkillsProgress />
                </div>
              )}

              {activeTab === "resume" && (
                <div className="tab-content active" id="resume">
                  <div className="main__header">
                    <h1 className="main__title">Resume</h1>
                    <div className="main__underline"></div>
                  </div>
                  <p className="main__text">Resume Section</p>
                </div>
              )}

              {activeTab === "portfolio" && (
                <div className="tab-content active" id="portfolio">
                  <div className="main__header">
                    <h1 className="main__title">Portfolio</h1>
                    <div className="main__underline"></div>
                  </div>
                  <p className="main__text">Portfolio Section</p>
                </div>
              )}

              {activeTab === "blog" && (
                <div className="tab-content active" id="blog">
                  <div className="main__header">
                    <h1 className="main__title">Blog</h1>
                    <div className="main__underline"></div>
                  </div>
                  <p className="main__text">Blog Section</p>
                </div>
              )}

              {activeTab === "contact" && (
                <div className="tab-content active" id="contact">
                  <div className="main__header">
                    <h1 className="main__title">Contact</h1>
                    <div className="main__underline"></div>
                  </div>
                  <p className="main__text">Contact Section</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}