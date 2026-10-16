import React from "react";
import "./Chapters.css";
import chapterImage from "../assets/images/C11.jpg";
import Dropdown from "../components/Dropdown.jsx";
import ChapterNav from "../components/ChapterNav.jsx";

const Chapter11 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        {}
        <Dropdown />
        <img src={chapterImage} alt="Chapter 11" className="chapter-image" />
        <div className="chapter-title">
          <h1>Gita Ch 11 - Viswarupa Darshana Yoga</h1>
          <h2>विश्वरूपदर्शनयोग</h2>
          <p>Viśva-Rūpa-Darśana-Yoga - The Cosmic Form</p>
          <p>
            In this chapter, Lord Krishna gifts Arjuna the divine vision which
            enables him to perceive the Lord in His Cosmic form – a form that
            even the Gods long to see but are unable to. The bulk of the chapter
            comprises of Arjuna describing the various sights he beholds within
            the Lord’s form. Whereas the previous chapter showcased the
            manifestations of the One Supreme Self in the many, this chapter
            completes the narrative by driving home the point that those many
            forms are, in fact, sustained in and part of that One Self, which
            alone is the reality. Below are the main themes of Chapter 11:
          </p>
          <ul>
            <li>
              <strong>Verses 1 - 4:</strong> Arjuna desires to see the universal
              form.
            </li>
            <li>
              <strong>Verses 5 - 8:</strong> Kṛṣṇa grants the divine eye.
            </li>
            <li>
              <strong>Verses 9 - 14:</strong> Sañjaya’s description of the
              universal form.
            </li>
            <li>
              <strong>Verses 15 - 22:</strong> Arjuna’s description of the
              universal form (first phase expressing wonder).
            </li>
            <li>
              <strong>Verses 23 - 30:</strong> Arjuna’s description of the
              universal form (second phase expressing fear).
            </li>
            <li>
              <strong>Verses 31 - 34:</strong> Kṛṣṇa answers Arjuna’s question.
            </li>
            <li>
              <strong>Verses 35 - 45:</strong> Arjuna’s description of the
              universal form (third phase expressing devotion).
            </li>
            <li>
              <strong>Verses 46 - 55:</strong> Withdrawal of the universal form
              and glorification of devotion.
            </li>
          </ul>
        </div>
      </div>

      <div className="verses-container">
        <h2>Verses</h2>
        {[
          "Verse 1: Arjuna said, 'By this explanation of the highest secret concerning the Self which Thou hast spoken, for the sake of blessing me, my delusion has been dispelled.'",
          "Verse 2: The origin and destruction of beings have been heard in detail from You, O lotus-eyed Lord, and also Your inexhaustible greatness.",
          "Verse 3: Now, O Supreme Lord, as Thou hast thus described Thyself, O Supreme Person, I wish to behold Thy divine form.",
          "Verse 4: If Thou, O Lord, thinkest it possible for me to see it, do Thou, then, O Lord of the Yogis, show me Thy imperishable Self.",
          "Verse 5: The Blessed Lord said, 'Behold, O Arjuna, forms of Mine, by the hundreds and thousands, of different sorts, divine, and of various colors and shapes.'",
          "Verse 6: Behold the Adityas, the Vasus, the Rudras, the two Asvins, and the Maruts; behold many wonders never before seen, O Arjuna.",
          "Verse 7: Now, behold, O Arjuna, in this My body, the entire universe centered in one, including the moving and the unmoving, and whatever else you desire to see.",
          "Verse 8: But you are not able to behold Me with these your own eyes; I give you the divine eye; behold My lordly Yoga.",
          "Verse 9: Sanjaya said, 'Having thus spoken, O king, the great Lord of Yoga, Hari (Krishna), showed Arjuna His supreme form as the Lord.'",
          "Verse 10: With numerous mouths and eyes, with numerous wondrous sights, with numerous divine adornments, with numerous divine weapons uplifted, such a form He showed.",
          "Verse 11: Wearing divine garlands and apparel, anointed with divine unguents, the all-wonderful, resplendent Being is endless with faces on all sides.",
          "Verse 12: If the splendour of a thousand suns were to blaze out simultaneously in the sky, that would be the splendour of that mighty being.",
          "Verse 13: There, in the body of the God of gods, Arjuna then saw the entire universe resting in one, with its myriad of divisions.",
          "Verse 14: Then, Arjuna, filled with wonder and his hair standing on end, bowed his head to the God and spoke with palms joined.",
          "Verse 15: Arjuna said, 'O God, I see all the gods in Your body, as well as hosts of various classes of beings, Brahma the Lord seated on the lotus, all the sages, and the celestial serpents.'",
          "Verse 16: I see You with boundless form on every side, with many arms, stomachs, mouths, and eyes; neither the end nor the middle nor the beginning do I see, O Lord of the Universe, O Cosmic Form.",
          "Verse 17: I see You with the diadem, club, and discus, a mass of radiance shining everywhere, very hard to look at, blazing all around like a burning fire and the sun, and immeasurable.",
          "Verse 18: You are the Imperishable, the Supreme Being, worthy of being known. You are the great treasure-house of this universe; You are the imperishable protector of the eternal Dharma; You are the Primal Person, I believe.",
          "Verse 19: I see You without beginning, middle, or end, infinite in power, with endless arms, the sun and moon as Your eyes, the burning fire Your mouth, heating the entire universe with Your radiance.",
          "Verse 20: This space between the earth and the heavens, and all the quarters, is filled by You alone; having seen this, Your wonderful and terrible form, the three worlds are trembling with fear, O great-souled Being.",
          "Verse 21: Verily, these hosts of gods enter into Thee; some extol Thee with joined palms in fear, saying, 'May it be well!' Bands of great sages and perfected ones praise Thee with complete hymns.",
          "Verse 22: The Rudras, Adityas, Vasus, Sadhyas, Visvedevas, the two Asvins, Maruts, the Manus, and the hosts of celestial singers, Yakshas, demons, and the perfected ones, all look upon Thee with great amazement.",
          "Verse 23: Having seen Your immeasurable form with many mouths and eyes, O mighty-armed one, with many arms, thighs, and feet, with many stomachs and fearsome with many teeth, the worlds are terrified, and so am I.",
          "Verse 24: On seeing Thee, touching the sky, shining in many colors, with mouths wide open, with large fiery eyes, I am terrified at heart and find neither courage nor peace, O Vishnu.",
          "Verse 25: Having seen Thy mouths fearful with teeth blazing like the fires of cosmic dissolution, I know not the four quarters, nor do I find peace. Have mercy, O Lord of the gods, O abode of the universe.",
          "Verse 26: All the sons of Dhritarashtra, along with the hosts of kings of the earth, Bhishma, Drona, and Karna, as well as the chief among our warriors.",
          "Verse 27: Some hurry into Your mouths with their terrible teeth, fearful to behold. Some are found stuck in the gaps between the teeth, their heads crushed to powder.",
          "Verse 28: Verily, just as many torrents of rivers flow towards the ocean, so too these heroes in the world of men enter Thy flaming mouths.",
          "Verse 29: As moths hurriedly rush into a blazing fire, leading to their own destruction, so too these creatures hurry into Your mouths, leading to their own destruction.",
          "Verse 30: Thou lickest up, devouring all the worlds on every side with Thy flaming mouths. Thy fierce rays, filling the whole world with radiance, burn, O Vishnu!",
          "Verse 31: Tell me, who you are, so fierce of form. I offer my salutations to you, O God Supreme; have mercy on me. I desire to know you, the original Being. I do not indeed know your workings.",
          "Verse 32: The Blessed Lord said, 'I am the full-grown, world-destroying Time, now engaged in destroying the worlds. Even without you, none of the warriors arrayed in the hostile armies will live.'",
          "Verse 33: Therefore, stand up and obtain fame. Conquer the enemies and enjoy the unparalleled kingdom. Verily, by Me they have already been slain; be thou a mere instrument, O Arjuna.",
          "Verse 34: Drona, Bhishma, Jayadratha, Karna, and other brave warriors have already been slain by Me; do not be distressed with fear; fight and you shall conquer your enemies in battle.",
          "Verse 35: Sanjaya said, 'Having heard that speech of Lord Krishna, Arjuna, with joined palms, trembling, prostrated himself, again addressing Krishna in a choked voice, bowing down, overwhelmed with fear.'",
          "Verse 36: Arjuna said, 'It is fitting, O Krishna, that the world delights and rejoices in Your praise; demons fly in fear in all directions and the hosts of the perfected ones bow to You.'",
          "Verse 37: And why should they not, O great Soul, bow to Thee Who art greater than all else, the primal cause even of the Creator (Brahma), O Infinite Being, O Lord of the gods, O Abode of the universe; Thou art the imperishable, the Being, the non-being, and That which is supreme—that which is beyond the Being and the non-being.",
          "Verse 38: You are the primal God, the ancient Purusha, the supreme refuge of this universe, the knower, the knowable, and the supreme Abode. Through You, the universe is pervaded, O Being of infinite forms.",
          "Verse 39: You are Vayu, Yama, Agni, Varuna, the moon, the Creator, and the great-grandfather. I offer my salutations to You a thousand times, and again I offer my salutations to You.",
          "Verse 40: Salutations to You in front and behind! Salutations to You on every side! O All! You, infinite in power and prowess, pervade all; therefore You are all.",
          "Verse 41: Whatever I have presumptuously said from carelessness or love, addressing You as O Krishna! O Yadava! O Friend! regarding You merely as a friend, unknowing of Your greatness.",
          "Verse 42: In whatever way I may have insulted You for the sake of fun, while at play, reposing, sitting, or at meals, when alone (with You), O Krishna, or in company, that I implore You, immeasurable one, to forgive.",
          "Verse 43: Thou art the Father of this world, both moving and unmoving. Thou art to be adored by this world; Thou, the greatest Guru; for none exists who is equal to Thee; how then could there be another superior to Thee in the three worlds, O Being of unrivaled power?",
          "Verse 44: Therefore, bowing down and prostrating my body, I crave Thy forgiveness, O adorable Lord. As a father forgives his son, a friend his dear friend, a lover his beloved, even so may Thou forgive me, O God.",
          "Verse 45: I am delighted, having seen something never seen before; yet my mind is distressed with fear. Show me that form only, O God; have mercy, O God of gods, O Abode of the universe.",
          "Verse 46: I desire to see You as before, crowned, bearing a mace, with the discus in hand, in Your former form only, having four arms, O thousand-armed, Cosmic Being.",
          "Verse 47: The Blessed Lord said, 'O Arjuna, this Cosmic Form has graciously been shown to you by Me through My own Yogic power. It is full of splendour, primeval, and infinite; this Cosmic Form of Mine has never been seen before by anyone other than you.'",
          "Verse 48: Neither by the study of the Vedas, nor by gifts, nor by sacrifices, nor by severe austerities, can I be seen in this form in the world of men by any other than yourself, O great hero of the Kurus (Arjuna).",
          "Verse 49: Do not be afraid, nor be bewildered on seeing such a terrible form of Mine; with your fear dispelled and with a gladdened heart, now behold again this former form of Mine.",
          "Verse 50: Sanjaya said, 'Having thus spoken to Arjuna, Krishna again showed His own form. The great Soul, assuming His gentle form, then consoled Arjuna, who was terrified.'",
          "Verse 51: Arjuna said, 'Having seen this Thy gentle human form, O Krishna, now I am composed and have been restored to my own nature.'",
          "Verse 52: The Blessed Lord said, 'It is very hard indeed to see this form of Mine which thou hast seen; even the gods are ever longing to behold it.'",
          "Verse 53: Neither by the Vedas, nor by austerity, nor by gift, nor by sacrifice can I be seen in this form as thou hast seen Me so easily.",
          "Verse 54: But by single-minded devotion, I can be known, seen, and entered into in reality, O Arjuna.",
          "Verse 55: He who does all actions for Me, who regards Me as the Supreme, who is devoted to Me, who is free from attachment, who bears no enmity towards any creature, he comes to Me, O Arjuna.",
        ].map((verse, index) => (
          <div key={index} className="verse">
            <p>{verse}</p>
          </div>
        ))}
      </div>

      <div className="commentary-container">
        <h2>Commentary</h2>
        <p>
          Chapter 11 of the Bhagavad Gita presents a profound moment in Arjuna's
          journey as he witnesses the cosmic form of Lord Krishna. This chapter
          illustrates the divine omnipresence of the Lord and underscores the
          truth that all forms are manifestations of the one Supreme Reality.
          The transition from doubt to realization reflects a universal quest
          for truth and understanding.
        </p>
        <p>
          The gift of divine vision symbolizes the elevation of consciousness
          required to perceive the higher truths of existence. Arjuna's
          reactions—wonder, fear, and ultimately devotion—illustrate the
          transformative power of spiritual insight.
        </p>
        <p>
          The withdrawal of the universal form signifies the importance of
          devotion and surrender to the divine. This chapter teaches us that
          true knowledge comes from experiencing the divine, leading to a deeper
          understanding of our own nature and the interconnectedness of all
          beings.
        </p>
        <p>
          In essence, the Cosmic Form of Krishna embodies the ultimate reality,
          reminding us of the divine presence within and around us.
        </p>

        <h2>Commentary by Swami Paramarthananda</h2>
        <h3>Background</h3>
        <p>
          In the previous four chapters, Kṛṣṇa established that the entire
          universe is a manifestation of God and, therefore, any glory in
          creation belongs to God alone. Now, in this chapter, Arjuna
          appreciates this teaching and sees the universe as the very Lord.
        </p>
        <p>
          In the first two verses, Arjuna summarizes the entire teaching of
          Kṛṣṇa—the nature of jīva (predominantly discussed in the first six
          chapters) and the nature of God (predominantly discussed in the later
          four chapters). Though Arjuna has received the teaching, he is unable
          to appreciate the universal form due to some mental blocks. Hence, he
          prays to the Lord for the vision of the universal form of the Lord (3,
          4).
        </p>
        <p>
          Lord Kṛṣṇa agrees to bless Arjuna with the vision of the universal
          form (5 to 7). Since this is not possible to have such a vision with
          ordinary eyes, Kṛṣṇa grants Arjuna the divine eye for this special
          purpose (8). (The universal form is not a special form of the Lord. It
          is the Lord as the universe. As such, it is available for all at all
          times. The Lord need not show it. Still, we miss it because of our
          narrow outlook of the world. Once we refine our mind and look at the
          universe, we cannot miss the Lord. His stamp is there in all, from a
          blade of grass to the farthest star. Such a mind, which is tuned to
          see the Lord, is the divine eye behind the fleshy eyes. It is such an
          eye that Kṛṣṇa granted to Arjuna.)
        </p>
        <p>
          From the 9th to the 14th verse, we get a description of the universal
          form from Sañjaya. He pictures the Lord as a person with all divine
          ornaments shining with the brilliance of a thousand suns risen
          together. (We should remember that this is a description of the world
          only, divinized by the change of outlook. Every exalted object in
          creation should be taken as an ornament of the Lord.)
        </p>
        <p>
          From the 15th verse, we get Arjuna’s appreciation of the universal
          form. (Arjuna goes through various phases as he sees the universal
          form. The first response is one of wonder only.) Arjuna sees all
          beings in the cosmic body of the Lord. The sun and the moon are like
          His eyes. He sees the hands, legs, etc., of the people as those of the
          Lord. Now, the Lord’s body with thousands of hands, legs, etc.,
          appears without beginning, middle, or end (15 to 22).
        </p>
        <p>
          Now Arjuna’s attention is turned towards the mouth of the Lord, which
          represents Time (Death). With blazing fire and protruding teeth, the
          Lord’s mouth evokes terror in all, including Arjuna. Arjuna sees the
          entire world being scorched by this fire (Time), while many are
          rushing towards the mouth of the Lord. Some are already inside the
          mouth, and some are crushed between the teeth. All these cause great
          fear and confusion in Arjuna, and he begins to doubt whether the Lord
          is a loving father or a terrible destroyer (23 to 31). (This shows
          that Arjuna is still not able to see the Lord as a whole. He is able
          to accept ‘birth’ as part of the universe, but not ‘death.’ This
          partial outlook is the cause of fear and confusion. This is the second
          phase.)
        </p>
        <p>
          Then, the Lord clarifies that the fierce aspect also is Himself,
          manifesting as the Time-principle. When the time comes for people to
          die, the Lord finds the instruments to bring this about, and Arjuna
          happens to be one of them in the hands of the Lord (32 to 34). Having
          understood the Lord to be ‘the cosmic-stage-manager’, Arjuna
          surrenders to His Will and sings His glory (34-45). (Now Arjuna
          appreciates the Lord as totality, the basis of
          creation-preservation-dissolution. In front of the Lord, everything
          else is insignificant. This appreciation makes him a devotee, seeking
          forgiveness for all his past omissions and commissions. Thus, the
          third phase is true devotion to the Lord, born out of right
          understanding.)
        </p>
        <p>
          Arjuna is indeed happy to have this unique vision of the Lord. Still,
          one part of his mind is not able to accept the totality, especially
          the destructive aspect. So, Arjuna requests the Lord to withdraw His
          form (46).
        </p>
        <p>
          In the last nine verses (47 to 55), we see the Lord withdrawing His
          universal form (i.e., the Lord takes away the divine eye that Arjuna
          enjoyed till now. Arjuna comes down to look at the world in his own
          private way.) The Lord praises devotion as a means to this cosmic
          vision. This universal form could be seen by Arjuna because of his
          devotion. Through devotion, one can purify the mind, see the universal
          form, know the true nature of the Lord, and become one with the Lord.
        </p>
        <p>
          Hence, Kṛṣṇa tells Arjuna – “Do actions for My sake; be My devotee;
          keep Me as the ultimate goal; be detached (from the world); be free
          from hatred towards all. Such a person reaches Me.”
        </p>

        <h3>Main Topics of this Chapter:</h3>
        <ul>
          <li>Arjuna desires to see the universal form: 1 to 4</li>
          <li>Kṛṣṇa grants the divine eye: 5 to 8</li>
          <li>Sañjaya’s description of the universal form: 9 to 14</li>
          <li>
            Arjuna’s description of the universal form (first phase expressing
            wonder): 15 to 22
          </li>
          <li>
            Arjuna’s description of the universal form (second phase expressing
            fear): 23 to 30
          </li>
          <li>Kṛṣṇa answers Arjuna’s question: 31 to 34</li>
          <li>
            Arjuna’s description of the universal form (third phase expressing
            devotion): 35 to 45
          </li>
          <li>
            Withdrawal of the universal form and glorification of devotion: 46
            to 55
          </li>
        </ul>
        <p>
          Since this chapter deals with the universal form of the Lord, it is
          called <strong>Viśvarūpadarśana-yoga.</strong>
        </p>
      </div>
      <ChapterNav n={11} />
    </div>
  );
};

export default Chapter11;
