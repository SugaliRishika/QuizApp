import React from "react";
import { useLocation } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { TopicQuiz } from "./Components/TopicQuiz.jsx";
import ThemeToggle from "./Components/ThemeToggle";
import { Footer } from "./Components/Footer/Footer.jsx";
import { NewQuizPage } from "./Pages/NewQuizPage.jsx";
import { Login } from "./Components/auth/Login.jsx";
import { Register } from "./Components/auth/Register.jsx";
import { Route, Routes } from "react-router-dom";
import { Admin } from "./Components/Admin/Admin.jsx";
import { QuizForm } from "./Components/Admin/QuizForm.jsx";
import { ProfileMain } from "./Components/Profile/ProfileMain.jsx";
import { Quizes } from "./Components/QuizNew/Quizes.jsx";
import { Navbarnew } from "./Components/Navbar/Navbarnew.jsx";
import { Resultshow } from "./Pages/Resultshow.jsx";
import { ShowAllAnswers } from "./Pages/ShowAllAnswers.jsx";


function App() {
  const location = useLocation(); // Hook to get the current route

  return (
    <div className="App">
       {/* Navbar and Theme Toggle */}
       <Navbarnew />
      <ThemeToggle /> {/* Place the ThemeToggle here for global dark mode support */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<TopicQuiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/HTML" element={<NewQuizPage />} />
        <Route path="/CSS" element={<NewQuizPage />} />
        <Route path="/Javascript" element={<NewQuizPage />} />
        <Route path="/React" element={<NewQuizPage />} />
        <Route path="/quiz/:id" element={<Quizes />} />
        <Route path="/Mongodb" element={<NewQuizPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addquiz" element={<QuizForm />} />
        <Route path="/profile" element={<ProfileMain />} />
        <Route path="/result" element={<Resultshow />} />
        <Route path="/showallanswer" element={<ShowAllAnswers />} />
      </Routes>

      {/* Render Footer conditionally */}
      {location.pathname !== "/login" && <Footer />}
    </div>
  );
}

export default App;
