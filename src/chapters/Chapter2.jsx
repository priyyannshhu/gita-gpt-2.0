import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C2.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter2 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 2" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 02 - Sankhya Yoga</h1>
          <h2>सांख्ययोग</h2>
          <p>Sankhya Yoga - The Yoga of Knowledge</p>
          <p>
            Arjuna acknowledges in the opening few verses that he is confused
            about his duty and surrenders to the Lord to instruct him about what
            is good for him. Thereafter, the Lord begins His teaching and by the
            end of the chapter, we get an exhaustive summary of the entire
            philosophical content of the Gita. Below are the main themes of
            Chapter 2:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 10:</strong> Arjunaśaraṇāgati - Arjuna realizes
              the depth of his problem and knows he cannot solve it by himself.
              These verses describe Arjuna's attitude of surrender towards his
              Guru, Lord Krishna.
            </li>
            <li>
              <strong>Verses 11 - 38:</strong> Sāṅkhya-Yoga - Lord Krishna
              expounds the highest knowledge about the nature of the immortal
              Self and the impermanence of all other things, including the body
              and the world.
            </li>
            <li>
              <strong>Verses 39 - 53:</strong> Karma-Yoga - Lord Krishna
              stresses the importance of doing one's duty and the way to perform
              such duty, the way to be a true Karma Yogi through discrimination,
              dispassion, equanimity, and skill in action. Then he glorifies
              Karma Yoga as a way to come to Sankhya Yoga.
            </li>
            <li>
              <strong>Verses 54 - 72:</strong> Sthitaprajñatva-upāya and
              Sthitaprajña-lakṣaṇa - The Lord describes the characteristics of
              the one who is firmly established in the Self (Sthitaprajña) and
              highlights the Sadhanas or practices required to attain such a
              state, where one lives as a Jivan Mukta.
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: Sanjaya said: To him, who was thus overcome with pity, despondent, with eyes full of tears and agitated, Madhusudana (the destroyer of Madhu) or Krishna spoke these words.",
          "Verse 2: The Blessed Lord said, 'From whence has this perilous strait come upon you, this dejection which is unworthy of you, disgraceful, and which will close the gates of heaven upon you, O Arjuna?'",
          "Verse 3: Do not yield to impotence, O Arjuna, son of Pritha. It does not befit you. Cast off this mean weakness of the heart! Stand up, O conqueror of foes!",
          "Verse 4: Arjuna said, 'O Madhusudana, how can I fight in battle with arrows against Bhishma and Drona, who are worthy of being worshipped, O destroyer of enemies?'",
          "Verse 5: Better it is, indeed, in this world to accept alms than to slay the most noble teachers. But if I were to kill them, even in this world, all my enjoyments of wealth and fulfilled desires would be stained with their blood.",
          "Verse 6: I can hardly tell which would be better, that we should conquer them or that they should conquer us. Even the sons of Dhritarashtra, whom we do not wish to slay, stand facing us.",
          "Verse 7: My heart is overpowered by the taint of pity; my mind is confused as to my duty. I ask Thee: Tell me decisively what is good for me. I am Thy disciple; instruct me, who has taken refuge in Thee.",
          "Verse 8: I do not see that this sorrow that burns up my senses would be removed, even if I were to attain prosperous and unrivaled dominion on earth or lordship over the gods.",
          "Verse 9: Sanjaya said: Having spoken thus to Hrishikesha, the Lord of the senses, Arjuna, the conqueror of sleep and destroyer of foes, said, 'I will not fight,' and became silent.",
          "Verse 10: To him who was despondent in the midst of the two armies, Krishna, smiling, O Bharata, spoke these words.",
          "Verse 11: The Blessed Lord said, 'You have grieved for those who should not be grieved for; yet, you speak words of wisdom. The wise grieve neither for the living nor for the dead.'",
          "Verse 12: Nor, at any time, was I not, nor thou, nor these rulers of men; nor, verily, shall we ever cease to be hereafter.",
          "Verse 13: Just as the embodied soul passes through childhood, youth, and old age in this body, so too does it pass into another body; the steadfast one does not grieve over this.",
          "Verse 14: The contact of the senses with the objects, O son of Kunti, which causes heat and cold, pleasure and pain, has a beginning and an end; they are impermanent; endure them bravely, O Arjuna.",
          "Verse 15: That firm man, whom surely these afflictions do not, O chief among men, to whom pleasure and pain are the same, is fit for attaining immortality.",
          "Verse 16: The unreal has no being; there is no non-being of the real; the truth about both has been seen by the knowers of the truth (or the seers of the essence).",
          "Verse 17: Know that to be indestructible, by which all this is pervaded. No one can cause the destruction of that, the Imperishable.",
          "Verse 18: These bodies of the embodied Self, which are eternal, indestructible, and immeasurable, are said to have an end. Therefore, fight, O Arjuna.",
          "Verse 19: He who takes the Self to be the slayer and he who thinks it is slain, neither of them knows. It does not slay, nor is it slain.",
          "Verse 20: It is not born, nor does it ever die; after having been, it again does not cease to be; unborn, eternal, changeless, and ancient, it is not killed when the body is killed.",
          "Verse 21: Whoever knows it to be indestructible, eternal, unborn, and inexhaustible, how can that person slay, O Arjuna, or cause to be slain?",
          "Verse 22: Just as a man casts off worn-out clothes and puts on new ones, so too the embodied Self casts off worn-out bodies and enters others that are new.",
          "Verse 23: Weapons cannot cut it, fire cannot burn it, water cannot wet it, wind cannot dry it.",
          "Verse 24: This Self cannot be cut, burned, wetted, nor dried up; it is eternal, all-pervasive, stable, immovable, and ancient.",
          "Verse 25: This Self is said to be unmanifested, unthinkable, and unchangeable. Therefore, knowing this to be so, you should not grieve.",
          "Verse 26: But even if thou thinkest of It as constantly being born and constantly dying, even then, O mighty-armed one, thou shouldst not grieve.",
          "Verse 27: For the born, death is certain, and for the dead, birth is certain; therefore, you should not grieve over the inevitable.",
          "Verse 28: Beings are unmanifest in their beginning, manifest in their middle state, O Arjuna, and unmanifest again in their end. What is there to grieve about?",
          "Verse 29: One sees this (the Self) as a wonder; another speaks of it as a wonder; another hears of it as a wonder; yet, having heard, none understands it at all.",
          "Verse 30: This indweller in the body of everyone is ever indestructible, O Arjuna; therefore, you should not grieve for any creature.",
          "Verse 31: Further, having regard to your duty, you should not waver, for there is nothing higher for a Kshatriya than a righteous war.",
          "Verse 32: Happy are the Kshatriyas, O Arjuna! who are called to fight in such a battle that comes of its own accord as an open door to heaven.",
          "Verse 33: But if you will not fight this righteous war, then having abandoned your own duty and reputation, you will incur sin.",
          "Verse 34: People will also recount your everlasting dishonor; and for one who has been honored, dishonor is worse than death.",
          "Verse 35: The great chariot-warriors will think that you have withdrawn from the battle out of fear, and you will be held in low esteem by those who have held you in high regard.",
          "Verse 36: Your enemies, scoffing at your power, will speak many abusive words—what could be more painful than this?",
          "Verse 37: Slain, you will obtain heaven; victorious, you will enjoy the earth; therefore, stand up, O son of Kunti, resolved to fight.",
          "Verse 38: Having made pleasure and pain, gain and loss, victory and defeat equal, engage in battle for the sake of battle; thus, you shall not incur sin.",
          "Verse 39: This, which has been taught to you, is wisdom concerning Sankhya. Now listen to wisdom concerning Yoga, endowed with which, O Arjuna, you shall cast off the bonds of action.",
          "Verse 40: In this, there is no loss of effort, nor is there any harm produced, nor any transgression. Even a little of this knowledge protects one from great fear.",
          "Verse 41: Here, O joy of the Kurus, there is only one single-pointed determination; many-branched and endless are the thoughts of the indecisive.",
          "Verse 42: The unwise, taking pleasure in the eulogizing words of the Vedas, utter flowery speech, saying, 'There is nothing else,' O Arjuna.",
          "Verse 43: Full of desires, with heaven as their goal, (they speak words that are directed to ends) leading to new births as the result of their works, and prescribe various methods abounding in specific actions, for the attainment of pleasure and power.",
          "Verse 44: For those who are attached to pleasure and power, whose minds are drawn away by such teachings, their determinate reason is not formed which is steadily bent on meditation and Samadhi (superconscious state).",
          "Verse 45: The Vedas deal with the three attributes; be thou above these three attributes. O Arjuna, free yourself from the pairs of opposites and ever remain in the quality of Sattva, freed from acquisition and preservation, and be established in the Self.",
          "Verse 46: To the Brahmana who has known the Self, all the Vedas are of as much use as a reservoir of water would be in a place where there is a flood.",
          "Verse 47: Your right is only to work, but not to its results; do not let the results of action be your motive, nor let your attachment be to inaction.",
          "Verse 48: Perform action, O Arjuna, being steadfast in Yoga, abandoning attachment and balanced in success and failure; evenness of mind is called Yoga.",

          "Verse 49: Far lower than the Yoga of wisdom is action, O Arjuna. Seek thou refuge in wisdom; wretched are those whose motive is the fruit.",
          "Verse 50: Endowed with wisdom and evenness of mind, one casts off in this life both good and evil deeds; therefore, devote yourself to Yoga; Yoga is skill in action.",
          "Verse 51: The wise, possessing knowledge, having abandoned the fruits of their actions, and being freed from the bonds of birth, go to the place which is beyond all evil.",
          "Verse 52: When your intellect passes beyond the mire of delusion, then you will attain indifference to what has been heard and what has yet to be heard.",
          "Verse 53: When your intellect, which is perplexed by the Vedic texts you have read, stands immovable and steady in the Self, then you will attain Self-realization.",
          "Verse 54: Arjuna said, 'O Krishna, what is the description of one who has steady wisdom and is merged in the superconscious state? How does one of steady wisdom speak, how do they sit, and how do they walk?'",
          "Verse 55: The Blessed Lord said, 'When a man completely casts off, O Arjuna, all the desires of the mind and is satisfied in the Self by the Self, then he is said to be one of steady wisdom.'",
          "Verse 56: He whose mind is not shaken by adversity, who does not long for pleasures, and is free from attachment, fear, and anger, is called a sage of steady wisdom.",
          "Verse 57: He who is everywhere without attachment, upon encountering anything good or bad, neither rejoices nor hastens; his wisdom is firm.",
          "Verse 58: When, like the tortoise which withdraws all its limbs on all sides, he withdraws his senses from the sense-objects, then his wisdom becomes steady.",
          "Verse 59: The objects of the senses turn away from the abstinent man, leaving the longing behind; but his longing also turns away upon seeing the Supreme.",
          "Verse 60: The turbulent senses, O Arjuna, can violently carry away the mind of a wise person, even though they are striving to control them.",
          "Verse 61: Having restrained them all, he should sit steadfast, intent on Me; his wisdom is steady whose senses are under control.",
          "Verse 62: When one thinks of objects, attachment to them arises; from attachment, desire is born; from desire, anger arises.",
          "Verse 63: Anger leads to delusion, which causes loss of memory; this, in turn, leads to the destruction of discrimination, resulting in destruction.",
          "Verse 64: But the self-controlled man, moving among objects with the senses restrained and free from attraction and repulsion, attains peace.",
          "Verse 65: In that peace, all pains are destroyed; for the intellect of the tranquil-minded soon becomes steady.",
          "Verse 66: There is no knowledge of the Self for the unsteady, and no meditation is possible for the unsteady, and no peace for the unmeditative, and how can there be happiness for one who has no peace?",
          "Verse 67: For the mind, which follows in the wake of the wandering senses, carries away his discrimination, as the wind carries away a boat on the waters.",
          "Verse 68: Therefore, O mighty-armed Arjuna, his knowledge is steady whose senses are completely restrained from sense objects.",
          "Verse 69: That which is night to all beings, in that the self-controlled man is awake; when all beings are awake, that is night for the sage who sees.",
          "Verse 70: He attains peace into whom all desires enter, just as waters enter the ocean which, filled from all sides, remains unmoved; but not the man who is full of desires.",
          "Verse 71: That person attains peace who, abandoning all desires, moves about without longing, without the sense of ownership, and without egoism.",
          "Verse 72: O son of Pritha, this is the eternal state, the Brahmic seat. Attaining this, one is not deluded. Being established in it, one attains oneness with Brahman even at the end of life.",
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
          In the first chapter, Arjuna was shown to be completely immersed in
          grief (śoka) caused by attachment (rāga) and delusion (moha).
          Independently analyzing the problem, he comes to the conclusion that
          withdrawing from the war is the only solution.
        </p>
        <p>
          In the beginning of the second chapter, we see the turning point in
          Arjuna. Chastised by Kṛṣṇa (2, 3), Arjuna analyzes the situation
          further. This leads to two important discoveries:
        </p>
        <ol>
          <li>
            His weakness of attachment is a fundamental problem that cannot be
            solved by superficial methods (9).
          </li>
          <li>
            He has to surrender completely to a guru to get out of this
            fundamental problem (8).
          </li>
        </ol>
        <p>
          Thus, Arjuna becomes a śiṣya by surrendering to Lord Kṛṣṇa. Naturally,
          Kṛṣṇa also becomes a guru. Now that the guru-śiṣya relationship has
          been established, the teaching can begin (10).
        </p>
        <p>
          [Once a human being discovers a seeker in him, the guru will be right
          in front. The vedantic teaching can take place only between a guru and
          śiṣya.]
        </p>

        <p>
          Kṛṣṇa straightaway attacks Arjuna’s idea that war is going to harm
          Bhīṣma or himself. He points out that all the problems of Arjuna are
          because of delusion caused by ignorance, for wise men never have a
          problem (11). Thereafter, Kṛṣṇa gives different reasons to establish
          that Arjuna has to fight this war:
        </p>
        <p>
          From the standpoint of the true nature of Ātmā (ādhyātmika-dṛśṭi),
          Bhīṣma and others are immortal. Ātmā is never subject to changes in
          spite of the changes of the body. It is neither a doer nor an enjoyer.
          Hence, neither is Arjuna a slayer nor is Bhīṣma slain. So, why should
          he resist fighting? (12 to 25). Even if the Ātmā is impermanent,
          Arjuna should not lament. Whatever appears will have to disappear, and
          whatever disappears will appear. Hence, one should learn to accept
          change. [In fact, change is the beauty of creation. It looks ugly when
          our outlook is partial or selfish.] Hence, why should Arjuna grieve
          for the physical separation from Bhīṣma and others, which is
          inevitable in life? (26 to 30).
        </p>
        <p>
          From the standpoint of Kṣatriya’s duty (dhārmika-dṛśṭi), Arjuna can
          fight if it is necessary to establish order. A kṣatriya must look at
          the problem not from a personal standpoint, but from a social
          standpoint (31). Hence, why should Arjuna hesitate to fight for a
          righteous cause? A righteous war is a door to heaven for a kṣatriya
          (32). If Arjuna avoids war, not only will he be shirking his duty and
          losing heaven, but he will positively incur sin (33). For avoiding
          sin, at least, Arjuna should fight.
        </p>
        <p>
          Looking at the situation from a worldly angle (laukika-dṛśṭi), Arjuna
          should not withdraw from the war. He will be called a coward by
          everyone (including future generations) (34, 36). Shouldn’t Arjuna
          fight to protect his reputation?
        </p>
        <p>
          With these arguments, Lord Kṛṣṇa persuades Arjuna to fight (37, 38)
          and concludes the first part of his teaching. He calls this
          sāṅkhya-yoga (39). [In fact, the first argument which deals with the
          nature of the Ātmā and the body (ātma-anātma-viveka) alone is the
          sāṅkhya-yoga.] Hereafter, the Lord enters into buddhi-yoga
          (karma-yoga). [Though sāṅkhya-yoga is the true solution for sorrow,
          many are not fit to gain it because of the false idea (moha) that
          worldly pursuits can solve the problem. So, initially, one has to be
          allowed to pursue worldly ends. By this, one should discover for
          oneself that actions and their results cannot give permanent
          satisfaction. This is dispassion. A dispassionate mind can pursue
          sāṅkhya-yoga. Thus karma-yoga is introduced as a means to come to
          sāṅkhya-yoga.]
        </p>
        <p>
          First, the Lord describes the glory of karma-yoga (40 to 46). Then
          comes the principle of karma-yoga. One can choose one’s action but
          never the result. The result is dependent on the laws of action. The
          other factors of the world, known and unknown, may bring a totally
          unexpected result. One cannot avoid that. Yet inaction will not be a
          solution (47). No one can completely know the laws of action. Hence,
          actions are often imperfect in spite of effort. So, one should ever be
          ready for any result. One can hope for the best but should be prepared
          for the worst. When one acts with the above understanding, success and
          failure lose their capacity to shake him. One does not react because
          he is not caught unawares. This equanimity in action is yoga (48).
          Thus, one can convert binding karma into a valid teacher. This is
          skill in action (50). A tranquil mind will soon shed its false value
          attributed to the world and turns towards the Ātmā (52). When, through
          Self-knowledge, one gets established in the peaceful Ātmā, he attains
          liberation (53).
        </p>
        <p>
          Now, Arjuna becomes curious to know the characteristics of a person
          who is firmly established in Self-knowledge (sthitaprajña) (54). Kṛṣṇa
          answers Arjuna’s question and gives the means of stabilizing the
          knowledge.
        </p>
        <p>
          Knowledge cannot be fruitful unless it is stabilized and assimilated.
          For this, Kṛṣṇa talks about two important sādhanas (58 to 68). They
          are the control of the mind and the sense organs and contemplation
          upon the teaching. By this, the knowledge sets (61). On the other
          hand, if these are not practiced, the mind and the sense organs will
          drag a person to the field of sense objects and gradually pull him
          down spiritually (62, 63).
        </p>
        <p>
          Talking about the characteristics of a wise man, the Lord points out
          that the man of Self-knowledge is always satisfied with himself and
          consequently, he is free from all desires (55). He is independent of
          the world to be happy. Naturally, he is free from attachment, hatred,
          desire, anger, fear, elation, depression, etc. (56, 57). Though living
          in the same world, he enjoys a freedom and contentment which is
          unknown to others. Thus, if the ignorant man can be said to be in
          darkness with regards to the Ātmā, the wise man is in the broad
          daylight of the Ātmā (69).
        </p>
        <p>
          The best comparison for the wise man’s mind is the ocean. The ocean is
          independently full and is unaffected by the rivers, entering or not
          entering, dirty or clean. Similarly, the wise man’s mind is
          independently full. It is undisturbed by the favorable and unfavorable
          experiences, entering or not entering (70). Kṛṣṇa concludes this topic
          by glorifying this state as the Brāhmī-state, reaching which one does
          not get deluded again. He lives life as a jīvan-mukta (liberated while
          living) even at the far end of this journey. After death, he becomes
          one with Brahman (nirvāṇam) which is called videha-mukti.
        </p>

        <h3>Main Topics Discussed</h3>
        <p>
          Thus the second chapter discusses the following four topics mainly:
        </p>
        <ul>
          <li>Arjunaśaraṇāgati: 1 to 10</li>
          <li>Sāṅkhya-yoga: 11 to 38</li>
          <li>Karma-yoga: 39 to 53</li>
          <li>Sthitaprajñatva-upāya and sthitaprajña-lakṣaṇa: 54 to 72</li>
        </ul>
        <p>
          Since sāṅkhya-yoga is the main topic, this chapter is aptly called{" "}
          <strong>Sāṅkhya-yoga.</strong>
        </p>
      </div>
      <ChapterNav n={2} />
    </div>
  );
};

export default Chapter2;
