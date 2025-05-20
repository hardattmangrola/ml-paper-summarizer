## 📄 ML Paper Summarizer

A simple web app that allows users to input the title of a Machine Learning paper and fetches its abstract from [arXiv](https://arxiv.org/) using the arXiv API.

### 🌐 Live Demo

🔗 [https://ml-paper-summarizer.onrender.com](https://ml-paper-summarizer.onrender.com)

---

### 🚀 Features

* 🔍 Search ML papers by title
* 📜 Fetches abstracts via the [arXiv Open API](https://arxiv.org/help/api/)
* 🖥️ Clean and responsive frontend
* 🧠 Built using Node.js, Express, HTML, CSS, and JavaScript

---

### 📁 Project Structure

```
ML-Paper-Summarizer/
├── public/
│   └── index.html       # Frontend (HTML, CSS, JavaScript)
├── server.js            # Express server to fetch arXiv data
├── package.json         # Project metadata and dependencies
├── package-lock.json
└── .gitignore
```

---

### 🛠️ Tech Stack

* **Frontend**: HTML, CSS, JavaScript
* **Backend**: Node.js, Express
* **API**: arXiv Open API

---

### 🧪 How It Works

1. User enters a paper title.
2. Frontend sends a `POST` request to `/summarize`.
3. Server queries the arXiv API for the matching paper.
4. The abstract is extracted from the XML response and returned to the user.

---

### 📦 Installation (for local use)

```bash
git clone https://github.com/<your-username>/ml-paper-summarizer.git
cd ml-paper-summarizer
npm install
node server.js
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 🌍 Deployment

This project is deployed for free on [Render](https://render.com).
See it live at: [https://ml-paper-summarizer.onrender.com](https://ml-paper-summarizer.onrender.com)

---

### 📜 License

This project is open-source and free to use for educational and non-commercial purposes.

---

