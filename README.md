# VR Automation

## Tech Stack Used

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- CoinGecko API
- node-cron

### Frontend
- React.js (with Vite)
- Axios
- CSS

---

## Setup and Installation Steps

### Prerequisites
- Node.js and npm installed
- MongoDB instance (local or cloud)

### Backend Setup
1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure your MongoDB connection in `src/config/db.js` if needed.
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```

---

## How the Cron Job Works
- The backend uses `node-cron` to schedule a job defined in `src/jobs/historyCron.js`.
- This cron job runs at regular intervals (e.g., every minute/hour as configured) to fetch the latest cryptocurrency data from the CoinGecko API.
- The fetched data is stored in the MongoDB database, updating the current data and appending to the historical data collection.
- This ensures the application always has up-to-date and historical crypto price data for analysis and display.

---

## Links to Deployed Applications

- **Backend API:** [https://vr-automation.onrender.com/api/coins](https://vr-automation.onrender.com/api/coins)
- **Frontend App:** [https://vr-automation.vercel.app/](https://vr-automation.vercel.app/)
