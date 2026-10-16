import React from "react";
import { Link } from "react-router-dom";
import { LotusMotif, MandalaMotif, OmMark } from "./Motifs.jsx";
import "./TeamSection.css";

const MEMBERS = [
  {
    name: "Priyanshu Vishwakarma",
    roll: "2205251540038",
    href: "https://www.instagram.com/priyyannshhu",
  },
  {
    name: "Alok Kumar Mishra",
    roll: "2205251540011",
    href: "https://www.instagram.com/alok_mishra_456/",
  },
  {
    name: "Sarthak Suvigya Singh",
    roll: "2205251540043",
    href: "https://www.instagram.com/s8arthak",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section bg-temple-gold">
      <MandalaMotif
        size={620}
        className="deco spin-slow team-section__mandala"
        stroke="#ffe0a0"
        opacity={0.13}
      />
      <div className="container team-section__inner">
        <div className="team-section__head">
          <OmMark size={48} className="team-section__om" strokeWidth={1.3} />
          <p className="eyebrow">Built with devotion</p>
          <h2 className="section-title">The BlueGen team</h2>
          <p className="team-section__lead">
            We are all students of B.Tech (Data Science), Third Year at Buddha
            Institute of Technology, GIDA, Gorakhpur.
          </p>
        </div>

        <ul className="team-grid">
          {MEMBERS.map((m) => (
            <li key={m.roll}>
              <Link
                to={`${m.href}`}
                className="team-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="team-card__seal" aria-hidden="true">
                  {m.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
                <span className="team-card__name">{m.name}</span>
                <span className="team-card__roll">Roll No. {m.roll}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="team-section__foot">
          <LotusMotif width={72} className="team-section__lotus" />
          <p>BlueGen by Alok, Priyanshu &amp; Sarthak</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
