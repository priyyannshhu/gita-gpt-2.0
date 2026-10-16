/* ============================================================================
   BLUEGEN — SACRED MOTIF LIBRARY
   Original, first-party SVG ornaments: Om, lotus, mandala, flute, peacock
   feather, Krishna silhouette, temple arch and golden ornamental dividers.

   Every motif is decorative only: aria-hidden + focusable="false" +
   pointer-events:none when rendered through the `.deco` class.
   ========================================================================== */

import React, { useId } from "react";

/* --------------------------------------------------------------- OM MEDALLION */
export const OmMark = ({ size = 56, className = "", style, strokeWidth = 1.5 }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <circle
      cx="50"
      cy="50"
      r="47"
      fill="none"
      stroke="currentColor"
      strokeOpacity="0.5"
      strokeWidth={strokeWidth}
    />
    <circle
      cx="50"
      cy="50"
      r="39.5"
      fill="none"
      stroke="currentColor"
      strokeOpacity="0.3"
      strokeWidth="1"
      strokeDasharray="3 6"
    />
    <text
      x="50"
      y="52"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="'Noto Sans Devanagari', serif"
      fontSize="46"
      fontWeight="500"
      fill="currentColor"
    >
      {"\u0950"}
    </text>
  </svg>
);

/* --------------------------------------------------------------------- LOTUS */
export const LotusMotif = ({ width = 104, className = "", style, fill = "currentColor" }) => (
  <svg
    viewBox="0 0 120 78"
    width={width}
    height={width * 0.65}
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <g fill={fill}>
      <path d="M60 4 C71 24 71 45 60 64 C49 45 49 24 60 4 Z" fillOpacity="0.9" />
      <path d="M24 16 C44 28 54 44 60 64 C42 58 29 44 24 16 Z" fillOpacity="0.62" />
      <path d="M96 16 C76 28 66 44 60 64 C78 58 91 44 96 16 Z" fillOpacity="0.62" />
      <path d="M4 32 C30 38 46 50 60 64 C34 66 15 56 4 32 Z" fillOpacity="0.44" />
      <path d="M116 32 C90 38 74 50 60 64 C86 66 105 56 116 32 Z" fillOpacity="0.44" />
      <path
        d="M18 64 C40 72 80 72 102 64"
        fill="none"
        stroke={fill}
        strokeOpacity="0.5"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

/* ------------------------------------------------------------------ MANDALA */
export const MandalaMotif = ({
  size = 520,
  className = "",
  style,
  stroke = "currentColor",
  petals = 16,
  opacity = 0.32,
}) => {
  const rays = Array.from({ length: petals }, (_, i) => (i * 360) / petals);
  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      className={className}
      style={{ opacity, ...style }}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke={stroke} strokeWidth="1.05">
        <circle cx="200" cy="200" r="196" />
        <circle cx="200" cy="200" r="172" strokeDasharray="3 8" />
        <circle cx="200" cy="200" r="126" />
        <circle cx="200" cy="200" r="92" strokeDasharray="2 7" />
        <circle cx="200" cy="200" r="58" />
        {rays.map((a) => (
          <path key={`t${a}`} d="M200 8 L200 30" transform={`rotate(${a} 200 200)`} />
        ))}
        {rays.map((a) => (
          <path
            key={`p${a}`}
            d="M200 180 C216 156 184 156 200 126"
            transform={`rotate(${a + 11} 200 200)`}
          />
        ))}
        {rays.map((a) => (
          <circle
            key={`d${a}`}
            cx="200"
            cy="36"
            r="2.6"
            fill={stroke}
            stroke="none"
            transform={`rotate(${a + 7} 200 200)`}
          />
        ))}
      </g>
    </svg>
  );
};

/* ------------------------------------------------------------- PEACOCK FEATHER */
export const PeacockFeatherMotif = ({ height = 200, className = "", style }) => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <svg
      viewBox="0 0 120 200"
      height={height}
      width={height * 0.6}
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`pf${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f6b57" />
          <stop offset="100%" stopColor="#17674a" />
        </linearGradient>
      </defs>
      <path
        d="M60 192 C60 140 60 96 60 58"
        stroke="#0e6b4f"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
      <g stroke="#1c8a66" strokeWidth="1.7" fill="none" strokeOpacity="0.85">
        <path d="M60 154 C42 146 32 134 26 118" />
        <path d="M60 154 C78 146 88 134 94 118" />
        <path d="M60 132 C44 124 36 114 32 100" />
        <path d="M60 132 C76 124 84 114 88 100" />
        <path d="M60 110 C50 104 45 98 42 90" />
        <path d="M60 110 C70 104 75 98 78 90" />
      </g>
      <path
        d="M60 4 C98 10 110 44 101 73 C93 101 77 114 60 114 C43 114 27 101 19 73 C10 44 22 10 60 4 Z"
        fill={`url(#pf${uid})`}
        fillOpacity="0.95"
      />
      <ellipse cx="60" cy="62" rx="27" ry="33" fill="#0b4f6c" fillOpacity="0.92" />
      <ellipse cx="60" cy="62" rx="18" ry="24" fill="#f2a93b" />
      <ellipse cx="60" cy="62" rx="10.5" ry="15" fill="#7a2a0a" />
      <circle cx="60" cy="62" r="5.2" fill="#12325b" />
      <circle cx="58.4" cy="59.6" r="1.7" fill="#fff6e7" />
    </svg>
  );
};

/* ------------------------------------------------------------------- FLUTE */
export const FluteMotif = ({ width = 260, className = "", style }) => (
  <svg
    viewBox="0 0 260 120"
    width={width}
    height={width * 0.46}
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <g stroke="currentColor" fill="none" strokeLinecap="round">
      <path d="M8 104 C74 88 158 62 244 24" strokeWidth="9" strokeOpacity="0.9" />
      <path
        d="M8 104 C74 88 158 62 244 24"
        strokeWidth="1.6"
        strokeOpacity="0.55"
        strokeDasharray="3 9"
      />
      <path d="M120 74 L110 96" strokeWidth="3" strokeOpacity="0.75" />
      <path d="M86 88 L78 108" strokeWidth="3" strokeOpacity="0.6" />
    </g>
    <circle cx="244" cy="24" r="6.4" fill="currentColor" fillOpacity="0.85" />
    <g fill="currentColor" fillOpacity="0.55">
      <ellipse cx="196" cy="88" rx="7" ry="5.4" />
      <ellipse cx="214" cy="76" rx="7" ry="5.4" />
      <ellipse cx="180" cy="72" rx="6" ry="4.6" />
    </g>
    <circle cx="163" cy="61" r="3.1" fill="currentColor" fillOpacity="0.7" />
  </svg>
);

/* --------------------------------------------------- KRISHNA-INSPIRED FIGURE */
/* A stylised silhouette: peacock-feather crown, flute raised to the lips,
   lotus-rest pose. Used as a low-opacity sacred backdrop, never over text. */
export const KrishnaFigure = ({ height = 320, className = "", style, opacity = 0.9 }) => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <svg
      viewBox="0 0 230 330"
      height={height}
      width={height * 0.697}
      className={className}
      style={{ opacity, ...style }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`kf${uid}`} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#fbd98a" />
          <stop offset="42%" stopColor="#e98a24" />
          <stop offset="100%" stopColor="#9c3a0c" />
        </linearGradient>
      </defs>
      <g fill={`url(#kf${uid})`}>
        {/* peacock-feather crown */}
        <path d="M142 8 C170 16 178 42 170 62 C162 82 142 90 128 84 C138 68 142 40 142 8 Z" opacity="0.92" />
        <path d="M136 26 C150 30 154 44 150 56 C146 68 134 72 126 68 C132 58 136 44 136 26 Z" fill="#0b4f6c" opacity="0.55" />
        {/* head + hair */}
        <circle cx="112" cy="70" r="23" />
        <path d="M89 66 C89 46 135 46 135 66 C135 75 131 80 128 82 C121 71 103 71 96 82 C92 80 89 73 89 66 Z" opacity="0.88" />
        {/* neck + torso */}
        <path d="M112 92 C129 92 143 100 149 114 L155 158 C157 176 149 190 135 198 L89 198 C75 190 67 176 69 158 L75 114 C81 100 95 92 112 92 Z" />
        {/* dhoti flare */}
        <path d="M135 194 L192 280 L32 280 L89 194 Z" opacity="0.93" />
        <path d="M96 274 L128 274 L128 292 L96 292 Z" opacity="0.8" />
        {/* arms */}
        <path
          d="M80 112 C62 126 54 142 52 158"
          stroke={`url(#kf${uid})`}
          strokeWidth="11"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M144 112 C158 120 166 132 170 146"
          stroke={`url(#kf${uid})`}
          strokeWidth="11"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      {/* flute */}
      <path
        d="M36 162 L192 128"
        stroke="#fff0c9"
        strokeWidth="6.4"
        strokeLinecap="round"
        opacity="0.95"
      />
      <path d="M36 162 L192 128" stroke="#c24a10" strokeWidth="1.4" strokeDasharray="4 8" opacity="0.6" />
      <circle cx="192" cy="128" r="4" fill="#fff0c9" opacity="0.9" />
    </svg>
  );
};

/* -------------------------------------------------- TEMPLE ARCH (frame motif) */
export const TempleArchMotif = ({ size = 220, className = "", style, stroke = "currentColor" }) => (
  <svg
    viewBox="0 0 200 200"
    width={size}
    height={size}
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <g fill="none" stroke={stroke} strokeWidth="1.2">
      <path d="M26 182 V84 A74 74 0 0 1 174 84 V182" />
      <path d="M40 182 V88 A60 60 0 0 1 160 88 V182" strokeOpacity="0.6" />
      <path d="M100 10 L100 30" />
      <circle cx="100" cy="34" r="5" />
      <path d="M74 182 V100 A26 26 0 0 1 126 100 V182" strokeDasharray="4 7" strokeOpacity="0.7" />
    </g>
  </svg>
);

/* -------------------------------------------------- GOLDEN ORNAMENTAL DIVIDER */
export const OrnamentDivider = ({ className = "", style, motifWidth = 30 }) => (
  <div className={`ornament-divider ${className}`} style={style} aria-hidden="true">
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <svg viewBox="0 0 40 40" width={motifWidth} height={motifWidth} aria-hidden="true" focusable="false">
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="20" cy="20" r="17" />
          <circle cx="20" cy="20" r="10" strokeDasharray="2 4" />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
        </g>
      </svg>
      <LotusMotif width={54} style={{ opacity: 0.85 }} />
      <svg viewBox="0 0 40 40" width={motifWidth} height={motifWidth} aria-hidden="true" focusable="false">
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="20" cy="20" r="17" />
          <circle cx="20" cy="20" r="10" strokeDasharray="2 4" />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
        </g>
      </svg>
    </span>
  </div>
);

/* ------------------------------------------------------- BRAND MARK (Om + lotus) */
export const BrandMark = ({ size = 44, className = "", style }) => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      style={style}
      role="img"
      aria-label="BlueGen"
    >
      <defs>
        <linearGradient id={`bm${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6c85f" />
          <stop offset="45%" stopColor="#f4691f" />
          <stop offset="100%" stopColor="#a63a0b" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill={`url(#bm${uid})`} />
      <circle cx="32" cy="32" r="26.5" fill="none" stroke="#fff0c9" strokeOpacity="0.55" strokeWidth="1" />
      <circle cx="32" cy="32" r="23" fill="none" stroke="#fff0c9" strokeOpacity="0.3" strokeWidth="0.9" strokeDasharray="2 4" />
      <text
        x="32"
        y="34"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Noto Sans Devanagari', serif"
        fontSize="27"
        fontWeight="600"
        fill="#fff9ef"
      >
        {"\u0950"}
      </text>
    </svg>
  );
};

export default {
  OmMark,
  LotusMotif,
  MandalaMotif,
  PeacockFeatherMotif,
  FluteMotif,
  KrishnaFigure,
  TempleArchMotif,
  OrnamentDivider,
  BrandMark,
};
