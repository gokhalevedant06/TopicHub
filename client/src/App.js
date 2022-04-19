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
import StudentClassSection from './pages/StudentClassSection'
import StudentGroupSection from './pages/StudentGroupSection'
import StudentSubjectSection from './pages/StudentSubjectSection'
import TeacherProfile from "./pages/TeacherProfile";
import TeacherManageClasses from "./pages/TeacherManageStudents";

function App() {
  const user = useSelector(isLoggedIn);
  return (
    <>
      <Sidebar />
      <Routes>
        {user.loggedIn ? (
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/studentDashboard" element={<StudentDashboard />} />
            <Route path="/student/dashboard" element={<StudentProfile />} />
            <Route path="/student/classSection" element={<StudentClassSection />} />
            <Route path="/student/groupSection" element={<StudentGroupSection />} />
            <Route path="/student/subjectSection" element={<StudentSubjectSection />} />
            <Route path="/teacher/dashboard" element = {<TeacherProfile />} />
            <Route path="/teacher/manageClasses" element = {<TeacherManageClasses/>} />
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
