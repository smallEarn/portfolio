import { useEffect, useRef } from "react";
import dockerIcon from "../assets/img/icon-docker.png";
import laravelIcon from "../assets/img/icon-laravel.png";
import gitIcon from "../assets/img/icon-git.png";
import htmlIcon from "../assets/img/icon-html.png";
import cssIcon from "../assets/img/icon-css3.png";
import javascriptIcon from "../assets/img/icon-javascript.png";
import phpIcon from "../assets/img/icon-php.png";
import mysqlIcon  from "../assets/img/icon-mysql.png";
import restIcon from "../assets/img/icon-rest.png";


export function SkillsProgress() {
  const rowRef = useRef(null);
  const lineRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
  const row = rowRef.current;
  const line = lineRef.current;
  const fill = fillRef.current;

  if (!row || !line || !fill) return;

  const update = () => {
    const maxScroll = row.scrollWidth - row.clientWidth;

    if (maxScroll <= 0) {
      fill.style.width = "100%";
      fill.style.transform = "translateX(0px)";
      return;
    }

    const visibleRatio = row.clientWidth / row.scrollWidth;
    const lineWidth = line.clientWidth;

    const fillWidthPx = Math.max(12, lineWidth * visibleRatio);
    fill.style.width = `${fillWidthPx}px`;

    const maxTravelPx = lineWidth - fillWidthPx;

    let ratio = row.scrollLeft / maxScroll;

    if (row.scrollLeft >= maxScroll - 2) ratio = 1;
    if (row.scrollLeft <= 2) ratio = 0;

    const x = Math.round(ratio * maxTravelPx);
    fill.style.transform = `translateX(${x}px)`;
  };

const handleWheel = (e) => {
  // Only do anything if there's horizontal overflow
  if (row.scrollWidth <= row.clientWidth) return;

  const { deltaX, deltaY } = e;

  // If user is doing a horizontal gesture (trackpad swipe),
  // let the browser handle it naturally.
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return;
  }

  // Otherwise, convert vertical wheel to horizontal scroll (mouse wheel use-case)
  e.preventDefault();
  row.scrollLeft += deltaY;
};

  update();

  row.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  row.addEventListener("wheel", handleWheel, { passive: false });

  const ro = new ResizeObserver(update);
  ro.observe(row);
  ro.observe(line);

  return () => {
    row.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
    row.removeEventListener("wheel", handleWheel);
    ro.disconnect();
  };
}, []);
  return (
    <div className="main__skills">
      <h3 className="main__sectionTitle">Skills</h3>

      <div className="main__skillRow" ref={rowRef}>
        {/* your skill items */}
         <article className="main__skill main__skill--s1">
          <img src={htmlIcon} alt="HTML" />
        </article>
        <article className="main__skill main__skill--s2">
          <img src={cssIcon} alt="CSS" />
        </article>
        <article className="main__skill main__skill--s3">
            <img src={javascriptIcon} alt="Javascript" />
        </article>
         <article className="main__skill main__skill--s4">
            <img src={phpIcon} alt="Php" />
        </article>
        <article className="main__skill main__skill--s1">
          <img src={restIcon} alt="RESTAPI" />
        </article>
        <article className="main__skill main__skill--s3">
            <img src={mysqlIcon} alt="Mysql" />
        </article>
        <article className="main__skill main__skill--s4">
            <img src={dockerIcon} alt="Docker" />
        </article>
        <article className="main__skill main__skill--s1">
            <img src={laravelIcon} alt="Laravel" />
        </article>
        <article className="main__skill main__skill--s2">
          <img src={gitIcon} alt="GIT" />
        </article>

      </div>

      <div className="main__progressLine" ref={lineRef}>
        <div className="main__progressFill" ref={fillRef} />
      </div>
    </div>
  );
}