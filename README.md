# AuthCloud Project

यह प्रोजेक्ट एक फुल-स्टैक एप्लिकेशन है जिसमें एक Node.js/Express backend और एक React frontend (Vite के साथ) शामिल है। इसमें यूजर लॉगिन (JWT के साथ) और कॉन्टैक्ट फॉर्म की सुविधा है।

---

## 1. Backend (Node.js + Express + MongoDB)

### 1.1. Requirements
- Node.js
- MongoDB (लोकल या क्लाउड)

### 1.2. Setup
1. `backend/` फोल्डर में जाएं:
   ```bash
   cd backend
   ```
2. डिपेंडेंसी इंस्टॉल करें:
   ```bash
   npm install
   ```
3. `.env` फाइल बनाएं और इसमें MongoDB URI और SECRET_KEY डालें:
   ```env
   MONGO_URI=mongodb://localhost:27017/dbs
   SECRET_KEY=your_secret_key
   ```
4. सर्वर चलाएं:
   ```bash
   node index.js
   ```
   या
   ```bash
   npm start
   ```

### 1.3. Backend Structure
- `index.js` — Main server file
- `models/` — Mongoose schemas (User, Contact)
- `routes/` — API routes (`/api/login`, `/api/contact`)

### 1.4. API Endpoints
- **POST `/api/login`** — लॉगिन (username, password)
- **POST `/api/contact`** — Contact form submit (name, email, message)

---

## 2. Frontend (React + Vite)

### 2.1. Requirements
- Node.js

### 2.2. Setup
1. `my-react-app/` फोल्डर में जाएं:
   ```bash
   cd my-react-app
   ```
2. डिपेंडेंसी इंस्टॉल करें:
   ```bash
   npm install
   ```
3. React dev server चलाएं:
   ```bash
   npm run dev
   ```

### 2.3. Frontend Structure
- `src/Pages/Login.jsx` — Login form (JWT token localStorage में सेव करता है)
- `src/Pages/Contact.jsx` — Contact form (backend को डेटा भेजता है)
- `src/Pages/Home.jsx`, `src/Pages/About.jsx` — Static pages
- `src/App.jsx` — Routing और authentication logic

---

## 3. Typical Flow
1. User सबसे पहले Login करता है (`/api/login`)
2. Login success पर JWT token localStorage में सेव होता है
3. Authenticated user को Home, About, Contact pages दिखते हैं
4. Contact form भरकर `/api/contact` पर डेटा जाता है

---

## 4. Notes
- Backend और frontend दोनों अलग-अलग टर्मिनल में चलाएं
- Default backend port: **5000**
- React dev server port: **5173** (या जो भी Vite का default हो)
- API URLs में `http://localhost:5000` का इस्तेमाल करें

---

## 5. Credits
- Backend: Express, Mongoose, JWT
- Frontend: React, Vite, Axios, React Router

---

## 6. Issues
अगर कोई दिक्कत आए तो पहले dependencies और .env फाइल चेक करें।

---

## 7. Author
- Anup Singh
