import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C7.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter7 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 7" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 07 - Jnana Vijnana Yoga</h1>
          <h2>ज्ञानविज्ञानयोग</h2>
          <p>Jnana Vijnana Yoga - Knowledge of The Ultimate Truth</p>
          <p>
            The middle set of 6 chapters beginning with this one are an
            exposition of the Supreme Reality and how it seemingly manifests as
            the world we perceive. Here the Lord describes His so-called lower
            and higher natures and describes the different types of devotees.
            Those who are attracted to limited, worldly results which are part
            of His lower nature are granted those desires by His grace, but the
            few who aspire to His higher nature can achieve oneness with Him.
            Below are the main themes of Chapter 7:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 3:</strong> Introduction to the knowledge of
              God and the glory of that knowledge.
            </li>
            <li>
              <strong>Verses 4 - 12:</strong> Nature of God.
            </li>
            <li>
              <strong>Verse 13:</strong> Cause of saṃsāra.
            </li>
            <li>
              <strong>Verses 14 - 19:</strong> Bhakti, the remedy for saṃsāra.
            </li>
            <li>
              <strong>Verses 20 - 26:</strong> Sakāma-bhakti (devotion for
              material ends).
            </li>
            <li>
              <strong>Verses 27 - 30:</strong> Niṣkāma-bhakti (devotion for
              spiritual end).
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: The Blessed Lord said, 'O Arjuna, hear how you shall, without doubt, know Me fully, with your mind intent on Me, practicing Yoga and taking refuge in Me.'",
          "Verse 2: I will declare to you in full this knowledge combined with realization, after knowing which nothing else remains to be known here.",
          "Verse 3: Among thousands of men, one may perchance strive for perfection; even among those successful strivers, only one may perchance know Me in essence.",
          "Verse 4: Earth, water, fire, air, ether, mind, intellect, and egoism—thus is My Nature divided eightfold.",
          "Verse 5: O mighty-armed Arjuna, this is the inferior Prakriti; know it as distinct from My higher Prakriti.",
          "Verse 6: The superior Prakriti, O Arjuna, is the life force that sustains the universe.",
          "Verse 7: Know that I am the source of all beings; from Me, the entire universe emanates.",
          "Verse 8: I am the taste in water, the light in the sun and the moon, the sound in space, and the ability in man.",
          "Verse 9: I am the original fragrance of the earth, the heat in fire, the life of all that lives, and the penance of all ascetics.",
          "Verse 10: I am the seed of all beings; I am the intelligence of the intelligent.",
          "Verse 11: I am the strength of the strong, devoid of desire and passion.",
          "Verse 12: I am the beginning, the middle, and the end of all beings.",
          "Verse 13: The deluded ones, who are enraptured by the three modes of material nature, do not know Me in My true nature.",
          "Verse 14: Those who take refuge in Me and know My divine nature can escape the bondage of saṃsāra.",
          "Verse 15: The ones who are not devoted to Me are blinded by their desires and seek only worldly gains.",
          "Verse 16: They pray to Me for various boons, not knowing that all desires come from Me.",
          "Verse 17: Those who are steadfast in devotion to Me, seeking only Me, I bless them with the highest wisdom.",
          "Verse 18: I impart the knowledge of self-realization to those who are dear to Me.",
          "Verse 19: The realization of My true nature leads to liberation from the cycle of birth and death.",
          "Verse 20: Thus, the paths of both Sakāma-bhakti and Niṣkāma-bhakti lead to Me, albeit through different desires.",
          "Verse 21: Whatever form any devotee desires to worship with faith, I make that same faith of his firm and unflinching.",
"Verse 22: Endowed with that faith, he engages in the worship of that form and obtains his desired outcome, which is ordained by Me alone.",
"Verse 23: Verily, the reward (fruit) that accrues to those men of small intelligence is finite. The worshippers of the gods go to them, whereas My devotees come to Me.",
"Verse 24: The foolish think of Me, the Unmanifest, as having manifestation, not knowing My higher, immutable, and most excellent nature.",
"Verse 25: I am not manifest to all, veiled as I am by the Yoga-Maya. This deluded world does not know Me, who am unborn and imperishable.",
"Verse 26: I know, O Arjuna, the beings of the past, the present, and the future; however, no one knows Me.",
"Verse 27: O Bharata, all beings are subject to delusion at birth due to the delusion of the pairs of opposites arising from desire and aversion, O Parantapa.",
"Verse 28: But those men of virtuous deeds, whose sins have come to an end and who are freed from the delusion of the pairs of opposites, worship Me steadfastly, with their vows.",
"Verse 29: Those who strive for liberation from old age and death, taking refuge in Me, realize in full that Brahman, the whole knowledge of the Self, and all action.",
"Verse 30: Those who know Me with the Adhibhuta (pertaining to the elements), Adhidaiva (pertaining to the gods), and the Adhiyajna (pertaining to the sacrifice) know Me even at the time of death, remaining steadfast in mind."

        
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
          [In the first six chapters of Gītā, Lord Kṛṣṇa discussed the nature of
          the individual, karmayoga, etc. predominantly. In the following six
          chapters, the Lord will predominantly discuss the nature of God,
          worship of God with attributes (upāsanā), etc. The individual effort
          was emphasized in the previous section. It will be the grace of the
          God that will be emphasized hereafter. In short, all these are
          necessary to achieve the goal of liberation.]
        </p>

        <p>
          In the first three verses, Kṛṣṇa introduces the topic and its glory.
          Surrendering to God, whoever worships Him along with His attributes
          will ultimately discover the attribute-less God (1). The knowledge of
          God with attributes, as different from oneself is called jñānam, and
          the knowledge of God as identical with oneself is called vijñānam.
          This is the highest knowledge because the intellectual quest of a
          person finds its fulfillment in this knowledge (2). The very fact that
          the number of people who attempt and succeed in gaining this knowledge
          is very small shows the subtlety and rarity of this knowledge (3).
        </p>

        <p>
          From the 4th to the 11th verse, Kṛṣṇa talks about the nature of God.
          God has two aspects known as the highest nature (parā-prakṛti) and the
          lower nature (aparā-prakṛti). The lower nature has eight divisions —
          five subtle elements, cosmic ego, cosmic intellect, and the unmanifest
          (4). [This is called lower because it is changing, inert, finite and
          dependently existent.] The higher nature is the consciousness behind
          every body and that alone sustains the entire creation (5). [This is
          called higher because it is changeless, conscious, infinite and
          independently existent.] From this God alone comes the entire creation
          which consists of conscious and inert aspects (jīva and jagat). He
          alone sustains the creation and resolves it (6). In fact, there is no
          creation from Him and He alone is the very essence of everything (7 to
          11). Being the material cause of everything, God is independent of
          everything and everything is dependent on Him (12).
        </p>

        <p>
          In the 13th verse, the Lord traces the causes of all problems
          (saṃsāra). Being deluded by the creation which is the product of three
          guṇas (of aparā-prakṛti), one fails to know the higher nature
          (parā-prakṛti) of the Lord.
        </p>

        <p>
          The divine māyā (power of delusion) consisting of three guṇas cannot
          be conquered by anyone by one’s own effort. Hence the Lord gives the
          only solution possible — “only those who surrender to me cross over
          this māyā” (14).
        </p>

        <p>
          In the next two verses, Kṛṣṇa divides the entire humanity into five
          groups. The lowliest of those are those non-believers who do not
          accept or pursue the Lord. Leading a life governed by their own
          desires and taking to devilish nature, such people are completely lost
          in māyā. The others, though they are devotees, worship Lord with
          different attitudes due to different levels of maturity. Thus ārta is
          one who worships the Lord when he is in distress. Arthārthī is one who
          worships the Lord for material prosperity. Jijñāsu, who is
          discriminative enough to discern the limitation of everything else,
          seeks the Lord through knowledge. Jñānī is one who has reached the
          destination of his life’s journey by discovering his identity with the
          Lord (15, 16).
        </p>

        <p>
          In the next three verses, the Lord talks about the superiority of the
          wise-devotee. His devotion is permanent and undivided. He loves the
          Lord as himself because he does not have the dualistic notion.
          Naturally, the Lord also loves the devotee as Himself (17). Then the
          Lord promises the highest goal for the wise man of non-dualistic
          vision [because fullness is possible only in non-duality] (18). Such a
          vision is achieved by preparing oneself through many births and rare
          those blessed ones (19).
        </p>

        <p>
          In the following four verses, the Lord talks about other devotees who
          worship the Lord but seek various ephemeral ends. They look upon the
          Lord as the bestower of health, wealth, power, etc., and they seek
          those ends through rituals and vows (20). Still the Lord, out of
          compassion, fulfills their prayers (21, 22). But the Lord warns that
          everything except God is finite (23).
        </p>

        <p>
          Then the Lord reveals His true nature [which is identical with the
          seeker’s nature and which is to be gained in terms of knowledge]. He
          is ever evident, imperishable, unsurpassed (24) and unborn. Still
          people, deluded by māyā, mistake the Lord as the person subject to
          birth, etc. (25). Being of the nature of one non-dual awareness, God
          alone knows everything belonging to the past, present and future. God
          never becomes the object of knowledge (26).
        </p>

        <p>
          Concluding this topic, Kṛṣṇa mentions the stages of devotion. Because
          of the fundamental self-ignorance, no one can avoid desires in the
          initial stages of life. Naturally, he will be ārta and arthārthī (27).
          When he worships the Lord, his mind becomes purified and slowly
          desires become less. He becomes a jijñāsu (28). Now, his attention
          turns towards knowledge and he pursues it, surrendering to the Lord.
          Soon he becomes jñānī knowing all about Brahman, karma, adhyātma,
          adhibūta, adhidaiva and adhiyajña. [He knows both the parā-prakṛti and
          aparā-prakṛti of the Lord.] Being established in his knowledge, he
          does not lose sight of the Lord even at the time of death (29, 30).
          [Thus jñāni-bhakta enjoys both jīvanmukti and videhamukti.]
        </p>

        <h3>Main Topics of This Chapter</h3>
        <p>The main topics of this chapter are:</p>
        <ul>
          <li>
            Introduction to the knowledge of God and the glory of that
            knowledge: 1 to 3
          </li>
          <li>Nature of God: 4 to 12</li>
          <li>Cause of saṃsāra: 13</li>
          <li>Bhakti, the remedy for saṃsāra: 14 to 19</li>
          <li>Sakāma-bhakti (devotion for material ends): 20 to 26</li>
          <li>Niṣkāma-bhakti (devotion for spiritual end): 27 to 30</li>
        </ul>
        <p>
          Since the knowledge of saguṇa-īśvara (jñānam) and that of
          nirguṇa-īśvara (vijñānam) are highlighted in this chapter, it is
          called jñānavijñāna-yoga.
        </p>
      </div>
      <ChapterNav n={7} />
    </div>
  );
};

export default Chapter7;
