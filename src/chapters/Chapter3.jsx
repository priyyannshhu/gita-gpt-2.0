import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C3.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter3 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 3" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 03 - Karma Yoga</h1>
          <h2>कर्मयोग</h2>
          <p>Karma Yoga - Path of Selfless Service</p>
          <p>
            In this chapter, the Lord teaches the importance of action and
            explains why and how one must act in the world so that the mind and
            intellect are purified and relieved of their false attachments,
            thereby making them receptive to the Self-knowledge that was
            emphasized in the previous chapter. Below are the main themes of
            Chapter 3:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 7:</strong> Introduction
            </li>
            <li>
              <strong>Verses 8 - 20:</strong> Karmayoga
            </li>
            <li>
              <strong>Verses 20 - 29:</strong> The role of a wise person
            </li>
            <li>
              <strong>Verses 30 - 35:</strong> Summary
            </li>
            <li>
              <strong>Verses 36 - 43:</strong> The problem of desire and its
              solution
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: Arjuna said: 'If Thou thinkest that knowledge is superior to action, O Krishna, why then, O Kesava, doest Thou ask me to engage in this terrible action?'",
          "Verse 2: 'With this seemingly perplexing speech, you seem to be confusing my understanding; therefore, tell me one certain way by which I may attain bliss.'",
          "Verse 3: The Blessed Lord said, 'In this world, there is a twofold path, as I said before, O sinless one: the path of knowledge of the Sankhyas and the path of action of the Yogins.'",
          "Verse 4: 'Man does not reach actionlessness by not performing actions; nor does he attain perfection by mere renunciation.'",
          "Verse 5: 'Verily, no one can remain for even a moment without performing action; for everyone is made to act helplessly, indeed, by the qualities born of Nature.'",
          "Verse 6: 'He who, restraining the organs of action, sits thinking of the sense-objects in his mind, he of deluded understanding is called a hypocrite.'",
          "Verse 7: 'But whoever, controlling the senses by the mind, O Arjuna, engages himself in Karma Yoga with the organs of action, without attachment, he excels.'",
          "Verse 8: 'Perform your bounden duty, for action is superior to inaction, and even the maintenance of the body would not be possible for you through inaction.'",
          "Verse 9: 'The world is bound by actions other than those performed for the sake of sacrifice; do thou, therefore, O son of Kunti (Arjuna), perform actions for that sake alone, free from attachment.'",
          "Verse 10: 'The Creator, having in the beginning created mankind together with sacrifice, said, “By this shall you propagate; let this be the milch cow of your desires—the cow that yields all the desired objects.”'",
          "Verse 11: 'With this, nourish the gods, and may the gods nourish you; thus, nourishing each other, you shall attain the highest good.'",
          "Verse 12: 'The gods, nourished by the sacrifice, will give you the desired objects. So, he who enjoys the objects given by the gods without offering anything in return is indeed a thief.'",
          "Verse 13: 'The righteous who eat the remnants of the sacrifice are freed from all sins; but those sinful ones who cook food solely for their own sake indeed consume sin.'",
          "Verse 14: 'From food come forth beings; from rain, food is produced; from sacrifice arises rain, and sacrifice is born of action.'",
          "Verse 15: 'Know that action comes from Brahma, and Brahma comes from the Imperishable. Therefore, the all-pervasive Brahma ever rests in sacrifice.'",
          "Verse 16: 'He who does not follow the wheel thus set in motion, who is of sinful life, rejoicing in the senses, lives in vain, O Arjuna.'",
          "Verse 17: 'But for that man who rejoices only in the Self, who is satisfied with the Self and is content in the Self alone, indeed there is nothing to do.'",
          "Verse 18: 'For him, there is no interest whatsoever in what is done or not done; nor does he depend on any being for any purpose.'",
          "Verse 19: 'Therefore, without attachment, always perform the actions that should be done; for by performing actions without attachment, one reaches the Supreme.'",
          "Verse 20: 'Janaka and others attained perfection indeed through action alone; even with the intention of protecting the masses, you should perform action.'",
          "Verse 21: 'Whatever a great man does, others also do; whatever he establishes as the standard, the world follows.'",
          "Verse 22: 'There is nothing in the three worlds, O Arjuna, that needs to be done by Me, nor is there anything unattained that needs to be attained; yet I engage Myself in action.'",
          "Verse 23: 'For, should I not ever engage myself in action, unwearied, people would in every way follow my path, O Arjuna.'",
          "Verse 24: 'These worlds would perish if I did not perform action; I would be the author of confusion of castes and destruction of these beings.'",
          "Verse 25: 'As the ignorant act out of attachment to action, O Bharata, so should the wise act without attachment, wishing for the welfare of the world.'",
          "Verse 26: 'Let no wise man unsettle the minds of ignorant people who are attached to action; he should engage them in all actions, himself fulfilling them with devotion.'",
          "Verse 27: 'All actions are wrought in all cases by the qualities of Nature alone. He whose mind is deluded by egoism thinks, “I am the doer.”'",
          "Verse 28: 'But he who knows the Truth, O mighty-armed Arjuna, about the divisions of the qualities and their functions, knowing that the Gunas, as senses, move amidst the Gunas, as the sense-objects, is not attached.'",
          "Verse 29: 'Those deluded by the qualities of Nature are attached to the functions of the qualities. The man of perfect knowledge should not unsettle the foolish one who is of imperfect knowledge.'",
          "Verse 30: 'Renouncing all actions in Me, with the mind centered on the Self, free from hope and egoism, and from mental fever, fight thou.'",
          "Verse 31: 'Those who constantly practice this teaching of Mine with faith and without caviling, they too are freed from actions.'",
          "Verse 32: 'But those who criticize My teaching and do not practice it, deprived of all knowledge and lacking discernment, know them to be doomed to destruction.'",
          "Verse 33: 'Even a wise man acts in accordance with his own nature; beings will follow their nature; what can restraint do?'",
          "Verse 34: 'Attachment and aversion for the objects of the senses abide in the senses; let no one come under their sway; for, they are his enemies.'",
          "Verse 35: 'Better is one's own duty, though devoid of merit, than the duty of another well discharged. Better is death in one's own duty; the duty of another is fraught with fear.'",
          "Verse 36: Arjuna said, 'But what compels man to commit sin, even against his wishes, O Varshneya (Krishna), as if constrained by force?'",
          "Verse 37: The Blessed Lord said, 'It is desire and it is anger, both of the quality of Rajas, all-devouring and all-sinful; know this as the foe here in this world.'",
          "Verse 38: 'As fire is enveloped by smoke, as a mirror is covered by dust, and as an embryo is surrounded by the amniotic sac, so is this enveloped by that.'",
          "Verse 39: 'O Arjuna, wisdom is enveloped by this constant enemy of the wise, in the form of desire, which is insatiable like fire.'",
          "Verse 40: 'The senses, the mind, and the intellect are said to be its seat; through these, it deludes the embodied one, veiling their wisdom.'",
          "Verse 41: 'Therefore, O best of the Bharatas, control your senses first and then kill this sinful thing, which destroys knowledge and realization.'",
          "Verse 42: 'They say that the senses are superior to the body; the mind is superior to the senses; the intellect is superior to the mind; and He (the Self) is superior even to the intellect.'",
          "Verse 43: 'Thus, knowing Him who is superior to the intellect and restraining the self by the Self, slay thou, O mighty-armed Arjuna, the enemy in the form of desire, hard to conquer.'",
        ].map((verse, index) => (
          <div key={index} className="verse">
            <p>{verse}</p>
          </div>
        ))}
      </div>

      <div className="commentary-container">
        <h2>Commentary</h2>
        <p>
          In this chapter, Krishna emphasizes the significance of performing
          one's duty without attachment to the results. This is the essence of
          Karma Yoga, where one acts selflessly for the benefit of society and
          the world. The focus shifts from renunciation to the understanding
          that action performed in accordance with one's dharma purifies the
          mind and leads to self-realization.
        </p>
        <p>
          Arjuna's initial confusion regarding knowledge and action highlights a
          common dilemma faced by individuals. Krishna clarifies that both paths
          are valid, yet action is essential in the worldly context. He urges
          Arjuna to fulfill his responsibilities as a warrior while remaining
          detached from the outcomes, thus achieving true freedom.
        </p>
        <p>
          The chapter also discusses the role of a wise person who engages in
          selfless action. Such individuals inspire others by their example and
          contribute positively to the collective consciousness. The ultimate
          goal of Karma Yoga is to transcend desires and attachments, leading to
          a higher understanding of life.
        </p>
        <p>
          Overall, this chapter serves as a powerful reminder of the importance
          of action, the balance between duty and detachment, and the path to
          selfless service as a means to attain spiritual wisdom.
        </p>

        <h2>Commentary by Swami Paramarthananda</h2>
        <h3>Background</h3>
        <p>
          In the second chapter, the Lord praised Self-knowledge right from the
          beginning (11, 21, 46) and criticized the karma-kāṇḍa of the Vedas (42
          to 45). Thereafter, He asked Arjuna to take to karma (48). This
          creates a serious doubt in Arjuna and the third chapter begins with
          this doubt.
        </p>
        <p>
          Arjuna asks—“Oh Lord! You seem to confuse me by contradictory
          statements. Tell me one—knowledge or karma—which will lead me to
          Mokṣa” (1, 2).
        </p>
        <p>
          Bhagavān answers that there are two lifestyles called
          karma-yoga-niṣṭhā (social life) and jñāna-yoga-niṣṭhā (secluded life).
          One can choose anyone of them as a householder or as a monk (3).
        </p>
        <p>
          (But there is no choice between karma and knowledge. Whatever
          lifestyle one chooses, one has to follow relevant karma for purity and
          then pursue knowledge to discover the freedom that is one’s true
          nature.
        </p>
        <p>
          Of these two lifestyles, Kṛṣṇa gives preference to social life
          throughout the Gītā. In the Upaniṣads, we find the latter emphasized.
          Choice depends on the maturity of the seeker.)
        </p>
        <p>
          From the 4th to the 7th verse, Kṛṣṇa condemns inaction and praises an
          alert and active life. Inaction should be avoided because:
        </p>
        <ol>
          <li>Neither purity nor knowledge can be achieved by that (4);</li>
          <li>
            Desires force one to act and inaction will be a suppression (5);
          </li>
          <li>
            A mind without occupation will be idle. It will brood over
            sense-pleasures. Such a hypocritical mind will soon fall (6). (Also
            refer II-62, 63)
          </li>
        </ol>
        <p>
          From the 8th to the 20th verse (1st line), Bhagavān deals with one of
          the most beautiful and important topics of the Gītā viz. karma-yoga.
        </p>
        <p>
          Having created the world and the intelligent human beings, the Lord
          Himself advocated (in the Vedas) the way of life which is karma-yoga.
          By following this, material and spiritual progress can be attained (10
          to 14).
        </p>
        <p>
          Since it is the teaching of the Lord, the Master of the universe
          (Svāmī), human beings have to take it as a command (niyatam) and obey
          it as a servant (bhṛtya) of the Lord (8).
        </p>
        <p>
          When we follow the teachings of the Lord, it becomes a gesture of our
          appreciation for all the gifts and blessings that the Lord has
          bestowed upon us. Thus, our work becomes a worship or loving offering
          (yajña) to God. It purifies the mind also (9, 13).
        </p>
        <p>
          Lastly, karma-yoga is necessary to maintain the harmony of the
          universe upon which we are dependent. The working of the universe
          being a cyclic process, with the human beings as its important link,
          one must be aware of one’s responsibility (duty). Thus, karma-yoga is
          only the duty (kāryam) of a responsible citizen of the world. One who
          does not discharge it proves himself/herself to be an immature human
          being (14 to 16).
        </p>
        <p>Thus, karma-yoga is to be pursued because:</p>
        <ol>
          <li>It contributes to material and spiritual progress (yoga).</li>
          <li>
            It is the commandment (niyatam) of the Master of the universe.
          </li>
          <li>
            It is our grateful offering (yajña) to the Lord, acknowledging His
            gifts.
          </li>
          <li>It is the only way of maintaining harmony (dharma).</li>
        </ol>
        <p>
          (In this chapter, Bhagavān does not talk about kāmya-karma — actions
          to fulfill the desires. This shows that true karma-yoga does not
          involve kāmya-karma. Hence a seeker must gradually reduce kāmya-karma,
          even to become a true karma-yogī.)
        </p>
        <p>
          Karma-yoga ultimately leads one to liberation through the stages of
          purity (śuddhi), enquiry (vicāra), and knowledge (jñānam) (17, 18).
          Kṛṣṇa concludes the topic by citing the example of Janaka who
          successfully pursued knowledge while remaining in karma-yoga-niṣṭhā
          (social life) (20, 1st line).
        </p>
        <p>
          From the 20th (2nd line) to the 29th verse, the Lord talks about the
          role of a wise man in society, taking Arjuna as one. Any person with a
          higher status or knowledge (śreṣṭha) can influence others positively
          or negatively. Hence, even though Arjuna might not benefit from this
          war, he has to fight as a kṣaṭriya’s duty and set an example for
          others. Else, he will be responsible for anarchy in his own time as
          well as in the future (22 to 25).
        </p>
        <p>
          Thus, both the wise and the ignorant should act — the former for
          teaching others, and the latter, for purity. The only difference is
          that the former will be detached while the latter won’t be (27 to 29).
        </p>
        <p>The 30th verse summarizes karma-yoga, giving five conditions:</p>
        <ol>
          <li>Keep the spiritual goal.</li>
          <li>Offer all actions to the Lord.</li>
          <li>Don’t be concerned about the result.</li>
          <li>Be free from possessiveness; and</li>
          <li>Be calm.</li>
        </ol>
        <p>
          One who follows karma-yoga reaches the goal of life, and the other is
          lost (31, 32).
        </p>
        <p>
          Likes and dislikes (rāga-dveṣa) born of habits (vāsanas) pull a person
          astray. Still, a person should not go by what he likes to do but what
          he has to do (duty), even if it involves difficulties (33 to 35).
        </p>
        <p>
          As an answer to Arjuna’s question (36), Kṛṣṇa elaborately discusses
          the problem of kāma-krodha (rāga-dveṣa). They are the real enemies of
          a seeker (37). Clouding the knowledge, they force a person to run
          after endless insatiable desires and take away all the chances of
          peace and progress (38, 39). The senses, the mind, and the intellect
          are the base of desires. They have to be taken care of (40, 41).
        </p>
        <p>
          (Durvāsanās should be replaced by śubhavāsanās by practice. False
          values should be replaced by right ones through discrimination.)
        </p>
        <p>
          Once kāma becomes weak, one can discover the Ātmā, which is beyond the
          senses, the mind, and the intellect, and thus destroy kāma for good
          (42, 43).
        </p>

        <h3>Main Topics of this Chapter</h3>
        <ul>
          <li>Introduction: 1 to 7</li>
          <li>Karmayoga: 8 to 20 (1st line)</li>
          <li>The role of a wise person: 20 (2nd line) to 29</li>
          <li>Summary: 30 to 35</li>
          <li>The problem of desire and its solution: 36 to 43</li>
        </ul>
        <p>
          Since karma-yoga is the main topic, this chapter is called{" "}
          <strong>Karma-yoga.</strong>
        </p>
      </div>
      <ChapterNav n={3} />
    </div>
  );
};
export default Chapter3;
