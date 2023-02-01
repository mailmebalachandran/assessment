import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import StartQuiz from './features/startquiz/StartQuiz';
import Questions from './features/questions/Questions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartQuiz />}></Route>
        <Route path="/startquiz" element={<StartQuiz />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
