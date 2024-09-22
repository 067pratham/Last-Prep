import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Results.css";
const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score = 0, totalQuestions = 0 } = location.state || {}; // Default values

  return (
    <div className='result-display'>
      <h1 className='results-title'>Quiz Result</h1>
            <p className='score-final'>Your Score: {score} / {totalQuestions}</p>
          <button  onClick={() => navigate('/')}>Go to Homepage</button>
         </div>
  );
};

export default Results;
