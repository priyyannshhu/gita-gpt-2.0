import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  KrishnaFigure,
  MandalaMotif,
  OmMark,
  LotusMotif,
  FluteMotif,
  PeacockFeatherMotif,
  OrnamentDivider,
  TempleArchMotif,
} from "../components/Motifs.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { CHAPTER_LIST } from "../components/Dropdown.jsx";
import "./HomePage.css";

/* A short, well-known shloka set — all drawn from the Gita teachings that
   BlueGen already presents elsewhere on the site. */
const SHLOKAS = [
  {
    ref: "Bhagavad Gita 2.47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
    english: "You have the right to work, but never to the fruit of work.",
  },
  {
    ref: "Bhagavad Gita 2.20",
    sanskrit: "न जायते म्रियते वा कदाचिन्",
    english: "The soul is neither born, and nor does it die.",
  },
  {
    ref: "Bhagavad Gita 6.5",
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्",
    english:
      "One should strive to uplift oneself; one should never dishonour oneself.",
  },
];

const PATHS = [
  {
    to: "/chat",
    eyebrow: "GitaGPT",
    title: "Ask your question",
    body: "Share what weighs on your mind and explore it through the timeless teachings of the Bhagavad Gita.",
    cta: "Ask GitaGPT",
  },
  {
    to: "/books",
    eyebrow: "The Scripture",
    title: "Read all 18 chapters",
    body: "A complete, beautifully presented scripture library — Sanskrit shlokas, English translation and commentary.",
    cta: "Open the library",
  },
  {
    to: "/quotes",
    eyebrow: "Reflection",
    title: "Daily wisdom",
    body: "Carry a verse with you. Gentle reminders of dharma, karma and inner steadiness from Shri Krishna.",
    cta: "Explore quotes",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  /* Subtle parallax on the hero illustration — pointer driven, disabled for
     reduced-motion users and on touch/small screens. */
  useEffect(() => {
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.innerWidth > 900;
    if (reduced || !wide) return undefined;

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setTilt({ x: x * 9, y: y * 7 });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="home">
      {/* ============================================================ HERO */}
      <section className="hero bg-divine-saffron" ref={heroRef}>
        <MandalaMotif
          size={880}
          className="deco spin-slow hero__mandala"
          stroke="#fff0c9"
          opacity={0.16}
        />
        <MandalaMotif
          size={520}
          className="deco hero__mandala hero__mandala--sm"
          stroke="#ffe0a0"
          opacity={0.12}
        />

        <div className="container hero__inner">
          <div className="hero__copy">
            <Reveal as="span" className="badge badge--dark hero__badge">
              <span aria-hidden="true">{"\u0950"}</span> Sanatan wisdom · Modern
              AI
            </Reveal>

            <Reveal delay={90}>
              <h1 className="hero__title">
                Find Your Answers in the Wisdom of{" "}
                <span className="gradient-text">Shri Krishna.</span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="hero__lead">
                Explore the timeless teachings of the Bhagavad Gita, discover
                deeper meaning, and find guidance for life&rsquo;s questions
                through GitaGPT.
              </p>
            </Reveal>

            <Reveal delay={250} className="hero__actions">
              <button
                type="button"
                className="btn-ask btn-ask--hero"
                onClick={() => navigate("/chat")}
              >
                <OmMark size={22} className="btn-ask__om" strokeWidth={2} />
                Ask GitaGPT
              </button>
              <Link to="/books" className="btn btn--outline-light btn--lg">
                Explore the Bhagavad Gita
              </Link>
            </Reveal>

            <Reveal delay={330} className="hero__meta">
              <span>
                <strong>18</strong> chapters
              </span>
              <span className="hero__meta-dot" aria-hidden="true" />
              <span>
                <strong>700</strong> shlokas
              </span>
              <span className="hero__meta-dot" aria-hidden="true" />
              <span>
                <strong>1</strong> timeless conversation
              </span>
            </Reveal>
          </div>

          <div className="hero__art" aria-hidden="true">
            <div
              className="hero__art-inner"
              style={{ transform: `translate3d(${tilt.x}px, ${tilt.y}px, 0)` }}
            >
              <span className="hero__glow" />
              <KrishnaFigure height={430} className="hero__krishna float" />
              <FluteMotif width={230} className="deco hero__flute" />
              <PeacockFeatherMotif
                height={214}
                className="deco hero__feather float--slow"
              />
              <LotusMotif width={128} className="deco hero__lotus" />
            </div>
          </div>
        </div>

        <div className="hero__base" aria-hidden="true">
          <span className="hero__base-line" />
          <OmMark size={44} strokeWidth={1.2} />
          <span className="hero__base-line" />
        </div>
      </section>

      {/* ================================================== SHLOKA / SCRIPTURE */}
      <section className="shloka-band bg-krishnas-wisdom">
        <div className="container">
          <Reveal className="shloka-band__head center">
            <p className="eyebrow eyebrow--both">Shravana · Listening</p>
            <h2 className="section-title">
              The dialogue that answered Arjuna&rsquo;s despair
            </h2>
            <p className="section-sub mx-auto">
              On the field of Kurukshetra, Shri Krishna spoke to Arjuna not as a
              warrior to a warrior, but as a friend guiding a troubled mind.
              Those same words continue to steady us today.
            </p>
          </Reveal>

          <div className="shloka-grid">
            {SHLOKAS.map((s, i) => (
              <Reveal key={s.ref} delay={i * 110} className="card card--temple shloka-card">
                <span className="shloka-card__om" aria-hidden="true">
                  {"\u0950"}
                </span>
                <p className="shloka-card__sanskrit devanagari">{s.sanskrit}</p>
                <span className="shloka-card__rule" aria-hidden="true" />
                <p className="shloka-card__english">{s.english}</p>
                <p className="shloka-card__ref">{s.ref}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== THE PATHS */}
      <section className="paths section bg-flute-peacock">
        <div className="container">
          <Reveal className="center">
            <p className="eyebrow eyebrow--both">Three ways to begin</p>
            <h2 className="section-title">A digital sanctuary for the Gita</h2>
          </Reveal>

          <div className="paths__grid">
            {PATHS.map((p, i) => (
              <Reveal
                key={p.to}
                delay={i * 120}
                className="card card--temple card-lift path-card"
              >
                <div className="path-card__icon" aria-hidden="true">
                  {i === 0 ? (
                    <OmMark size={46} strokeWidth={1.2} />
                  ) : i === 1 ? (
                    <TempleArchMotif size={46} />
                  ) : (
                    <LotusMotif width={54} />
                  )}
                </div>
                <p className="path-card__eyebrow">{p.eyebrow}</p>
                <h3 className="path-card__title">{p.title}</h3>
                <p className="path-card__body">{p.body}</p>
                <Link to={p.to} className="path-card__cta">
                  {p.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== VERSE OF THE DAY */}
      <section className="verse-day bg-temple-gold">
        <MandalaMotif
          size={620}
          className="deco spin-slow verse-day__mandala"
          stroke="#ffe0a0"
          opacity={0.14}
        />
        <div className="container verse-day__inner">
          <Reveal className="verse-day__card">
            <p className="eyebrow">Verse of the day</p>
            <p className="verse-day__ref">Bhagavad Gita 6.40</p>
            <blockquote className="verse-day__quote">
              &ldquo;O Arjuna, neither in this world nor in the next will there
              be destruction for him; none, indeed, who does good, O my son,
              ever comes to grief.&rdquo;
            </blockquote>
            <OrnamentDivider />
            <div className="verse-day__actions">
              <Link to="/books" className="btn btn--gold btn--sm">
                More verses
              </Link>
              <Link to="/chat" className="btn btn--outline-light btn--sm">
                Reflect with GitaGPT
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====================================================== THE 18 YOGAS */}
      <section className="chapters-preview section bg-krishnas-wisdom">
        <div className="container">
          <Reveal className="center">
            <p className="eyebrow eyebrow--both">Eighteen chapters, one teaching</p>
            <h2 className="section-title">Journey through the Yoga of the Gita</h2>
            <p className="section-sub mx-auto">
              From Arjuna&rsquo;s despondency to liberation through renunciation
              — each chapter is a step on the same path.
            </p>
          </Reveal>

          <div className="chapters-preview__grid">
            {CHAPTER_LIST.map(({ n, name }, i) => (
              <Reveal key={n} delay={Math.min(i, 8) * 55}>
                <Link to={`/chapter${n}`} className="chapter-tile">
                  <span className="chapter-tile__num">
                    {String(n).padStart(2, "0")}
                  </span>
                  <span className="chapter-tile__name">{name}</span>
                  <span className="chapter-tile__om" aria-hidden="true">
                    {"\u0950"}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="center chapters-preview__more" delay={120}>
            <Link to="/summary" className="btn btn--ghost">
              Browse all chapter summaries
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ CLOSING */}
      <section className="closing bg-divine-saffron">
        <div className="container closing__inner">
          <Reveal>
            <PeacockFeatherMotif height={150} className="deco closing__feather" />
            <h2 className="closing__title">
              Namaste. What is on your mind?
            </h2>
            <p className="closing__lead">
              BlueGen is an AI companion that helps you explore Shri
              Krishna&rsquo;s teachings — never a substitute for the scripture
              itself, always a companion on the way.
            </p>
            <div className="closing__actions">
              <Link to="/chat" className="btn btn--gold btn--lg">
                Ask GitaGPT
              </Link>
              <Link to="/about" className="btn btn--outline-light btn--lg">
                Our mission
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
