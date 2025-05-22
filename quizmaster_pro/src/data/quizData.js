/**
 * Sample quiz data for QuizMaster Pro
 * Each quiz contains an ID, title, description, and questions array
 * Each question has a question text, array of options, and correct answer index
 */

const quizData = [
  {
    id: 1,
    title: "General Knowledge Quiz",
    description: "Test your knowledge with these general trivia questions.",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswerIndex: 2
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        correctAnswerIndex: 1
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctAnswerIndex: 2
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswerIndex: 0
      },
      {
        question: "What is the largest mammal on Earth?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: 2,
    title: "Science Quiz",
    description: "Challenge yourself with these science questions.",
    questions: [
      {
        question: "What is the chemical formula for water?",
        options: ["CO2", "H2O", "NaCl", "O2"],
        correctAnswerIndex: 1
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Titanium"],
        correctAnswerIndex: 2
      },
      {
        question: "Which of these is NOT a type of galaxy?",
        options: ["Spiral", "Elliptical", "Irregular", "Rectangular"],
        correctAnswerIndex: 3
      },
      {
        question: "What is the smallest unit of matter?",
        options: ["Atom", "Electron", "Quark", "Molecule"],
        correctAnswerIndex: 2
      },
      {
        question: "What is the process by which plants make food?",
        options: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
        correctAnswerIndex: 0
      }
    ]
  }
];

export default quizData;
