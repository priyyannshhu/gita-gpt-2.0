<h1 align="center">🪔 BlueGen: Your AI Companion to the Bhagavad Gita</h1>


## 🚀 Deployment

BlueGen is hosted and can be accessed live at [BlueGen](https://bluegen.vercel.app/).


## Overview 🌟

**BlueGen: Your AI-Powered Bhagavad Gita Companion**

BlueGen is an intuitive platform that brings the wisdom of the Bhagavad Gita to life using artificial intelligence. At its core is a chatbot powered by GitaGPT, which provides solutions to a wide range of issues by referencing the teachings of the Srimad Bhagavad Gita. Unlike other AI tools, such as ChatGPT, that offer modern solutions to life's challenges, our GitaGPT specifically draws from the timeless wisdom of the Gita to guide users through their personal struggles.

In addition to the chatbot, BlueGen features a Book Section for reading the complete Bhagavad Gita and a Quotes Section filled with inspiring teachings to uplift your spirit. The platform is designed to make the Gita’s wisdom easily accessible, complete with customizable themes and real-time chat capabilities.

Built using ReactJS and styled with CSS, BlueGen ensures a seamless user experience, deployed on Vercel for fast and reliable access. With integrated social media links, it fosters a community dedicated to spiritual growth and inner peace.

BlueGen effectively combines the ancient knowledge of the Bhagavad Gita with contemporary technology, serving as a personal tool for self-reflection and spiritual exploration.

### Objectives:
- **Offer Spiritual Advice:** Assist users in finding answers to life’s questions through an AI chatbot inspired by the Bhagavad Gita.
- **Make the Gita Accessible:** Create a user-friendly platform where everyone can easily access Lord Krishna's wisdom.
- **Support Personal Growth:** Encourage reflection on spiritual teachings to enhance inner peace and well-being.
- **Blend Tradition with Technology:** Utilize modern AI to integrate the ancient teachings of the Bhagavad Gita into daily life.

## 👾 Features

### 1. **Home Page**
- **Our Team Section**: Introduces team members with their names and roll numbers.
- **Main Message**: "Have Doubts or Questions in Life? Ask within, find answers, discover your inner self."
- **Call to Action**: A prominent "Start Asking" button that redirects users to the ChatPage.

### 2. **Chat Page**
- **GitaGPT Chatbot**: A native AI chat that runs inside BlueGen. Messages go to our own `/api/chat` serverless endpoint, which adds a trusted Bhagavad Gita-grounded system prompt and calls [OpenRouter](https://openrouter.ai). Replies stream in, follow-up questions keep the conversation context, and verse references such as "2.47" are matched against the translations already on the chapter pages. See **GitaGPT setup** below.
- **Multilingual Support**: BlueGen caters to a global audience. Utilize Google Translate to read the Bhagavad Gita and access the interface in your preferred language. This ensures inclusivity and allows users from various backgrounds to benefit from the Gita's teachings. (Note: This functionality relies on an external script)

### 3. **Books Page**
- **Access Anytime, Anywhere**: Users can read the Bhagavad Gita at their convenience.
- **Content Overview**: Provides a brief description of the Gita, emphasizing its teachings and significance.
- **Chapter Navigation**: Each chapter is listed with a "Read it" button for easy access to specific content.

### 4. **Quotes Page**
- **Inspirational Teachings**: Curated quotes from the Bhagavad Gita to inspire users and promote reflection.

### 5. **Responsive Design**
- **User-Friendly Interface**: Built with ReactJS and styled with Tailwind CSS for a smooth browsing experience across devices.
- **Social Media Links**: Connects users with platforms like GitHub, Instagram, LinkedIn, WhatsApp, and email for community building.



## Getting Started:

BlueGen is built with React and requires Node.js and npm (or yarn) to be installed on your system. Here's how to set up and run the application:

### Clone the Repository:

```bash
git clone https://github.com/priyyannshhu/BlueGen.git
```
### Install Dependencies:

```bash
cd bluegen
npm install

(or `yarn install`)
```

### Start the Development Server:

```bash
npm start

(or `yarn start`)
```

This will launch the BlueGen application in your default browser, typically at http://localhost:3000.


## License:

BlueGen is licensed under the MIT License. Feel free to use, modify, and distribute the code under the terms of this license.

---

## APIs Used:

- **Bhagavad Gita API**: This open-source REST API allows anyone to use the text from Srimad Bhagavad Gita in their own web or mobile applications. For more information, check the [API Overview](https://rapidapi.com/bhagavad-gita-bhagavad-gita-default/api/bhagavad-gita3).


## GitaGPT setup (OpenRouter)

GitaGPT needs one server-side secret. The key is read only by `api/chat.js` and is never sent to the browser.

| Variable | Required | Purpose |
| --- | --- | --- |
| `OPENROUTER_API_KEY` | yes | Create at https://openrouter.ai/keys |
| `OPENROUTER_MODEL` | no | Any model ID from https://openrouter.ai/models. Default: `anthropic/claude-sonnet-5` |
| `SITE_URL` | no | Sent to OpenRouter as the app's site URL |

**Local:** `cp .env.example .env.local`, put your key in it, then `npm install` and `npm run dev`. The dev server serves `/api/chat` with the same handler Vercel runs.

**Vercel:** Project -> Settings -> Environment Variables -> add `OPENROUTER_API_KEY` (and optionally `OPENROUTER_MODEL`) for Production/Preview, then redeploy. No other config is needed; `vercel.json` already routes `/api/*` to the function.

**Change the model:** set `OPENROUTER_MODEL` (for example to a cheaper model) and redeploy. Check the ID on openrouter.ai/models first.

**Files:** `api/chat.js` (endpoint, validation, streaming), `api/_lib/systemPrompt.js` (the GitaGPT prompt), `api/_lib/scripture.js` + `api/_lib/verses.json` (local verse lookup; regenerate with `node scripts/extract-verses.mjs`), `src/pages/ChatPage.jsx` (UI).

**Limits:** 2,000 characters per message, last 20 turns of context, about 12 requests per minute per IP (best effort, in memory per serverless instance; use Vercel Firewall rate limiting for a hard limit).
