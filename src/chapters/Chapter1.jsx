
import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C1.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter1 = () => {
  return (
    <div className="chapter-container">
      {}
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 1" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 01 - Arjuna Vishada Yoga</h1>
          <h2>अर्जुनविषादयोग</h2>
          <p>Arjuna Vishada Yoga - Yoga of despondency of Arjuna</p>
          <p>
            Arjuna the great warrior is overpowered by grief and delusion born
            out of a sense of attachment to his kith and kin. In his delusory
            state, he makes several fallacious arguments to support his decision
            not to fight. This sets the stage for the Lord’s teaching which
            comprises the rest of the Gita. Below are the main themes of Chapter
            1:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 20:</strong> Description of the armies and the
              preparations for the battle.
            </li>
            <li>
              <strong>Verses 21 - 25:</strong> Arjuna’s chariot driven to the
              middle of the battlefield amidst the two armies.
            </li>
            <li>
              <strong>Verses 26 - 28:</strong> Arjuna's change of mind, leading
              to attachment (rāga).
            </li>
            <li>
              <strong>Verses 29 - 34:</strong> Arjuna’s grief on seeing the
              enormity of the task he is about to undertake (śoka).
            </li>
            <li>
              <strong>Verses 35 - 47:</strong> Arjuna’s delusion which stems
              from his ignorance about the true nature of oneself (moha).
            </li>
          </ul>
        </div>
      </div>

      {}
      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: Dhritarashtra said, 'What did my people and the sons of Pandu do when they had assembled together, eager for battle, on the holy plain of Kurukshetra, O Sanjaya?'",
          "Verse 2: Sanjaya said: Having seen the army of the Pandavas drawn up in battle array, King Duryodhana approached his teacher, Drona, and spoke these words.",
          "Verse 3: Behold, O Teacher! This mighty army of the sons of Pandu, arrayed by the son of Drupada, thy wise disciple.",
          "Verse 4: Here are heroes, mighty archers, equal in battle to Bhima and Arjuna, Yuyudhana (Satyaki), Virata, and Drupada—all mighty warriors.",
          "Verse 5: Dhrishtaketu, Chekitana, the valiant king of Kasi, Purujit, Kuntibhoja, and Saibya—the best of men.",
          "Verse 6: The strong Yudhamanyu and the brave Uttamaujas, the son of Subhadra (Abhimanyu, the son of Subhadra and Arjuna), and the sons of Draupadi, all of them great charioteers (great heroes).",
          "Verse 7: Know also, O best among the twice-born! the names of those who are the most distinguished amongst ourselves, the leaders of my army; these I name to you for your information.",
          "Verse 8: Thou thyself, Bhishma, Karna, Kripa, the victorious in war, Asvatthama, Vikarna, and Bhurisrava, the son of Somadatta—all these are ready for battle.",
          "Verse 9: And also many other heroes, ready to give up their lives for my sake, armed with various weapons and missiles, all well-skilled in battle.",
          "Verse 10: Our army, marshalled by Bhishma, is insufficient, whereas theirs, marshalled by Bhima, is sufficient.",
          "Verse 11: Therefore, do all of you, stationed in your respective positions in the several divisions of the army, protect Bhishma alone.",
          "Verse 12: His glorious grandsire, the oldest of the Kauravas, roared like a lion to cheer Duryodhana and blew his conch.",
          "Verse 13: Then, suddenly, conches, kettledrums, tabors, drums, and cow horns blared forth from the Kaurava side, and the sound was tremendous.",
          "Verse 14: Then, Madhava (Krishna) and the son of Pandu (Arjuna), seated in the magnificent chariot yoked with white horses, blew divine conches.",
          "Verse 15: Hrishikesha blew the Panchajanya, Arjuna blew the Devadatta, and Bhima, the wolf-bellied doer of terrible deeds, blew the great conch Paundra.",
          "Verse 16: King Yudhishthira, the son of Kunti, blew the Anantavijaya; Nakula and Sahadeva blew the Sughosha and the Manipushpaka.",
          "Verse 17: The king of Kasi, an excellent archer, Sikhandi, the mighty car-warrior, Dhrishtadyumna, Virata, and Satyaki, the unconquered.",
          "Verse 18: Drupada and the sons of Draupadi, O Lord of the Earth, and the son of Subhadra, the mighty-armed, blew their conches each separately.",
          "Verse 19: The tumultuous sound rent the hearts of Dhritarashtra's party, reverberating through both heaven and earth.",
          "Verse 20: Then, seeing the people of Dhritarashtra's party standing arrayed and the discharge of weapons about to begin, Arjuna, the son of Pandu whose ensign was a monkey, took up his bow and said the following to Krishna, O Lord of the Earth.",
          "Verse 21: Arjuna said, 'O Krishna, place my chariot in the middle between the two armies, so that I may behold those who stand here, desirous to fight, and know with whom I must fight when the battle is about to commence.'",
          "Verse 22: Arjuna said, 'O Krishna, place my chariot in the middle between the two armies, so that I may behold those who stand here, desirous to fight, and know with whom I must fight when the battle is about to commence.'",
          "Verse 23: For I desire to observe those who are assembled here to fight, wishing to please in battle the evil-minded Duryodhana—the son of Dhritarashtra.",
          "Verse 24: Sanjaya said, 'Thus addressed by Arjuna, Krishna stationed the best of chariots, O Dhritarashtra, in the midst of the two armies.'",
          "Verse 25: In front of Bhishma and Drona, and all the rulers of the earth, he said: 'O Arjuna, son of Pritha, behold these Kurus gathered together.'",
          "Verse 26: Then, Arjuna (son of Pritha) saw there (in the armies) stationed fathers, grandfathers, teachers, maternal uncles, brothers, sons, grandsons, and friends.",
          "Verse 27: He saw fathers-in-law and friends in both the armies. The son of Kunti, Arjuna, seeing all those kinsmen thus standing arrayed, spoke sorrowfully, deeply filled with pity.",
          "Verse 28: Arjuna said, 'O Krishna, seeing my kinsmen arrayed here, eager to fight.",
          "Verse 29: My limbs fail, my mouth is parched, my body quivers, and my hair stands on end.",
          "Verse 30: The Gandiva slips from my hand, and my skin burns all over; I am unable to stand, and my mind is reeling, as it were.",
          "Verse 31: And I see ill omens, O Kesava. I do not see any good in slaying my kinsmen in battle.",
          "Verse 32: I desire not victory, O Krishna, nor kingdom, nor pleasures. What use is dominion to us, O Krishna, or pleasures or even life?",
          "Verse 33: Those for whose sake we desire kingdom, enjoyments, and pleasures stand here in battle, having renounced life and wealth.",
          "Verse 34: Teachers, fathers, sons, and grandfathers, maternal uncles, fathers-in-law, grandsons, brothers-in-law, and other relatives—",
          "Verse 35: These I do not wish to kill, O Krishna, even though they kill me, for the sake of dominion over the three worlds; leave alone killing them for the sake of the earth.",
          "Verse 36: By killing these sons of Dhritarashtra, what pleasure could be ours, O Janardana? Only sin would accrue to us from killing these felons.",
          "Verse 37: Therefore, we should not kill the sons of Dhritarashtra, our relatives; for how can we be happy by killing our own kin, O Madhava (Krishna)?",
          "Verse 38: Though they, with intelligence overpowered by greed, see no evil in the destruction of families and no sin in hostility to friends,",
          "Verse 39: Why should we not, who clearly see the evil in the destruction of families, learn to turn away from this sin, O Janardana (Krishna)?",
          "Verse 40: In the destruction of a family, the immemorial religious rites of that family perish; on the destruction of spirituality, impiety indeed, overwhelms the whole family.",
          "Verse 41: O Krishna, by the prevalence of impiety, the women of the family become corrupt; and, when women are corrupted, O Varshenya (descendant of Vrishni), intermingling of castes arises.",
          "Verse 42: Confusion of castes leads to hell for the slayers of the family, for their forebears fall, deprived of the offerings of rice-balls and libations of water.",
          "Verse 43: By these evil deeds of the destroyers of the family, which cause confusion of castes, the eternal religious rites of the caste and the family are destroyed.",
          "Verse 44: We have heard, O Janardana, that those men in whose families the religious practices have been destroyed are inevitably destined to dwell in hell for an unknown period.",
          "Verse 45: Alas! We are involved in a great sin, for we are prepared to kill our kinsmen, out of greed for the pleasures of a kingdom.",
          "Verse 46: If the sons of Dhritarashtra, with weapons in hand, should slay me in battle, unresisting and unarmed, that would be better for me.",
          "Verse 47: Sanjaya said, Having thus spoken in the midst of the battlefield, Arjuna cast away his bow and arrow and, his mind overwhelmed with sorrow, sat down on the seat of the chariot.",
          
        
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
          The epic battle of Mahābhārata, fought between the Pāṇḍavas and
          Kauravas is the scenario in which the Gītā-teaching is imparted.
          Arjuna, the Pāṇḍava, discovers the problem of saṃsāra in the
          battlefield. He surrenders to Lord Krishna seeking a solution. Then
          follows the great teaching.
        </p>

        <p>
          In order to attain the wisdom that permeates the Gītā one should go
          through the following phases in life:
        </p>

        <ol>
          <li>
            One should discover the problem of saṃsāra, for which Gītā happens
            to be a solution. Unless one discovers the disease, one will not
            seek medicine.
          </li>
          <li>
            One should become possessed by a sincere longing (tīvramumukṣā) for
            freedom from saṃsāra. This alone can lead to committed and fruitful
            pursuit.
          </li>
          <li>
            One should realize that one cannot solve this problem independently.
            The maximum that one can do, as a limited human being, is a
            rearrangement or a reshaping of the problem.
          </li>
          <li>
            One should surrender to a Guru seeking his guidance. When surrender
            to the Guru happens, the ground is prepared for the Gītā-teaching to
            take place.
          </li>
        </ol>

        <p>
          The entire first chapter and the first part of the second chapter are
          devoted to show these developments.
        </p>

        <h3>The problem of saṃsāra</h3>
        <p>
          As shown in the first chapter, the problem of saṃsāra can be said to
          be the problem of attachment (kṛpā or rāga), grief (śoka or viṣāda)
          and delusion (moha). When one is not happy with oneself, one has to
          seek external aids. This leads to dependence and attachment. Since the
          conditions of the depended factors are unpredictable, the very peace
          of mind of that person is in trouble. A disturbed mind can make only
          faulty judgments complicating matters further. Thus a vicious cycle is
          created. This, in short, is the problem of saṃsāra.
        </p>

        <h3>Verse details</h3>
        <p>
          Coming to the text, we find, in the first twenty verses, a vivid
          description of the armies arrayed for battle. After a brief
          instruction of Duryodhana to his commanders, Bhīṣma, Lord Krishna,
          Arjuna, and others blow their conches, signaling the commencement of
          the battle (1 to 20).
        </p>

        <p>
          At this fateful moment, Arjuna commands Lord Krishna, his charioteer,
          to place the chariot in the middle of the army to scrutinize the enemy
          forces. The mischievous Lord brings the chariot in front of Bhīṣma and
          Droṇa and asks Arjuna to survey the army (21 to 25).
        </p>

        <p>
          (Till now Arjuna was convinced that his cousins are unrighteous and
          he, as a kṣatriya, has to fight the battle to establish
          righteousness.)
        </p>

        <p>
          In a moment of weakness, Arjuna slips from reason to relation. Instead
          of seeing the violators of dharma, he sees his beloved kith and kin.
          Naturally, Arjuna is overpowered by attachment. Then follow the twin
          offshoots of attachment viz. grief and delusion (26 to 30).
        </p>

        <p>
          In the next five verses, we see Arjuna expressing his intense grief
          which shakes him completely. This indicates the extent of his
          attachment.
        </p>

        <p>
          Veiled by attachment, his discriminating power becomes inoperative and
          he commits a series of false judgments. Interestingly enough, Arjuna
          even quotes the scriptures to support his unreasonable stand. Thus,
          Arjuna gets caught up in delusion which is depicted from the 36th
          verse up to the end of the chapter (36 to 47).
        </p>

        <p>
          In this way, Arjuna finds himself in the deep sea of attachment,
          sorrow and delusion (rāga, śoka, moha). Arjuna sincerely wants to get
          out of this problem. He thinks that solution is to drop the battle.
          But, one corner of his mind is not convinced by this. At the same
          time, he has not realized that the problem is too deep for him to
          solve independently. Hence he doesn’t surrender to Krishna either.
          Thus caught up in a dilemma, Arjuna sits back on the chariot
          sorrowfully.
        </p>

        <h3>Main Topics of This Chapter</h3>
        <ul>
          <li>Description of the armies and the preparations: 1 to 20</li>
          <li>Arjuna’s chariot driven to the middle of the armies: 21 to 25</li>
          <li>
            Arjuna’s change of mind leading to attachment (rāga): 26 to 28
          </li>
          <li>Arjuna’s grief (śoka): 25 to 34</li>
          <li>Arjuna’s delusion (moha): 35 to 47</li>
        </ul>

        <p>
          Since Arjuna’s grief is the main topic, this chapter is aptly called
          Arjunaviṣādayoga.
        </p>
      </div>
      <ChapterNav n={1} />
    </div>
  );
};

export default Chapter1;
