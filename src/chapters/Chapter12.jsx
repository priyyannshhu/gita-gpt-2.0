import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C12.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter12 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 12" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 12 - Bhakti Yoga</h1>
          <h2>भक्तियोग</h2>
          <p>Bhakti-yoga - The Yoga of Devotion</p>
          <p>
            The shortest chapter of the Gita but in some ways one of the most
            important ones because it clearly explains the meaning of a term
            that is often misunderstood – Bhakti. The Lord succinctly points out
            the attributes that denote a true Bhakta who is dear to Him, thereby
            providing us with a list of qualities we must strive to cultivate in
            ourselves. Below are the main themes of Chapter 12:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 2:</strong> Arjuna’s question and Kṛṣṇa’s
              answer.
            </li>
            <li>
              <strong>Verses 3 - 12:</strong> The five stages of bhakti.
            </li>
            <li>
              <strong>Verses 13 - 19:</strong> Traits of parābhakta
              (parābaktalakṣaṇa).
            </li>
            <li>
              <strong>Verse 20:</strong> Glory of the teaching.
            </li>
            <li>
              <strong>Verses 35 - 47:</strong> The importance of understanding
              the true nature of oneself (moha).
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: Arjuna said, 'Which of them are better versed in Yoga—those who steadfastly worship You, or those who worship the imperishable and the unmanifested?'",
          "Verse 2: The Blessed Lord said, 'In My opinion, those who fix their minds on Me, worship Me ever steadfastly, and are endowed with supreme faith, are the best in Yoga.'",
          "Verse 3: Those who worship the imperishable, the indefinable, the unmanifest, the omnipresent, the unthinkable, the immovable, and the eternal.",
          "Verse 4: Having restrained all the senses, being even-minded everywhere, and intent on the welfare of all beings, they verily come unto Me.",
          "Verse 5: Greater is their trouble whose minds are set on the unmanifested, for the goal of the unmanifested is very hard for the embodied to reach.",
          "Verse 6: But to those who worship Me, renouncing all actions in Me, regarding Me as the supreme goal, meditating on Me with single-minded yoga.",
          "Verse 7: To those whose minds are set on Me, O Arjuna, verily I soon become the savior out of the ocean of Samsara.",
          "Verse 8: Fix your mind on Me, and your intellect in Me. Then you will certainly live in Me alone hereafter.",
          "Verse 9: If you are unable to fix your mind steadily on Me, then seek to reach Me through the yoga of constant practice, O Arjuna.",
          "Verse 10: If you are unable to practice even this Abhyasa Yoga, be intent on doing actions for My sake; even by doing actions for My sake, you will attain perfection.",
          "Verse 11: If you are unable to do even this, then, resort to union with Me and renounce the fruits of all actions with self-control.",
          "Verse 12: Better indeed is knowledge than practice; better than knowledge is meditation; better than meditation is the renunciation of the fruits of actions: peace immediately follows renunciation.",
          "Verse 13: He who hates no creature, is friendly and compassionate to all, is free from attachment and egoism, is balanced in pleasure and pain, and is forgiving.",
          "Verse 14: Ever content, steady in meditation, self-controlled, possessing firm conviction, with the mind and intellect dedicated to Me, he, My devotee, is dear to Me.",
          "Verse 15: He whom the world does not agitate, and who cannot be agitated by the world, and who is freed from joy, anger, fear, and anxiety—he is dear to Me.",
          "Verse 16: He who is free from wants, pure, expert, unconcerned, and free from pain, renouncing all undertakings and commencements, he who is devoted to Me is dear to Me.",
          "Verse 17: He who neither rejoices nor hates, nor grieves nor desires, renouncing both good and evil, and who is full of devotion, is dear to Me.",
          "Verse 18: He who is the same to foe and friend, and also in honor and dishonor, who is the same in cold and heat, in pleasure and pain, and who is free from attachment.",
          "Verse 19: He to whom censure and praise are equal, who is silent, content with anything, homeless, of a steady mind, and full of devotion; that man is dear to me.",
          "Verse 20: They who follow this immortal Dharma, endowed with faith and regarding Me as their supreme goal, are exceedingly dear to Me.",
        ].map((verse, index) => (
          <div key={index} className="verse">
            <p>{verse}</p>
          </div>
        ))}
      </div>
      <div className="commentary-container">
        <h2>Commentary by Swami Paramarthananda</h2>
        <p>
          The eleventh chapter has paved the way for virāḍ-bhakti. So, in the
          twelfth chapter, the Lord deals with all aspects of bhakti leading to
          liberation.
        </p>
        <p>
          The chapter begins with Arjuna’s question seeking to know whether
          virāḍ-bhakta (saguṇabhakta) or akṣara-bhakta (nirguṇa-bhakta) is
          superior (1).
        </p>
        <p>
          Lord Kṛṣṇa first answers that saguṇabhakta is superior. (In fact, we
          cannot compare them. Everyone has to go through both and one can reach
          the Lord through nirguṇabhakti alone, which the Lord himself points
          out in the 4th verse. Still the Lord praises saguṇabhakta because of
          the context.) (2)
        </p>
        <p>
          From the 3rd verse to the 12th verse, Kṛṣṇa gives out the entire range
          of bhakti which leads to liberation. In the first 3 verses (3 to 5)
          Kṛṣṇa talks about nirguṇabhakti which is jñānayoga and which is the
          direct means for liberation. But, the Lord points out that this would
          be difficult for unprepared people (5).
        </p>
        <p>
          From the 6th verse to the 8th verse, the Lord speaks about the next
          lower stage in the form of virāḍ-upāsanā. He promises that such
          upāsaka would be rescued from saṃsāra by the Lord. (This does not mean
          that a virāḍ-upāsaka can get liberation, skipping jñānayoga. The idea
          is that he becomes fit for jñānayoga and attains liberation through
          knowledge.)
        </p>
        <p>
          In the 9th verse, the Lord comes one more step down. If one is
          incapable of doing virāḍ-upāsana, let him practice meditation on any
          form of the Lord (iṣṭadevatā-upāsanā). Thus, upāsanā (on virāḍ or
          iṣṭadevatā) becomes the preparatory step for jñānayoga.
        </p>
        <p>
          In the next verse (10th), the Lord comes down further. If a person is
          too extrovert to take up upāsanā, he is asked here to perform his duty
          (nitya and naimittika) as an offering to the Lord (Īśvarārpaṇam)
          without expecting any reward.
        </p>
        <p>
          When a person is full of desires, he is impelled to do desire-born
          actions (kāmya) expecting results. For such a person Kṛṣṇa prescribes
          the last step. When he receives the result of kāmya-karmas, let him
          take it as a prasāda (graceful gift) of the Lord and avoid reaction.
          Kṛṣṇa indicates this through the word ‘sarvakarmaphalatyāgam’ (11).
        </p>
        <p>
          The above two steps come under karmayoga. (A karmayogī becomes fit for
          upāsanā after some time. Upāsanā makes him qualified for jñānayoga.
          Jñāna helps him discover his own true ever-free nature.)
        </p>
        <p>
          Kṛṣṇa concludes this topic by praising the last step of karma-yoga
          (12).
        </p>
        <p>
          From the 13th verse up to the 19th verse, Kṛṣṇa gives a clear picture
          of the characteristics of one who has gone through all these steps and
          discovered fulfillment. [As a karmayogī and upāsaka he was a devotee
          of saguṇa-īśvara, seeing the Lord as distinct from him. This is only
          lower bhakti, because he does not know the true nature of the Lord
          still (Refer VII-17). His bhakti is saguṇabhakti or bhedabhakti or
          aparā-bhakti. Once he pursues jñānayoga and discovers his identity
          with the Lord, his bhakti becomes nirguṇabhakti or abhedabhakti or
          parā-bhakti, which is an end in itself.] In these verses Kṛṣṇa
          describes the traits of a parabhakta who is a sthitaprajña (Refer
          II-55 to 72). (This serves twofold purpose. Firstly, it is an
          inspiration for a seeker to pursue his sādhanam. Secondly, the natural
          traits of a parabhakta serve as values for a sādhaka to be
          deliberately practised.)
        </p>
        <p>
          This portion can be broadly divided into two. One referring to those
          virtues which a parabhakta spontaneously enjoys, and the second,
          referring to those negative traits which he is totally free from.
        </p>

        <h3>Table of Parabhakta Qualities</h3>
        <table border="1" cellpadding="5" cellspacing="0">
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Parabhakta is endowed with:</th>
              <th>Parabhakta is free from:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Maitrī (Friendliness) [13]</td>
              <td>Dveṣa (Hatred) [13]</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Karuṇā (Compassion) [13]</td>
              <td>Mamakāra (‘Mine’-notion) [13]</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Samatvam (Equanimity) [13]</td>
              <td>Ahaṅkāra (‘I’ -notion) [13]</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Kṣamā (Forbearance) [13]</td>
              <td>Udvega (Anxiety) [15]</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Santuṣṭi (Contentment) [14]</td>
              <td>Harṣa (Elation) [15]</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Yatātmatvam (Self-control) [14]</td>
              <td>Amarṣa (Envy) [15]</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Dṛḍhaniścaya (Firm Knowledge) [14]</td>
              <td>Bhayam (Fear) [15]</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Bhakti (Devotion) [14]</td>
              <td>Apekṣā (Dependence) [16]</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Gentleness [15]</td>
              <td>Ārambha (Selfish action) [16]</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Śucitvam (Purity) [16]</td>
              <td>Śoka (Grief) [17]</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Dakṣatvam (Resourcefulness) [16]</td>
              <td>Kāṅkṣā (Desire) [17]</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Udāsīnatvam (Impartiality) [16]</td>
              <td>Pairs of opposites [17, 18, 19]</td>
            </tr>
          </tbody>
        </table>

        <p>
          Kṛṣṇa concludes the teaching by saying — “Those who follow this
          teaching with faith, keeping Me as the goal, are very dear to Me.”
          (20)
        </p>

        <p>Thus the main topics in this chapter are:</p>
        <ul>
          <li>Arjuna’s question and Kṛṣṇa’s answer: 1, 2</li>
          <li>
            The five stages of bhakti (prasādabuddhi, īśvarārpaṇabuddhi,
            iṣṭadevatā-upāsanā, virāḍ-upāsanā, and akṣara-upāsanā jñāna-yoga): 3
            to 12
          </li>
          <li>Traits of parābhakta (parābaktalakṣaṇa): 13 to 19</li>
          <li>Glory of the teaching: 20</li>
        </ul>

        <p>
          Since this chapter talks about all stages of <strong>bhakti</strong>,
          this is called <strong>‘Bhaktiyoga’.</strong>
        </p>
      </div>
      <ChapterNav n={12} />
    </div>
  );
};

export default Chapter12;
