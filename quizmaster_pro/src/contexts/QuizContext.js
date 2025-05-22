import React, { createContext, useState, useContext } from 'react';
import quizData from '../data/quizData';

// Create context
const QuizContext = createContext();

// PUBLIC_INTERFACE
/**
 * QuizProvider component manages global state for the quiz application
 * @param {Object} props - Component props including children
 * @returns {JSX.Element} Provider component with quiz state
 */
export function QuizProvider({ children }) {
  // State for selected quiz
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  
  // Current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // User's answers array (index matches question index, value is the selected option index)
  const [userAnswers, setUserAnswers] = useState([]);
  
  // Quiz completion status
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  
  // Available quizzes
  const [availableQuizzes, setAvailableQuizzes] = useState(quizData);

  /**
   * Start a new quiz
   * @param {number} quizId - ID of the quiz to start
   */
  const startQuiz = (quizId) => {
    const quiz = availableQuizzes.find(q => q.id === quizId);
    if (quiz) {
      setSelectedQuiz(quiz);
      setCurrentQuestionIndex(0);
      setUserAnswers(Array(quiz.questions.length).fill(null));
      setIsQuizCompleted(false);
    }
  };

  /**
   * Record user's answer to current question
   * @param {number} answerIndex - Index of the selected answer
   */
  const answerQuestion = (answerIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };

  /**
   * Move to the next question
   */
  const nextQuestion = () => {
    if (selectedQuiz && currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // If it's the last question, mark the quiz as completed
      setIsQuizCompleted(true);
    }
  };

  /**
   * Move to the previous question
   */
  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  /**
   * Calculate the score based on user answers
   * @returns {Object} Object containing score and total
   */
  const calculateScore = () => {
    if (!selectedQuiz) return { score: 0, total: 0 };
    
    let score = 0;
    selectedQuiz.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswerIndex) {
        score += 1;
      }
    });
    
    return {
      score,
      total: selectedQuiz.questions.length
    };
  };

  /**
   * Reset the quiz state to select a different quiz
   */
  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsQuizCompleted(false);
  };

  // Value object to be provided to consumers
  const value = {
    availableQuizzes,
    selectedQuiz,
    currentQuestionIndex,
    userAnswers,
    isQuizCompleted,
    startQuiz,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    calculateScore,
    resetQuiz,
    currentQuestion: selectedQuiz ? 
      selectedQuiz.questions[currentQuestionIndex] : null
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
}

// PUBLIC_INTERFACE
/**
 * Custom hook for accessing quiz context
 * @returns {Object} Quiz context value
 */
export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
