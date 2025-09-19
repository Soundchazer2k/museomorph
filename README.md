# 🎨 MuseoMorph

*A playful art lab for transforming your likeness into authentic, museum-style artwork*

![License](https://img.shields.io/badge/License-MIT%2FApache--2.0-blue)
 ![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey)
 ![Framework](https://img.shields.io/badge/Built%20With-Tauri%20%7C%20Vite%20%7C%20TypeScript-green)
 ![Prompt Framework](https://img.shields.io/badge/Prompt%20Framework-v4.2-purple)
 ![Status](https://img.shields.io/badge/Status-Experimental-orange)

------

## ✨ Why MuseoMorph?

MuseoMorph is an open-source desktop app that transforms your photo into artwork inspired by the great artists and movements of history.

This project grew out of months of experimenting with Google’s **NanoBanana** image model. Early attempts with loose prompts (“make me look like Van Gogh”) produced outputs that felt plasticky and modern — closer to filters than paintings. Through trial and error, I learned that:

- **Loose prompts → generic defaults.**
- **Tight, detailed prompts → better authenticity.**
- **Iterative refinement is essential.**

MuseoMorph encodes those lessons into the **Universal Museum-Grade Prompt Framework (v4.2)** — a scaffold designed to respect artists’ materials, methods, and contexts.

MuseoMorph is not about counterfeiting or reproducing real works. No frames, no logos, no signatures. It’s about playful interpretation — a **toy-like art lab** that also invites users to learn about art history.

------

## 🖼️ Features

- **Museum-inspired UX:** Landing page with collections, gallery-style style pages, and clean detail views.
- **Markdown-driven styles:** Each `.md` file encodes ratios, modes, flags, and educational blurbs. Drop one in → app auto-detects it.
- **Multi-subject support:** Works with single portraits or group photos (manual face detection by default; auto toggle available).
- **Respectful prompts:** Guardrails for age, gender, wardrobe, and IP safety.
- **Local-first:** Runs fully on your computer. No image uploads.
- **Your API key, your control:** Start with Gemini/NanoBanana. Other providers may be added later.

------

## 📚 Learn as You Play

Each collection and style page includes short educational blurbs:

- When the movement began
- Key figures and themes
- What made it distinctive

Click into an artist for more detail. Think of it as browsing the **Met** or **MoMA** websites — curated and inviting — with the bonus that you can put yourself in the art.

MuseoMorph is a **playful art lab**: fun first, but also a way to appreciate the craft of artists.

------

## 🚀 Getting Started

1. **Download MuseoMorph** (cross-platform builds coming via Tauri).
2. **Add your API key** (Gemini/NanoBanana to start).
3. **Upload a photo → Pick a style → Generate.**

------

## 📂 Repo Structure

```text
museomorph/
├── styles/                  # Markdown prompt frameworks (source of truth)
│   ├── impressionism_art_analysis.md
│   ├── dutch_golden_age_profiles.md
│   ├── modern_age_comic_prompts.md
│   └── ...
├── scripts/                 # Build utilities
│   └── build-manifest.ts    # Generates manifest.json from /styles
├── src/                     # Frontend (Vite + TSX React)
│   ├── ui/                  # Museum-style UI components
│   ├── lib/                 # Prompt composer, markdown loader
│   └── App.tsx
├── src-tauri/               # Tauri backend (Rust)
│   ├── cmd.rs               # Image generation + key storage
│   └── Cargo.toml
├── docs/                    # Documentation (PRD, guides, design notes)
│   └── PRD.md
├── manifest.json            # Auto-generated style manifest
├── package.json
└── README.md
```

------

## 🤝 Contributing

MuseoMorph grows through community effort:

- Add new **Markdown style frameworks**.
- Improve educational blurbs.
- Refine prompts when drift is reported.
- Open issues for prompt or output oddities.

------

## 🙏 Acknowledgments

MuseoMorph builds on the work of many:

- **Google Gemini / NanoBanana** for providing the core image model.
- **Intel YuNet (ONNX)** for lightweight, open-source face detection.
- **Tauri, Vite, TypeScript, and Rust** for the cross-platform app framework.
- **Open-source contributors** who refine styles and markdowns.
- And above all: **the artists themselves** — past and present — whose craft, innovation, and toil inspire this project. MuseoMorph is created out of love and respect for their work, and with the hope that more people will discover and appreciate it.

------

## 📜 License

Open source under MIT/Apache-2.0.
 All style frameworks are for **educational and playful purposes only** — not reproductions, not forgeries.

