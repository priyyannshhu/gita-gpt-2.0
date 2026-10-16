import React from "react";
import { Link } from "react-router-dom";
import {
  KrishnaFigure,
  MandalaMotif,
  OmMark,
  LotusMotif,
  TempleArchMotif,
} from "../components/Motifs.jsx";
import { Reveal } from "../components/Reveal.jsx";
import "./About.css";

const PILLARS = [
  {
    icon: <OmMark size={40} strokeWidth={1.3} />,
    title: "Our Goal",
    body: "Our goal is to create a chatbot that makes it easy for you to talk about the lessons from the Bhagavad Gita. Think of it as a guide that listens to your questions and offers thoughtful answers based on the wisdom of Lord Krishna.",
  },
  {
    icon: <LotusMotif width={48} />,
    title: "What We Provide",
    body: "At the center of BlueGen is GitaGPT, our AI chatbot. You can ask it anything that's on your mind, and it will give you helpful responses based on the teachings of the Gita. This way, you can find support and insight as you navigate through life.",
  },
  {
    icon: <TempleArchMotif size={40} />,
    title: "Experience the Teachings",
    body: "We want to create a warm and welcoming space where anyone can explore the teachings of the Bhagavad Gita. Whether you're facing tough choices or looking for peace, our chatbot is here to help you discover the wisdom you need.",
  },
];

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero bg-divine-saffron">
        <MandalaMotif
          size={820}
          className="deco spin-slow about-hero__mandala"
          stroke="#fff0c9"
          opacity={0.15}
        />
        <div className="container about-hero__inner">
          <Reveal>
            <p className="eyebrow eyebrow--both">About BlueGen</p>
            <h1>Ancient wisdom, offered through modern AI</h1>
            <p>
              BlueGen is a friendly space where you can connect with the wisdom
              of the Bhagavad Gita using artificial intelligence. We believe that
              these teachings can help everyone in today&rsquo;s busy world.
            </p>
            <div className="about-hero__actions">
              <Link to="/chat" className="btn btn--gold btn--lg">
                Ask GitaGPT
              </Link>
              <Link to="/books" className="btn btn--outline-light btn--lg">
                Read the Gita
              </Link>
            </div>
          </Reveal>

          <Reveal className="about-hero__art" delay={120} aria-hidden="true">
            <span className="about-hero__glow" />
            <KrishnaFigure height={340} className="about-hero__krishna float" />
          </Reveal>
        </div>
      </section>

      <section className="about-mission bg-krishnas-wisdom">
        <div className="container">
          <Reveal className="center">
            <p className="eyebrow eyebrow--both">Our mission</p>
            <h2 className="section-title">
              Connecting the Gita with the way we live now
            </h2>
            <p className="section-sub mx-auto">
              Shri Krishna&rsquo;s counsel to Arjuna was a conversation —
              personal, patient and practical. BlueGen exists to keep that
              conversation available to anyone, at any hour.
            </p>
          </Reveal>

          <div className="about-grid">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 110} className="about-card">
                <span className="about-card__icon" aria-hidden="true">
                  {p.icon}
                </span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-closing bg-temple-gold">
        <div className="container about-closing__inner">
          <Reveal>
            <OmMark size={56} className="about-closing__om" strokeWidth={1.3} />
            <h2>Join Our Community</h2>
            <p>
              BlueGen is not just a place to learn; it&rsquo;s a community. We
              invite you to share your experiences, connect with others, and grow
              together on this spiritual journey.
            </p>
            <div className="about-closing__actions">
              <Link to="/quotes" className="btn btn--gold">
                Browse quotes
              </Link>
              <Link to="/summary" className="btn btn--outline-light">
                All 18 chapters
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;
