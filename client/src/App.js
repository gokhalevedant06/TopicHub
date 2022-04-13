import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Sidebar from "./components/Sidebar";
import StudentDashboard from "./pages/StudentDashboard";
import Trial from "./pages/Trial";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authUser } from "../src/Redux/userSlice";


function App() {
  // const [token, setToken] = useState(localStorage.getItem("token"));
  // const dispatch = useDispatch();

  // const jwtVerify = async () => {
    
  //   const data = await axios.get("/student/jwtVerify",  { headers: {"Authorization" : token} });
  //   dispatch(authUser({
  //     user:data.data,
  //   }))
  // };


  // useEffect(() => {
  //   setToken(localStorage.getItem("token"))
  //   if (token) jwtVerify();
  // }, []);

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/teacher/Signup" element={<Signup />} />
        <Route path="/teacher/Login" element={<Login />} />
        <Route path="/student/Signup" element={<Signup />} />
        <Route path="/student/Login" element={<Login />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/trial" element={<Trial />} />
      </Routes>
    </>
  );
}

export default App;
