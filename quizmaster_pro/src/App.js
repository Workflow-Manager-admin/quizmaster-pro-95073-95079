import React from 'react';
import './App.css';
import QuizContainer from './components/QuizContainer/QuizContainer';
import { QuizProvider } from './contexts/QuizContext';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">Q</span> QuizMaster Pro
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <QuizProvider>
            <QuizContainer />
          </QuizProvider>
        </div>
      </main>
    </div>
  );
}

export default App;