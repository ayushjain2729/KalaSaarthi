# 🌸 KalaSaarthi — AI-Powered Marketplace Assistant for Local Artisans  

[![Made with React](https://img.shields.io/badge/Made%20with-React-61dafb?logo=react&logoColor=white)](https://reactjs.org/)  
[![Google Cloud](https://img.shields.io/badge/Powered%20by-Google%20Cloud-4285F4?logo=googlecloud&logoColor=white)](https://cloud.google.com/)  
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-TailwindCSS-38b2ac?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  
[![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)](#)  
[![Contributions welcome](https://img.shields.io/badge/Contributions-Welcome-blueviolet.svg)](CONTRIBUTING.md)  

> Empowering Indian artisans with **AI-driven storytelling, marketing, and digital sales tools** to preserve culture and expand market reach.  

![KalaSaarthi Banner](https://dummyimage.com/1200x400/4f46e5/ffffff&text=KalaSaarthi+%E2%80%94+AI+Marketplace+Assistant)  

---

## 📖 Overview  

**KalaSaarthi** is an **AI-powered digital assistant** designed to help local artisans in India **create engaging product stories, market their crafts, and expand into global marketplaces**.  
Built on **Google Cloud’s Generative AI stack**, the platform simplifies the digital journey for artisans with **voice-first onboarding, AI storytelling, multilingual translations, and one-click marketplace integration**.  

---

## ✨ Key Features  

- 🎙 **Voice-First Onboarding** – Artisans narrate their story in local languages → AI converts into polished product copy.  
- 🖼 **Smart Visual Enhancer** – Automatically improves product photos (background removal, lighting, catalog-ready).  
- 📝 **AI Storytelling & Narratives** – Generates origin stories, cultural context, and SEO-friendly product descriptions.  
- 📱 **AI Marketing Pack Generator** – Posters, captions, hashtags, and 15-sec promo videos ready for social media.  
- 🛒 **Marketplace Integration** – Auto-formatted product listings for **Etsy, Amazon Karigar, Meesho, and the in-app marketplace**.  
- 💡 **Smart Pricing Engine** – Data-driven recommendations on pricing, trending styles, and discounts.  
- 🌐 **Multilingual Support** – Local languages + English using Google Translation & Vertex AI tuning.  
- 👥 **Community & Cooperatives** – Shared storefronts, pooled logistics, and NGO onboarding support.  

---

## 🏗 System Architecture  
 

**Google Cloud Services Used:**  
- **Vertex AI / Generative AI Studio** → LLMs for text, storytelling, and marketing content.  
- **Cloud Vision API** → Product photo enhancement & tagging.  
- **Cloud Translation API** → Multilingual text generation.  
- **Speech-to-Text & Text-to-Speech** → Voice onboarding + audio storytelling.  
- **Firebase Auth + Firestore** → User authentication and profile data.  
- **Cloud Storage** → Product images, videos, and AI-generated assets.  
- **BigQuery + Looker Studio** → Market insights & pricing analytics.  
- **Cloud Run + Cloud Functions** → API and automation workflows.  

---

## 📲 Workflow (Artisan Journey)  

1. **Capture & Narrate** → Artisan uploads product photo or records a voice note.  
2. **AI Enhancement** → Image cleaned, story transcribed, draft content created.  
3. **Review & Customize** → Artisan reviews multilingual text, adds price.  
4. **Marketing Pack** → AI generates posters, social media posts, and hashtags.  
5. **Publish & Sell** → Export listings to marketplaces or share directly.  
6. **Analytics & Guidance** → Insights on sales, pricing, and trends.  

---

## 🚀 Demo Use Case  

**Rekha Devi — Handloom Weaver (Varanasi)**  
- Uploads a photo of a Banarasi saree.  
- Speaks: “I wove this saree with recycled silver zari over 12 days.”  
- AI generates:  
  - **Title:** *Banarasi Handloom Saree — Pure Silk with Recycled Silver Zari*  
  - **Description:** Cultural heritage, weaving process, and care instructions.  
  - **Social Media Caption:** *“Handwoven Banarasi saree ✨ 12 days of tradition in every thread. #Handloom #SustainableFashion”*  
  - **Suggested Price:** ₹10,200 – ₹12,600.  
  - **Marketplace Export:** Ready-to-publish Etsy/Amazon product listing.  

---

## 💼 Business Model  

- **Freemium Core** → Free basic listings & AI tools.  
- **Transaction Fee** → 3–6% commission per sale (capped).  
- **Premium Plan** → Advanced marketing packs, multilingual assets, analytics.  
- **NGO/CSR Partnerships** → Subsidized artisan onboarding.  
- **Add-on Services** → Verified authenticity certificates, cooperative storefronts.  

---

## ⚡️ Challenges & Solutions  

| Challenge | Solution |  
|-----------|-----------|  
| Digital literacy | Voice-first, icon-based UI, local-language support |  
| Affordability | Freemium model + NGO/CSR subsidization |  
| Connectivity | Offline-first design, compressed uploads |  
| Trust & authenticity | Document AI + provenance badges |  
| Fraud/counterfeit | KYC verification, NGO partnerships |  

---

## 🛠 Tech Stack  

**Frontend:** React (Next.js / Vite), Tailwind CSS, Framer Motion  
**Backend:** Node.js, Firebase, Cloud Run, Firestore  
**AI Models:** Vertex AI (PaLM/Gemini), Cloud Vision, Translation, Speech APIs  
**Analytics:** BigQuery, Looker Studio  
**Integrations:** Etsy, Amazon Karigar, Meesho APIs  

---

## 🌍 Impact  

- Preserve India’s cultural heritage & handicraft legacy.  
- Expand artisan reach to **global buyers**.  
- Enable **sustainable livelihoods** with fair pricing.  
- Build **community-driven digital cooperatives**.  

---

## 📦 Getting Started (Developer Setup)  

```bash
# Clone repo
git clone https://github.com/yourusername/kalasaarthi.git
cd kalasaarthi

# Install dependencies
npm install

# Run locally
npm run dev

# Deploy to Firebase Hosting
firebase deploy
