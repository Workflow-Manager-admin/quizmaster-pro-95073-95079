import React from 'react';
import { useQuiz } from '../../contexts/QuizContext';
import Question from '../Question/Question';
import Results from '../Results/Results';
import './QuizContainer.css';

// PUBLIC_INTERFACE
/**
 * QuizContainer is the main component that manages the quiz flow
 * @returns {JSX.Element} QuizContainer component
 */
function QuizContainer() {
  const { 
    selectedQuiz, 
    availableQuizzes,
    currentQuestionIndex,
    userAnswers,
    isQuizCompleted,
    startQuiz,
    nextQuestion,
    previousQuestion
  } = useQuiz();

  // Quiz selection screen
  if (!selectedQuiz) {
    return (
      <div className="quiz-selection">
        <h2 className="selection-title">Choose a Quiz</h2>
        <div className="quizzes-list">
          {availableQuizzes.map((quiz) => (
            <div className="quiz-card" key={quiz.id}>
              <h3>{quiz.title}</h3>
              <p>{quiz.description}</p>
              <p className="question-count">{quiz.questions.length} questions</p>
              <button 
                className="btn" 
                onClick={() => startQuiz(quiz.id)}
              >
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Show results if quiz is completed
  if (isQuizCompleted) {
    return <Results />;
  }

  // Show current question
  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>{selectedQuiz.title}</h1>
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${((currentQuestionIndex + 1) / selectedQuiz.questions.length) * 100}%` }}
          ></div>
        </div>
        <div className="question-counter">
          Question {currentQuestionIndex + 1} of {selectedQuiz.questions.length}
        </div>
      </div>

      <div className="quiz-content">
        <Question />
      </div>

      <div className="navigation-buttons">
        <button 
          className="btn btn-secondary" 
          onClick={previousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        
        <button 
          className="btn" 
          onClick={nextQuestion}
          disabled={userAnswers[currentQuestionIndex] === null}
        >
          {currentQuestionIndex === selectedQuiz.questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default QuizContainer;
