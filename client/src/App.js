import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Sidebar from "./components/Sidebar";
import StudentDashboard from "./pages/StudentDashboard";
import { isLoggedIn } from "./Redux/userSlice";
import { useSelector } from "react-redux";
import StudentProfile from "./pages/StudentProfile";

function App() {
  const user = useSelector(isLoggedIn);
  return (
    <>
      <Sidebar />
      <Routes>
        {user.loggedIn ? (
          <>
            <Route path="/studentdashboard" element={<StudentDashboard />} />
            <Route path="/student/profile" element={<StudentProfile />} />
          </>
        ) : (
          <>
            {" "}
            <Route path="/" element={<Landing />} />
            <Route path="/teacher/Signup" element={<Signup />} />
            <Route path="/teacher/Login" element={<Login />} />
            <Route path="/student/Signup" element={<Signup />} />
            <Route path="/student/Login" element={<Login />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
