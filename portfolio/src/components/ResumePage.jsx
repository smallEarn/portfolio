import React from "react";
import "../styles/ResumePage.scss";

export default function ResumePage() {
  return (
    <div className="resumePage">
      <div className="titleRow">
        <h1 className="pageTitle">Resume</h1>
        <div className="titleUnderline" />
      </div>

      {/* SUMMARY */}
      <p className="summary">
        Flutter developer with experience in cross-platform apps, REST APIs, UI/UX,
        and performance optimization. I enjoy building polished products with clean,
        scalable architecture.
      </p>

      <div className="resumeGrid">
        {/* LEFT COLUMN */}
        <section className="resumeCol">
          <h2 className="sectionTitle">Experience</h2>

          <div className="timelineCard">
            <div className="timelineItem">
              <div className="dot" />
              <div className="content">
                <div className="top">
                  <div className="role">Software Engineer (Flutter)</div>
                  <div className="datePill">2023 — Present</div>
                </div>
                <div className="place">Company Name • Remote</div>
                <ul className="bullets">
                  <li>Built mobile features using clean architecture + state management.</li>
                  <li>Integrated REST APIs, auth flows, and caching strategies.</li>
                  <li>Improved performance and reduced UI jank on key screens.</li>
                </ul>
              </div>
            </div>

            <div className="timelineItem">
              <div className="dot" />
              <div className="content">
                <div className="top">
                  <div className="role">Mobile Developer</div>
                  <div className="datePill">2021 — 2023</div>
                </div>
                <div className="place">Company Name • On-site</div>
                <ul className="bullets">
                  <li>Delivered Android/iOS builds and supported releases.</li>
                  <li>Implemented reusable UI components and form validation.</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="sectionTitle">Education</h2>
          <div className="timelineCard">
            <div className="timelineItem">
              <div className="dot" />
              <div className="content">
                <div className="top">
                  <div className="role">BS in Computer Science</div>
                  <div className="datePill">2017 — 2021</div>
                </div>
                <div className="place">University Name</div>
                <p className="desc">Relevant: Software Engineering, Databases, UI Design.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN */}
        <section className="resumeCol">
          <h2 className="sectionTitle">Skills</h2>

          <div className="skillCard">
            <div className="skillRow">
              <span>Flutter / Dart</span>
              <div className="bar"><i style={{ width: "90%" }} /></div>
            </div>
            <div className="skillRow">
              <span>REST APIs</span>
              <div className="bar"><i style={{ width: "85%" }} /></div>
            </div>
            <div className="skillRow">
              <span>UI/UX</span>
              <div className="bar"><i style={{ width: "80%" }} /></div>
            </div>
            <div className="skillRow">
              <span>Backend</span>
              <div className="bar"><i style={{ width: "70%" }} /></div>
            </div>
          </div>

          <h2 className="sectionTitle">Tools</h2>
          <div className="pillWrap">
            {["Firebase", "Docker", "Laravel", "JavaScript", "Git", "Figma"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>

          <h2 className="sectionTitle">Certifications</h2>
          <div className="timelineCard">
            <div className="timelineItem">
              <div className="dot" />
              <div className="content">
                <div className="top">
                  <div className="role">Certification Title</div>
                  <div className="datePill">2024</div>
                </div>
                <div className="place">Issuer</div>
                <p className="desc">Short description of what it covers.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* bottom accent like your screenshot */}
      <div className="bottomAccent" />
    </div>
  );
}