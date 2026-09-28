# 🛢️ NWIS — Near Well Intelligent System

### SIH 2026 | Problem Statement 121 | Oil India Limited

NWIS (Near Well Intelligent System) is an **AI-powered, offline-first decision support platform** developed for drilling engineers. It analyzes current drilling data from **eRTMAC**, compares it with historical well incidents, integrates weather forecasts, and provides intelligent recommendations to reduce drilling risks.

---

## 🚀 Problem Statement

During drilling operations, engineers often need to search historical well reports manually to identify similar incidents such as **mud loss, torque spikes, stuck pipe, and pressure anomalies**.

NWIS solves this problem by providing an intelligent assistant that instantly compares the current well with historical wells and recommends mitigation strategies.

---

## ✨ Key Features

* 🔐 Secure Engineer Login
* 📊 Real-time Drilling Dashboard
* 🤖 AI Assistant (RAG-based)
* 🛢 Historical Well Comparison
* 🗺 GIS Nearby Well Explorer
* 🌦 Weather Forecast Integration
* 📤 Upload New Well Data
* 📴 Offline-First Support
* 📈 Well Analytics & Risk Score
* 💡 AI Decision Support & Recommendations

---

## 🏗 System Architecture

Engineer → Login → NWIS Dashboard → eRTMAC + Historical Wells + Weather → AI/RAG Engine → Risk Analysis → Decision Support

---

## 🛠 Tech Stack

| Layer           | Technology            |
| --------------- | --------------------- |
| Frontend        | HTML, CSS, JavaScript |
| Future Frontend | React + Tailwind CSS  |
| Backend         | FastAPI               |
| Database        | PostgreSQL + PostGIS  |
| AI              | RAG + LLM             |
| Maps            | MapLibre              |
| Charts          | SVG / Recharts        |
| Offline         | PWA + IndexedDB       |

---

## 📱 Prototype Screens

* Login
* Dashboard
* Historical Wells
* AI Assistant
* GIS Map
* Weather Forecast
* Upload Well
* Analytics
* Profile & Offline Mode

---

## 📂 Project Structure

```text
NWIS/
│── index.html
│── style.css
│── script.js
│── assets/
│     ├── images/
│     └── icons/
└── README.md
```

---

## ⚙️ How to Run

1. Clone the repository

```bash
git clone https://github.com/your-username/NWIS.git
```

2. Open the project folder

```bash
cd NWIS
```

3. Open `index.html` in your browser.

No installation is required for the prototype version.

---

## 🎯 Future Scope

* Live eRTMAC Integration
* Voice-enabled AI Assistant
* OCR for drilling reports
* 3D Well Trajectory Visualization
* Multi-user engineer collaboration
* Real-time cloud synchronization

---

## 👨‍💻 Team

**Smart India Hackathon 2026**

Problem Statement **121 — Oil India Limited**

---

> **NWIS — Safer Drilling, Smarter Decisions.**
