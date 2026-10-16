import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C15.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter15 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 15" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 15 - Purushottama Yoga</h1>
          <h2>पुरुषोत्तमयोग</h2>
          <p>Puruṣottama-Yoga - The Yoga of the Ultimate Person</p>
          <p>
            In this chapter, the Lord describes the nature of the Supreme Spirit
            in all its implications. This Spirit is effectively a secret for all
            of us since its comprehension seems beyond our grasp. Knowing the
            limitations of the mind, the Lord describes the unknown in terms of
            the known and thus guides us towards that Unconditional Eternal
            Factor known as “Purushottama”. Below are the main themes of Chapter
            15:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 3:</strong> Description of saṃsāra
            </li>
            <li>
              <strong>Verses 3 - 6:</strong> Means of liberation
            </li>
            <li>
              <strong>Verses 7 - 11:</strong> Brahman as jīva
            </li>
            <li>
              <strong>Verses 12 - 15:</strong> Brahman as jagat
            </li>
            <li>
              <strong>Verses 16 - 18:</strong> Brahman as puruṣottama
            </li>
            <li>
              <strong>Verses 19 - 20:</strong> Glory of puruṣottama-jñānam
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: The Blessed Lord said, 'They (the wise) speak of the indestructible peepul tree, with its roots above and branches below, whose leaves are the meters or hymns; he who knows it is a knower of the Vedas.'",
          "Verse 2: Its branches spread below and above, nourished by the Gunas; its buds are sense-objects, and its roots stretch forth below in the world of men, originating action.",
          "Verse 3: Its form is not perceived here as such, nor its end, origin, foundation, or resting place; having cut asunder this firmly rooted peepul tree with the strong axe of non-attachment.",
          "Verse 4: Then, that goal should be sought for, to which, having gone, none returns again. I seek refuge in that Primeval Purusha, from whence streamed forth the ancient activity or energy.",
          "Verse 5: Free from pride and delusion, victorious over the evil of attachment, dwelling constantly in the Self, their desires having completely turned away, freed from the pairs of opposites known as pleasure and pain, they, the undeluded, reach the eternal goal.",
          "Verse 6: Neither does the sun illuminate there, nor the moon, nor the fire; having gone there, they do not return; that is My supreme abode.",
          "Verse 7: An eternal portion of Myself having become a living soul in the world of life, draws to itself the five senses, with the mind as the sixth, abiding in Nature.",
          "Verse 8: When the Lord, as the individual soul, obtains a body and when He leaves it, He takes these with Him, just as the wind takes the scents from their seats (flowers, etc.).",
          "Verse 9: Presiding over the ears, eyes, touch, taste, smell, and mind, it enjoys the objects of the senses.",
          "Verse 10: The deluded do not see Him who departs, stays, and enjoys; but those who possess the eye of knowledge behold Him.",
          "Verse 11: The yogis striving for perfection behold Him dwelling in the Self; but, the unrefined and unintelligent, even though striving, do not see Him.",
          "Verse 12: That light which resides in the sun, illuminating the whole world; that which is in the moon and in the fire—know that light to be Mine.",
          "Verse 13: Permeating the earth, I support all beings with My energy; and having become the watery moon, I nourish all herbs.",
          "Verse 14: Having become the fire Vaisvanara, I abide in the bodies of living beings and, associated with the Prana and the Apana, digest the fourfold food.",
          "Verse 15: And I am seated in the hearts of all; from Me come memory and knowledge, as well as their absence. I am verily That which has to be known by all the Vedas; I am indeed the author of the Vedanta and the knower of the Vedas.",
          "Verse 16: Two Purushas there are in this world: the perishable and the imperishable. All beings are perishable, and the Kutastha—the unchanging—is called the imperishable.",
          "Verse 17: But distinct is the Supreme Purusha, called the highest Self, indestructible and Lord, who pervades the three worlds and sustains them.",
          "Verse 18: As I transcend the perishable and am even higher than the imperishable, I am declared to be the highest Purusha in the world and in the Vedas.",
          "Verse 19: He who, undeluded, knows Me as the highest Purusha, he, knowing all, worships Me with his whole being (heart), O Arjuna.",
          "Verse 20: Thus, I have imparted to you this most secret science, O sinless one; by knowing this, one becomes wise, and all their duties are accomplished, O Arjuna.",
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
          In the 13th and 14th chapters, the Lord dealt with the main theme of
          the Gītā — the essential oneness of jīva and Īśvara. Being a subtle
          topic, Kṛṣṇa discusses the same in this chapter also, in a different
          way.
        </p>
        <p>
          In the first two and a half verses, Kṛṣṇa gives a description of the
          vast and endless saṃsāra by comparing it with the mighty
          aśvattha-tree. Like this tree, saṃsāra is vast, many-branched,
          well-rooted, and not easily destructible. To add to this is its
          mysterious nature. The jīva is caught in this saṃsāra, helplessly
          struggling to free itself.
        </p>

        <h3>Means of Liberation</h3>
        <p>
          In the next two and a half verses (up to the 5th), Bhagavān talks
          about the means to get out of this saṃsāra. The first step is to
          develop detachment from this saṃsāra by recognizing its binding
          nature. As long as one values worldly pursuits, one's mind will not be
          available for seeking freedom. Having withdrawn the mind from worldly
          desires, one should seek Brahman, the cause of everything (verse 4).
          Seeking Brahman is nothing but jñānayoga — Vedantic enquiry under a
          guru. Then, Kṛṣṇa highlights the qualifications necessary for this
          knowledge, emphasizing freedom from reaction towards the pairs of
          opposites, pride, delusion, and attachment, as well as a commitment to
          Vedantic enquiry (verse 5).
        </p>

        <h3>The Nature of Brahman</h3>
        <p>
          In the 6th verse, the Lord discusses the nature of Brahman. It is not
          illumined by anything because it is the self-effulgent consciousness
          that illumines everything. Attaining this Brahman, the supreme abode
          of the Lord, one does not return to saṃsāra again.
        </p>

        <h3>Brahman as Jīva and Jagat</h3>
        <p>
          In the following verses, Kṛṣṇa reveals that Brahman alone expresses in
          the form of jīva and jagat (the universe). From this, it becomes clear
          that reaching Brahman does not involve physical travel. Verses 7 to 11
          explain that the jīva, the consciousness in every being, is an
          expression of the Lord (Brahman). At the time of death, this jīva
          alone takes the mind and sense organs from one body to another. It is
          this jīva who experiences everything through the sense organs, and the
          Lord alone expresses as the very life and its functions in every
          being. The pure-minded ones recognize this, whereas the deluded ones
          do not.
        </p>
        <p>
          From verses 12 to 15, Kṛṣṇa shows how the jagat (the universe) is also
          an expression of the Lord (Brahman). The light in the sun, the moon,
          and the fire is the Lord's presence. In the form of sunlight and
          moonlight, the Lord sustains all living beings. As the digestive fire,
          the Lord digests the food. The Lord is behind all the mental faculties
          of knowledge, memory, etc., and is the author and content of the Vedas
          as well as the knower of the Vedas.
        </p>

        <h3>Brahman in Its True Nature</h3>
        <p>
          In verses 16 to 18, Kṛṣṇa reveals Brahman in its true nature. Brahman,
          in the form of the manifest universe, is called kṣarapuruṣa. As the
          unmanifest universe (māyā), Brahman is known as akṣarapuruṣa. Both
          these puruṣas are relative. Beyond these two is the uttamapuruṣa, the
          absolute, known as paramātmā or puruṣottama. It is the imperishable,
          attributeless Brahman because of which everything exists.
        </p>

        <h3>The Glory of Puruṣottama-jñānam</h3>
        <p>
          Concluding the teaching, Kṛṣṇa glorifies this knowledge as the means
          of fulfillment. The one who knows this most secret knowledge of
          puruṣottama, with an undeluded mind, becomes the knower of all and a
          person of fulfillment.
        </p>

        <h3>Main Topics of this Chapter:</h3>
        <ul>
          <li>Description of saṃsāra: Verses 1 to 3</li>
          <li>Means of liberation: Verses 3 to 6</li>
          <li>Brahman as jīva: Verses 7 to 11</li>
          <li>Brahman as jagat: Verses 12 to 15</li>
          <li>Brahman as puruṣottama: Verses 16 to 18</li>
          <li>Glory of puruṣottama-jñānam: Verses 19 to 20</li>
        </ul>
        <p>
          Since the main topic of this chapter is <strong>puruṣottama</strong>,
          this chapter is called <strong>Puruṣottama-yoga.</strong>
        </p>
      </div>
      <ChapterNav n={15} />
    </div>
  );
};

export default Chapter15;
