import React from "react";
import { Link } from "react-router-dom";
import { CHAPTER_LIST } from "./Dropdown.jsx";
import { OmMark } from "./Motifs.jsx";
import "./ChapterNav.css";

/** Previous / next chapter navigation, shared by all 18 chapter pages. */
const ChapterNav = ({ n }) => {
  const prev = n > 1 ? CHAPTER_LIST[n - 2] : null;
  const next = n < 18 ? CHAPTER_LIST[n] : null;

  return (
    <nav className="chapter-nav" aria-label="Chapter navigation">
      {prev ? (
        <Link to={`/chapter${prev.n}`} className="chapter-nav__card">
          <span className="chapter-nav__dir">← Previous</span>
          <span className="chapter-nav__label">
            <span className="chapter-nav__num">
              {String(prev.n).padStart(2, "0")}
            </span>
            {prev.name}
          </span>
        </Link>
      ) : (
        <Link to="/summary" className="chapter-nav__card">
          <span className="chapter-nav__dir">← Library</span>
          <span className="chapter-nav__label">
            <span className="chapter-nav__num">ॐ</span>
            All 18 chapters
          </span>
        </Link>
      )}

      <Link to="/summary" className="chapter-nav__center" aria-label="All chapters">
        <OmMark size={30} strokeWidth={1.3} />
      </Link>

      {next ? (
        <Link
          to={`/chapter${next.n}`}
          className="chapter-nav__card chapter-nav__card--next"
        >
          <span className="chapter-nav__dir">Next →</span>
          <span className="chapter-nav__label">
            <span className="chapter-nav__num">
              {String(next.n).padStart(2, "0")}
            </span>
            {next.name}
          </span>
        </Link>
      ) : (
        <Link
          to="/chat"
          className="chapter-nav__card chapter-nav__card--next"
        >
          <span className="chapter-nav__dir">Continue →</span>
          <span className="chapter-nav__label">
            <span className="chapter-nav__num">ॐ</span>
            Reflect with GitaGPT
          </span>
        </Link>
      )}
    </nav>
  );
};

export default ChapterNav;
