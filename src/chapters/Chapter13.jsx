import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C13.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter13 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />

        <img src={chapterImage} alt="Chapter 13" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 13 - Prakṛti Purusha Viveka Yoga</h1>
          <h2>क्षेत्र-क्षेत्रज्ञविभागयोग</h2>
          <p>
            Prakṛti-Puruṣa-Viveka-Yoga - The Yoga of Distinguishing Matter from
            Spirit
          </p>
          <p>
            This chapter explores the distinction between the field (prakṛti)
            and the knower of the field (puruṣa). It emphasizes understanding
            the reality of the Self, transcending the transient and inert
            material envelopments. Below are the main themes of Chapter 13:
          </p>
          <ul>
            <li>
              <strong>Verse 1:</strong> Introduction to the field and the knower
              of the field.
            </li>
            <li>
              <strong>Verses 2 - 7:</strong> Explanation of Kṣetram (the field)
              and Kṣetrajña (the knower of the field).
            </li>
            <li>
              <strong>Verses 8 - 12:</strong> Discussion on Jñānam (knowledge).
            </li>
            <li>
              <strong>Verses 13 - 19:</strong> Insights on Jñeyam (that which
              ought to be known).
            </li>
            <li>
              <strong>Verses 20 - 24:</strong> Concepts of Puruṣa and Prakṛti.
            </li>
            <li>
              <strong>Verses 25 - 35:</strong> The nature of Sādhanam (practice)
              and Phalam (fruit).
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: Arjuna said, 'I wish to learn about Nature and the Spirit, the field and the knower of the field, knowledge and that which ought to be known, O Kesava.'",
          "Verse 2: The Blessed Lord said, 'O Arjuna, this body is called the field; he who knows it is called the knower of the field by those who know them.'",
          "Verse 3: Do thou also know Me as the knower of the field in all fields, O Arjuna. Knowledge of both the field and the knower of the field is considered by Me to be the knowledge.",
          "Verse 4: Hear from Me in brief what the field is, of what nature it is, what its modifications are, whence it is, who He is, and what His powers are.",
          "Verse 5: Sages have sung in many ways, with various distinctive chants and also with suggestive words indicative of the Absolute, full of reasoning and decisive.",
          "Verse 6: The great elements, egoism, intellect, and also the Unmanifested Nature, the ten senses, and one mind, and the five objects of the senses.",
          "Verse 7: Desire, hatred, pleasure, pain, the aggregate (body), intelligence, and fortitude—the field has thus been briefly described with its modifications.",
          "Verse 8: Humility, unpretentiousness, non-injury, forgiveness, uprightness, service to the teacher, purity, steadfastness, and self-control.",
          "Verse 9: Indifference to the objects of the senses and also absence of egoism; perceiving the evil in birth, death, old age, sickness, and pain.",
          "Verse 10: Non-attachment, non-identification of the Self with son, wife, home, and the rest, and constant even-mindedness in the face of the attainment of both desirable and undesirable.",
          "Verse 11: Unswerving devotion to Me through the Yoga of non-separation, resorting to solitary places, and a distaste for the company of people.",
          "Verse 12: Constancy in Self-knowledge, the perception of the end of true knowledge—this is declared to be knowledge, and what is opposed to it is ignorance.",
          "Verse 13: I will declare that which is to be known, knowing which one attains immortality; the beginningless Supreme Brahman, which is neither being nor non-being.",
          "Verse 14: With hands and feet everywhere, with eyes, heads, and mouths everywhere, with ears everywhere, He exists in the worlds, enveloping all.",
          "Verse 15: Shining by the functions of all the senses, yet without being attached to them; unattached, yet supporting all; devoid of qualities, yet the experiencer of them.",
          "Verse 16: It is within and without all beings, both the unmoving and the moving; It is subtle and unknowable, and It is near and far away.",
          "Verse 17: Undivided yet, It exists as if divided in beings; It is to be known as the supporter of beings; It devours and It generates.",
          "Verse 18: That Light of all lights is said to be beyond darkness: knowledge, the knowable, and the goal of knowledge, seated in the hearts of all.",
          "Verse 19: Thus, the field, as well as knowledge and the knowable, have been briefly stated. My devotee, knowing this, enters into My being.",
          "Verse 20: Know that Nature (matter) and the Spirit are both beginningless, and know also that all modifications and qualities are born from Nature.",
          "Verse 21: In the production of the effect and the cause, Nature (matter) is said to be the cause; in the experience of pleasure and pain, the soul is said to be the one responsible.",
          "Verse 22: The soul seated in Nature experiences the qualities born of Nature; attachment to the qualities is the cause of its birth in good and evil wombs.",
          "Verse 23: The Supreme Soul in this body is also called the observer, the permitter, the sustainer, the enjoyer, the great Lord, and the Supreme Self.",
          "Verse 24: He who thus knows the Spirit and Matter together with their qualities, in whatever condition he may be, he is not reborn.",
          "Verse 25: Some behold the Self within themselves through meditation, others through the Yoga of knowledge, and still others through the Yoga of action.",
          "Verse 26: Others, too, who do not know thus, worship, having heard of It from others; they, too, cross beyond death, regarding what they have heard as the supreme refuge.",
          "Verse 27: Wherever a being is born, whether unmoving or moving, know thou, O best of the Bharatas (Arjuna), that it is from the union of the field and its knower.",
          "Verse 28: He who sees the Supreme Lord existing truly in all beings, the imperishable within the perishable, sees indeed.",
          "Verse 29: For he who truly sees the same Lord dwelling everywhere does not destroy the Self by the self; rather, he attains the highest goal.",
          "Verse 30: He sees, who sees that all actions are performed solely by Nature and that the Self is without action.",
          "Verse 31: When a person sees all beings as resting in the One and emanating from the One alone, they then become Brahman.",
          "Verse 32: Being without beginning, devoid of any qualities, the Supreme Self, imperishable, though dwelling in the body, O Arjuna, neither acts nor is tainted.",
          "Verse 33: As the all-pervading ether is not tainted, due to its subtlety, so the Self seated everywhere in the body is not tainted either.",
          "Verse 34: Just as the one sun illuminates the entire world, so too does the Lord of the field (Supreme Self) illuminate the entire field, O Arjuna.",
          "Verse 35: They who, by the eye of knowledge, perceive the distinction between the field and its knower, as well as the liberation from the Nature of being, go to the Supreme.",
        ].map((verse, index) => (
          <div key={index} className="verse">
            <p>{verse}</p>
          </div>
        ))}
      </div>
      <div className="commentary-container">
        <h2>Commentary</h2>
        <p>
          Chapter 13 delves into the profound distinction between the material
          world and the eternal Self. Here, Arjuna seeks knowledge about the
          nature of reality, prompting Lord Krishna to elucidate the differences
          between the field and the knower of the field.
        </p>
        <p>
          The concept of Kṣetram and Kṣetrajña is pivotal in this chapter. The
          body is depicted as the field, while the soul or Self is the knower.
          This realization is essential for anyone on the path to enlightenment,
          as it encourages us to look beyond our physical existence and
          recognize our true essence.
        </p>
        <p>
          The commentary emphasizes the importance of understanding both prakṛti
          (nature) and puruṣa (spirit) to attain wisdom. The chapter addresses
          the interconnectedness of all beings, highlighting the journey towards
          liberation through self-awareness and knowledge.
        </p>
        <p>
          Ultimately, Chapter 13 serves as a guide to understanding our place in
          the universe, fostering a deeper comprehension of existence and the
          relationship between the material and spiritual realms.
        </p>

        <h2>Commentary by Swami Paramarthananda</h2>
        <h3>Background</h3>
        <p>
          In this chapter, the discourse focuses on the essence of what
          constitutes reality. Understanding the distinctions between the field
          and the knower is fundamental to grasping the teachings of the Gita.
          The exploration of prakṛti and puruṣa reveals the layers of existence
          that often cloud our understanding of the Self.
        </p>
        <p>
          In the first six chapters, Lord Kṛṣṇa talked about the nature of jīva
          (tvam-pada) and karmayoga predominantly. In the second six chapters,
          Bhagavān discussed the nature of Īśvara (tat-pada) and upāsanā
          predominantly — especially virāḍ-upāsanā. When a seeker goes through
          these stages of understanding and sādhanam, he becomes ready for
          jñānayoga which is the recognition of the identity between the jīva
          and Īśvara (asi-pada). This is the topic which will be dealt with in
          the following six chapters.
        </p>

        <h3>Key Concepts</h3>
        <p>
          The chapter offers insights into the nature of knowledge and the
          importance of discerning the material from the spiritual. Recognizing
          the eternal within the transient is a key theme, guiding practitioners
          toward a deeper spiritual awakening.
        </p>
        <p>
          The thirteenth chapter is presented in the form of six topics —
          kṣetram, kṣetrajña, jñānam, jñeyam, puruṣa, and prakṛti. Though these
          are discussed separately, we should note that kṣetrajña, jñeyam, and
          puruṣa are the same essentially. Similarly, kṣetram and prakṛti are
          essentially the same.
        </p>

        <h4>Kṣetram</h4>
        <p>
          The entire objective universe is kṣetram. From the beginningless
          prakṛti (avyaktam) everything experienced by us comes under this. It
          includes mahat (cosmic intellect), ahaṅkāra (cosmic ego), the subtle
          and gross elements, sense organs of action and perception, the mind
          and its modifications (6, 7). Still, Kṛṣṇa specially mentions the body
          as kṣetram (2) because we generally do not see the body as part of the
          universe.
        </p>

        <h4>Kṣetrajña</h4>
        <p>
          That conscious principle which illumines the kṣetram is called
          kṣetrajña (2). Having defined kṣetrajña, Kṛṣṇa reveals that the
          kṣetrajña is none other than the Lord (i.e. Brahman) Himself who is
          the consciousness in all bodies (3). Thus, kṣetrajña is one
          all-pervading consciousness. (This kṣetrajña alone is called jīva. So,
          the idea given here is the essential identity of jīva and Īśvara.)
        </p>

        <h4>Jñānam</h4>
        <p>
          From the 8th to the 12th verse, Kṛṣṇa talks about some important
          values which prepare the mind for Self-knowledge. They are: humility,
          simplicity, non-violence, forbearance, honesty, service to the
          teacher, purity, steadfastness, self-control, detachment from sense
          objects, absence of egoism, constant awareness of the misery in birth,
          death, etc., dispassion, non-identification with son, wife, house,
          etc., being always equanimous in desirable and undesirable situations,
          unswerving devotion to the Lord, seclusion, non-indulgence in people’s
          company, constant self-enquiry, and not losing sight of the fruit of
          Self-knowledge.
        </p>

        <h4>Jñeyam</h4>
        <p>
          In the next six verses (13th to 18th), Kṛṣṇa talks about the Truth
          which is to be known. It is beginningless, beyond sat and asat (13),
          all-pervading, subtle, far (for the ignorant), and near (for the wise)
          (16). Though undivided, it appears divided, and it is the creator,
          sustainer, and destroyer of all (17). It is the light of consciousness
          which resides in the heart of all (18). Being subtle, it cannot be
          known in its pure form. Yet, it shines in the body (as
          Awareness-Existence) and in the world (as Existence). One has to
          recognize it as pure Awareness-Existence by distinguishing it from the
          body and the world (14, 15). (This method of teaching is called
          adhyāropa-apavāda-prakriyā i.e. the method of superimposition and
          negation.)
        </p>

        <p>
          Having talked about these four topics, Kṛṣṇa glorifies this knowledge
          as the one which leads the seeker to Him (19).
        </p>

        <h4>Puruṣa and Prakṛti</h4>
        <p>
          Now comes the last pair, puruṣa and prakṛti (20 to 24). Both are
          beginning-less. Blessed by puruṣa, prakṛti creates everything (20 and
          27). (Though beginningless, puruṣa and prakṛti are of opposite nature.
          While puruṣa is conscious, changeless, and real, prakṛti is inert,
          changing, and unreal.) The body, the mind, and their activities belong
          to prakṛti, whereas puruṣa is a mere illuminator of all these (21).
          When puruṣa obtains in the body as kṣetrajña, it seems to be a kartā,
          bhoktā, etc. But as paramātmā, the absolute, it is ever unaffected and
          is ever the same (23). Not knowing this, when puruṣa (i.e. kṣetrajña)
          identifies with the body and its guṇas, then all limitations and the
          consequent problems arise (22). One who has the discriminative
          knowledge of puruṣa and prakṛti attains immortality (24).
        </p>

        <p>
          In the following verses (25th and 35th) Kṛṣṇa sums up the teaching and
          presents its sādhanam and phalam. The wise man is one who always
          abides in the Self, which is the same everywhere (28 and 29), which is
          actionless (30), and which is unaffected (32) like the space or like
          the light (34). The Self is not only the illuminator of everything
          (34) but also the substratum of the whole universe (31). In fact,
          there is no universe other than the Self (35). One who has assimilated
          this wisdom is Brahman itself (31) and attains the supreme goal of
          liberation (35).
        </p>

        <p>
          To gain this knowledge, one has to purify the mind through karmayoga,
          gain knowledge through enquiry (sāṅkhya-yoga), and ultimately get
          established in the knowledge through dhyānayoga (25 and 26).
        </p>

        <h3>Main Topics</h3>
        <ul>
          <li>Introduction: 1</li>
          <li>Kṣetram and kṣetrajña: 2 to 7</li>
          <li>Jñānam: 8 to 12</li>
          <li>Jñeyam: 13 to 19</li>
          <li>Puruṣa and prakṛti: 20 to 24</li>
          <li>Sādhanam and phalam: 25 to 35</li>
        </ul>

        <p>
          Since the main topic is the discrimination between the{" "}
          <strong>kṣetram</strong> and <strong>kṣetrajña</strong>, this chapter
          is called <strong>Kṣetrakṣetrajñavibhāga-yoga.</strong>
        </p>
      </div>
      <ChapterNav n={13} />
    </div>
  );
};

export default Chapter13;
