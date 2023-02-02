import React from "react";
import "./assets/css/animation.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Questions from "./features/questions/Questions";
import Login from "./features/auth/Login";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Result from "./features/result/Result";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<StartQuiz />}></Route> */}
          <Route path="/" element={<Login />}></Route>
          <Route path="/landing" element={<Questions />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
