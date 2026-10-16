import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  MandalaMotif,
  OmMark,
  PeacockFeatherMotif,
  OrnamentDivider,
} from "../components/Motifs.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { CHAPTER_LIST } from "../components/Dropdown.jsx";
import bannerImage from "../assets/images/banner2.webp";
import "./BooksPage.css";

/* The typing flourish from the original Books page ("AnyWhere / AnyTime"),
   now rendered inline in the hero so it never competes with the headline. */
const TypedWord = ({ words = ["AnyWhere", "AnyTime"], className = "" }) => {
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const state = useRef({ word: 0, char: 0, deleting: false });

  useEffect(() => {
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(words.join(" · "));
      return undefined;
    }

    let timer;
    const tick = () => {
      const s = state.current;
      const current = words[s.word % words.length];

      if (!s.deleting) {
        s.char += 1;
        setTyping(true);
        setText(current.slice(0, s.char));
        if (s.char >= current.length) {
          s.deleting = true;
          timer = setTimeout(tick, 1900);
          return;
        }
        timer = setTimeout(tick, 190);
      } else {
        s.char -= 1;
        setTyping(false);
        setText(current.slice(0, s.char));
        if (s.char <= 0) {
          s.deleting = false;
          s.word += 1;
          timer = setTimeout(tick, 420);
          return;
        }
        timer = setTimeout(tick, 95);
      }
    };

    timer = setTimeout(tick, 1200);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <span className={className}>
      <span className="typing-host">{text}</span>
      <span className={`cursor ${typing ? "typing" : ""}`} aria-hidden="true" />
    </span>
  );
};

const BookPage = () => {
  return (
    <div className="books-page">
      {/* ============================================================== HERO */}
      <section className="books-hero bg-divine-saffron">
        <MandalaMotif
          size={780}
          className="deco spin-slow books-hero__mandala"
          stroke="#fff0c9"
          opacity={0.15}
        />
        <div className="container books-hero__inner">
          <Reveal className="books-hero__copy">
            <p className="eyebrow eyebrow--both">The Scripture</p>
            <h1>Discover the Wisdom of the Bhagavad Gita</h1>
            <p className="books-hero__lead">
              Seven hundred shlokas of Sanskrit verse, spoken by Shri Krishna to
              Arjuna on the field of Kurukshetra — presented here with
              translation and commentary, free to read.
            </p>
            <p className="books-hero__typed">
              Bhagavad Gita &mdash; <TypedWord />
            </p>
            <div className="books-hero__actions">
              <Link to="/summary" className="btn btn--gold btn--lg">
                Read the Gita
              </Link>
              <Link to="/chat" className="btn btn--outline-light btn--lg">
                Ask GitaGPT
              </Link>
            </div>
          </Reveal>

          <Reveal className="books-hero__shell" delay={120}>
            <span className="books-hero__glow" aria-hidden="true" />
            <img src={bannerImage} alt="Srimad Bhagavad Gita" />
            <PeacockFeatherMotif
              height={150}
              className="deco books-hero__feather"
            />
          </Reveal>
        </div>
      </section>

      {/* =================================================== CHAPTER LIBRARY */}
      <section className="books-chapters bg-flute-peacock">
        <div className="container">
          <Reveal className="center">
            <p className="eyebrow eyebrow--both">Explore the chapters</p>
            <h2 className="section-title">Eighteen yogas, one path</h2>
            <p className="section-sub mx-auto">
              Begin at the beginning, or open any chapter of the Gita directly.
            </p>
          </Reveal>

          <div className="books-chapters__grid">
            {CHAPTER_LIST.map(({ n, name }, i) => (
              <Reveal key={n} delay={Math.min(i, 7) * 45}>
                <Link to={`/chapter${n}`} className="books-chapter-link">
                  <span className="books-chapter-link__num">
                    {String(n).padStart(2, "0")}
                  </span>
                  {name}
                </Link>
              </Reveal>
            ))}
            <Reveal delay={400}>
              <Link
                to="/summary"
                className="books-chapter-link books-chapter-link--all"
              >
                <OmMark size={22} strokeWidth={1.6} />
                View all summaries
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================== PANELS */}
      <section className="books-panels bg-krishnas-wisdom">
        <div className="container">
          <Reveal className="books-panel card--temple">
            <h2>
              <span className="om" aria-hidden="true">
                ॐ
              </span>
              About the Bhagavad Gita
            </h2>
            <p>
              Bhagavad Gita, also known as the Gita &mdash; &ldquo;The Song of
              The Lord&rdquo; is a practical guide to one&rsquo;s life that
              guides one to reorganize their life, achieve inner peace and
              approach the Supreme Lord (the Ultimate Reality). It is a
              700-verse text in Sanskrit which comprises chapters 23 through 40
              in the Bhishma-Parva section of the Mahabharata.
            </p>
            <p>
              The Bhagavad Gita is a dialogue between Arjuna, a supernaturally
              gifted warrior and his guide and charioteer Lord Krishna on the
              battlefield of Kurukshetra. As both armies stand ready for the
              battle, the mighty warrior Arjuna, on observing the warriors on
              both sides becomes overwhelmed with grief and compassion due to the
              fear of losing his relatives and friends and the consequent sins
              attributed to killing his own relatives. So, he surrenders to Lord
              Krishna, seeking a solution. Thus, follows the wisdom of the
              Bhagavad Gita. Over 18 chapters, Gita packs an intense analysis of
              life, emotions and ambitions, discussion of various types of yoga,
              including Jnana, Bhakti, Karma and Raja, the difference between
              Self and the material body as well as the revelation of the
              Ultimate Purpose of Life.
            </p>
          </Reveal>

          <Reveal className="books-panel card--temple" delay={80}>
            <h2>
              <span className="om" aria-hidden="true">
                ॐ
              </span>
              Srimad Bhagavad Gita &mdash; Song of God
            </h2>
            <p>
              The Bhagavad Gita, or the Song of the Lord, is a dialogue between
              Krishna, an incarnation of Vishnu, and his friend and disciple,
              Arjuna. This dialogue takes place in the Bhishma Parva of the
              Mahabharata. The Bhagavad Gita is composed of 701 Shlokas (verses)
              arranged in 18 chapters. It is one of the best-known philosophical
              texts of Hinduism and is said to contain the essence of
              Upanishadic thought.
            </p>
            <p>
              The Bhagavad Gita occurs just before the great battle of
              Mahabharata begins. The army mustered by the five Pandava brothers
              was to fight the battle against the army of the Pandava&rsquo;s
              cousin, Duryodhana, who had robbed them of their rightful kingdom
              and further refused to participate in any plans for a compromise.
              After making all possible attempts to peacefully get back their
              kingdom, or even the right to own a mere five villages in the
              kingdom, the Pandava brothers decided to fight a war to gain
              justice.
            </p>
            <p>
              Arjuna, the third of the five Pandava princes, was perhaps the
              greatest and most renowned warrior-hero in the Pandava army.
              Before the battle began, both Duryodhana and Arjuna went to Krishna
              to seek his aid. Krishna said that he would not personally lift
              weapons and fight in the battle, but the cousins could choose to
              have him, unarmed, on their side, or to have the use of his large
              army. Arjuna chose to have Krishna with him, and Duryodhana was
              delighted to add the vast, skilled army of Krishna to his forces.
              Krishna agreed to drive Arjuna&rsquo;s chariot and thus be with him
              throughout the battle.
            </p>
            <p>
              Just before the fighting commenced, Arjuna asked Krishna to place
              his chariot between the two armies, so that he could take a good
              look at his enemy. In the enemy ranks, Arjuna saw his cousins,
              other relatives, and his teachers. At this crucial moment,
              Arjuna&rsquo;s attachment to his preceptors and family came to the
              fore, and doubt entered his mind as to the &lsquo;rightness&rsquo;
              of the battle. In his confusion, he no longer knew the course of
              action that he should take and he turned to Krishna for guidance.
              Krishna talked to him, helping him to examine his own motives and
              desires, and showing him ways to rise above the limitations of his
              own personality to do what was best for himself and good for
              society. This dialogue between Krishna and Arjuna is the Bhagavad
              Gita.
            </p>
            <p>
              The eighteen chapters of the Bhagavad Gita are classified as
              &lsquo;Yogas&rsquo;, starting with the &lsquo;yoga&rsquo; of
              Arjuna&rsquo;s depression and ending with the Yoga of
              &lsquo;liberation through renunciation&rsquo;.
            </p>
          </Reveal>

          <Reveal className="books-verse" delay={140}>
            <h2>Verse of the Day &mdash; BG 6.40</h2>
            <blockquote>
              The Blessed Lord said, &ldquo;O Arjuna, neither in this world nor
              in the next will there be destruction for him; none, indeed, who
              does good, O my son, ever comes to grief.&rdquo;
            </blockquote>
            <OrnamentDivider style={{ marginBottom: 0 }} />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default BookPage;
