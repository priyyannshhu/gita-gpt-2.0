import React from "react";
import { Link } from "react-router-dom";
import { OmMark, MandalaMotif } from "../components/Motifs.jsx";
import "./NotFound.css";

const NotFound = () => (
  <div className="notfound bg-krishnas-wisdom">
    <MandalaMotif
      size={620}
      className="deco spin-slow notfound__mandala"
      stroke="#b8420f"
      opacity={0.14}
    />
    <div className="container notfound__inner">
      <OmMark size={72} className="notfound__om" />
      <p className="eyebrow eyebrow--both">Page not found</p>
      <h1 className="section-title">
        This path is not in the Gita&rsquo;s eighteen chapters
      </h1>
      <p className="section-sub mx-auto">
        The page you were looking for could not be found. Return to the
        sanctuary and continue your journey through the wisdom of Shri Krishna.
      </p>
      <div className="notfound__actions">
        <Link to="/" className="btn btn--primary">
          Return home
        </Link>
        <Link to="/chat" className="btn btn--ghost">
          Ask GitaGPT
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
