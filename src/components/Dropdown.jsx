import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Dropdown.css";

export const CHAPTER_LIST = [
  { n: 1, name: "Arjuna Vishada Yoga" },
  { n: 2, name: "Sankhya Yoga" },
  { n: 3, name: "Karma Yoga" },
  { n: 4, name: "Jnana Karma Sanyasa Yoga" },
  { n: 5, name: "Karma Sanyasa Yoga" },
  { n: 6, name: "Dhyana Yoga" },
  { n: 7, name: "Jnana Vijnana Yoga" },
  { n: 8, name: "Aksara Brahma Yoga" },
  { n: 9, name: "Raja Vidya Raja Guhya Yoga" },
  { n: 10, name: "Vibhuti Yoga" },
  { n: 11, name: "Vishwarupa Darshana Yoga" },
  { n: 12, name: "Bhakti Yoga" },
  { n: 13, name: "Kshetra Kshetragna Vibhaga Yoga" },
  { n: 14, name: "Gunatraya Vibhaga Yoga" },
  { n: 15, name: "Purushottama Yoga" },
  { n: 16, name: "Daivasura Sampad Vibhaga Yoga" },
  { n: 17, name: "Sraddhatraya Vibhaga Yoga" },
  { n: 18, name: "Moksha Sanyasa Yoga" },
];

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const { pathname } = useLocation();
  const current = Number((pathname.match(/chapter(\d+)/) || [])[1] || 0);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="dropdown" ref={wrapRef}>
      <button
        type="button"
        className="dropdown__trigger"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="dropdown__om" aria-hidden="true">
          {"\u0950"}
        </span>
        {current ? `Chapter ${current} of 18` : "All Chapters"}
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={`dropdown__panel ${open ? "is-open" : ""}`}>
        <Link to="/books" className="dropdown__link dropdown__link--intro">
          <span className="dropdown__num" aria-hidden="true">
            ॐ
          </span>
          About the Bhagavad Gita
        </Link>
        <div className="dropdown__rule" aria-hidden="true" />
        <div className="dropdown__scroll">
          {CHAPTER_LIST.map(({ n, name }) => (
            <Link
              key={n}
              to={`/chapter${n}`}
              className={`dropdown__link ${n === current ? "is-current" : ""}`}
            >
              <span className="dropdown__num" aria-hidden="true">
                {String(n).padStart(2, "0")}
              </span>
              {name}
            </Link>
          ))}
        </div>
        <div className="dropdown__rule" aria-hidden="true" />
        <Link to="/summary" className="dropdown__link dropdown__link--intro">
          <span className="dropdown__num" aria-hidden="true">
            ✦
          </span>
          Browse all chapter summaries
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
