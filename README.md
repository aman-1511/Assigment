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

## Demo Images

- Home Page
![Image](https://github.com/user-attachments/assets/87d5f203-4cc0-4590-a54b-182b463c4b20)
- From Page
![Image](https://github.com/user-attachments/assets/2b0b2b71-01ef-4735-a5ef-f9fd91146eec)  
- Message Generator
![Image](https://github.com/user-attachments/assets/0b7f01a4-de48-4c96-8b56-b815c67532bb)  

### Campaign APIs
- `GET /campaigns` - Fetch all campaigns (excluding DELETED)
- `GET /campaigns/:id` - Fetch a single campaign by ID
- `POST /campaigns` - Create a new campaign
- `PUT /campaigns/:id` - Update campaign details
- `DELETE /campaigns/:id` - Soft delete a campaign

### LinkedIn Message API
- `POST /personalized-message` - Generate personalized outreach message 
