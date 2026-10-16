import React from "react";
import { Link } from "react-router-dom";
import { OmMark } from "../components/Motifs.jsx";
import "./Legal.css";

const Privacy = () => {
  return (
    <div className="legal-page bg-krishnas-wisdom">
      <h1>Privacy Policy</h1>
      <p>
        <em>Last modified October 19th, 2024</em>
      </p>

      <h2>Introduction</h2>
      <p>
        At BlueGen (the Company, we, us, or our), we respect your privacy and are
        committed to protecting it through our compliance with this privacy
        policy (the Privacy Policy). This Privacy Policy describes the types of
        information we may collect from you or that you may provide when you
        visit our website (the Website) and our practices for collecting, using,
        maintaining, protecting, and disclosing that information.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect several types of information from and about users of our
        Website, including:
      </p>
      <ul>
        <li>
          Your name, email address, and other contact information that you
          provide to us when you fill out a form on our Website.
        </li>
        <li>
          Information about your computer or mobile device and your internet
          connection, including your IP address, operating system, and browser
          type.
        </li>
        <li>
          Information about your usage of the Website, such as the pages you
          visit, the links you click on, and the searches you conduct on the
          Website.
        </li>
        <li>Any other information that you choose to provide to us.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We may use the information we collect from you for various purposes,
        including:
      </p>
      <ul>
        <li>To provide you with the products and services you request.</li>
        <li>To operate, maintain, and improve our Website.</li>
        <li>
          To send you marketing communications about our products and services.
        </li>
        <li>To respond to your comments, questions, and requests.</li>
        <li>
          To enforce our rights arising from any contracts entered into between
          you and us.
        </li>
        <li>
          To protect our rights, property, or safety and that of our users or
          others.
        </li>
        <li>As otherwise described to you at the point of data collection.</li>
      </ul>

      <h2>Sharing Your Information</h2>
      <p>
        We may share the information we collect from you with third-party service
        providers who help us with our business operations, such as web hosting,
        data analysis, email delivery, and customer service. We may also share
        your information with our affiliates and business partners. We may
        disclose your information if required by law or if we believe that such
        disclosure is necessary to comply with the law, a court order, or other
        legal process.
      </p>

      <h2>GitaGPT Conversations</h2>
      <p>
        When you chat with GitaGPT, the messages in your current conversation
        are sent through our server to an AI provider (OpenRouter and the model
        provider it routes to) so a reply can be generated. BlueGen does not
        store your conversations in a database, and the conversation is cleared
        from your browser when you start a new one or leave the page. The AI
        provider may process requests under its own terms, so please avoid
        sharing sensitive personal details such as full names, addresses, or
        financial information.
      </p>

      <h2>Security</h2>
      <p>
        We have implemented reasonable measures to protect the information we
        collect from you against unauthorized access, use, disclosure, or
        destruction. However, no security system is impenetrable, and we cannot
        guarantee the security of our systems 100%. Therefore, we cannot ensure or
        warrant the security of any information you transmit to us, and you do so
        at your own risk.
      </p>

      <h2>Changes to Our Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. If we make material
        changes to how we treat our users&rsquo; personal information, we will
        post the new Privacy Policy on this page and update the Last Modified date
        above. Your continued use of the Website after we make changes is deemed
        to be acceptance of those changes, so please check the Privacy Policy
        periodically for updates.
      </p>

      <h2>Contact Information</h2>
      <p>
        If you have any questions or comments about this Privacy Policy, please
        contact us:
      </p>
      <ul>
        <li>By email: priyanshu4help@gmail.com</li>
      </ul>

      <h2>Do Not Track Signals</h2>
      <p>
        Some web browsers may transmit Do Not Track signals to websites with which
        the browser communicates. Our Website does not currently respond to Do Not
        Track signals.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our Website may contain links to third-party websites or services. We are
        not responsible for the practices of these third parties and encourage
        you to read their privacy policies before providing them with any personal
        information.
      </p>

      <h2>Consent to Transfer</h2>
      <p>
        The Website is operated in India. If you are located outside of India,
        please be aware that information we collect may be transferred to and
        processed in India. By using the Website or providing us with any
        information, you consent to this transfer, processing, and storage of your
        information in India.
      </p>

      <h2>Last Updated</h2>
      <p>
        This Privacy Policy was last updated on October 19th, 2024.
      </p>

      <div className="legal-cta">
        <OmMark size={38} strokeWidth={1.4} />
        <p>
          Read our <Link to="/terms">Terms of Service</Link> or return to the{" "}
          <Link to="/">BlueGen home page</Link>.
        </p>
      </div>

      <p>© BlueGen 2024. All rights reserved.</p>
    </div>
  );
};

export default Privacy;
