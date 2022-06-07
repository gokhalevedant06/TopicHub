import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Sidebar from "./components/Sidebar";
import { isLoggedIn } from "./Redux/userSlice";
import { useSelector } from "react-redux";
import StudentProfile from "./pages/StudentProfile";
import StudentClassSection from './pages/StudentClassSection'
import StudentGroupSection from './pages/StudentGroupSection'
import StudentSubjectSection from './pages/StudentSubjectSection'
import TeacherProfile from "./pages/TeacherProfile";
import TeacherClassSection from "./pages/TeacherClassSection";
import CreateClass from "./pages/CreateClass";
import TeacherSubjectSection from './pages/TeacherSubjectSection'
import JoinClass from "./pages/JoinClass";
import JoinGroup from "./pages/JoinGroup";
// import createAssessment from './pages/createAssessment';
import {Box} from '@chakra-ui/react'
function App() {
  const user = useSelector(isLoggedIn);
  return (
    <>
      <Sidebar />
      <Routes>
        {user.loggedIn ? (
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/student/profile" element={<StudentProfile />} />
            <Route path="/student/classSection" element={<StudentClassSection />} />
            <Route path="/student/groupSection" element={<StudentGroupSection />} />
            <Route path="/student/joinClass" element={<JoinClass />} />
            <Route path="/student/joinGroup" element={<JoinGroup />} />
            <Route path="/student/subjectSection" element={<StudentSubjectSection />} />
            <Route path="/teacher/profile" element={<TeacherProfile />} />
            <Route path="/teacher/classSection" element={<TeacherClassSection />} />
            <Route path="/teacher/createClass" element={<CreateClass />} />
            <Route path="/teacher/subjectSection" element={<TeacherSubjectSection />} />
            {/* <Route path = "/teacher/createAssessment" element={<createAssessment/>} /> */}
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
