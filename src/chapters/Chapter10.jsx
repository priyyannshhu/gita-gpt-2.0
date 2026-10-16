import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C10.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter10 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 10" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 10 - Vibuthi Yoga</h1>
          <h2>विभूतियोग</h2>
          <p>Vibhūti-Yoga - The Divine Glories</p>
          <p>
            Arjuna acknowledges the Supreme nature of the Lord but asks how He
            can constantly be remembered even as one is perceiving this
            pluralistic world. In response, the Lord provides a long list of His
            glorious manifestations in the perceived universe. Lest anyone
            misunderstand that the Lord is limited to these forms, He concludes
            by saying that there is, in fact, no end to His glories. Below are
            the main themes of Chapter 10:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 3:</strong> Introduction and the glory of this
              knowledge.
            </li>
            <li>
              <strong>Verses 4 - 7:</strong> Lord’s glory in brief and the
              benefit of that knowledge.
            </li>
            <li>
              <strong>Verses 8 - 11:</strong> Virāṭ-devotees and the benefit of
              such a devotion.
            </li>
            <li>
              <strong>Verses 12 - 18:</strong> Arjuna’s request for elaboration.
            </li>
            <li>
              <strong>Verses 19 - 42:</strong> Lord’s glories elaborated.
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: The Blessed Lord said, 'Again, O mighty-armed Arjuna, listen to my supreme word which I will declare to you, who are beloved, for your welfare.'",
          "Verse 2: Neither the hosts of the gods nor the great sages know My origin; for I am the source of all the gods and the great sages in every way.",
          "Verse 3: He who knows Me as unborn and beginningless, as the great Lord of the worlds, he among mortals is undeluded and is liberated from all sins.",
          "Verse 4: Intellect, wisdom, non-delusion, forgiveness, truth, self-restraint, calmness, happiness, pain, existence or birth, non-existence or death, fear, and also fearlessness.",
          "Verse 5: Non-injury, equanimity, contentment, austerity, beneficence, fame, and ill-fame—these different qualities of beings arise from Me alone.",
          "Verse 6: The seven great sages, the ancient four, and the Manus, possessing powers like Mine (due to their minds being fixed on Me), were born from My mind; from them, these creatures have been born in this world.",
          "Verse 7: He who truly knows these manifold manifestations of My Being and this Yoga-power of Mine, becomes established in unshakable Yoga; there is no doubt about it.",
          "Verse 8: I am the source of all; from me everything evolves; Understanding this, the wise, endowed with meditation, worship me.",
          "Verse 9: With their minds and lives wholly absorbed in Me, they enlighten each other and ever speak of Me, being satisfied and delighted.",
          "Verse 10: To those who are ever steadfast, worshipping me with love, I give the yoga of discrimination, by which they come to me.",
          "Verse 11: Out of mere compassion for them, I, dwelling within their selves, destroy the darkness born of ignorance with the luminous lamp of knowledge.",
          "Verse 12: Arjuna said, 'You are the Supreme Brahman, the supreme abode, the supreme purifier, eternal, divine Person, the primeval God, unborn, and omnipresent.'",
          "Verse 13: All the sages have thus declared Thee, as also the divine sage Narada; so also Asita, Devala, and Vyasa; and now Thou Thyself dost say so to me.",
          "Verse 14: I believe all that You have said to me to be true, O Krishna; indeed, O blessed Lord! Neither the gods nor the demons know Your manifestation (origin).",
          "Verse 15: Verily, Thou Thyself knowest Thyself by Thyself, O Supreme Person, O source and Lord of all beings, O God of gods, O ruler of the world!",
          "Verse 16: You should indeed tell, without reserve, of your divine glories by which you exist, pervading all these worlds. (No one else can do so.)",
          "Verse 17: How shall I, ever meditating, know you, O Yogin? In what aspects or things, O blessed Lord, should I think of you?",
          "Verse 18: Tell me again in detail, O Krishna, of your yogic power and glory; for I am not satiated with what I have heard of your life-giving and nectar-like speech.",
          "Verse 19: The Blessed Lord said, 'Very well! Now I will declare to you My divine glories in their prominence, O Arjuna; there is no end to their detailed description.'",
          "Verse 20: I am the Self, O Gudakesa, seated in the hearts of all beings; I am the beginning, the middle, and the end of all beings.",
          "Verse 21: Among the twelve Adityas, I am Vishnu; among luminaries, the radiant sun; among the seven or forty-nine Maruts, I am Marichi; among stars, I am the moon.",
          "Verse 22: Among the Vedas, I am the Sama-Veda; among the gods, I am Vasava; among the senses, I am the mind; and among living beings, I am intelligence.",
          "Verse 23: And among the Rudras, I am Sankara; among the Yakshas and Rakshasas, the Lord of Wealth (Kubera); among the Vasus, I am Pavaka (Fire); and among the seven mountains, I am Meru.",
          "Verse 24: And, among the household priests of kings, O Arjuna, know Me to be the chief, Brihaspati; among the army generals, I am Skanda; among lakes, I am the ocean.",
          "Verse 25: Among the great sages, I am Bhrigu; among words, I am the one syllable (Om); among sacrifices, I am the sacrifice of silent repetition; among the immovable things, I am the Himalayas.",
          "Verse 26: Among all the trees, I am the Peepul; among the divine sages, I am Narada; among the Gandharvas, I am Chitraratha; among the perfected, I am the sage Kapila.",
          "Verse 27: Know Me as Ucchaisravas, born of nectar, among horses; Airavata among lordly elephants; and the king among men.",
          "Verse 28: Among weapons, I am the thunderbolt; among cows, I am the wish-fulfilling cow called Kamadhenu; I am the progenitor, the god of love; among serpents, I am Vasuki.",
          "Verse 29: I am Ananta among the Nagas; I am Varuna among water-deities; Aryaman among the Manes; I am Yama among the governors.",
          "Verse 30: And I am Prahlada among the demons, I am Time among reckoners, I am the lion among beasts, and Vainateya (Garuda) among birds.",
          "Verse 31: Among the purifiers, I am the wind; among the warriors, I am Rama; among the fishes, I am the shark; among the streams, I am the Ganga.",
          "Verse 32: Among creations I am the beginning, the middle, and the end, O Arjuna; among the sciences, I am the science of the Self; and I am the logic among controversialists.",
          "Verse 33: Among the letters of the alphabet, I am the letter 'A' and the dual among compounds. I am verily the inexhaustible and everlasting time; I am the dispenser of the fruits of actions, having faces in all directions.",
          "Verse 34: And I am the all-devouring Death, and the source of prosperity for those who are to be prosperous; among the feminine qualities, I am fame, prosperity, speech, memory, intelligence, firmness, and forgiveness.",
          "Verse 35: Among the hymns, I am the Brihatsaman; among meters, I am Gayatri; among months, I am Margasirsha; among seasons, I am the flowery season.",
          "Verse 36: I am the gambling of the deceitful; I am the splendor of the splendid; I am victory; I am the resolve of the resolute; I am the goodness of the good.",
          "Verse 37: Among the Vrishnis, I am Vaasudeva; among the Pandavas, I am Arjuna; among the sages, I am Vyasa; among the poets, I am Usanas, the poet.",
          "Verse 38: Of those who punish, I am the scepter; among those who seek victory, I am statesmanship; and among secrets, I am silence; I am knowledge among knowers.",
          "Verse 39: And whatever is the seed of all beings, that too am I, O Arjuna; there is no being, be it moving or unmoving, that can exist without Me.",
          "Verse 40: There is no end to My divine glories, O Arjuna, but this is a brief statement by Me of the particulars of My divine glory.",
          "Verse 41: Whatever being there is glorious, prosperous, or powerful, know that to be a manifestation of a part of My splendor.",
          "Verse 42: But, of what avail is the knowledge of all these details to you, O Arjuna? I exist, supporting this whole world with one part of Myself.",
        ].map((verse, index) => (
          <div key={index} className="verse">
            <p>{verse}</p>
          </div>
        ))}
      </div>

      <div className="commentary-container">
        <h2>Commentary by Swami Paramarthananda</h2>

        <h3>Background</h3>
        <p>
          In the previous three chapters, Lord Kṛṣṇa revealed God as the
          material cause of the universe. Since the effect cannot be different
          from the material cause, it clearly follows that the universe cannot
          be different from God. Thus the entire universe is the divine
          manifestation of God. Hence whatever glories we see in the creation
          belong to the Lord alone. Kṛṣṇa reveals this idea in this chapter as
          the culmination of his teaching of Virāṭ (Viśvarūpam).
        </p>

        <p>
          In the first three verses, Kṛṣṇa introduces the topic of vibhūti and
          yoga — vibhūti is the manifestation of Lord and yoga is the power of
          manifestation. Even great sages cannot talk about the glories of the
          Lord because they are finite beings born later. Hence it is the rarest
          knowledge that is given. One who gains this knowledge will be free
          from saṃsāra (1 to 3).
        </p>

        <p>
          In the next four verses, the Lord reveals His glory by pointing out
          that the entire subtle universe of thoughts as well as the gross
          universe are born of Him. The seven great sages, the four sages Sanaka
          etc., and the Manus are all born of the mind of the Lord. One who
          knows this attains self-knowledge ultimately (4 to 7).
        </p>

        <p>
          The following four verses deal with the Virāṭ-devotees and the
          benefits of such a devotion. The devotees accept everything as a gift
          of God because God is the source of all. They think about God, speak
          about God, hear about God — in short, they spend their lives revelling
          in God all the time (8, 9). (Still they are saguṇa-devotees only. They
          are ignorant of the highest nature of the Lord.) The Lord says that He
          takes the responsibility of enlightening them. Out of compassion for
          them, the Lord lights up the lamp of knowledge, remaining in their
          heart. (The idea is that the Lord will provide them with a guru and
          the necessary conditions for the knowledge of the highest nature of
          God.) (10, 11).
        </p>

        <p>
          In the next seven verses (12 to 18), Arjuna requests Kṛṣṇa to give the
          details of His glories (manifestations) which will help him in
          upāsanā. (Each expression of God in the universe can become a symbol
          for upāsanā. Later, when one sees every glory as the expression of
          God, it becomes the appreciation of Virāṭ. This helps in the expansion
          of the mind.)
        </p>

        <p>
          From verse 19 to the end of the chapter, Bhagavān describes His
          glories. The Lord is careful to add both at the beginning and at the
          end that it is not an exhaustive list of His glories. They are the
          important ones. Nobody can exhaust the glories of the Lord (19, 40).
          Kṛṣṇa begins the enumeration with the very Self. The best, the closest
          and the most evident expression of the Lord is the very ‘I’, the
          consciousness (20). Kṛṣṇa concludes the list by pointing out that He
          is the very existence in all beings because He is the material cause
          (bījam) of all (39). In short, whatever there is which is glorious,
          rich or powerful — all of them are the expressions of only a ray of
          God’s glory (41). In fact, it is not that the Lord’s glory is in the
          world, but the entire world is in the Lord, occupying a part of Him,
          as it were (42). (The world cannot be a part of the Lord in the real
          sense of the term, because it is only apparent as the Lord Himself
          negates it in IX-5.)
        </p>

        <h3>Main Topics of the Chapter</h3>
        <ul>
          <li>Introduction and the glory of this knowledge: 1 to 3</li>
          <li>
            Lord’s glory in brief and the benefit of that knowledge: 4 to 7
          </li>
          <li>Virāṭ-devotees and the benefit of such a devotion: 8 to 11</li>
          <li>Arjuna’s request for elaboration: 12 to 18</li>
          <li>Lord’s glories elaborated: 19 to 42</li>
        </ul>

        <p>
          Since the main theme of this chapter is the{" "}
          <strong>Lord’s glories</strong>, this chapter is called{" "}
          <strong>Vibhūti-yoga.</strong>
        </p>
      </div>
      <ChapterNav n={10} />
    </div>
  );
};

export default Chapter10;
