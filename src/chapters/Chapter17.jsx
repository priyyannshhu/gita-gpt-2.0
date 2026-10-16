import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C17.jpg";
import chapterImage1 from "../assets/images/17_1.jpg";
import chapterImage2 from "../assets/images/17_2.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter17 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 17" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 17 - Shraddha Traya Vibhaga Yoga</h1>
          <h2>श्रद्धात्रयविभागयोग</h2>
          <p>
            Sraddhā-Traya-Vibhāga-Yoga - The Yoga of Differentiating Threefold
            Faith
          </p>
          <p>
            In this chapter, the Lord shows how the concept of “guna” that was
            detailed in the 14th chapter applies to faith, worship, food,
            sacrifices/rituals, austerities, and charity. The Lord explains that
            these common activities can each be categorized as sattvic, rajasic,
            or tamasic depending on the manner in which they are conducted. Our
            goal is to engage in only the sattvic varieties since that alone is
            conducive to spiritual development. Below are the main themes of
            Chapter 17:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 6:</strong> Arjuna’s question and three types
              of śraddhā.
            </li>
            <li>
              <strong>Verse 7:</strong> Kṛṣṇa introduces new topics.
            </li>
            <li>
              <strong>Verses 8 - 10:</strong> Three types of food.
            </li>
            <li>
              <strong>Verses 11 - 13:</strong> Three types of yajña.
            </li>
            <li>
              <strong>Verses 14 - 16:</strong> Three types of tapas (based on
              instrument).
            </li>
            <li>
              <strong>Verses 17 - 19:</strong> Three types of tapas (based on
              guṇa).
            </li>
            <li>
              <strong>Verses 20 - 22:</strong> Three types of charity.
            </li>
            <li>
              <strong>Verses 23 - 28:</strong> Significance of “om tat sat” and
              conclusion.
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: Arjuna said, 'What is the condition of those who, disregarding the injunctions of the scriptures, perform sacrifice with faith—is it Sattva, Rajas, or Tamas, O Krishna?'",
          "Verse 2: The Blessed Lord said, 'There are threefold faiths inherent in the nature of the embodied: the sattvic (pure), the rajasic (passionate), and the tamasic (dark). Hear of them.'",
          "Verse 3: The faith of each is in accordance with their nature, O Arjuna. People consist of their faith; as a person's faith is, so are they.",
          "Verse 4: The sattvic, or pure, men worship the gods; the rajasic, or passionate, worship the yakshas and rakshasas; the others, the tamasic or deluded people, worship ghosts and hosts of nature-spirits.",
          "Verse 5: Those men who practice terrific austerities not prescribed by the scriptures, given to hypocrisy and egoism, driven by the force of lust and attachment.",
          "Verse 6: Know thou these to be of demonical resolves, senselessly torturing all the elements in the body and Me who dwell in the body.",
          "Verse 7: The food that is dear to each is threefold, as well as sacrifice, austerity, and almsgiving. Hear the distinction of these.",
          "Verse 8: The foods that increase life, purity, strength, health, joy, and cheerfulness (good appetite), which are savory, oily, substantial, and agreeable, are dear to the Sattvic (pure) people.",
          "Verse 9: The foods that are bitter, sour, salty, overly hot, pungent, dry, and burning are liked by the Rajasic and are productive of pain, grief, and disease.",
          "Verse 10: That which is stale, tasteless, putrid, rotten, rejected, and impure is the food liked by the Tamasic.",
          "Verse 11: That sacrifice which is offered by men without desire for reward, as enjoined by the ordinance (scripture), with a firm faith that doing so is their duty, is Sattvic or pure.",
          "Verse 12: The sacrifice that is offered, O Arjuna, seeking a reward and for show, know that to be a Rajasic Yajna.",
          "Verse 13: They declare that sacrifice to be Tamasic which is contrary to the ordinances of the scriptures, in which no food is distributed, and which is devoid of mantras, gifts, and faith.",
          "Verse 14: Worship of the gods, the twice-born, the teachers, and the wise; purity, straightforwardness, celibacy, and non-injury are all called the austerities of the body.",
          "Verse 15: Speech that causes no excitement, is truthful, pleasant, and beneficial; the practice of studying the Vedas is called austerity of speech.",
          "Verse 16: Serenity of mind, good-heartedness, self-control, and purity of nature—this is called mental austerity.",
          "Verse 17: This threefold austerity, practiced by steadfast men, with the utmost faith, desiring no reward, is called Sattvic.",
          "Verse 18: The austerity that is practiced with the aim of gaining good reception, honor, and worship, and with hypocrisy, is said to be Rajasic, unstable, and transient.",
          "Verse 19: That austerity which is practised out of a foolish notion, with self-torture, or for the purpose of destroying another, is declared to be of the Tamasic nature.",
          "Verse 20: That gift which is given to one who does nothing in return, knowing it to be a duty to give in a suitable place and time to a worthy person, is held to be Sattvic.",
          "Verse 21: And, that gift which is given with the intention of receiving something in return, or expecting a reward, or begrudgingly, is considered to be Rajasic.",
          "Verse 22: The gift that is given in the wrong place and at the wrong time, to unworthy persons, without respect or with insult, is declared to be of a Tamasic nature.",
          "Verse 23: 'Om Tat Sat': This has been declared to be the triple designation of Brahman. By that, the Brahmanas, the Vedas, and the sacrifices were created formerly.",
          "Verse 24: Therefore, with the utterance of 'Om,' the acts of sacrifice, gift, and austerity, as enjoined in the scriptures, are always begun by the students of Brahman.",
          "Verse 25: Uttering 'Tat,' without aiming for the fruits, are the acts of sacrifice, austerity, and the various acts of gifts performed by those seeking liberation.",
          "Verse 26: The word 'Sat' is used to refer to reality and goodness; likewise, O Arjuna, the word 'Sat' is used to refer to an auspicious act.",
          "Verse 27: Steadfastness in sacrifice, austerity, and gift is also called 'Sat', and action in connection with these, or for the sake of the Supreme, is also called 'Sat'.",
          "Verse 28: Whatever is sacrificed, given, or performed, and whatever austerity is practiced without faith, it is called 'Asat', O Arjuna; it is of no value here or hereafter (after death).",
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
          In the previous chapter, Bhagavān said that śāstra is the pramāṇa in
          determining what is right and wrong and that one should act according
          to what śāstra says. Based on this, Arjuna raises a question here —
          “To what category does a person belong if he worships with faith
          without scriptural knowledge – sattvic, rajasic, or tamasic?” (1)
        </p>
        <p>
          Kṛṣṇa answers that he may belong to any category according to his
          temperament. An ignorant person’s faith will depend on his nature
          since he has no scriptural knowledge to guide. (By observing various
          types of worship done by others, he develops his faith according to
          his character. On the other hand, a person who goes by the scriptural
          teaching will invariably have sattvic faith) (2, 3).
        </p>
        <p>
          Kṛṣṇa differentiates three types of faith based upon the object of
          worship (4). Even the nature of worship varies according to faith.
          People of tamasic faith take to severe practices involving torture of
          the body etc. (5, 6).
        </p>
        <p>
          Having answered Arjuna’s question, Kṛṣṇa discusses a few more topics
          namely food, yajña, tapas and charity, differentiating them into three
          types based on the guṇas (7 to 22). (Refer to the chart below.) [A
          seeker has to choose the sattvic type i.e. daivī-sampat and avoid
          rajasic and tamasic types i.e. āsurī-sampat.]
        </p>
        <p>
          Bhagavān concludes the teaching mentioning the significance of the
          mantra “Om tat sat”. This originated from Brahmā’s mouth in the
          beginning of creation, and has been traditionally chanted during
          scriptural activities like yajña, tapas and dāna. The word ‘sat’ has
          many meanings like existence, goodness, good action, steadfastness and
          an action as an offering to the Lord (23 to 27). [In essence the
          utterance of this mantra will sanctify scriptural actions and make
          them sattvic.]
        </p>
        <p>
          In the last verse, Kṛṣṇa emphasizes the importance of śraddhā (faith).
          Without faith all scriptural activities become asat, i.e. fruitless
          (28).
        </p>

        <h3>The topics of this chapter are:</h3>
        <ul>
          <li>Arjuna’s question and three types of śraddhā: 1 to 6</li>
          <li>Kṛṣṇa introduces new topics: 7</li>
          <li>Three types of food: 8 to 10</li>
          <li>Three types of yajña: 11 to 13</li>
          <li>Three types of tapas (based on instrument): 14 to 16</li>
          <li>Three types of tapas (based on guṇa): 17 to 19</li>
          <li>Three types of charity: 20 to 22</li>
          <li>Significance of “om tat sat” and conclusion: 23 to 28</li>
        </ul>
        <p>
          Since <strong>Śraddhā</strong> is highlighted both in the beginning
          and in the end, this chapter is called{" "}
          <strong>Śraddhātrayavibhāga-yoga</strong>.
        </p>

        <img
          src={chapterImage1}
          alt="Chapter 17 1"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "40%",
            display: "block",
            margin: "0 auto",
          }}
        />
        <p>
          Kṛṣṇa divides tapas on the basis of the guṇās and also on the basis of
          the instrument as given below:
        </p>
        <img
          src={chapterImage2}
          alt="Chapter 17 2"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "40%",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
      <ChapterNav n={17} />
    </div>
  );
};

export default Chapter17;
