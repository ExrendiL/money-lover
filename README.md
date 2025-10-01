# Money Lover - MERN Finance Tracker

A simple personal finance app to track expenses, income, budgets, and visualize data.

## Features
- User authentication (register/login with JWT)
- Add/edit/delete transactions (income/expenses with categories)
- Budget setting and tracking
- Basic dashboard with stats

## Tech Stack
- Backend: Node.js, Express, Mongoose (MongoDB)
- Frontend: React (Vite)
- Auth: JWT
- Other: ESLint, Prettier

## Setup

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas URI)

### Backend
```bash
cd backend
npm install
cp .env.example .env  # Add your MONGO_URI and JWT_SECRET
npm start