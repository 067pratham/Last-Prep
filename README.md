# LastPrep

LastPrep is a MERN stack quiz application designed for last-minute preparation. It provides a placement-centric quiz experience students with subjects like Operating Systems, Database Management Systems, Computer Networks, Data Structures and Algorithms, and more.

## Features

- **Randomized Quiz**: 10 randomized questions per subject with a 15-second timer per question.
- **Score Tracking**: Displays score and provides feedback after quiz completion.
- **Subject-specific Quizzes**: 8 subjects available, and the questions are fetched only from the selected subject.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS 

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- MongoDB installed or use MongoDB Atlas for cloud hosting

### Clone the Repository

```bash
git clone https://github.com/yourusername/lastprep.git
```
Backend Setup
Navigate to the backend folder:

```bash
cd backend
```
Install dependencies:

```bash
npm install
```
Set up environment variables: Create a .env file in the backend folder and add your MongoDB connection string:

```makefile
MONGO_URI=your-mongo-db-connection-string
PORT=5000
```
Start the server:

```bash
npm run dev
```
Frontend Setup
Navigate to the frontend folder:

```bash
cd ../frontend
```
Install dependencies:

```bash
npm install
```
Start the development server:

```bash
npm start
```
The app should now be running at http://localhost:3000.

├── backend/
│   ├── models/
│   │   └── Question.js      # Mongoose schema for questions
│   ├── routes/
│   │   └── questions.js     # API routes for fetching questions
│   └── server.js            # Express server setup
│
├── frontend/
│   ├── public/
│   │   └── index.html       # Entry point for React app
│   ├── src/
│   │   ├── components/      # React components (Quiz, Results, etc.)
│   │   ├── App.js           # Main React component
│   │   └── index.js         # Main entry point for React
│
└── README.md                # Project documentation
Usage
Select a subject from the homepage.
Answer 10 questions within the time limit (15 seconds per question).
View your score at the end and navigate back to the homepage to try another quiz.


Contributions are welcome! Please fork this repository and submit a pull request with your changes.