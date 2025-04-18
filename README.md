# Campaign Management System

A full-stack application for managing campaigns and generating personalized LinkedIn outreach messages.

## Features

- Create, Read, Update, and Delete campaigns
- Toggle campaign status between active and inactive
- Generate personalized LinkedIn outreach messages using AI
- Simple and responsive UI

## Tech Stack

### Backend
- Node.js
- Express
- TypeScript
- MongoDB
- Gemini AI API

### Frontend
- React
- TypeScript
- React Router
- Axios

## Setup Instructions

### Backend

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5001
   MONGODB_URI=your_mongodb_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. Start the development server:
   ```
   npm run dev
   ```

### Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

### Campaign APIs
- `GET /campaigns` - Fetch all campaigns (excluding DELETED)
- `GET /campaigns/:id` - Fetch a single campaign by ID
- `POST /campaigns` - Create a new campaign
- `PUT /campaigns/:id` - Update campaign details
- `DELETE /campaigns/:id` - Soft delete a campaign

### LinkedIn Message API
- `POST /personalized-message` - Generate personalized outreach message 