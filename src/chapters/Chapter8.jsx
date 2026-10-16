import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C8.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter8 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 8" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 08 - Akshara Brahma Yoga</h1>
          <h2>अक्षरब्रह्मयोग</h2>
          <p>Akṣara Brahma Yoga - The Imperishable Brahman</p>
          <p>
            The previous chapter concluded by introducing certain technical
            terms, and this one begins with an explanation of those. It then
            details various spiritual practices undertaken by those who desire
            to merge with the Supreme. This chapter also describes the two paths
            followed by the “jiva” after it leaves the body – one being the path
            of eventual return (to this world) and the other being the path of
            no return (krama-mukti). Below are the main themes of Chapter 8:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 4:</strong> Definition of the terms Brahman,
              adhyātma, karma, adhibūta, adhidaiva, and adhiyajña.
            </li>
            <li>
              <strong>Verses 5 - 14:</strong> The significance and the method of
              remembering the Lord at the time of death.
            </li>
            <li>
              <strong>Verses 15 - 22:</strong> Comparison between two types of
              goals — God and world.
            </li>
            <li>
              <strong>Verses 23 - 27:</strong> The bright and dark paths.
            </li>
            <li>
              <strong>Verse 28:</strong> Glory of upāsanā.
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: Arjuna said, 'What is Brahman? What is Adhyatma? What is action, O best among men? What is Adhibhuta declared to be? And, what is Adhidaiva said to be?'",
          "Verse 2: Who and how is Adhiyajna here in this body, O destroyer of Madhu? And how, at the time of death, are You to be known by the self-controlled?",
          "Verse 3: The Blessed Lord said, 'Brahman is the Imperishable, the Supreme; its essential nature is called Self-knowledge; the offering (to the gods) that causes the existence and manifestation of beings and sustains them is called action.'",
          "Verse 4: Adhibhuta—knowledge of the elements—pertains to My perishable nature, and the Purusha, or the Soul, is the Adhidaiva; I alone am the Adhiyajna here in this body, O best among the embodied.",
          "Verse 5: And whoever, leaving their body, goes forth remembering Me alone at the time of death, they will attain My Being; there is no doubt about this.",
          "Verse 6: Whoever at the end leaves the body, thinking of any being, to that being only does he go, O son of Kunti (Arjuna), due to his constant thought of that being.",
          "Verse 7: Therefore, at all times, remember Me only and fight. With your mind and intellect fixed on Me, you will undoubtedly come to Me alone.",
          "Verse 8: With the mind not moving towards any other thing, made steadfast through the practice of habitual meditation, and constantly meditating, one goes to the Supreme Person, the Resplendent, O Arjuna.",
          "Verse 9: Whosoever meditates on the Omniscient, the Ancient, the Ruler of the whole world, minuter than an atom, the supporter of all, of inconceivable form, effulgent like the sun and beyond the darkness of ignorance.",
          "Verse 10: At the time of death, with an unwavering mind, endowed with devotion, by the power of Yoga, fixing the whole life-breath in the middle of the two eyebrows, he reaches that resplendent Supreme Person.",
          "Verse 11: That which is declared to be Imperishable by those who know the Vedas, that which the self-controlled (ascetics or Sannyasins) and passion-free enter, that goal, desiring which celibacy is practised, I will declare to thee in brief.",
          "Verse 12: Having closed all the gates, confined the mind in the heart, and fixed the life-breath in the head, engage in the practice of concentration.",
          "Verse 13: Uttering the one-syllabled Om, the Brahman, and remembering Me, he who departs, leaving the body, attains the Supreme Goal.",
          "Verse 14: I am easily attainable by that ever-steadfast yogi who constantly and daily remembers me for a long time, not thinking of anything else with a single-minded or one-pointed focus, O Partha.",
          "Verse 15: Having attained Me, these great souls do not take birth again here—a place of pain and impermanence—but have reached the highest perfection of liberation.",
          "Verse 16: All the worlds, including the world of Brahma, are subject to return again, O Arjuna; but he who reaches Me, O son of Kunti, has no rebirth.",
          "Verse 17: Those who know the day of Brahma, which lasts a thousand Yugas, and the night, which also lasts a thousand Yugas, know day and night.",
          "Verse 18: From the Unmanifested, all the manifested worlds proceed upon the arrival of the 'day'; upon the arrival of the 'night', they dissolve indeed into that which is known as the Unmanifested.",
          "Verse 19: This same multitude of beings, being born again and again, helplessly dissolves, O Arjuna, into the Unmanifested at the coming of the night and comes forth at the coming of the day.",
          "Verse 20: But verily, there exists higher than this Unmanifested, another Unmanifested Eternal, which is not destroyed even when all beings are destroyed.",
          "Verse 21: What is known as the Unmanifested and the Imperishable, That is said to be the highest goal. Those who reach It do not return (to this Samsara). That is My supreme abode (place or state).",
          "Verse 22: That highest Purusha, O Arjuna, is attainable by unswerving devotion to Him alone, within Whom all beings dwell and by Whom all this is pervaded.",
          "Verse 23: Now I will tell you, O chief of the Bharatas, the times of departure at which the Yogis will return or not return.",
          "Verse 24: Fire, light, daytime, the bright fortnight, the six months of the northern path of the sun (the northern solstice) departing, then men who know Brahman go to Brahman.",
          "Verse 25: Attaining the lunar light through smoke, night time, the dark fortnight, and the six months of the southern path of the sun (the southern solstice), the yogi returns.",
          "Verse 26: The bright and dark paths of the world are thought to be eternal; one leads to no return, and the other leads to return.",
          "Verse 27: Knowing these paths, O Arjuna, no yogi is deluded; therefore, at all times, be steadfast in yoga.",
          "Verse 28: Whatever fruit of merit is declared (in the scriptures) to accrue from (the study of) the Vedas, (the performance of) sacrifices, (the practice of) austerities, and gifts, beyond all this goes the Yogi, having known this; and he attains to the Supreme, Primeval (first or ancient) Abode.",
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
          Lord Krishna concluded the seventh chapter by glorifying the
          jñāni-bhakta as one who knows Brahman, adhyātma, karma, adhibūta, and
          adhiyajña (i.e., the complete nature of God consisting of parā and
          aparā-prakṛti). He emphasizes that remembering God at the time of
          death is crucial.
        </p>
        <p>
          In pursuit of clarity regarding these concepts, Arjuna poses seven
          questions to Krishna. The eighth chapter begins with these
          inquiries—the first six addressing the terms beginning with Brahman
          and the last concerning the thoughts of a person at the time of death.
        </p>

        <h3>Definition of Key Terms</h3>
        <p>
          Lord Krishna elucidates that Brahman is the imperishable Truth, while
          Adhyātma (or ātman) refers to the same Brahman that exists behind
          individual equipment. Karma encompasses all actions that are the cause
          for the birth of all beings. Adhibhūta signifies the entire perishable
          and inert universe. Adhidaiva represents Hiraṇyagarbha, who blesses
          all the organs of all beings. Lastly, Adhiyajña is the Lord, serving
          as the presiding deity over all individual actions.
        </p>

        <h3>Remembrance at Death</h3>
        <p>
          From the fifth verse to the chapter's conclusion, Lord Krishna
          elaborates on how to remember the Lord at the time of death. The
          predominant thought pattern at the moment of death determines the
          nature and place of rebirth. Thus, if one yearns for the Lord during
          their final moments, their rebirth will be conducive to pursuing the
          Divine.
        </p>
        <p>
          It is said that those who are saguṇa-upāsakas will reach Brahmaloka,
          where they attain liberation through knowledge from Brahmā, the
          creator himself. This phenomenon is termed krama-mukti. However, the
          thought pattern at death is shaped by one's overall mental disposition
          throughout life. Therefore, Krishna urges us to remember God
          constantly to ensure His remembrance at death.
        </p>
        <p>
          While it may seem challenging, success can be achieved through
          persistent effort and sincere practice.
        </p>

        <h3>The Practice of Upāsanā</h3>
        <p>
          From verses nine to thirteen, Krishna elaborates on the practice of
          upāsanā during death. One must control the organs of perception and
          action. Through skilled yoga practice, prāṇa should be drawn up
          through the suṣumnā-nāḍī to the head's crown, between the eyebrows.
          Then, the mind must be withdrawn back to its source, the heart. With a
          focused mind, one should meditate on oṅkāra or any chosen deity with
          devotion. This leads to God, who is omniscient, eternal, and the
          sustainer of all. All scriptures speak of Him, and all earnest seekers
          ultimately reach Him.
        </p>

        <h3>Comparison of Goals</h3>
        <p>
          Krishna compares two types of goals: the eternal God and the finite
          world. No one can escape the cycle of birth through transient
          achievements, even Brahmā, who has an extensive lifespan. All beings
          and worlds are impermanent. God is the only eternal principle, beyond
          creation, and the ultimate goal of life. Attaining Him means one does
          not take rebirth in the mortal realm.
        </p>

        <h3>The Two Paths</h3>
        <p>
          The chapter also delineates the bright path (śukla-gati) that leads to
          liberation and the dark path (Krishna-gati) that leads to rebirth. An
          upāsaka who departs through the bright path gains self-knowledge from
          Brahmā and becomes liberated. In contrast, ritualists traveling the
          dark path return after enjoying heavenly pleasures.
        </p>
        <p>
          Since the bright path leads to God, it should be the sole focus.
          Krishna advises Arjuna to commit to upāsanā, emphasizing its
          superiority over all other pursuits.
        </p>

        <h3>Glory of Upāsanā</h3>
        <p>
          The chapter concludes by praising upāsanā as the most exalted means to
          attain God, superior to any other achievement. An upāsaka becomes a
          jñāni-bhakta and achieves liberation in this life. If not, they will
          still journey along the bright path to Brahmaloka, gaining knowledge
          from Brahmā before attaining liberation.
        </p>
        <p>
          Thus, upāsanā is essential for both jīvanmukti (liberation in this
          life) and krama-mukti (liberation after death).
        </p>

        <h3>Main Topics Discussed</h3>
        <ol>
          <li>
            Definition of the terms Brahman, adhyātma, karma, adhibūta,
            adhidaiva, and adhiyajña: 1 to 4
          </li>
          <li>
            The significance and the method of remembering the Lord at the time
            of death: 5 to 14
          </li>
          <li>
            Comparison between two types of goals — God and world: 15 to 22
          </li>
          <li>The bright and dark paths: 23 to 27</li>
          <li>Glory of upāsanā: 28</li>
        </ol>

        <p>
          Since Krishna begins the teaching with <strong>Akṣara-brahman</strong>
          , this chapter is known as <strong>Akṣara Brahma Yoga.</strong>
        </p>
      </div>
      <ChapterNav n={8} />
    </div>
  );
};

export default Chapter8;
