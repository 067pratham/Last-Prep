import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "./Quiz.css";
const Quiz = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const [feedback, setFeedback] = useState('');
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get(`http://localhost:5000/api/questions/${subject}`);
      setQuestions(response.data);
    };
    fetchQuestions();
  }, [subject]);

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
    }
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleNextQuestion = () => {
    setTimer(15);
    setFeedback('');
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Use questions.length for totalQuestions
      navigate('/results', { state: { score, totalQuestions: questions.length } });
    }
  };

  const handleAnswer = (answer) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (answer === correctAnswer) {
      setScore((prev) => prev + 1);
      setFeedback('Correct! Good job!');
    } else {
      setFeedback(`Wrong answer! The correct answer was: ${correctAnswer}.`);
    }
    setTimeout(() => {
      handleNextQuestion();
    }, 1000);
  };

  return (
    <div>
      {questions.length > 0 && (
        <div>
          <h2 className='quiz-title'>Subject: {subject}</h2>
          <div className='time-score'>
            <p className='score'>Score: {score}</p>
            <p className='timer'>Time remaining: {timer} seconds</p>
          </div>
          
          <div>
            <div className='question'>{questions[currentQuestion].questionText}</div>
            {questions[currentQuestion].options.map((option, index) => (
              <div className='options' key={index}> 
                  <button className='optn-btn'  onClick={() => handleAnswer(option)}>
                  {option}
                  </button>
              </div>
              
            ))}
          </div>
          <p className='feedback'>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
