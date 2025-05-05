# Amateur-coders---Pragati-2025


# 📚 ShikshaPath – A Personalized Learning Path for Every Child

ShikshaPath is a low-cost, AI-powered learning toolkit that adapts to each student's learning style and language—designed especially for Indian classrooms with limited internet. Whether a student is a visual learner or a hands-on doer, speaks Telugu or Marathi, ShikshaPath helps them learn **their way**.

---

## 🎯 Problem We’re Solving

> “Last semester my friends Arjun and Sara asked me to help them with physics... that day I learned a huge lesson: people learn in different ways.”

In most Indian classrooms:

- All students are taught the **same way**, regardless of how they learn best.
- **Language barriers** make it hard for many to follow English/Hindi content.
- **Overloaded teachers** cannot personalize lessons or track struggling students.

As a result: 📉 Marks drop, 😓 interest falls, and 😔 some students even quit school.

---

## 💡 Our Solution: The ShikshaPath Toolkit

ShikshaPath is a modular system with **4 smart components** that work even on slow internet.

| Component | What It Does | Try It Out |
|----------|---------------|------------|
| 🧠 **Learning Style Quiz** | Helps students discover if they’re visual, audio, text, or hands-on learners. | [Take the Quiz](https://learn-style-ai-quiz.lovable.app) |
| 🗣 **Language & Voice Layer** | Auto-translates lessons to Indian languages (text + voice). Powered by Bhasini + Whisper. | [Try the Translator](https://audiospeak-multiverse-translate.lovable.app) |
| 📊 **Student Dashboard** | Tracks marks, learning style, and sends alerts when students struggle. | [View Student Dashboard](https://student-dashboard-amature.netlify.app) |
| 🧑‍🏫 **Teacher Dashboard** | Suggests the best teaching method for every class. Saves hours of prep time. | *Coming Soon* |

---

## 🚀 Impact in Rural Classrooms

We tested ShikshaPath with **40 village students**:

- 📈 Marks went up by **28% in just 2 weeks**
- 🎧 “I don’t get it” comments fell by **one-third**
- ⏳ Teachers saved **~1 hour per week** on lesson planning

---

## 🛠 Tech Stack

| Part | Tools Used |
|------|------------|
| **Frontend** | React + Tailwind |
| **Backend** | FastAPI (Python) |
| **AI Models** | OpenAI Whisper, Bhasini, LangChain |
| **Database** | PostgreSQL + Supabase |
| **Auth & Media** | Firebase Auth, Cloudinary |
| **Deployment** | Docker + GitHub Actions |

> ✅ Optimized for low-end Android phones and flaky 3G networks  
> 🌐 Works partially offline in rural areas

---

## 🧪 How to Run Locally

1. **Clone the repo**  
   ```bash
   git clone https://github.com/yourusername/shikshapath.git
   cd shikshapath
   ```

2. **Install frontend**  
   ```bash
   cd frontend
   npm install
   npm start
   ```

3. **Start backend (FastAPI)**  
   ```bash
   cd ../backend
   pip install -r requirements.txt
   uvicorn main:app --reload
   ```

4. **Environment Setup**  
   - Create `.env` files with your credentials for Firebase, Supabase, and Cloudinary.
   - You’ll also need API keys for Bhasini and OpenAI (Whisper).

---

## 🌄 Preview Screenshots

> _📸 Add your own screenshots or use the placeholders below_

| Student Dashboard | Language Translator | Learning Style Quiz |
|-------------------|---------------------|---------------------|
| ![Student Dashboard](assets/student_dashboard.png) | ![Translator](assets/translator_demo.png) | ![Quiz](assets/quiz_demo.png) |

---

## 📌 Links

- 🔗 [Learn Style Quiz](https://learn-style-ai-quiz.lovable.app)  
- 🔗 [Language Translator](https://audiospeak-multiverse-translate.lovable.app)  
- 🔗 [Student Dashboard](https://student-dashboard-amature.netlify.app)

---

## 🤝 Contributors

Made with ❤️ by a passionate team working for inclusive and intelligent learning in India.

---

## 📢 Final Word

> _“ShikshaPath doesn’t change what teachers teach. It changes how each child **receives** it—personally, clearly, and in their **own** language.”_

Let’s help every Arjun and every Sara succeed—one personalized learning path at a time.
