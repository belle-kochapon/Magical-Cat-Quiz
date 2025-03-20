import React, { useState } from 'react';

const Questions = ({ onNext, onResults }) => { 
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]); // Track user's answers

  const questions = [
    // Question 1
    {
      questionText: "You sit down in a comfy chair and spot a cat napping nearby. How do you feel?",
      answerOptions: [
        { answerText: "Perfectly peaceful.", value: "A" },
        { answerText: "I need to get in on that nap!", value: "B" },
        { answerText: "Cozy vibes, let's chill.", value: "C" },
        { answerText: "Hmm, is that cat planning something?", value: "D" },
      ],
    },
    // Question 2
    {
      questionText: "A cat knocks over a vase, and you hear a crash. What’s your reaction?",
      answerOptions: [
        { answerText: '"Uh-oh, that’s bad luck!"', value: "A" },
        { answerText: '"It’s an accident... or is it?"', value: "B" },
        { answerText: '"Oops, better clean that up!"', value: "C" },
        { answerText: '"Is this a plot to break stuff?"', value: "D" },
      ],
    },
    // Question 3
    {
      questionText: "Granny gives you a cup of tea. What’s in it?",
      answerOptions: [
        { answerText: 'Pure relaxation.', value: "A" },
        { answerText: 'Something a bit too spicy!', value: "B" },
        { answerText: 'Sweet, sugary goodness.', value: "C" },
        { answerText: 'Magic tea? I feel... different.', value: "D" },
      ],
    },
    // Question 4
    {
      questionText: "You hear a strange noise from the other room. What do you do?",
      answerOptions: [
        { answerText: "Stay put, it's probably fine.", value: "A" },
        { answerText: "Investigate! I love mysteries.", value: "B" },
        { answerText: "Ignore it. I’m here for the tea.", value: "C" },
        { answerText: 'Shout, "Who’s there?" very casually.', value: "D" },
      ],
    },
    // Question 5
    {
      questionText: "Granny asks you to help feed her cats. How do you feel?",
      answerOptions: [
        { answerText: "Sure, I’m happy to help!", value: "A" },
        { answerText: "Bring on the snacks!", value: "B" },
        { answerText: "I’m a pro at this, no problem.", value: "C" },
        { answerText: "I’ll need a snack for myself first.", value: "D" },
      ],
    },
    // Question 6
    {
      questionText: "It’s nap time. What’s your plan?",
      answerOptions: [
        { answerText: "Immediate nap, no questions asked.", value: "A" },
        { answerText: "I’ll nap... after a snack.", value: "B" },
        { answerText: "Curl up with a cat for extra coziness.", value: "C" },
        { answerText: "I’ll just close my eyes... for a bit.", value: "D" },
      ],
    },
    // Question 7
    {
      questionText: "A cat stares at you for way too long. What do you do?",
      answerOptions: [
        { answerText: "Blink and pretend I’m deep in thought.", value: "A" },
        { answerText: "Stare back. Who blinks first?", value: "B" },
        { answerText: "Look away, that’s awkward.", value: "C" },
        { answerText: "What’s this cat planning?", value: "D" },
      ],
    },
    // Question 8
    {
      questionText: "Granny shows you four paths in the garden. Which one do you take?",
      answerOptions: [
        { answerText: "The peaceful path with flowers and soft grass.", value: "A" },
        { answerText: "The dark path with tall trees and quiet shadows.", value: "B" },
        { answerText: "The colorful path with strange plants and bright colors.", value: "C" },
        { answerText: "The sunny path with a great view of the hills.", value: "D" },
      ],
    },
  ];

  const handleAnswerSelect = (answerValue) => {
    setAnswers([...answers, answerValue]); // Add the selected answer
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onResults(answers); // Pass answers to App.js
    }
  };

  return (
    <div className="question-container">
      <h2 className="question-text">
        {questions[currentQuestion].questionText}
      </h2>
      <div className="answer-grid" key={currentQuestion}> {/* Add a unique key */}
        {questions[currentQuestion].answerOptions.map((answer, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => handleAnswerSelect(answer.value)}
          >
            {answer.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;