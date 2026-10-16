import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { OmMark, MandalaMotif } from "../components/Motifs.jsx";
import { Reveal } from "../components/Reveal.jsx";
import "./SummaryPage.css";

const SummaryPage = () => {
  const navigate = useNavigate();

  const chapters = [
    {
      title: "Gita Ch 01 – Arjuna Vishada Yoga",
      verses: 47,
      description:
        "Arjuna the great warrior is overpowered by grief and delusion born out of a sense of attachment to his kith and kin. In his delusory state, he makes several fallacious…",
    },
    {
      title: "Gita Ch 02 – Sankhya Yoga",
      verses: 72,
      description:
        "Arjuna acknowledges in the opening few verses that he is confused about his duty and surrenders to the Lord to instruct him about what is good for him. Thereafter, the Lord…",
    },
    {
      title: "Gita Ch 03 – Karma Yoga",
      verses: 43,
      description:
        "In this chapter, the Lord teaches the importance of action and explains why and how one must act in the world so that the mind and intellect are purified and relieved of…",
    },
    {
      title: "Gita Ch 04 – Jnana Yoga",
      verses: 42,
      description:
        "Having emphasized the importance of action in the previous chapter, here the Lord begins a gradual transition to the superiority of pursuing knowledge. Virtues of the man of…",
    },
    {
      title: "Gita Ch 05 – Sanyasa Yoga",
      verses: 29,
      description:
        "This chapter stands as a bridge between the action-oriented life extolled by the Lord in the previous two chapters and the life of contemplation that follows in the next. The…",
    },
    {
      title: "Gita Ch 06 – Dhyana Yoga",
      verses: 47,
      description:
        "This chapter provides practical methods of meditation for one who has purified the mind by diligently engaging in karma-yoga described in the previous chapters. For such a…",
    },
    {
      title: "Gita Ch 07 – Jnana Vijnana Yoga",
      verses: 30,
      description:
        "The middle set of 6 chapters beginning with this one are an exposition of the Supreme Reality and how it seemingly manifests as the world we perceive. Here the Lord describes…",
    },
    {
      title: "Gita Ch 08 – Akshara Brahma Yoga",
      verses: 28,
      description:
        "The previous chapter concluded by introducing certain technical terms and this one begins with an explanation of those. It then details various spiritual practices undertaken…",
    },
    {
      title: "Gita Ch 09 – Raja Vidya Raja Guhya Yoga",
      verses: 34,
      description:
        "The previous chapter was a brief digression into techniques of saguna-upasana which is not the main theme of the Gita. Here the Lord continues the teaching as it was given in…",
    },
    {
      title: "Gita Ch 10 – Vibuthi Yoga",
      verses: 42,
      description:
        "Arjuna acknowledges the Supreme nature of the Lord but asks how He can constantly be remembered even as one is perceiving this pluralistic world. In response, the Lord…",
    },
    {
      title: "Gita Ch 11 – Viswarupa Darshana Yoga",
      verses: 55,
      description:
        "In this chapter, Lord Krishna gifts Arjuna the divine vision which enables him to perceive the Lord in His Cosmic form – a form that even the Gods long to see but are unable…",
    },
    {
      title: "Gita Ch 12 – Bhakti Yoga",
      verses: 20,
      description:
        "The shortest chapter of the Gita but in some ways one of the most important ones because it clearly explains the meaning of a term that is often misunderstood – Bhakti. The…",
    },
    {
      title: "Gita Ch 13 – Prakrti Purusha Viveka Yoga",
      verses: 34,
      description:
        "Whereas the first 6 chapters of the Gita were focused on the individual self (jiva) and the next 6 on the seemingly external Supreme Reality (Ishvara), the final 6 chapters…",
    },
    {
      title: "Gita Ch 14 – Guna Traya Vibhaga Yoga",
      verses: 24,
      description:
        "If the entire observed universe is nothing but the One Self expressing through the world of matter, how do we explain the endless variety of forms and experiences, each…",
    },
    {
      title: "Gita Ch 15 – Purushottama Yoga",
      verses: 20,
      description:
        "In this chapter, the Lord describes the nature of the Supreme Spirit in all its implications. This…",
    },

    {
      title: "Gita Ch 16 – Daivasura Sampad Vibhaga Yoga",
      verses: 24,
      description:
        "This chapter contrasts the divine qualities and demoniacal qualities. The Lord explains how one can cultivate divine qualities and avoid demoniacal tendencies…",
    },
    {
      title: "Gita Ch 17 – Sraddhatraya Vibhaga Yoga",
      verses: 28,
      description:
        "This chapter deals with the threefold faith of individuals and how it manifests in their worship, actions, and goals. The Lord discusses the significance of one’s faith…",
    },
    {
      title: "Gita Ch 18 – Moksha Sanyasa Yoga",
      verses: 78,
      description:
        "The concluding chapter summarizes the teachings of the Gita and highlights the path to liberation, emphasizing the importance of selfless action and devotion…",
    },
  ];

  const handleChapterClick = (index) => {
    navigate(`/chapter${index + 1}`);
  };

  return (
    <div className="summary-page">
      <section className="summary-hero bg-divine-saffron">
        <MandalaMotif
          size={620}
          className="deco spin-slow summary-hero__mandala"
          stroke="#fff0c9"
          opacity={0.14}
        />
        <div className="container summary-hero__inner">
          <OmMark size={56} className="summary-hero__om" strokeWidth={1.3} />
          <p className="eyebrow eyebrow--both">The eighteen yogas</p>
          <h1>Chapters of the Srimad Bhagavad Gita</h1>
          <p>
            From Arjuna&rsquo;s despondency on the field of Kurukshetra to
            liberation through renunciation &mdash; open any chapter, read its
            verses, and follow the commentary.
          </p>
        </div>
      </section>

      <section className="summary-body bg-krishnas-wisdom">
        <div className="container">
          <div className="summary-grid">
            {chapters.map((chapter, index) => (
              <Reveal key={index} delay={Math.min(index, 8) * 60}>
                <div
                  className="summary-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleChapterClick(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleChapterClick(index);
                    }
                  }}
                >
                  <span className="summary-card__num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="summary-card__title">{chapter.title}</h2>
                  <p className="summary-card__verses">{chapter.verses} Verses</p>
                  <p className="summary-card__desc">{chapter.description}</p>
                  <span className="summary-card__cta">
                    Read chapter <span aria-hidden="true">&rarr;</span>
                  </span>
                  <span className="summary-card__om" aria-hidden="true">
                    {"\u0950"}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="summary-cta">
            <Link to="/books" className="btn btn--primary">
              About the Bhagavad Gita
            </Link>
            <Link to="/chat" className="btn btn--ghost">
              Ask GitaGPT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SummaryPage;
