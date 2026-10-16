import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C4.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter4 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 4" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 04 - Jnana Karma Sanyasa Yoga</h1>
          <h2>ज्ञानकर्मसंन्यासयोग</h2>
          <p>Jñāna Karma Sanyāsa Yoga - Approaching the Ultimate Truth</p>
          <p>
            Having emphasized the importance of action in the previous chapter,
            here the Lord begins a gradual transition to the superiority of
            pursuing knowledge. The virtues of the man of knowledge are
            highlighted, and various worldly practices (sadhanas) are described
            as being rooted in action. However, the Lord concludes the chapter
            by urging Arjuna to act, as right actions are essential for
            preparing the mind for knowledge. Below are the main themes of
            Chapter 4:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 8:</strong> Gītā-stuti and avatāra (the divine
              descent).
            </li>
            <li>
              <strong>Verses 9 - 15:</strong> Knowledge of avatāra and its
              effects.
            </li>
            <li>
              <strong>Verses 16 - 24:</strong> The wisdom of seeing inaction in
              action and vice versa (characteristics of the wise).
            </li>
            <li>
              <strong>Verses 25 - 34:</strong> The glory and the means of
              acquiring knowledge.
            </li>
            <li>
              <strong>Verses 35 - 37:</strong> The benefits of gaining this
              knowledge.
            </li>
            <li>
              <strong>Verses 38 - 42:</strong> Qualifications and
              disqualifications for attaining knowledge.
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: The Blessed Lord said, 'I taught this imperishable Yoga to Vivasvan; he then told it to Manu; Manu proclaimed it to Ikshvaku.'",
          "Verse 2: This, handed down in regular succession by the royal sages, was known. This Yoga, however, has been lost here over time, O Parantapa (burner of the foes).",
          "Verse 3: That same ancient yoga has been today taught to you by me, for you are my devotee and my friend; it is the supreme secret.",
          "Verse 4: Arjuna said, 'Later was Thy birth, and prior to it was the birth of Vivasvan (the Sun); how am I to understand that Thou hast taught this Yoga from the beginning?'",
          "Verse 5: The Blessed Lord said, 'Many births of Mine have passed, as well as of thine, O Parantapa; I know them all, but you do not know them, O Parantapa.'",
          "Verse 6: Though I am unborn and of imperishable nature, and though I am the Lord of all beings, yet, governing my own nature, I manifest myself through my divine Yoga.",
          "Verse 7: Whenever there is a decline of righteousness and an increase of unrighteousness, O Arjuna, at that time I manifest myself.",
          "Verse 8: For the protection of the good, the destruction of the wicked, and the establishment of righteousness, I appear millennium after millennium.",
          "Verse 9: He who thus knows, in their true light, My divine birth and actions, having abandoned the body, is not born again; he comes to Me, O Arjuna.",
          "Verse 10: Freed from attachment, fear, and anger, absorbed in Me, taking refuge in Me, purified by the fire of knowledge, many have attained My Being.",
          "Verse 11: In whatever way men approach Me, even so do I reward them; My path do men tread in all ways, O Arjuna.",
          "Verse 12: Those who long for success in action in this world sacrifice to the gods; for success is quickly attained by men through action.",
          "Verse 13: The fourfold caste has been created by Me according to the differentiation of Guna and Karma; though I am the author of it, know Me as non-doer and immutable.",
          "Verse 14: Actions do not taint Me, nor do I have a desire for the fruit of actions. He who knows Me thus is not bound by actions.",
          "Verse 15: Having known this, the ancient seekers of freedom also performed action; therefore, do thou also perform action, as the ancients did in days of yore.",
          "Verse 16: What is action? What is inaction? Even the wise are confused about this. Therefore, I shall teach you the nature of action and inaction, by knowing which you will be liberated from the evil of Samsara, the wheel of birth and death.",
          "Verse 17: For verily, the true nature of action enjoined by the scriptures should be known, as well as that of forbidden or unlawful action, and of inaction; the nature of action is hard to understand.",
          "Verse 18: He who sees inaction in action and action in inaction, he is wise among men; he is a yogi and performer of all actions.",
          "Verse 19: He whose undertakings are all devoid of desires and selfish purposes, and whose actions have been burned by the fire of knowledge, the wise call him a sage.",
          "Verse 20: Having abandoned attachment to the fruits of the action, ever content, depending on nothing, he does not do anything even while being engaged in activity.",
          "Verse 21: Without hope, controlling the mind and the self, having abandoned all covetousness, and performing only bodily actions, one incurs no sin.",
          "Verse 22: Content with what comes to him without effort, free from the pairs of opposites and envy, even-minded in success and failure, he acts yet is not bound.",
          "Verse 23: To one who is devoid of attachment, who is liberated, whose mind is established in knowledge, and who works for the sake of sacrifice (for the sake of God), the whole action is dissolved.",
          "Verse 24: Brahman is the oblation; Brahman is the melted butter (ghee); by Brahman is the oblation poured into the fire of Brahman; Brahman indeed shall be attained by one who always sees Brahman in action.",
          "Verse 25: Some yogis perform sacrifice to the gods alone; while others, who have realized the Self, offer the Self as sacrifice in the fire of Brahman alone.",
          "Verse 26: Some again offer the organ of hearing and other senses as a sacrifice in the fire of restraint; others offer sound and other objects of the senses as a sacrifice in the fire of the senses.",
          "Verse 27: Others again sacrifice all the functions of the senses and those of the breath (vital energy, or Prana) in the fire of the Yoga of self-restraint, kindled by knowledge.",
          "Verse 28: Others again offer wealth, austerity, and Yoga as sacrifice, while ascetics of self-restraint and rigid vows offer the study of scriptures and knowledge as sacrifice.",
          "Verse 29: Others offer as sacrifice the outgoing breath into the incoming, and the incoming into the outgoing, restraining the flow of the outgoing and the incoming breaths, solely absorbed in the restraint of the breath.",
          "Verse 30: Others who regulate their diet offer life-breaths in each life-breath. All these are knowers of sacrifice, whose sins are destroyed through sacrifice.",
          "Verse 31: Those who eat the remnants of the sacrifice, which are like nectar, go to the eternal Brahman. This world is not for the one who does not perform sacrifice; how then can they have the other, O Arjuna?",
          "Verse 32: Thus, manifold sacrifices are spread out before Brahman at the face of Brahman. Know them all to be born of action, and thus knowing, you shall be liberated.",
          "Verse 33: Superior is wisdom-sacrifice to the sacrifice with objects, O Parantapa (scorcher of the foes). All actions in their entirety, O Arjuna, culminate in knowledge.",
          "Verse 34: Know that the wise who have realized the truth will instruct thee in that knowledge through long prostration, supplication, and service.",
          "Verse 35: Knowing that thou shalt not, O Arjuna, again be deluded like this; and by that thou shalt see all beings in thyself and also in me.",
          "Verse 36: Even if thou art the most sinful of all sinners, yet thou shalt surely cross over all sins by the raft of knowledge.",
          "Verse 37: As the blazing fire reduces fuel to ashes, O Arjuna, so does the fire of knowledge reduce all actions to ash.",
          "Verse 38: Verily, there is no purifier in this world like knowledge. He who is perfected in Yoga finds it within the Self in due time.",
          "Verse 39: The one who is full of faith, devoted to it, and has subdued their senses obtains this knowledge; and upon obtaining the knowledge, they attain the supreme peace immediately.",
          "Verse 40: The ignorant, the faithless, and the doubting self go to destruction; there is neither this world nor the other, nor happiness for the doubting one.",
          "Verse 41: He who has renounced actions through Yoga, whose doubts have been dispelled by knowledge, and who is self-possessed—such a one is not bound by actions, O Arjuna.",
          "Verse 42: Therefore, with the sword of knowledge (of the Self), cut asunder the doubt of the self, born of ignorance, residing in your heart, and take refuge in Yoga. Arise, O Arjuna!",
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
          Lord Kṛṣṇa dealt with karmayoga and sāṅkhyayoga in the third and
          second chapters respectively. These two yogas are not newly introduced
          by Kṛṣṇa. It has been initiated by the Lord in the beginning of the
          creation itself through the karma-kāṇḍa and jñāna-kāṇḍa of the Vedas.
          Thus, this is an ancient wisdom which has stood the test of time.
        </p>
        <p>
          Kṛṣṇa begins the fourth chapter by referring to the above aspect so
          that Arjuna will have reverence for Gītā. The Lord points out that He
          initiated the lineage of Vivasvān (Lord Sun), Manu, Ikṣvāku, and
          others in the beginning of the creation (through the Vedas). It is the
          same ancient Vedic wisdom which is being revived by Lord Kṛṣṇa through
          Arjuna in the form of the Gītā because it had declined by that time
          (2, 3).
        </p>
        <p>
          Now, Arjuna wonders how Kṛṣṇa, who is his contemporary, can be the
          initiator of the ancient Vedic wisdom (4). As an answer to this
          question, Kṛṣṇa introduces the topic of avatāra (5 to 8). We are born
          because of our own karma (vyaṣṭi-karma) as well as the total karma of
          the world (samaṣṭi-karma). In the case of the Lord, His own karma is
          not there. Thus the karma of the world becomes the cause for the birth
          of the Lord. The evil actions of the wicked and the noble worship of
          the saints necessitate the manifestation (avatāra) of the Lord to
          punish the former and bless the latter. Thus, the Lord establishes
          dharma in the universe (7, 8). But, since this birth is only through
          māyā, it is apparent. Hence it does not affect the true birth-less
          nature of the Lord (6). Moreover, since māyā is under the control of
          the Lord, His omniscience, omnipotence, etc. are not veiled. He
          remembers all the past as well as His true nature. It is from this
          standpoint that Kṛṣṇa says “I initiated the Vedic tradition.”
        </p>

        <h3>The wisdom of action</h3>
        <p>
          From the 9th to the 15th verse, the Lord talks about His true nature
          and its knowledge. Though the Lord seems to be active, He is free from
          all activities and their results (13, 14). He is akartā and abhoktā.
          One who recognizes this nature of the Lord also becomes liberated
          i.e., becomes free from actions and their results (9). This shows that
          the true nature of the Lord and jīva is one and the same. But, being
          interested in the pursuit of various types of means and ends, one does
          not turn to this liberating knowledge (12). Still, some people manage
          to become one with the Lord by freeing the mind from attachment,
          hatred, and fear, by surrendering to the Lord, and by finally gaining
          Self-knowledge (10). The Lord gives whatever the devotee seeks (11).
        </p>
        <p>
          From the 16th to the 25th verse, Kṛṣṇa gives the knowledge of the
          nature of action and inaction and the characteristics of the person of
          such knowledge. Having talked about the rareness of such knowledge
          (16, 17), the Lord defines a wise man as one who sees actionlessness
          (of the Self) amidst the activities (of the body) as well as the
          potential action in the seemingly inactive body (18).
        </p>
        <p>
          The idea is that the wise man accepts activities at the level of the
          body because no one can expect relaxation at the body level. The very
          process of life is the continuous function of the body. One should
          only discover inner relaxation even amidst the activities by
          recognizing the true ‘I’ as the actionless Self. Therefore, true and
          complete renunciation is possible only through knowledge.
        </p>
        <p>
          In fact, the wise man never sees anything other than Brahman, that
          being the truth of all (25). Whether his body is active (20) or not
          (21), he is not affected. He is self-sufficient, contented,
          independent, equanimous, and free from fancies, desires, expectations,
          attachments, and jealousy. His actions are meant for the worship of
          the Lord which uplifts humanity (22, 23).
        </p>

        <h3>Verse details</h3>
        <p>
          From the 25th to the 34th verse, the Lord talks about the superiority
          of knowledge over all the other sādhanas and the way of getting that
          knowledge. Various sādhanas are compared to yajñas. They are:
          Brahmajñāna-yajña, deva-yajña, viṣayabhoga-yajña, dama-yajña,
          śama-yajña, prāṇāyāma-yajña, and āhāraniyama-yajña. All sādhanas lead
          one to liberation by preparing the mind. But, being the direct means
          to liberation, Brahmajñāna-yajña is superior to all (33). To get this
          knowledge one should approach a guru who is established in the Truth
          (Tattva-darśi) and who has the necessary language to communicate it
          (jñānī). Such a teacher must be approached with humility, faith, and
          reverence and asked for this knowledge. Instructed by them through the
          scriptures, one gains knowledge; not otherwise (34).
        </p>
        <p>
          From the 35th to the 37th verse, Kṛṣṇa talks about the benefit of this
          knowledge. Gaining the knowledge, one will not get into delusion once
          again. For, he sees everything in the Lord as well as in him (i.e., he
          recognizes his identity with the Lord) (35). By this boat of
          knowledge, one crosses over the ocean of sin however vast it may be
          (36). Like a blazing fire, this knowledge reduces to ashes (renders
          inoperative) all the karmas (37). Hence, knowledge is the greatest
          purifier. All other sādhanas can produce puṇya which itself is a
          bondage. Moreover, no other sādhana can destroy ignorance which is the
          root cause of all sins. That seeker who has purified the mind will
          soon attain knowledge by the teaching of a guru (38).
        </p>

        <h3>Main topics of this chapter</h3>
        <ul>
          <li>Gītā-stuti and avatāra: 1 to 8</li>
          <li>Knowledge of avatāra and its result: 9 to 15</li>
          <li>
            The wisdom of seeing inaction in action and vice versa (The
            characteristics of the wise): 16 to 24
          </li>
          <li>The glory and the means of knowledge: 25 to 34</li>
          <li>Benefit of knowledge: 35 to 37</li>
          <li>Qualifications and disqualifications: 38 to 42</li>
        </ul>
        <p>
          Since the renunciation of all activities through the knowledge of the
          actionless ‘I’ amidst the activities of the body is the main topic
          here, this chapter is called <strong>Jñānakarmasannyāsa-yoga.</strong>
        </p>
      </div>
      <ChapterNav n={4} />
    </div>
  );
};

export default Chapter4;
