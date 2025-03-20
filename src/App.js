import React, { useState } from 'react';
import './App.css';
import Story from './Story';
import Questions from './Questions';
import Results from './Results';
import CoverPage from './CoverPage'; // Import CoverPage

function App() {
  const [showCover, setShowCover] = useState(true); // Add showCover state
  const [showStory, setShowStory] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleStartQuiz = () => { // New function to start from cover
    setShowCover(false);
    setShowStory(true);
  };

  const handleStoryNext = () => {
    setShowStory(false);
    setShowQuestions(true);
  };

  const handleQuestionsResults = (answers) => {
    setUserAnswers(answers);
    setShowQuestions(false);
    setShowResults(true);
  };

  return (
    <div className="App">
      {showCover && <CoverPage onStart={handleStartQuiz} />} {/* Show CoverPage */}
      {showStory && <Story onNext={handleStoryNext} />}
      {showQuestions && <Questions onResults={handleQuestionsResults} />}
      {showResults && <Results answers={userAnswers} />}
    </div>
  );
}

export default App;