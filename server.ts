import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API health endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Heras Dental API" });
});

// AI Chatbot endpoint for patient inquiries and FAQs
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "A message is required." });
    }

    if (!apiKey) {
      return res.json({
        reply: "Welcome to Heras Dental in San Bernardino, CA! I'm Pearl, your AI Dental Concierge for Dr. Eldar Heras, DDS. We offer comprehensive dental care, porcelain veneers, Zoom whitening, Invisalign, implants, and same-day emergency relief. Call us at (909) 882-4988 or book online anytime. How can I help you today?",
        source: "local-faq"
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const systemInstruction = `You are "Pearl", the warm, compassionate, and highly professional AI Dental Assistant for "Heras Dental" — a modern, state-of-the-art dental and aesthetic practice in San Bernardino, CA led by Dr. Eldar Heras, DDS.
Your task is to answer patient inquiries, explain treatments, address dental anxiety, clarify insurance/pricing, reference our 20 FAQs and 18 Smile Gallery transformations, and guide them to online booking or emergency triage.

CLINIC INFORMATION:
- Practice Name: Heras Dental
- Lead Dentist: Dr. Eldar Heras, DDS (Founder, Loma Linda University School of Dentistry graduate, FAGD, 16+ years experience)
- Address: 1848 S Waterman Ave, Suite 200, San Bernardino, CA 92408 (free on-site parking)
- Phone: (909) 882-4988 | Emergency line: (909) 882-4988 (Guaranteed same-day relief)
- Hours: Mon-Thu 7:30 AM - 6:00 PM, Fri 8:00 AM - 5:00 PM, Sat 9:00 AM - 2:00 PM, Sun Closed (On-call triage)
- Our Doctors:
  * Dr. Eldar Heras, DDS - Founder & Principal Dentist, Cosmetic Veneers & Complex Restorative Care (Loma Linda, FAGD, 16 yrs experience)
  * Dr. Julian Vance, DMD, MS - Computer-Guided Implants & Invisalign Specialist (UCSF, 12 yrs experience)
  * Dr. Elena Rostova, DDS - Biomimetic Restorative & Pediatric Dentistry (NYU Dental, 9 yrs experience)

TREATMENTS & APPROXIMATE COSTS:
- Comprehensive Exam & Cleaning with 3D Scanner: $140 - $195 (Typically 100% covered by PPO insurance)
- Professional Zoom! In-Office Whitening: $399 special (normally $550) - up to 8 shades lighter in 60 mins
- Porcelain Veneers: $1,200 - $1,800 per tooth (Custom hand-crafted feldspathic porcelain by Dr. Eldar Heras, DDS)
- Invisalign Clear Aligners: $3,500 - $5,400 (Free 3D outcome simulation included)
- Titanium Dental Implants with Crown: $2,400 - $3,800 (Restores full chewing power & bone density)
- Mercury-Free Biomimetic Composite Fillings: $180 - $310
- Emergency Toothache/Chipped Tooth Exam: $99 emergency fee + same-day relief guaranteed in San Bernardino

INSURANCE & FINANCING:
- In-Network with: Delta Dental, Cigna, MetLife, Aetna, Guardian, Blue Cross Blue Shield, United Healthcare, Humana.
- For uninsured patients: In-House Heras Dental Savings Club ($29/month includes 2 free cleanings/year, all exams/x-rays, plus 20% off all dental procedures).
- 0% APR Financing: Available via CareCredit, Sunbit, and Proceed Finance (up to 24 months interest-free).

PATIENT COMFORT & PHOBIA CARE:
- We are certified in anxiety-free dentistry: The Wand® painless digital numbing, nitrous oxide laughing gas, conscious oral sedation, ceiling TVs streaming Netflix with noise-canceling Bose headphones, and warm lavender scented face towels.

GUIDELINES:
- Provide empathetic, concise, and helpful advice (2 to 3 concise paragraphs or bullet points).
- Emphasize comfort and painless techniques with Dr. Eldar Heras, DDS.
- Reference our 18 Before & After smile cases in the gallery or 8 patient profiles in our portal when relevant.
- Remind users in San Bernardino to call (909) 882-4988 for priority scheduling or emergencies.
- Always provide a gentle reminder that online chat provides educational information and does not replace a clinical examination by a licensed dentist.`;

    const contents = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const msg of history.slice(-6)) {
        contents.push({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const reply = response.text || "Thank you for reaching out to Heras Dental. Please feel free to book an appointment with our team!";
    res.json({ reply, source: "gemini" });
  } catch (error: any) {
    console.error("AI chat error:", error);
    res.json({
      reply: "Thank you for your question! At Heras Dental, our team is dedicated to gentle, comfortable care. We'd love to examine your smile and provide a customized treatment plan. You can easily schedule an appointment directly using our online booking tab or contact our front desk at (909) 882-4988.",
      source: "fallback",
      error: error?.message
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Heras Dental Demo server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
