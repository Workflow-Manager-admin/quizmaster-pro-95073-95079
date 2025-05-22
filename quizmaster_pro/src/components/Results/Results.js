import React from 'react';
import { useQuiz } from '../../contexts/QuizContext';
import './Results.css';

// PUBLIC_INTERFACE
/**
 * Results component displays the quiz results and allows reviewing answers
 * @returns {JSX.Element} Results component
 */
function Results() {
  const { 
    selectedQuiz, 
    userAnswers, 
    calculateScore, 
    resetQuiz 
  } = useQuiz();

  const { score, total } = calculateScore();
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="results-container">
      <h2 className="results-title">Quiz Results</h2>
      
      <div className="score-summary">
        <div className="score-circle">
          <span className="score-percentage">{percentage}%</span>
        </div>
        <p className="score-text">
          You scored <span className="highlight">{score}</span> out of <span className="highlight">{total}</span>
        </p>
      </div>

      <div className="review-section">
        <h3>Review Your Answers</h3>
        {selectedQuiz.questions.map((question, index) => (
          <div 
            key={index} 
            className={`review-item ${userAnswers[index] === question.correctAnswerIndex ? 'correct' : 'incorrect'}`}
          >
            <p className="review-question">{index + 1}. {question.question}</p>
            <div className="review-answers">
              <p>
                <strong>Your answer:</strong> {question.options[userAnswers[index]]}
                {userAnswers[index] !== question.correctAnswerIndex && (
                  <span className="wrong-indicator">✘</span>
                )}
                {userAnswers[index] === question.correctAnswerIndex && (
                  <span className="correct-indicator">✓</span>
                )}
              </p>
              {userAnswers[index] !== question.correctAnswerIndex && (
                <p className="correct-answer">
                  <strong>Correct answer:</strong> {question.options[question.correctAnswerIndex]}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="action-buttons">
        <button className="btn" onClick={resetQuiz}>
          Try Another Quiz
        </button>
      </div>
    </div>
  );
}

export default Results;
