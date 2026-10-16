import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C16.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter16 = () => {
  return (
    <div className="chapter-container">
      {}
      <div className="chapter-header">
        {}
        <Dropdown />
        
        <img src={chapterImage} alt="Chapter 16" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 16 - Daivasura Sampad Vibhaga Yoga</h1>
          <h2>दैवासुरसंपद्विभागयोग</h2>
          <p>
            Daivasura Sampad Vibhaga Yoga - The Yoga of the Division between the
            Divine and Demoniacal Traits
          </p>
          <p>
            Chapter 16 of the Bhagavad Gita discusses the nature of divine and
            demoniacal qualities, providing insights into human behavior and
            guiding individuals towards self-improvement. The chapter highlights
            the characteristics of a person with divine qualities (Daivi Sampad)
            and contrasts them with the traits of someone possessing demoniacal
            qualities (Asuri Sampad). Here are the main themes of Chapter 16:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 3:</strong> Description of the divine qualities
              that lead to liberation.
            </li>
            <li>
              <strong>Verses 4 - 5:</strong> Description of demoniacal qualities
              and their detrimental effects.
            </li>
            <li>
              <strong>Verses 6 - 20:</strong> Analysis of the two types of
              natures, with emphasis on the demoniacal mindset.
            </li>
            <li>
              <strong>Verses 21 - 24:</strong> The three gates to hell—lust,
              anger, and greed—and the need to avoid them.
            </li>
          </ul>
        </div>
      </div>

      {}
      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: The Blessed Lord said: Fearlessness, purity of heart, steadfastness in the Yoga of knowledge, charity, self-restraint, and sacrifice, study of scriptures, austerity, and straightforwardness—these are the qualities of those born with a divine nature.",
          "Verse 2: Non-violence, truthfulness, absence of anger, renunciation, serenity, aversion to fault-finding, compassion towards all beings, absence of greed, gentleness, modesty, lack of fickleness.",
          "Verse 3: Boldness, forgiveness, fortitude, purity, absence of hatred, absence of excessive pride—these, O Arjuna, are the qualities of those endowed with a divine nature.",
          "Verse 4: Hypocrisy, arrogance, self-conceit, anger, harshness, and ignorance—these, O Partha, belong to one who is born of a demoniacal nature.",
          "Verse 5: The divine qualities are conducive to liberation, while the demoniacal qualities lead to bondage. Grieve not, O Arjuna, for you are born with divine traits.",
          "Verse 6: There are two types of beings in this world—the divine and the demoniacal. The divine has been described at length; now hear from me about the demoniacal.",
          "Verse 7: The demoniacal know not what to do and what to refrain from; neither purity nor right conduct nor truth is found in them.",
          "Verse 8: They say that the universe is without truth, without a moral basis, and without a God; it is brought about by the union of the male and female and has no other cause than desire.",
          "Verse 9: Holding this view, these lost souls of small intellect, of fierce deeds, come forth as enemies for the destruction of the world.",
          "Verse 10: Filled with insatiable desires, full of hypocrisy, pride, and arrogance, holding evil ideas through delusion, they work with impure resolves.",
          "Verse 11: They are bound by a hundred ties of hope, given over to lust and anger, striving to amass by unjust means for the gratification of their desires.",
          "Verse 12: They say, 'This has been gained by me today; I shall obtain this desire. This is mine, and tomorrow I shall gain even more.'",
          "Verse 13: 'That enemy has been slain by me, and others I shall also slay. I am the lord, I enjoy, I am perfect, powerful, and happy.'",
          "Verse 14: 'I am rich and born in a noble family. Who else is equal to me? I shall perform sacrifices, give alms, and rejoice.' Thus, they are deluded by ignorance.",
          "Verse 15: Bewildered by many thoughts, entangled in the net of delusion, addicted to the gratification of desire, they fall into a foul hell.",
          "Verse 16: Self-conceited, stubborn, filled with the intoxication of wealth, they perform sacrifices for ostentation, contrary to scriptural ordinance.",
          "Verse 17: Given over to egoism, power, arrogance, lust, and anger, these malicious people hate Me in the bodies of others and in their own.",
          "Verse 18: Those cruel, hateful, and worst among men, I hurl continually down into demoniacal wombs in the cycle of birth and death.",
          "Verse 19: Entering into demoniacal wombs, deluded birth after birth, they never attain Me, O Kaunteya, but fall into a condition lower than that.",
          "Verse 20: Threefold is the gate of hell, destructive of the self—lust, anger, and greed; therefore, one should abandon these three.",
          "Verse 21: A person who is freed from these three gates to hell, O Kaunteya, practices what is good for oneself and thus attains the Supreme Goal.",
          "Verse 22: He who, casting aside the ordinances of the scriptures, acts under the impulse of desire, attains neither perfection, nor happiness, nor the Supreme Goal.",
          "Verse 23: Therefore, let the scripture be your authority in determining what ought to be done and what ought not to be done. Having known what is ordained by the scriptures, you should act here in this world.",
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
          In the previous three chapters (XIII, XIV, and XV), Bhagavān talked
          about Self-knowledge (jñānayoga), which is the direct means for
          liberation. In the following two chapters, Kṛṣṇa discusses the values
          to be followed by a seeker. Though values themselves do not give
          liberation, they are necessary to gain knowledge. They alone prepare
          the mind and make it fit for receiving the knowledge. In fact, Vedānta
          is a pramāṇa (means of knowledge) only for a prepared mind.
        </p>

        <p>
          In this chapter, Kṛṣṇa divides all mental traits into two groups —
          daivī-sampat and āsurī-sampat. All sattvic traits come under the
          former, while rajasic and tamasic traits come under the latter.
          Daivī-sampat is conducive to Self-knowledge; āsurī-sampat is an
          obstacle to spiritual pursuit. Without exception, everyone in this
          universe falls under one of these two groups. From this, it is evident
          that all seekers of knowledge must necessarily lead a spiritual
          (sattvic) life, avoiding materialistic (rajasic and tamasic)
          tendencies.
        </p>

        <h3>Daivī-sampat</h3>
        <ul>
          <li>Fearlessness</li>
          <li>Purity</li>
          <li>Scriptural Study</li>
          <li>Charity</li>
          <li>Sense-control</li>
          <li>Worship of God</li>
          <li>Austerity</li>
          <li>Straightforwardness</li>
          <li>Non-violence, kindness to all, and absence of ill-will</li>
          <li>Truthfulness</li>
          <li>Renunciation</li>
          <li>Calmness and patience</li>
          <li>Absence of slander</li>
          <li>Absence of greed</li>
          <li>Gentleness</li>
          <li>Modesty</li>
          <li>Steadfastness and absence of restlessness</li>
          <li>Strength</li>
        </ul>

        <h3>Āsurī-sampat</h3>
        <ul>
          <li>Vanity</li>
          <li>Arrogance</li>
          <li>Pretension</li>
          <li>Anger</li>
          <li>Cruelty</li>
          <li>Ignorance</li>
          <li>Impurity</li>
          <li>Absence of religious discipline</li>
          <li>Absence of truthfulness</li>
          <li>Absence of faith in God</li>
          <li>Endless desire for sense-pleasure</li>
          <li>Delusion</li>
          <li>False values</li>
          <li>Worry</li>
          <li>Attachment</li>
          <li>Greed</li>
          <li>Egoism</li>
          <li>Slander</li>
        </ul>

        <h3>Summary</h3>
        <p>
          Āsurī-sampat leads a person astray, causing spiritual destruction
          ultimately. Kṛṣṇa sums up the entire āsurī-sampat as the three basic
          materialistic traits of desire, anger, and greed. They are the
          three-fold gateway to hell. When one avoids these three traits and
          adopts the divine virtues, daivī-sampat, one becomes qualified for
          Self-knowledge and attains liberation soon.
        </p>

        <p>
          The Lord concludes the chapter by pointing out that śāstra is the
          pramāṇa in determining what is right and wrong. One should know what
          the scriptures say and act accordingly.
        </p>

        <h3>Topics Covered</h3>
        <p>
          The topics in this chapter are:
          <ul>
            <li>Daivī-sampat: Verses 1 to 3</li>
            <li>Āsurī-sampat: Verses 4 to 21</li>
            <li>Importance of śāstra and conclusion: Verses 22 to 24</li>
          </ul>
          Since this chapter deals with daiva (spiritual) and āsura
          (materialistic) traits, it is called{" "}
          <strong>Daivāsurasampadvibhāga-yoga.</strong>
        </p>
      </div>
      <ChapterNav n={16} />
    </div>
  );
};

export default Chapter16;
