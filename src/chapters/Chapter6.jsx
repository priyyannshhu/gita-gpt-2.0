import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C6.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter6 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 6" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 06 - Dhyana Yoga</h1>
          <h2>आत्मसंयमयोग</h2>
          <p>Dhyana-yoga - The Science of Self Realization</p>
          <p>
            This chapter provides practical methods of meditation for one who
            has purified the mind by diligently engaging in karma-yoga described
            in the previous chapters. For such a seeker, a life of contemplation
            is suggested along with an assurance that the path of meditation
            inevitably leads to the ultimate goal of Realization whether it be
            in the current life or a future one. Below are the main themes of
            Chapter 6:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 9, 16, 17:</strong> Bahiraṅga-sādhanā
            </li>
            <li>
              <strong>Verses 10 - 15:</strong> Antaraṅga-sādhanā
            </li>
            <li>
              <strong>Verses 18 - 32:</strong> Meditation practices and
              realization
            </li>
            <li>
              <strong>Verses 33 - 36:</strong> Dhyāna-pratibandha and parihāra
            </li>
            <li>
              <strong>Verses 37 - 45:</strong> Yogabhraṣṭa (one who falls from
              the path of yoga)
            </li>
            <li>
              <strong>Verses 46 - 47:</strong> Yogistuti (Praise of the yogī)
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: The Blessed Lord said, 'He who performs his bounden duty without depending on the fruits of his actions—he is a sannyasi and a yogi, not he who is without fire and without action.'",
          "Verse 2: Do you, O Arjuna, know that Yoga is what they call renunciation; no one indeed becomes a Yogi who has not renounced their thoughts.",
          "Verse 3: For a sage who wishes to attain to Yoga, action is said to be the means; for the same sage who has attained Yoga, inaction is said to be the means.",
          "Verse 4: When a person is not attached to the sense-objects or to actions, having renounced all thoughts, then they are said to have attained Yoga.",
          "Verse 5: One should raise oneself by one's own self alone; let not one lower oneself; for the self alone is one's own friend, and the self alone is one's own enemy.",
          "Verse 6: The Self is the friend of the self of him by whom the Self has been conquered; but to the unconquered self, this Self stands in the position of an enemy, like an external foe.",
          "Verse 7: The Supreme Self of him who is self-controlled and peaceful remains balanced in cold and heat, pleasure and pain, as well as in honor and dishonor.",
          "Verse 8: The Yogi who is satisfied with the knowledge and wisdom of the Self, who has conquered the senses, and to whom a clod of earth, a piece of stone, and gold are all the same, is said to have attained Nirvikalpa Samadhi.",
          "Verse 9: He who is of the same mind towards the good-hearted, friends, enemies, the indifferent, the neutral, the hateful, the relatives, the righteous, and the unrighteous, excels.",
          "Verse 10: Let the yogi constantly strive to keep the mind steady, remaining in solitude, alone, with the body and mind controlled, and free from hope and greed.",
          "Verse 11: In a clean spot, having established a firm seat of his own, neither too high nor too low, made of cloth, skin, and kusha grass layered one over the other.",
          "Verse 12: There, having made the mind one-pointed, with the actions of the mind and senses controlled, let him, seated on the seat, practice Yoga for the purification of the self.",
          "Verse 13: Let him firmly hold his body, head, and neck erect and still, gazing at the tip of his nose without looking around.",
          "Verse 14: Serene-minded, fearless, firm in the vow of a Brahmachari, having controlled their mind, thinking of Me and balanced in mind, let them sit, having Me as their supreme goal.",
          "Verse 15: Thus, always keeping the mind balanced, the yogi, with the mind controlled, attains the peace abiding in Me, culminating in liberation.",
          "Verse 16: Verily, Yoga is not possible for him who eats too much, nor for him who does not eat at all, nor for him who sleeps too much, nor for him who is always awake, O Arjuna.",
          "Verse 17: Yoga becomes the destroyer of pain for him who is moderate in eating and recreation (such as walking, etc.), who exercises moderation in action, and who is moderate in sleep and wakefulness.",
          "Verse 18: When the perfectly controlled mind rests in the Self alone, free from longing for any of the objects of desire, then it is said, 'He is united.'",
          "Verse 19: As a lamp placed in a windless spot does not flicker, so is the Yogi of a controlled mind, who practices Yoga in the Self, compared.",
          "Verse 20: When the mind, restrained by the practice of yoga, attains quietude, and when one sees the Self by the Self, they are satisfied in their own Self.",
          "Verse 21: When he (the Yogi) feels that infinite bliss which can be grasped by the pure intellect and which transcends the senses, and is established therein, never moving away from the reality.",
          "Verse 22: Having obtained it, he thinks there is no other gain superior to it; established in it, he is not moved even by heavy sorrow.",
          "Verse 23: Let this be known by the name of Yoga, the severance from union with pain. This Yoga should be practiced with determination and with an undespairing mind.",
          "Verse 24: Abandoning unreservedly all desires born of Sankalpa (thought and imagination) and completely restraining the whole group of senses by the mind from all sides.",
          "Verse 25: Little by little, let him attain steadiness of the intellect by holding it firmly; having made the mind establish itself in the Self, let him not think of anything else.",
          "Verse 26: From whatever cause the restless and unsteady mind wanders away, let him restrain it from that and bring it under the control of the Self alone.",
          "Verse 27: Supreme Bliss indeed comes to this Yogi whose mind is made peaceful, whose passion is quelled, who has become Brahman, and who is free from sin.",
          "Verse 28: The yogi, always engaging the mind thus (in the practice of yoga), is freed from sins and easily enjoys the infinite bliss of contact with Brahman (the Eternal).",
          "Verse 29: With the mind harmonized by Yoga, he sees the Self abiding in all beings and all beings in the Self; he sees the same everywhere.",
          "Verse 30: He who sees Me everywhere and sees everything in Me, never becomes separated from Me, nor do I from him.",
          "Verse 31: He who, being established in unity, worships Me, who dwells in all beings, that yogi abides in Me, whatever their mode of living may be.",
          "Verse 32: He who, through the likeness of the Self, O Arjuna, sees reality everywhere, be it pleasure or pain, is regarded as the highest Yogi.",
          "Verse 33: Arjuna said, 'O Krishna, I do not see how this Yoga of equanimity, which you have taught me, can be maintained steadily, due to the restlessness of the mind.'",
          "Verse 34: The mind is indeed restless, turbulent, strong, and unyielding, O Krishna; I consider it as difficult to control as controlling the wind.",
          "Verse 35: The Blessed Lord said, 'Undoubtedly, O mighty-armed Arjuna, the mind is difficult to control and restless; but with practice and dispassion, it can be restrained.'",
          "Verse 36: I think Yoga is hard to be attained by one with an uncontrolled self, but the self-controlled and striving one can attain it by the appropriate means.",
          "Verse 37: Arjuna said, 'He who is unable to control himself, even though he has faith, and whose mind wanders away from Yoga, what end does he meet, having failed to attain perfection in Yoga, O Krishna?'",
          "Verse 38: Fallen from both, does he not perish like a rent cloud, supportless, O mighty-armed one, deluded on the path of Brahman?",
          "Verse 39: O Krishna, please completely dispel this doubt of mine, for it is not possible for anyone but You to do so.",
          "Verse 40: The Blessed Lord said, 'O Arjuna, neither in this world nor in the next will there be destruction for him; none, indeed, who does good, O my son, ever comes to grief.'",
          "Verse 41: Having attained to the worlds of the righteous and having dwelt there for everlasting years, he who fell from Yoga is born in a house of the pure and wealthy.",
          "Verse 42: Or he is born in a family of even the wisest of yogis; verily, such a birth is very difficult to obtain in this world.",
          "Verse 43: Then he comes into contact with the knowledge acquired in his former body and strives even more for perfection, O Arjuna.",
          "Verse 44: By that same former practice, he is borne on in spite of himself. Even he who merely wishes to know Yoga goes beyond the Brahmanic word.",
          "Verse 45: But the Yogi who strives assiduously, purified of sins and perfected gradually over many births, reaches the highest goal.",
          "Verse 46: The yogi is thought to be superior to the ascetics, even superior to those who have knowledge obtained through the study of scriptures; he is also superior to men of action; therefore, be thou a yogi, O Arjuna.",
          "Verse 47: And among all the Yogis, he who, full of faith and with his inner self merged in Me, worships Me is deemed by Me to be the most devoted.",
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
          Lord Kṛṣṇa introduced the topic of meditation towards the end of the
          last chapter. Being an important topic, Kṛṣṇa spends almost the whole
          of this chapter dealing with meditation. Here, meditation is upon the
          Lord as the very Self (Ātmā) of the meditator. This is meant to
          assimilate the Self-knowledge gained from the guru’s teaching. The
          conditioning that “I am the body” will go only with the assimilation
          of the Self-knowledge. Assimilated Self-knowledge alone can express as
          ānanda.
        </p>
        <p>Kṛṣṇa talks about five important topics on meditation. They are:</p>
        <ul>
          <li>
            1. <strong>Bahiraṅga-sādhanā</strong> — Those disciplines to be
            followed throughout daily life which influence one’s meditation.
          </li>
          <li>
            2. <strong>Antaraṅga-sādhanā</strong> — Those disciplines to be
            followed immediately before meditation.
          </li>
          <li>
            3. <strong>Dhyāna-svarūpam</strong> — Nature of meditation.
          </li>
          <li>
            4. <strong>Dhyāna-phalam</strong> — Result of meditation.
          </li>
          <li>
            5. <strong>Dhyāna-pratibandha-parihārau</strong> — Obstacle and
            remedy.
          </li>
        </ul>

        <h3>Bahiraṅga-sādhanā</h3>
        <p>
          At the outset, the Lord indicates the role of karmayoga in meditation
          by praising the karmayogī (1, 2). Karmayoga, being a conscious way of
          life, helps one in getting self-control. It converts an extrovert mind
          into a contemplative mind. Once this is achieved, one should try to
          lead a quieter life, because active life becomes an obstacle to
          meditation (3). Total detachment is the characteristic of a
          contemplative mind (4).
        </p>
        <p>
          Incidentally, Kṛṣṇa highlights two important values viz.
          self-confidence and self-control. One who lacks these two finds
          himself to be an obstacle for any pursuit. On the other hand, one who
          enjoys the above two virtues finds himself to be a supporting force in
          every field (5, 6). Soon he is established in the vision of the Ātmā,
          the vision of equality (7 to 9).
        </p>
        <p>
          Kṛṣṇa mentions a few other disciplines also, like moderation in
          eating, sleeping, working, and resting (16, 17).
        </p>

        <h3>Antaraṅga-sādhanā</h3>
        <p>
          The meditator has to choose a secluded, undisturbed place for
          meditation (10). In that spiritually and physically pure place, he has
          to fix the seat which is neither too high nor too low, neither too
          soft nor too hard (11). Holding the body, neck, and head erect, he has
          to fix the sight on the tip of his nose, as it were (i.e., the eyes
          are half-closed) (13). Next, the meditator should withdraw the mind
          and sense organs from all other activities. The breathing also should
          be maintained even (refer V-27). With a calm, withdrawn, undisturbed,
          tension-free, and one-pointed mind, the meditator should meditate upon
          the Lord, the Ātmā (12, 14).
        </p>

        <h3>Dhyāna-svarūpam and Phalam</h3>
        <p>
          Meditation is nothing but abidance of the withdrawn mind in the Ātmā
          (18). Having given up all desires and having restrained the senses
          through the mind, one should gradually bring back the mind with the
          help of the discriminative intellect, step by step. Once the mind is
          made to abide in the Ātmā, there should be no other thought (25).
          Though the mind may get distracted, one has to bring it back from the
          respective fields to one’s own Ātmā (26).
        </p>
        <p>
          (All this presupposes a clear understanding of Vedānta. Everything,
          including thoughts, is an object of the Ātmā, the Awareness. The Ātmā
          is not an object for me to be thought of, or to be experienced. It is
          the very “I”. Thus, to knock off all expectations and struggles and to
          abide as the Ātmā with the knowledge that “I am the Ātmā” is true
          meditation.)
        </p>
        <p>
          Thus, constantly abiding in the Ātmā, the meditator comes to enjoy
          permanent peace which culminates in the attainment of liberation
          (videhamukti) (15). He enjoys an ever-abiding mind which is completely
          satisfied with the discovery of the Ātmā (20). Since his ānanda is not
          sensual, it transcends all the limits. Having discovered this inner
          fullness, he never loses sight of his true nature (21, 27, 28).
          Neither does he consider any other gain to be superior, nor is he
          shaken by even the greatest loss (22). This infinite ānanda will never
          be lost because this was never gained. It was veiled by the false
          notion that “I am sorrowful”. Once this is removed, the inner ānanda
          becomes evident. Thus, this is more a dissociation from sorrow rather
          than association (23). (This alone is known as jīvanmukti.) Seeing the
          Ātmā in all beings, and all beings in the Ātmā, he gets established in
          the vision of equality (29). This vision of the Ātmā alone is the
          vision of the Lord, because the Ātmā is not different from the Lord.
          Thus the meditator is ever established in the Lord in spite of his
          activities (30, 31). Being established in the Ātmā, he looks at all
          bodies including his body with the same attitude of detachment. Hence
          he is free from selfishness and is spontaneously established in
          dharma. He is a saint (32).
        </p>

        <h3>Dhyāna-pratibandha-parihārau</h3>
        <p>
          Now, Arjuna puts a question regarding an obstacle to meditation. It is
          the problem of mental restlessness or extrovertedness. Because of
          this, one finds it difficult to meditate and assimilate the
          Self-knowledge. This frustrates Arjuna’s mind and he asks for a
          solution (33, 34).
        </p>
        <p>
          Kṛṣṇa gives two methods to solve this problem. They are detachment and
          practice. When the mind is extrovert because of desires, one has to
          remove it by seeing the futility of desires and their fulfillment.
          This is detachment. Even a detached mind can be restless because of
          past habits. This has to be gradually removed by consistent practice
          alone. Thus, mental discipline requires determination and patience
          (35, 36).
        </p>
        <p>
          Still, Arjuna feels diffident and he, somehow, thinks that liberation
          is not possible in one life. He desperately asks Kṛṣṇa—“What happens
          to that seeker who has fallen from meditation? Does he not perish like
          a scattered cloud?” (Arjuna feels that the meditator has no puṇya,
          because he has not done any karma. He has failed to achieve liberation
          also. Thus being deceived of puṇya and mokṣa, he must face an
          unfortunate future, according to Arjuna.) Not being able to accept
          this, Arjuna surrenders to Kṛṣṇa seeking clarification (37 to 39).
        </p>
        <p>
          Kṛṣṇa consoles Arjuna by asserting that a spiritual seeker can never
          have a bad lot (40). The very meditation is a puṇyakarma capable of
          giving heaven and later an ideal birth for the continuation of the
          spiritual pursuit. The yogabhraṣṭa (one who has fallen from the path
          of spirituality) is reborn in a cultured, prosperous family, or may
          be, even in the family of a saint (41, 42).
        </p>
        <p>
          Having got such a birth, he gets associated with the previous wisdom
          at a very early age (43). Irresistibly drawn by the past habits
          (saṃskāras), he finds his spiritual urge suddenly growing from a small
          flame to a huge conflagration (44). Committing his entire life to the
          spiritual pursuit and supported by the saṃskāras of all the previous
          lives, he effortlessly fulfills his mission in life (45).
        </p>
        <p>
          Kṛṣṇa concludes this chapter by praising the meditator in general (46)
          and praising the meditator of Kṛṣṇa–paramātmā (Brahmātman) in
          particular.
        </p>

        <h3>Conclusion</h3>
        <p>Thus the sixth chapter discusses the following topics:</p>
        <ul>
          <li>
            <strong>Bahiraṅga-sādhanā:</strong> 1 to 9, 16, 17
          </li>
          <li>
            <strong>Antaraṅga-sādhanā:</strong> 10 to 14
          </li>
          <li>
            <strong>Dhyāna-svarūpam:</strong> 18 to 22
          </li>
          <li>
            <strong>Dhyāna-phalam:</strong> 15, 20, 21, 27, 28, 30, 31
          </li>
          <li>
            <strong>Dhyāna-pratibandha-parihārau:</strong> 33 to 45
          </li>
        </ul>
        <p>
          <strong>Note:</strong> The chapter was concluded with 46 and 47.
        </p>
        <p>
          Since the main topic here is meditation, the chapter is called{" "}
          <strong>Dhyāna-yoga</strong> or{" "}
          <strong>Ātmasaṃyama-yoga (mastery of the mind).</strong>
        </p>
      </div>
      <ChapterNav n={6} />
    </div>
  );
};

export default Chapter6;
