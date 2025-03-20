import React from 'react';
import coverImage from './images/cover.png'; 

const CoverPage = ({ onStart }) => {
  return (
    <div>
      <h1>Magical Cat Quiz</h1>
      <p>Find out which magical cat is your perfect match!</p>
      <img src={coverImage} alt="Magical Cat Quiz Cover" style={{ maxWidth: '300px', display: 'block', margin: '20px auto' }} />
      <button onClick={onStart}>Start</button>
    </div>
  );
};

export default CoverPage;