import './App.css';
import {Route, Routes} from 'react-router-dom'
import Landing from './pages/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Sidebar from './components/Sidebar';
import StudentDashboard from './pages/StudentDashboard';
import Trial from './pages/Trial';
function App() {
  return (
    <>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Landing/>} /> 
      <Route path='/teacher/Signup' element={<Signup/>} /> 
      <Route path='/teacher/Login' element={<Login/>} /> 
      <Route path='/student/Signup' element={<Signup/>} /> 
      <Route path='/student/Login' element={<Login/>} /> 
      <Route path='/studentdashboard' element={<StudentDashboard/>} />
      <Route path='/trial' element={<Trial/>} /> 
    </Routes>
    </>
  );
}

export default App;
