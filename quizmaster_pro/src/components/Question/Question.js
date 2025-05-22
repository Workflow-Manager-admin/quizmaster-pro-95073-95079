import React from 'react';
import { useQuiz } from '../../contexts/QuizContext';
import './Question.css';

// PUBLIC_INTERFACE
/**
 * Question component displays the current question and options
 * @returns {JSX.Element} Question component
 */
function Question() {
  const { 
    currentQuestion, 
    userAnswers, 
    currentQuestionIndex, 
    answerQuestion 
  } = useQuiz();

  if (!currentQuestion) return <p>Loading question...</p>;

  const handleOptionSelect = (optionIndex) => {
    answerQuestion(optionIndex);
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{currentQuestion.question}</h2>
      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
