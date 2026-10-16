import React, { useEffect, useRef } from "react";
import { OmMark, MandalaMotif } from "../components/Motifs.jsx";
import { Reveal } from "../components/Reveal.jsx";
import "./QuotesPage.css";

const quotesList = [
  {
    quote:
      "You have the right to work, but never to the fruit of work. – The Gita",
    translation:
      "आपके पास काम करने का अधिकार है, लेकिन काम के फल का नहीं। – गीता",
  },
  {
    quote:
      "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place. – The Gita",
    translation:
      "जब ध्यान को सिद्ध किया जाता है, तब मन एक शांत स्थान में दीपक की लौ के समान अडिग होता है। – गीता",
  },
  {
    quote: "The soul is neither born, and nor does it die. – The Gita",
    translation: "आत्मा न तो जन्म लेती है, और न ही मरती है। – गीता",
  },
  {
    quote:
      "One who is not disturbed by the dualities of happiness and distress, and is unbothered by desires, is firmly fixed. – The Gita",
    translation:
      "जो सुख-दुख के द्वैतों से अज्ञात है, और इच्छाओं से परेशान नहीं है, वह निश्चित रूप से स्थिर है। – गीता",
  },
  {
    quote: "The mind is everything. What you think you become. – The Gita",
    translation: "मन सब कुछ है। आप जो सोचते हैं, वही बनते हैं। – गीता",
  },
  {
    quote:
      "He who has no attachments can really love others, for his love is pure and divine. – The Gita",
    translation:
      "जो किसी से भी लगाव नहीं रखता, वह वास्तव में दूसरों से प्रेम कर सकता है, क्योंकि उसका प्रेम शुद्ध और दिव्य है। – गीता",
  },
  {
    quote:
      "It is better to live your own destiny imperfectly than to live an imitation of somebody else’s life with perfection. – The Bhagavad Gita",
    translation:
      "यह बेहतर है कि आप अपनी नियति को अधूरा जिएं बजाय किसी और के जीवन की सही नकल करने के। – गीता",
  },
  {
    quote:
      "Man is made by his belief. As he believes, so he is. – The Bhagavad Gita",
    translation:
      "मनुष्य अपने विश्वास द्वारा बनता है। जैसे वह विश्वास करता है, वह वैसा ही होता है। – गीता",
  },
  {
    quote:
      "There are three gates to this self-destructive hell: lust, anger, and greed. Renounce these three. – Krishna",
    translation:
      "इस आत्म-नाशक नरक के तीन द्वार हैं: काम, क्रोध और लोभ। इन तीनों को त्यागें। – कृष्ण",
  },
  {
    quote:
      "Those who cannot renounce attachment to the results of their work are far from the path. – The Gita",
    translation:
      "जो अपने कार्यों के परिणामों से लगाव नहीं छोड़ सकते, वे मार्ग से बहुत दूर हैं। – गीता",
  },
  {
    quote:
      "A Karma-yogi performs action by body, mind, intellect, and senses, without attachment, only for self-purification. – Bhagavad Gita",
    translation:
      "एक कर्म-योगी अपने शरीर, मन, बुद्धि और इंद्रियों से बिना लगाव के केवल आत्म-शुद्धि के लिए कार्य करता है। – गीता",
  },
  {
    quote:
      "Happiness derived from a combination of the senses and the sense objects is always a cause of distress and should be avoided by all means. – The Gita",
    translation:
      "इंद्रियों और इंद्रिय वस्तुओं के संयोजन से प्राप्त सुख हमेशा दुःख का कारण होता है और इसे किसी भी कीमत पर टाला जाना चाहिए। – गीता",
  },
  {
    quote:
      "A gift is pure when it is given from the heart to the right person at the right time and at the right place, and when we expect nothing in return. – The Bhagavad Gita",
    translation:
      "एक उपहार शुद्ध होता है जब इसे दिल से सही व्यक्ति को सही समय और स्थान पर दिया जाता है, और जब हम बदले में कुछ नहीं उम्मीद करते। – गीता",
  },
  {
    quote:
      "One should strive and employ oneself to uplift oneself. One should never dishonor oneself. The self is one’s friend as well as one’s enemy. – The Bhagavad Gita",
    translation:
      "व्यक्ति को अपने आप को ऊँचा उठाने के लिए प्रयास करना चाहिए। व्यक्ति को कभी भी अपने आप का अपमान नहीं करना चाहिए। आत्मा व्यक्ति का मित्र और दुश्मन दोनों है। – गीता",
  },
  {
    quote:
      "As they approach me, so I receive them. All paths, Arjuna, lead to me. – Krishna",
    translation:
      "जैसे वे मेरे पास आते हैं, मैं उन्हें वैसे ही स्वीकार करता हूँ। सभी मार्ग, अर्जुन, मुझ तक पहुँचते हैं। – कृष्ण",
  },
  {
    quote:
      "Calmness, gentleness, silence, self-restraint, and purity: these are the disciplines of the mind. – The Gita",
    translation:
      "शांति, सौम्यता, मौन, आत्म-नियंत्रण और शुद्धता: ये मन के अनुशासन हैं। – गीता",
  },
  {
    quote:
      "Always perform your duty efficiently and without attachment to the results, because by doing work without attachment one attains the Supreme. – Bhagavad Gita",
    translation:
      "सदा अपने कर्तव्य को प्रभावी ढंग से और परिणामों से बिना लगाव के करें, क्योंकि बिना लगाव से कार्य करने पर व्यक्ति सर्वोच्चता प्राप्त करता है। – गीता",
  },
  {
    quote:
      "The impermanent appearance of happiness and distress and their disappearance in due course are like the appearance and disappearance of winter and summer seasons. – The Gita",
    translation:
      "सुख और दुःख की अस्थायी उपस्थिति और समय पर उनकी अनुपस्थिति शीतकाल और ग्रीष्मकाल के मौसमों की उपस्थिति और अनुपस्थिति के समान हैं। – गीता",
  },
  {
    quote:
      "No one who does good work will ever come to a bad end, either here or in the world to come. – The Bhagavad Gita",
    translation:
      "जो भी अच्छा काम करता है, उसका कभी भी बुरा अंत नहीं होगा, यहाँ या आने वाली दुनिया में। – गीता",
  },
  {
    quote:
      "What the outstanding person does, others will try to do. The standards such people create will be followed by the whole world. – The Bhagavad Gita",
    translation:
      "जो उत्कृष्ट व्यक्ति करता है, दूसरे भी वही करने की कोशिश करेंगे। ऐसे लोगों द्वारा बनाए गए मानक पूरे विश्व द्वारा अपनाए जाएंगे। – गीता",
  },
  {
    quote: "I am the beginning, middle, and end of creation. – Krishna",
    translation: "मैं सृष्टि की शुरुआत, मध्य और अंत हूँ। – कृष्ण",
  },
  {
    quote:
      "When one’s mind dwells on the objects of Senses, fondness for them grows on him; from fondness comes desire, from desire, anger. – The Gita",
    translation:
      "जब किसी का मन इंद्रियों के विषयों पर निवास करता है, तो उनके प्रति लगाव बढ़ता है; लगाव से इच्छा उत्पन्न होती है, और इच्छा से क्रोध। – गीता",
  },
  {
    quote:
      "Even the wise are confused about what is action and what is inaction. – Bhagavad Gita",
    translation:
      "यहाँ तक कि ज्ञानी भी यह समझने में भ्रमित होते हैं कि क्रिया क्या है और निष्क्रियता क्या है। – गीता",
  },
  {
    quote:
      "With the intuitive discrimination, saturated in patience, with the mind absorbed in the soul, the Yogi, feeding his mind, all thoughts, will by slow degrees attain tranquillity. – The Gita",
    translation:
      "अभिज्ञता के साथ, धैर्य में संतृप्त होकर, आत्मा में लीन मन के साथ, योगी, अपने मन को खिलाते हुए, सभी विचारों को धीरे-धीरे शांति प्राप्त करेंगे। – गीता",
  },
  {
    quote:
      "Curving back within myself I create again and again. – The Bhagavad Gita",
    translation: "मैं अपने भीतर फिर से फिर से निर्माण करता हूँ। – गीता",
  },
  {
    quote:
      "Just remember that I am, and that I support the entire cosmos with only a fragment of my being. – Krishna",
    translation:
      "बस याद रखें कि मैं हूँ, और मैं अपने एक अंश से सम्पूर्ण ब्रह्माण्ड का समर्थन करता हूँ। – कृष्ण",
  },
  {
    quote:
      "They live in wisdom who see themselves in all and all in them, who have renounced every selfish desire and sense-craving tormenting the heart. – The Gita",
    translation:
      "जो सभी में स्वयं को देखते हैं और सभी में स्वयं को देखते हैं, वे ज्ञान में जीवित रहते हैं, जिन्होंने हृदय को तड़पाने वाली सभी स्वार्थी इच्छाओं और इंद्रिय वासनाओं का त्याग किया है। – गीता",
  },
  {
    quote:
      "On this path effort never goes to waste, and there is no failure. Even a little effort toward spiritual awareness will protect you from the greatest fear. – Bhagavad Gita",
    translation:
      "इस मार्ग पर प्रयास कभी व्यर्थ नहीं जाता, और न ही कोई असफलता है। आध्यात्मिक जागरूकता की ओर थोड़ी सी कोशिश भी आपको सबसे बड़े डर से सुरक्षित रखेगी। – गीता",
  },
  {
    quote:
      "The peace of God is with them whose mind and soul are in harmony, who are free from desire and wish, and who follow the path of righteousness. – The Gita",
    translation:
      "ईश्वर की शांति उन लोगों के साथ है जिनका मन और आत्मा सामंजस्य में है, जो इच्छाओं और इच्छाओं से मुक्त हैं, और जो धर्म के मार्ग का अनुसरण करते हैं। – गीता",
  },
  {
    quote:
      "In the face of every trial, he who remains undisturbed is a true Yogi. – The Gita",
    translation:
      "हर परीक्षा के सामने जो शांत रहता है, वह सच्चा योगी है। – गीता",
  },
];

const QuotesPage = () => {
  const quotesRef = useRef([]);

  useEffect(() => {
    const node = quotesRef.current;
    if (!node) return undefined;

    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const targets = node.querySelectorAll(".quote-frame");
    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((t) => t.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="quotes-page">
      <section className="quotes-hero bg-divine-saffron">
        <MandalaMotif
          size={620}
          className="deco spin-slow quotes-hero__mandala"
          stroke="#fff0c9"
          opacity={0.14}
        />
        <div className="container quotes-hero__inner">
          <OmMark size={56} className="quotes-hero__om" strokeWidth={1.3} />
          <p className="eyebrow eyebrow--both">Reflection</p>
          <h1>Quotes from the Bhagavad Gita</h1>
          <p>
            Teachings of Shri Krishna on duty, the mind, and steady wisdom &mdash;
            in English and in Hindi.
          </p>
        </div>
      </section>

      <section className="quotes-body bg-krishnas-wisdom">
        <div className="container" ref={quotesRef}>
          <p className="quotes-count">
            {quotesList.length} verses to carry with you
          </p>
          <div className="quotes">
            {quotesList.map((quote, index) => (
              <Reveal
                key={index}
                delay={(index % 3) * 90}
                className="quote-frame"
              >
                <span className="quote-frame__om" aria-hidden="true">
                  {"\u0950"}
                </span>
                <p className="quote-frame__en">{quote.quote}</p>
                <span className="quote-frame__rule" aria-hidden="true" />
                <p className="quote-frame__hi devanagari">
                  {quote.translation}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotesPage;
