# 📤 GITHUB UPLOAD STRUCTURE

## FILES TO UPLOAD TO GITHUB:

### 🎯 FRONTEND FOLDER (Complete React App):
```
frontend/
├── package.json ✅
├── public/
│   └── index.html ✅
├── src/
│   ├── App.js ✅
│   ├── App.css ✅
│   ├── index.js ✅
│   ├── index.css ✅
│   ├── components/ ✅
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── data/
│       └── mock.js ✅
└── tailwind.config.js ✅
```

### 🔧 BACKEND FOLDER:
```
backend/
├── server.py ✅
├── requirements.txt ✅
├── Dockerfile ✅
└── .env.example ✅
```

### 📋 ROOT FILES:
```
├── README.md ✅
├── vercel.json ✅
├── railway.json ✅
└── package.json (root level for deployment)
```

## 🎯 FINAL GITHUB STRUCTURE:
```
anand-kumar-portfolio/
├── frontend/ (complete React app)
├── backend/ (FastAPI server)
├── README.md
├── vercel.json
├── railway.json
└── .env.example
```