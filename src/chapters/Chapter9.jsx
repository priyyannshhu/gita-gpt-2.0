import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C9.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter9 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 9" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 09 - Raja Vidya Raja Guhya Yoga</h1>
          <h2>राजविद्याराजगुह्ययोग</h2>
          <p>Rājavidyā-rājaguhya-yoga - The Royal Secret</p>
          <p>
            The previous chapter was a brief digression into techniques of
            saguna-upasana which is not the main theme of the Gita. Here the
            Lord continues the teaching as it was given in the 7th chapter and
            reiterates and expounds on those matters. He again points out that
            those who seek mere materialistic results can gain those by His
            grace but anyone who desires Him alone will merge with Him,
            regardless of their worldly conditionings based on gender, birth,
            etc. Below are the main themes of Chapter 9:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 3:</strong> Introduction to the knowledge, its
              glory, and necessary qualifications.
            </li>
            <li>
              <strong>Verses 4 - 10:</strong> Nature of God.
            </li>
            <li>
              <strong>Verse 11:</strong> Cause of bondage.
            </li>
            <li>
              <strong>Verses 12 - 19:</strong> Atheists, theists, and types of
              upāsanā.
            </li>
            <li>
              <strong>Verses 20 - 29:</strong> Sakāma-bhaktas and
              niṣkāma-bhaktas.
            </li>
            <li>
              <strong>Verses 30 - 34:</strong> Confidential Knowledge of The
              Ultimate Truth.
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: The Blessed Lord said, 'I shall now declare to thee, who does not cavil, the greatest secret—the knowledge combined with experience (Self-realisation). Having known this, thou shalt be free from evil.'",
          "Verse 2: This is the royal science, the royal secret, the supreme purifier, realizable by direct intuitive knowledge, according to righteousness, very easy to perform and imperishable.",
          "Verse 3: Those who have no faith in this Dharma, O Parantapa, return to the path of this world without attaining Me.",
          "Verse 4: All of this world is pervaded by Me in My unmanifest aspect; all beings exist within Me, but I do not dwell within them.",
          "Verse 5: Nor do beings exist in Me (in reality); behold, My divine Yoga, which supports all beings, but does not dwell in them, is My Self, the efficient cause of beings.",
          "Verse 6: As the mighty wind, moving everywhere, always rests in the ether, so too, know that all beings rest in Me.",
          "Verse 7: All beings, O Arjuna, go into My Nature at the end of a Kalpa; I send them forth again at the beginning of the next Kalpa.",
          "Verse 8: Animating My Nature, I again and again send forth all this multitude of beings, helpless under the force of Nature.",
          "Verse 9: These acts do not bind Me, O Arjuna, sitting as one indifferent, unattached to those acts.",
          "Verse 10: Under Me, as supervisor, Nature produces the moving and the unmoving; therefore, O Arjuna, the world revolves.",
          "Verse 11: Fools disregard Me, clad in human form, not knowing My higher Being as the great Lord of all beings.",
          "Verse 12: They are possessed of the deceitful nature of demons and undivine beings, filled with vain hopes, vain actions, and vain knowledge that is senseless.",
          "Verse 13: But the great souls, O Arjuna, partaking of My divine nature, worship Me with a single-minded devotion, knowing Me as the imperishable source of all beings.",
          "Verse 14: Always glorifying Me, striving, firm in their vows, prostrating themselves before Me, they worship Me with steadfast devotion.",
          "Verse 15: Others also, sacrificing with the wisdom-sacrifice, worship Me, the All-Faced, as one, distinct, and manifold.",
          "Verse 16: I am Kratu; I am Yajna; I am the offering to the manes; I am the medicinal herbs and all plants; I am the Mantra; I am also the ghee or melted butter; I am the fire; I am the oblation.",
          "Verse 17: I am the father of this world, the mother, the dispenser of the fruits of actions, and the grandfather; the one thing to be known, the purifier, the sacred monosyllable (Om), and also the Rik, Sama, and Yajur Vedas.",
          "Verse 18: I am the goal, the supporter, the Lord, the witness, the abode, the shelter, the friend, the origin, the dissolution, the foundation, the treasure-house, and the imperishable seed.",
          "Verse 19: As the sun, I give heat; I withhold and send forth the rain; I am immortality and also death, existence and non-existence, O Arjuna.",
          "Verse 20: The knowers of the three Vedas, the drinkers of Soma, purified of all sins, worshipping Me through sacrifices, pray for the way to heaven; they reach the holy world of the Lord of the gods and enjoy the divine pleasures of the gods in heaven.",
          "Verse 21: They, having enjoyed the vast heaven, enter the world of mortals when their merit is exhausted; thus abiding by the injunctions of the three (Vedas) and desiring objects of desires, they attain to the state of coming and going.",
          "Verse 22: For those men who worship Me alone, thinking of no one else, for those ever-united, I secure what they have not already possessed and preserve what they already possess.",
          "Verse 23: Even those devotees who, endowed with faith, worship other gods, worship Me alone, O Arjuna, but by the wrong method.",
          "Verse 24: For I alone am the enjoyer and Lord of all sacrifices; but they do not know Me in reality, and thus they return to this mortal world.",
          "Verse 25: The worshippers of the gods go to them; the ancestor-worshippers go to the manes; the worshippers of the deities who preside over the elements go to them; but My devotees come to Me.",
          "Verse 26: Whoever offers Me with devotion a leaf, a flower, a fruit, or a little water, that, so offered devotedly by the pure-minded, I accept.",
          "Verse 27: Whatever you do, whatever you eat, whatever you offer in sacrifice, whatever you give, whatever austerity you practice, O Arjuna, do it as an offering to Me.",
          "Verse 28: Thus, you shall be freed from the bonds of actions yielding good and evil fruits; with the mind steadfast in the Yoga of renunciation, and liberated, you shall come to Me.",
          "Verse 29: I am the same to all beings; there is none hateful or dear to Me; but those who worship Me with devotion are in Me, and I am also in them.",
          "Verse 30: Even if the most sinful worships Me, with devotion to no one else, he should indeed be regarded as righteous, for he has rightly resolved.",
          "Verse 31: Soon he becomes righteous and attains eternal peace; O Arjuna, proclaim thou for certain that My devotee never perishes.",
          "Verse 32: For, taking refuge in Me, they who, O Arjuna, may be of a sinful birth—women, Vaisyas, and Sudras—attain the Supreme Goal.",
          "Verse 33: How much more easily, then, do Brahmins and devoted royal saints attain the goal? Having come to this impermanent and unhappy world, do thou worship Me.",
          "Verse 34: Fix your mind on Me; be devoted to Me; sacrifice to Me; bow down to Me; having thus united your whole self to Me, taking Me as the supreme goal, you will come to Me.",
        ].map((verse, index) => (
          <div key={index} className="verse">
            <p>{verse}</p>
          </div>
        ))}
      </div>

      <div className="commentary-container">
        <h2>Commentary</h2>
        <p>
          Chapter 9, titled{" "}
          <strong>Confidential Knowledge of The Ultimate Truth</strong>, unveils
          the profound nature of divine understanding and the sacred connection
          between the Creator and His creation. In this chapter, Krishna reveals
          that the knowledge He imparts is not merely a royal secret but the
          supreme means of liberation. It elegantly distinguishes between those
          who seek temporary material gains and those who are genuinely in
          pursuit of spiritual enlightenment.
        </p>
        <p>
          The teachings underscore the significance of unwavering faith and the
          dire consequences of ignorance. While God embodies the essence of all
          existence, many remain unaware of this truth, entrapped in their
          worldly attachments. This profound knowledge is accessible to anyone
          who sincerely seeks it, transcending social and cultural limitations.
        </p>
        <p>
          Krishna assures that those who wholeheartedly devote themselves to Him
          will achieve liberation, transcending all attachments and limitations.
          This chapter invites us to recognize our divine essence and the
          eternal bond we share with the Supreme.
        </p>

        <h2>Commentary by Swami Paramarthananda</h2>
        <h3>Background</h3>
        <p>
          Within the context of the Bhagavad Gita, Chapter 9 serves as a
          culmination of Krishna's teachings on devotion (bhakti) and the
          essence of spirituality. This chapter unfolds the deep mysteries of
          existence, inviting seekers to explore their relationship with the
          Divine more intimately.
        </p>
        <p>
          The royal knowledge presented here transcends mere intellectual
          understanding. It emphasizes the experiential nature of realization,
          urging individuals to develop a personal connection with the Divine
          through devotion and self-inquiry.
        </p>

        <h3>The Nature of God</h3>
        <p>
          The chapter elaborates on God's omnipresence, explaining that He is
          both immanent and transcendent. While all beings exist within Him, He
          remains unaffected by their actions. This distinction highlights the
          divine mystery and emphasizes recognizing one’s connection with the
          Divine as the ultimate path to liberation.
        </p>

        <h3>Main Topics of this Chapter:</h3>
        <ul>
          <li>Introduction to the knowledge of God: 1 to 3</li>
          <li>Understanding the Nature of God: 4 to 10</li>
          <li>Ignorance as the cause of bondage: 11</li>
          <li>Atheists, theists, and forms of worship: 12 to 19</li>
          <li>Types of devotion: 20 to 29</li>
          <li>Confidential knowledge and its implications: 30 to 34</li>
        </ul>
        <p>
          Since this chapter deals with the knowledge of God which is the
          greatest (rājavidyā) and the rarest (rājaguhya), it is called{" "}
          <strong>Rājavidyārāja-guhya-yoga.</strong>
        </p>
      </div>
      <ChapterNav n={9} />
    </div>
  );
};

export default Chapter9;
