import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { BrandMark, LotusMotif } from "./Motifs.jsx";
import "./Footer.css";

const EXPLORE = [
  { to: "/chat", label: "GitaGPT" },
  { to: "/books", label: "Bhagavad Gita" },
  { to: "/summary", label: "All 18 Chapters" },
  { to: "/quotes", label: "Gita Quotes" },
];

const ABOUT_LINKS = [
  { to: "/about", label: "About BlueGen" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/privacy", label: "Privacy Policy" },
];

const SOCIALS = [
  {
    href: "https://github.com/priyyannshhu",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/priyanshu-vishwakarmaa/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://wa.me/+919451660562",
    label: "WhatsApp",
    Icon: FaWhatsapp,
  },
  {
    href: "mailto:priyanshu4help@gmail.com",
    label: "Email",
    Icon: FaEnvelope,
  },
  {
    href: "https://www.instagram.com/priyyannshhu",
    label: "Instagram",
    Icon: FaInstagram,
  },
];

const FooterBar = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__glow" aria-hidden="true" />

      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <div className="site-footer__brand-top">
            <BrandMark size={46} />
            <div>
              <p className="site-footer__name">BlueGen</p>
              <p className="site-footer__tagline">
                Your AI-powered Bhagavad Gita companion
              </p>
            </div>
          </div>
          <p className="site-footer__verse">
            <span className="devanagari">यदा यदा हि धर्मस्य ग्लानिर्भवति भारत</span>
            <span className="site-footer__verse-en">
              “Whenever dharma declines, I manifest Myself.” — Shri Krishna,
              Bhagavad Gita 4.7
            </span>
          </p>
        </div>

        <nav className="site-footer__col" aria-label="Explore">
          <h4>Explore</h4>
          <ul>
            {EXPLORE.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer__col" aria-label="BlueGen">
          <h4>BlueGen</h4>
          <ul>
            {ABOUT_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__col">
          <h4>Connect</h4>
          <ul className="site-footer__socials">
            {SOCIALS.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="icon" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container site-footer__base">
        <LotusMotif width={64} className="site-footer__lotus" />
        <p>
          © BlueGen 2024. All rights reserved. Built with devotion for the
          wisdom of the Bhagavad Gita.
        </p>
      </div>
    </footer>
  );
};

export default FooterBar;
