import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BrandMark } from "./Motifs.jsx";
import "./Header.css";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/chat", label: "GitaGPT" },
  { to: "/books", label: "Bhagavad Gita" },
  { to: "/summary", label: "Chapters" },
  { to: "/quotes", label: "Quotes" },
  { to: "/about", label: "About" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTranslate, setShowTranslate] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const translateRef = useRef(null);
  const location = useLocation();

  /* Close the mobile drawer whenever the route changes */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /* Warm the header with a gold hairline + deeper shadow once scrolled */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Google Translate — preserved from the original BlueGen header */
  useEffect(() => {
    if (!showTranslate) return undefined;

    const mount = () => {
      const host = translateRef.current;
      if (!host || !window.google?.translate?.TranslateElement) return;
      host.innerHTML = "";
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout:
            window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    window.loadGoogleTranslate = mount;

    let script = document.getElementById("bluegen-translate-script");
    if (!script) {
      script = document.createElement("script");
      script.id = "bluegen-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
      script.async = true;
      document.body.appendChild(script);
    } else {
      mount();
    }

    return () => {
      window.loadGoogleTranslate = undefined;
    };
  }, [showTranslate]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <Link to="/" className="brand" aria-label="BlueGen home">
          <BrandMark size={42} className="brand__mark" />
          <span className="brand__text">
            <span className="brand__name">BlueGen</span>
            <span className="brand__tag">Gita&nbsp;·&nbsp;AI Companion</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <ul className={`site-nav__list ${menuOpen ? "is-open" : ""}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `site-nav__link ${isActive ? "is-active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="site-nav__cta-wrap">
              <Link to="/chat" className="btn btn--primary btn--sm site-nav__cta">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"
                    fill="currentColor"
                  />
                </svg>
                Ask GitaGPT
              </Link>
            </li>
          </ul>

          <div className="site-nav__actions">
            <button
              type="button"
              className="icon-btn"
              aria-pressed={showTranslate}
              aria-label="Toggle translation"
              title="Translate"
              onClick={() => setShowTranslate((v) => !v)}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                <path
                  d="M4 5h9M8.5 5v1.5c0 3.2-1.7 6-4.5 7.5M6 9.5c.9 2 2.6 3.6 4.8 4.3M13.5 20l3.6-9 3.6 9M14.9 17h4.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className={`burger ${menuOpen ? "is-open" : ""}`}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>

      {showTranslate ? (
        <div className="translate-drawer">
          <div
            id="google_translate_element"
            ref={translateRef}
            className="translate-drawer__mount"
          />
        </div>
      ) : null}

      {menuOpen ? (
        <button
          type="button"
          className="nav-scrim"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </header>
  );
};

export default Header;
