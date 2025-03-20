import React from 'react';
import whiteCatImage from './images/white-cat.png';
import blackCatImage from './images/black-cat.png';
import orangeCatImage from './images/orange-cat.png';
import tabbyCatImage from './images/tabby-cat.png';

const Results = ({ answers }) => {
  const countAnswers = (answerType) => answers.filter((a) => a === answerType).length;

  const countA = countAnswers('A');
  const countB = countAnswers('B');
  const countC = countAnswers('C');
  const countD = countAnswers('D');

  let result;
  if (countA >= countB && countA >= countC && countA >= countD) {
    result = 'White Cat';
  } else if (countB >= countA && countB >= countC && countB >= countD) {
    result = 'Black Cat';
  } else if (countC >= countA && countC >= countB && countC >= countD) {
    result = 'Orange Cat';
  } else if (countD >= countA && countD >= countB && countD >= countC) {
    result = 'Tabby Cat';
  }

  let resultDescription;
  let catImage;
  if (result === 'White Cat') {
    resultDescription = "You love the calm life. The White Cat will join you in endless naps and peaceful vibes.";
    catImage = whiteCatImage;
  } else if (result === 'Black Cat') {
    resultDescription = "You’re mysterious, and you love to explore the unknown. The Black Cat is perfect for you.";
    catImage = blackCatImage;
  } else if (result === 'Orange Cat') {
    resultDescription = "Charming and full of personality, the Orange Cat will keep you cozy and entertained.";
    catImage = orangeCatImage;
  } else if (result === 'Tabby Cat') {
    resultDescription = "You’re playful and always up for an adventure. The Tabby Cat is your perfect match for fun times.";
    catImage = tabbyCatImage;
  }

  return (
    <div>
      <h2>Your Cat Match: {result}</h2>
      <img src={catImage} alt={result} style={{ maxWidth: '200px', display: 'block', margin: '10px auto' }} />
      <p>{resultDescription}</p>
    </div>
  );
};

export default Results;