import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C14.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter14 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 14" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 14 - Guna Traya Vibhaga Yoga</h1>
          <h2>गुणत्रयविभागयोग</h2>
          <p>Guṇa-Traya-Vibhāga-Yoga - The Yoga of the Threefold Modalities</p>
          <p>
            In this chapter, the Lord explains the concept of the threefold
            "guna," which conditions all matter, helping us understand the
            endless variety of forms and experiences in the universe. The goal
            is to transcend these gunas to realize our true, immortal nature.
            Below are the main themes of Chapter 14:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 4:</strong> Introduction
            </li>
            <li>
              <strong>Verses 5 - 18:</strong> Analysis of guṇas
            </li>
            <li>
              <strong>Verses 19 - 20:</strong> Knowledge as the means to
              transcend the guṇas
            </li>
            <li>
              <strong>Verses 21 - 27:</strong> Guṇatīta-lakṣaṇam and sādhanam
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: The Blessed Lord said, 'I will again declare to thee that supreme knowledge, the best of all knowledge, having known which all the sages have gone to supreme perfection after this life.'",
          "Verse 2: Those who, having taken refuge in this knowledge, have attained unity with Me, are neither born at the time of creation nor disturbed at the time of dissolution.",
          "Verse 3: My womb is the great Brahma; in it I place the germ; thence, O Arjuna, is the birth of all beings.",
          "Verse 4: Whatever forms are produced, O Arjuna, in any womb whatsoever, the great Brahma is their womb, and I am the seed-giving father.",
          "Verse 5: These qualities, O Arjuna, born of Nature, bind fast in the body of the embodied, the indestructible: purity, passion, and inertia.",
          "Verse 6: Of these, sattva, which is luminous and healthy due to its stainlessness, binds one by attachment to happiness and knowledge, O sinless one.",
          "Verse 7: Know, O Arjuna, that Rajas is of the nature of passion, the source of thirst and attachment; it binds fast the embodied one by attachment to action.",
          "Verse 8: But know thou Tamas to be born of ignorance, deluding all embodied beings; it binds fast, O Arjuna, through heedlessness, indolence, and sleep.",
          "Verse 9: Sattva attaches to happiness, Rajas to action, O Arjuna, while Tamas, verily shrouding knowledge, attaches to heedlessness.",
          "Verse 10: Now, O Arjuna, Sattva prevails, having overpowered Rajas and Tamas; then Rajas, having overpowered Sattva and Tamas; and then Tamas, having overpowered Sattva and Rajas.",
          "Verse 11: When the wisdom-light shines through every gate of this body, then it may be known that Sattva is predominant.",
          "Verse 12: Greed, activity, the undertaking of actions, restlessness, and longing—these arise when Rajas is predominant, O Arjuna.",
          "Verse 13: Darkness, inertia, carelessness, and delusion—these arise when Tamas is predominant, O Arjuna.",
          "Verse 14: If the embodied one meets death when Sattva is predominant, then they attain the spotless worlds of the knowers of the Highest.",
          "Verse 15: Meeting death in Rajas, he is born among those who are attached to action; and dying in Tamas, he is born in the womb of the thoughtless.",
          "Verse 16: They say that the fruit of good action is Sattvic and pure; indeed, the fruit of Rajas is pain, and the fruit of Tamas is ignorance.",
          "Verse 17: From Sattva arises knowledge, and greed from Rajas; heedlessness and delusion arise from Tamas, and also ignorance.",
          "Verse 18: Those seated in Sattva ascend; those of Rajasic nature dwell in the middle; and those of Tamasic nature, abiding in the function of the lowest Guna, descend.",
          "Verse 19: When the seer beholds no agent other than the Gunas and knows that which is higher than them, he attains to My Being.",
          "Verse 20: The embodied one, having crossed beyond these three Gunas from which the body is evolved, is freed from birth, death, decay, and pain, and attains immortality.",
          "Verse 21: Arjuna said, 'What are the marks of one who has transcended the three qualities, O Lord? What is their conduct, and how do they go beyond these three qualities?'",
          "Verse 22: The Blessed Lord said, 'When light, activity, and delusion are present, he does not hate them, nor does he long for them when they are absent.'",
          "Verse 23: He who, seated like one unconcerned, is not moved by the dualities, and who, knowing that the dualities are active, is self-centered and does not move.",
          "Verse 24: Who is the same in pleasure and pain, who dwells in the Self, to whom a clod of earth, a stone, and gold are all alike, who is the same to the dear and the unfriendly, who is firm, and to whom censure and praise are one and the same.",
          "Verse 25: Who is the same in honor and dishonor, the same to friend and foe, abandoning all undertakings, he is said to have transcended the dualities.",
          "Verse 26: And he who serves Me with unwavering devotion, he, crossing beyond the dualities, is fit for becoming Brahman.",
          "Verse 27: For I am the abode of Brahman, the immortal, immutable, and everlasting Dharma, and absolute bliss.",
        ].map((verse, index) => (
          <div key={index} className="verse">
            <p>{verse}</p>
          </div>
        ))}
      </div>

      <div className="commentary-container">
        <h2>Commentary</h2>
        <p>
          Chapter 14 of the Bhagavad Gita, known as Guṇa-Traya-Vibhāga-Yoga,
          delves into the nature of the three guṇas: sattva (purity), rajas
          (passion), and tamas (inertia). These qualities, which arise from
          Prakriti (Nature), bind the soul to the material world. Each guṇa has
          distinct characteristics that influence human behavior, emotions, and
          thoughts.
        </p>
        <p>
          Sattva, characterized by harmony and wisdom, binds through attachment
          to knowledge and happiness. Rajas, associated with desire and
          restlessness, binds by attachment to action and results. Tamas, linked
          with ignorance and darkness, binds through attachment to lethargy and
          confusion. Understanding these guṇas is essential for transcending
          their influence and attaining spiritual liberation.
        </p>
        <p>
          The Lord emphasizes that one must rise above these three guṇas to
          realize their true, immortal Self. The qualities of a person who has
          transcended the guṇas are discussed, along with the means to achieve
          such a state through devotion and self-realization.
        </p>

        <h2>Commentary by Swami Paramarthananda</h2>
        <h3>The Concept of Guṇas</h3>
        <p>
          The three guṇas are fundamental qualities that govern all of
          existence. They are present in different proportions in all beings and
          objects, resulting in the diversity we observe. The challenge lies in
          recognizing the predominance of a specific guṇa and striving for
          balance while ultimately aiming to transcend their limitations.
        </p>
        <p>
          To achieve liberation (moksha), one must transcend the influence of
          these guṇas through steady self-awareness and spiritual practice
          (sādhanā). This chapter not only explains the effects of each guṇa but
          also guides seekers toward the path of transcendence, describing the
          characteristics of a person who is free from the guṇas.
        </p>

        <h3>The Path to Transcendence</h3>
        <p>
          Knowledge (jnana) serves as a key to rise above the guṇas. It allows
          one to understand the nature of existence and the Self's true nature,
          beyond the physical and mental experiences shaped by the guṇas.
          Through consistent practice and detachment, one can overcome their
          influence and experience the Self's pure consciousness.
        </p>

        <h3>Table of Guṇas</h3>
        <table border="1" cellpadding="5" cellspacing="0">
          <thead>
            <tr>
              <th>No.</th>
              <th>Topic</th>
              <th>Sattva</th>
              <th>Rajas</th>
              <th>Tamas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Lakṣaṇam (Definition)</td>
              <td>Prakāśātmakam (Of the nature of brightness) (6)</td>
              <td>Rāgātmakam (Of the nature of attachment) (7)</td>
              <td>Mohanātmakam (Of the nature of delusion) (8)</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bandhanaprakāra (Mode of binding)</td>
              <td>Jñānasaṅga (By causing attachment to knowledge) (6, 9)</td>
              <td>Karmasaṅga (By causing attachment to activity) (7, 9)</td>
              <td>
                Pramādasaṅga (By causing attachment to indifference) (8, 9)
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Liṅgam (Sign of predominance)</td>
              <td>Jñānavṛddhi (Increase of knowledge) (11)</td>
              <td>Karmavṛddhi (Increase of activity) (12)</td>
              <td>Pramādavṛddhi (Increase of indifference) (13)</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Gati (Travel after death)</td>
              <td>Ūrdhvagati (To higher lokas) (14, 18)</td>
              <td>Madhyamagati (To middle lokas) (15, 18)</td>
              <td>Adhogati (To lower lokas) (16, 18)</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Phalam (Consequence in this life)</td>
              <td>Puṇya & Jñānam (Puṇya and knowledge) (16, 17)</td>
              <td>Duḥkham & Lobha (Sorrow and greed) (16, 17)</td>
              <td>Ajñānam & Moha (Ignorance and delusion) (16, 17)</td>
            </tr>
          </tbody>
        </table>

        <h3>Main Topics</h3>
        <ul>
          <li>Introduction: 1 to 4</li>
          <li>Analysis of guṇas: 5 to 18</li>
          <li>Knowledge as a means to transcend: 19 to 20</li>
          <li>Characteristics of one beyond guṇas: 21 to 27</li>
        </ul>
        <p>
          Since the main topic here is the discrimination of the three guṇas and
          the Self (puruṣa), this chapter is called{" "}
          <strong>Guṇatraya-vibhāga-yoga.</strong>
        </p>
      </div>
      <ChapterNav n={14} />
    </div>
  );
};

export default Chapter14;
