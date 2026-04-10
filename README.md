# AuthCloud Project

This project is a full-stack application that includes a Node.js/Express backend and a React frontend (with Vite). It features user login (with JWT) and a contact form.

---


## 1. Backend (Node.js + Express + MongoDB)

### 1.1. Requirements
- Node.js
- MongoDB (local or cloud)

### 1.2. Setup
1. Go to the `backend/` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your MongoDB URI and SECRET_KEY:
   ```env
   MONGO_URI=mongodb://localhost:27017/dbs
   SECRET_KEY=your_secret_key
   ```
4. Start the server:
   ```bash
   node index.js
   ```
   or
   ```bash
   npm start
   ```


### 1.3. Backend Structure
- `index.js` — Main server file
- `models/` — Mongoose schemas (User, Contact)
- `routes/` — API routes (`/api/login`, `/api/contact`)

### 1.4. API Endpoints
- **POST `/api/login`** — Login (username, password)
- **POST `/api/contact`** — Contact form submit (name, email, message)

---


## 2. Frontend (React + Vite)

### 2.1. Requirements
- Node.js

### 2.2. Setup
1. Go to the `my-react-app/` folder:
   ```bash
   cd my-react-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React dev server:
   ```bash
   npm run dev
   ```

### 2.3. Frontend Structure
- `src/Pages/Login.jsx` — Login form (saves JWT token in localStorage)
- `src/Pages/Contact.jsx` — Contact form (sends data to backend)
- `src/Pages/Home.jsx`, `src/Pages/About.jsx` — Static pages
- `src/App.jsx` — Routing and authentication logic

---


## 3. Typical Flow
1. User first logs in (`/api/login`)
2. On login success, JWT token is saved in localStorage
3. Authenticated user can access Home, About, Contact pages
4. Contact form data is submitted to `/api/contact`

---


## 4. Notes
- Run backend and frontend in separate terminals
- Default backend port: **5000**
- React dev server port: **5173** (or whatever Vite's default is)
- Use `http://localhost:5000` in API URLs

---

## 5. Credits
- Backend: Express, Mongoose, JWT
- Frontend: React, Vite, Axios, React Router

---


## 6. Issues
If you face any issues, first check dependencies and the .env file.

---

## 7. Author
- Anup Singh
