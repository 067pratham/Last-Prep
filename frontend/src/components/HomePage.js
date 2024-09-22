// frontend/src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
const subjects = [
  'Operating Systems',
  'Database Management Systems',
  'Computer Networks',
  'Data Structures and Algorithms',
  'Design and Analysis of Algorithms',
  'C++ Programming',
  'C Programming',
  'Object-Oriented Programming'
];

const HomePage = () => {
  return (
    <div>
      <h1 className='title'>LastPrep</h1>
      <div className='list'>
      <ul>
        {subjects.map((subject, index) => (
          <div key={index} className='list-item'>
            <li >
            <Link to={`/questions/${subject}`}>{subject}</Link>
            </li>
          </div>
          
        ))}
      </ul>
      </div>
      
    </div>
  );
};

export default HomePage;
