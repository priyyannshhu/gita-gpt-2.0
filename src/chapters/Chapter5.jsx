import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C5.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter5 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 5" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 05 - Sanyasa Yoga</h1>
          <h2>कर्मसंन्यासयोग</h2>
          <p>Karma Vairagya Yoga - Action and Renunciation</p>
          <p>
            This chapter serves as a bridge between the action-oriented life
            extolled by the Lord in the previous two chapters and the life of
            contemplation that follows. The emphasis here is on renunciation,
            but the Lord makes it clear that this is a state of mind. He
            explains the qualities of a true renunciate. Below are the main
            themes of Chapter 5:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 6:</strong> The two lifestyles, Sāṅkhya and
              Yoga.
            </li>
            <li>
              <strong>Verses 7 - 12:</strong> Karmayoga and its phalam
              (results).
            </li>
            <li>
              <strong>Verses 13 - 21:</strong> Jñānakarmasannyāsa (renunciation
              of action through knowledge).
            </li>
            <li>
              <strong>Verses 22 - 23:</strong> Vairāgyam (detachment).
            </li>
            <li>
              <strong>Verses 24 - 26:</strong> Videhamukti (liberation after
              death).
            </li>
            <li>
              <strong>Verses 27 - 29:</strong> Instruction on meditation.
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: Arjuna said, 'O Krishna, you praise renunciation of actions and also yoga. Please tell me conclusively which is better of the two.'",
          "Verse 2: The Blessed Lord said, 'Renunciation and the Yoga of action both lead to the highest bliss; but of the two, the Yoga of action is superior to the renunciation of action.'",
          "Verse 3: He should be known as a perpetual Sannyasi who neither hates nor desires; for, free from the pairs of opposites, O mighty-armed Arjuna, he is easily freed from bondage.",
          "Verse 4: Children, not the wise, speak of knowledge and the Yoga of action, or the performance of action, as though they are distinct and different; he who is truly established in one, obtains the fruits of both.",
          "Verse 5: That place which is reached by the Sankhyas or the Jnanis is also reached by the Yogis (Karma Yogis). He who sees knowledge and the performance of action (Karma Yoga) as one, sees truly.",
          "Verse 6: But, O mighty-armed Arjuna, renunciation is hard to attain without Yoga; the sage who is in harmony with Yoga quickly goes to Brahman.",
          "Verse 7: He who is devoted to the path of action, whose mind is pure, who has conquered the self, who has subdued his senses, and who realizes his Self as the Self in all beings, though acting, is not tainted.",
          "Verse 8: 'I do nothing at all,' thus would the harmonized knower of Truth think, seeing, hearing, touching, smelling, eating, going, sleeping, and breathing.",
          "Verse 9: Speaking, letting go, seizing, opening, and closing the eyes, one should be convinced that the senses move among the sense-objects.",
          "Verse 10: He who does actions, offering them to Brahman and abandoning attachment, is not tainted by sin, just as a lotus leaf is not tainted by water.",
          "Verse 11: Yogis, having abandoned attachment, perform actions only through the body, mind, intellect, and even the senses, for the purification of the self.",
          "Verse 12: The one who is united (the well-poised or harmonized) having abandoned the fruit of action attains eternal peace; whereas the one who is not united (the unsteady or unbalanced), impelled by desire and attached to the fruit, is bound.",
          "Verse 13: Mentally renouncing all actions and being self-controlled, the embodied one happily rests in the nine-gated city, neither acting nor causing others (body and senses) to act.",
          "Verse 14: Neither does the Lord create agency nor actions for the world, nor union with the fruits of actions; rather, it is Nature that acts.",
          "Verse 15: The Lord takes neither the demerit nor the merit of any; knowledge is enveloped by ignorance, and beings are deluded.",
          "Verse 16: But to those whose ignorance is destroyed by knowledge of the Self, like the sun, knowledge reveals the Supreme Brahman.",
          "Verse 17: Their intellect absorbed in That, their self being That, established in That, with That as their supreme goal, they go whence there is no return, their sins dispelled by knowledge.",
          "Verse 18: Sages look with an equal eye on a Brahmana endowed with learning and humility, on a cow, an elephant, a dog, and even an outcaste.",
          "Verse 19: Even here in this world, those whose minds rest in reality overcome birth; Brahman is indeed spotless and real; therefore they are established in Brahman.",
          "Verse 20: Resting in Brahman, with a steady intellect and undeluded, the knower of Brahman neither rejoices upon obtaining what is pleasant nor grieves upon obtaining what is unpleasant.",
          "Verse 21: With the self unattached to external contacts, he finds happiness in the Self; with the self engaged in the meditation of Brahman, he attains endless happiness.",
          "Verse 22: The enjoyments that arise from contact are only sources of pain, for they have a beginning and an end, O Arjuna; the wise do not rejoice in them.",
          "Verse 23: He who is able, while still here in this world, to withstand the impulse born out of desire and anger before the liberation from the body, he is a Yogi, and he is a happy man.",
          "Verse 24: He who is happy within, who rejoices within, and who is illuminated within, that Yogi attains absolute freedom, or Moksha, becoming Brahman himself.",
          "Verse 25: The sages obtain absolute freedom or Moksha when their sins have been destroyed, their dualities have been torn asunder, they are self-controlled, and they are intent on the welfare of all beings.",
          "Verse 26: Absolute freedom exists on all sides for those self-controlled ascetics who are free from desire and anger, who have controlled their thoughts, and who have realized the Self.",
          "Verse 27: Shutting out all external contacts and fixing the gaze between the eyebrows, realizing the outgoing and incoming breaths moving within the nostrils.",
          "Verse 28: With the senses, mind, and intellect ever controlled, having liberation as their supreme goal, free from desire, fear, and anger, the sage is truly liberated forever.",
          "Verse 29: He who knows Me as the enjoyer of sacrifices and austerities, the great Lord of all the worlds, and the friend of all beings, attains peace.",
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
          In the fourth chapter, Lord Kṛṣṇa talked about knowledge and
          renunciation. He referred to the wise man as one whose karmas are
          burnt by the fire of knowledge (IV-19). He glorified the wise man as
          one who is free from possessions, whose only activity is the
          maintenance of the body (IV-21), and who is happy with anything that
          comes due to prārabdha-karma (IV-22). Evidently, these are the signs
          of a monk. At the same time, Kṛṣṇa concludes the chapter by advising
          Arjuna to take to action (IV-42). Naturally, Arjuna is not able to
          reconcile Kṛṣṇa’s various statements.
        </p>
        <p>
          Secluded life and active life are only two lifestyles. The first is
          called āśrama-sannyāsa (sānkhya, in this chapter), and the latter is
          called karma-yoga (yoga, in this chapter). In both lifestyles, one is
          identified with the equipments. He is a kartā, and hence a saṃsārī.
          This shows that lifestyle itself cannot give liberation. When
          Self-knowledge is gained, one discovers that he is akartā, abhoktā,
          and hence asaṃsārī. Thus, the renunciation of body-identification is
          true sannyāsa, which is called jñānakarma-sannyāsa. This sannyāsa can
          coexist with active life because it is mental renunciation, whereas
          āśrama-sannyāsa cannot coexist with active life because it is physical
          renunciation. Kṛṣṇa advises Arjuna to remain in society and attain the
          goal of jñānakarma-sannyāsa, but Arjuna mistakes sannyāsa for
          āśrama-sannyāsa and sees a contradiction in Kṛṣṇa’s teaching.
        </p>
        <p>
          The chapter begins with Arjuna’s doubt as to how a person can remain
          in duty and be free from actions at the same time. Kṛṣṇa reintroduces
          the two lifestyles, as discussed in chapter III-3, and says that
          either lifestyle can help a person achieve mokṣa (liberation through
          knowledge). Both lifestyles require a relative freedom from rāga
          (attachment) and dveṣa (aversion), which are essential conditions for
          Self-knowledge. Of the two, Kṛṣṇa recommends active life as more
          suitable for a common man, as a secluded life is difficult to pursue
          without maturity (verses 2 to 6).
        </p>
        <p>
          In the next six verses, the Lord discusses karmayoga and the stages of
          progress. A karmayogī dedicates all physical and mental actions to the
          Lord without concern for the results. Because of this attitude, the
          results do not cause any reactions in his mind. Gradually, he develops
          self-control and ultimately discovers his true nature, which is the
          same in all beings. This is achieved through the guidance of a guru.
          This state is referred to as jñānakarma-sannyāsa (verses 7 to 12).
        </p>
        <p>
          The following verses (13 to 21) describe the characteristics of a wise
          man and his wisdom. Having discovered his identity with the pure Self,
          he realizes his nature aligns with that of the Self. In his presence,
          all the organs function, yet he neither acts nor instigates anyone.
          The organs act according to their nature, and he remains unaffected by
          good and evil outcomes.
        </p>
        <p>
          Because of ignorance, one may still be deluded (verse 15). When
          Self-ignorance is destroyed by Self-knowledge, Brahman, the true
          nature, becomes evident (verse 16). Established in Brahman through
          śravaṇam (listening), mananam (reflection), and nididhyāsanam
          (meditation), these wise individuals revel in Brahman. Freed from all
          impurities, they attain videhamukti, a state of liberation from which
          there is no return (verse 17). They recognize the one homogeneous
          awareness-existence behind all beings as their substratum (verse 18).
          Having discovered their identity with the unaffected Brahman, they
          transcend mortality here and now (verse 19).
        </p>
        <p>
          Though prārabdha karma brings both favorable and unfavorable
          circumstances, these spontaneous, delusion-free wise men are neither
          elated nor dejected (verse 20). Detached from the world and
          established in Brahman, they experience infinite ānanda (bliss) (verse
          21).
        </p>
        <p>
          In verses 22 and 23, the importance of vairāgyam (detachment) is
          emphasized. A seeker must detach from sensual pleasures to attain
          infinite bliss. A discriminative seeker, aware of the impermanence of
          these pleasures, refrains from indulging in them (verse 22). One who
          can control the impulses of kāma (desire) and krodha (anger) is a true
          self-controlled person capable of enjoying life (verse 23).
        </p>
        <p>
          Verses 24 to 26 discuss videhamukti. Jīvanmuktās (liberated while
          living) who rejoice in themselves, are pure-minded, love all beings,
          and possess doubt-free knowledge of the Ātmā achieve oneness with
          Brahman (videhamukti) upon the body's dissolution.
        </p>
        <p>
          Having clarified Arjuna’s doubt, Kṛṣṇa briefly addresses meditation in
          the last three verses, to be elaborated upon in the next chapter.
          Although doubtless knowledge can be achieved through śravaṇam and
          mananam, the ingrained belief that “I am the body” prevents this
          knowledge from manifesting as joy. Thus, one must assimilate the
          teaching through continuous meditation (nididhyāsanam).
        </p>
        <p>
          Removing all thoughts related to sense objects, withdrawing the
          senses, regulating breathing, and being free from desire, fear, and
          anger, one should meditate with the intention of attaining mokṣa
          (liberation). Such a yogī attains permanent liberation (verses 27 and
          28).
        </p>
        <p>
          By understanding the Lord as the receiver of all sacrifices, the
          supreme Lord of all worlds, and the friend of all beings, a wise
          person attains peace (verse 29).
        </p>
        <h3>Topics of this Chapter</h3>
        <ul>
          <li>The two lifestyles: sāṅkhya and yoga (verses 1 to 6)</li>
          <li>Karmayoga and its results (verses 7 to 12)</li>
          <li>
            Jñānakarmasannyāsa (renunciation through knowledge) (verses 13 to
            21)
          </li>
          <li>Vairāgyam (detachment) (verses 22 to 23)</li>
          <li>Videhamukti (liberation after death) (verses 24 to 26)</li>
          <li>Instructions on meditation (verses 27 to 29)</li>
        </ul>
        <p>
          Since the main topic is sannyāsa (renunciation), this chapter is
          called <strong>Sannyāsa Yoga.</strong>
        </p>
      </div>
      <ChapterNav n={5} />
    </div>
  );
};

export default Chapter5;
