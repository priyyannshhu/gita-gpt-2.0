import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C18.jpg";
import chapterImage1 from "../assets/images/Ch18_1.jpg";
import chapterImage2 from "../assets/images/Ch18_2.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter18 = () => {
  return (
    <div className="chapter-container">
      {}
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 18" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 18 - Moksha Sanyasa Yoga</h1>
          <h2>मोक्षसंन्यासयोग</h2>
          <p>Mokṣa-Yoga - The Yoga of Liberation</p>
          <p>
            The concluding chapter of the Gita summarizes the entire teaching of
            the Lord. It emphasizes the distinction between mere abandonment and
            true renunciation, leading to Liberation. Below are the main themes
            of Chapter 18:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 12:</strong> Sannyāsa and tyāga (renunciation
              and abandonment).
            </li>
            <li>
              <strong>Verses 13 - 17:</strong> Jñānayoga (the path of
              knowledge).
            </li>
            <li>
              <strong>Verses 18 - 40:</strong> Three types of knowledge, action,
              doer, intellect, will, and happiness.
            </li>
            <li>
              <strong>Verses 41 - 49:</strong> Karmayoga (emphasizing
              svadharma).
            </li>
            <li>
              <strong>Verses 50 - 55:</strong> Jñānayoga (emphasizing
              meditation).
            </li>
            <li>
              <strong>Verses 56 - 62:</strong> Karmayoga (emphasizing devotion).
            </li>
            <li>
              <strong>Verses 63 - 66:</strong> Final summary.
            </li>
            <li>
              <strong>Verses 67 - 73:</strong> Lord’s concluding remarks.
            </li>
            <li>
              <strong>Verses 74 - 78:</strong> Sañjaya’s concluding remarks.
            </li>
          </ul>
        </div>
      </div>

      {}
      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: Arjuna said, 'O mighty-armed Hrishikesa, I desire to know the essence or truth of renunciation and abandonment severally, O slayer of Kesi.'",
          "Verse 2: The Blessed Lord said, 'The sages understand sannyasa to be the renunciation of action with desire; the wise declare the abandonment of the fruits of all actions to be tyaga.'",
          "Verse 3: Some philosophers declare that actions should be abandoned as evil; while others declare that acts of sacrifice, gift, and austerity should not be relinquished.",
          "Verse 4: Hear from Me the conclusion or the final truth about this abandonment, O best of the Bharatas; abandonment, indeed, O best of men, has been declared to be of three kinds.",
          "Verse 5: Acts of sacrifice, gift, and austerity should not be abandoned, but should be performed; for sacrifice, gift, and austerity are the purifiers of the wise.",
          "Verse 6: But even these actions should be performed, leaving aside attachment and the desire for rewards, O Arjuna; this is my certain and most assured conviction.",
          "Verse 7: Verily, the renunciation of obligatory action is not proper; the abandonment of the same out of delusion is declared to be Tamasic.",
          "Verse 8: He who abandons action out of fear of bodily trouble (because it is painful), does not obtain the merit of renunciation by performing such Rajasic renunciation.",
          "Verse 9: Whatever obligatory action is done, O Arjuna, merely because it ought to be done, abandoning attachment and also the desire for reward, that renunciation is regarded as sattvic (pure).",
          "Verse 10: The man of renunciation, pervaded by purity, intelligent, and with his doubts cut asunder, does not hate an unpleasant task nor is he attached to a pleasant one.",
          "Verse 11: Indeed, it is not possible for an embodied being to completely abandon actions; however, he who relinquishes the rewards of actions is truly called a man of renunciation.",
          "Verse 12: The threefold fruit of action (evil, good, and mixed) accrues after death to those who do not abandon it, but never to those who do.",
        ].map((verse, index) => (
          <div key={index} className="verse">
            <p>{verse}</p>
          </div>
        ))}
      </div>
      {}
      <div className="commentary-container">
        <h2>Commentary by Swami Paramarthananda</h2>

        <h3>Background</h3>
        <p>
          Lord Krishna dealt with Self-knowledge in the XIII, XIV, and XV
          chapters. In the XVI and XVII chapters, the values without which the
          mind will not be fit to receive the knowledge of the Self were
          discussed. With this, the Lord has exhaustively dealt with all aspects
          of vedantic teaching.
        </p>
        <p>
          In such a situation, Arjuna puts his last question to Krishna, seeking
          to clarify the difference between sannyāsa and tyāga. Now begins the
          XVIII chapter answering Arjuna’s question. Bhagavān takes this
          opportunity to sum up His entire teaching, which has been spread over
          the last sixteen chapters.
        </p>
        <p>
          The chapter begins with Arjuna’s question — “Oh Lord! I desire to know
          the true nature of sannyāsa and tyāga distinctly” (1). Krishna replies
          by citing the views of some people (2, 3). The Lord gives his verdict
          from the 4th verse onwards. Bhagavān does not differentiate between
          sannyāsa and tyāga (This indicates that they are not different
          according to the Lord.) Krishna emphasizes the importance of
          obligatory rites (nityakarma) like yajña, dāna, and tapas, and asserts
          that they should never be given up (5, 6) (We should note that this
          advice is given to people with impurity. Śāstras allow a person with
          purity to renounce nityakarma also).
        </p>
        <p>
          In the next three verses, the Lord divides renunciation into three
          types — tamasic, rajasic, and sattvic. (For details, see the chart)
        </p>
        <p>
          In the following verses, Bhagavān glorifies sattvic renunciation. (In
          fact, sattvic renunciation is nothing but karmayoga.) A karmayogī
          renounces all the results of action. In due course, he gets
          Self-knowledge. He is not affected by the consequences, whether they
          are good, evil, or a mixture of both (10 to 12).
        </p>

        <p>
          From the 13th to the 17th verse, Krishna gives a gist of jñānayoga.
          Five factors are involved in every action — the body, prāṇa, the mind
          with sense organs, the ego, and the presiding divinity of all these.
          (In short, they are the four kośās and the presiding divinity) (13,
          14). All actions, good or evil, are accomplished through these five
          factors only (15). The Self is not involved in any action. But, due to
          identification with the above factors, one mistakes oneself to be a
          doer (16). On the other hand, the wise man, who does not have the
          false ‘I’ (ahaṅkāra) born of identification, is free from all karmas
          in spite of the activities of his equipment. He is neither a doer nor
          an enjoyer (17).
        </p>

        <p>
          Taking a diversion, Bhagavān introduces six factors necessary for any
          vyavahāra (transaction). They are — knower, knowledge, known, doer,
          action, and the instrument of action (18). Of these six factors,
          Krishna takes up three (knowledge, action, and doer) for further
          division based on the three guṇas (19). Later, the Lord divides the
          intellect and will also on the same basis (29). Finally, Krishna talks
          about three types of happiness (36). (For details, see the chart)
        </p>

        <img
          src={chapterImage1}
          alt="Chapter 18 1"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "50%",
            display: "block",
            margin: "0 auto",
          }}
        />

        <img
          src={chapterImage2}
          alt="Chapter 18 2"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "50%",
            display: "block",
            margin: "0 auto",
          }}
        />

        <p>
          Krishna concludes this topic by pointing out that there is nothing in
          creation which is free from these three guṇas (40).
        </p>

        <p>
          With an intention to sum up the entire Gītā-teaching, Bhagavān gives
          the essence of karmayoga (41 to 49) and jñānayoga (50 to 55) in the
          following section.
        </p>

        <p>
          Having thus concluded the teaching, the Lord states the qualifications
          necessary to receive this. One who has no faith, discipline, devotion,
          and desire to know should not be given this knowledge (67). The duties
          of the four varṇas (brāhmaṇas, kṣatriyas, vaiśyas, and śūdras) are
          prescribed in the scriptures based on their nature (41 to 44).
          Karmayoga is the performance of one’s own duty as an offering to the
          Lord. This renders the mind fit for knowledge (45, 46). Here, Krishna
          makes it a point to emphasize the importance of svadharma (duty). It
          is necessary not only for the sake of purity but for the sake of
          social harmony also. Shrinking one’s duty can only lead to total
          confusion (47, 48). The purified seeker, who is detached and
          self-controlled, will soon attain liberation through jñānayoga (40).
        </p>

        <p>
          Now the Lord introduces jñānayoga and gives a brief outline of
          meditation i.e. nididhyāsanam (which is necessary to assimilate the
          knowledge gained through śravaṇam and mananam). Having restrained all
          organs and having given up all disturbing thoughts like desire, anger,
          etc., one should remain in a secluded place (51 to 53). Being firmly
          established in his Brahman-nature, he becomes free from grief and
          desire. Being the same to all beings, he enjoys the highest devotion
          to the Lord (54). Having known the Lord in His true nature, he becomes
          one with Him (55). (Becoming one is nothing but dropping the notion of
          division.)
        </p>

        <p>
          In the following verses (56 to 63), Krishna comes back to karmayoga,
          emphasizing the aspect of devotion i.e. the attitude of surrender.
          Constantly remembering the Lord, if one dedicates all his actions to
          Him, that devotee attains the Lord ultimately by effortlessly crossing
          over all obstacles (56 to 58). On the other hand, if one tries to
          evade his duty, which is based on his nature, it will be in vain and
          harmful (58 to 60). Hence, surrendering to the Lord of the heart, the
          controller of all, a devotee should strive to attain supreme peace by
          His grace (61 to 62). With this, Bhagavān concludes the teaching and
          directs Arjuna to do whatever he likes (63). But, the affection
          towards Arjuna overpowers Krishna once again (64). Hence, the Lord
          repeats His teaching emphatically once again — “Fix the mind on Me.
          (Be) My devotee. (Be) My worshiper. Surrender to Me. You shall reach
          Me alone. Truly do I promise to you. You are dear to Me. Having
          renounced all actions, seek Me, the nondual, (as your) shelter. I
          shall liberate you from all sins. Do not grieve” (65, 66). (These two
          verses present karmayoga and jñānayoga in capsule form.)
        </p>

        <p>
          Now comes the phalam. One who imparts and the one who receives this
          wisdom attain the Lord Himself (68 to 70). Even the one who merely
          hears this with faith attains higher worlds (71).
        </p>

        <p>
          Being satisfied with the teaching, Krishna asks Arjuna whether his
          delusion is gone. Arjuna gratefully acknowledges, promising to abide
          by the Lord’s teaching (72, 73).
        </p>

        <p>
          Now Sañjaya addresses Dhṛtarāṣṭra, exclaiming how blessed he was to
          listen to this glorious dialogue between the Lord and Arjuna (74, 75).
          Sañjaya remembers the whole dialogue and the cosmic vision with thrill
          (76, 77). He concludes his remarks with the declaration — “Where there
          is Krishna, the Lord of yoga, and where there is Arjuna, the wielder
          of the bow, there will be permanent wealth, victory, prosperity, and
          justice” (78).
        </p>

        <h3>Main Topics of This Chapter</h3>
        <ul>
          <li>Sannyāsa and tyāga: 1 to 12</li>
          <li>Jñānayoga: 13 to 17</li>
          <li>
            Three types of knowledge, action, doer, intellect, will, and
            happiness: 18 to 40
          </li>
          <li>Karmayoga (emphasizing svadharma): 41 to 49</li>
          <li>Jñānayoga (emphasizing meditation): 50 to 55</li>
          <li>Karmayoga (emphasizing devotion): 56 to 62</li>
          <li>Final summary: 63 to 66</li>
          <li>Lord’s concluding remarks: 67 to 73</li>
          <li>Sañjaya’s concluding remarks: 74 to 78</li>
        </ul>

        <p>
          Since the chapter begins with Sannyāsa which is the means of
          liberation, it is called <strong>Mokṣasannyāsa-yoga.</strong>{" "}
        </p>
      </div>
      <ChapterNav n={18} />
    </div>
  );
};

export default Chapter18;
