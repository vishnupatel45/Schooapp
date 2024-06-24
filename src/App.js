import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/jquery/dist/jquery.js'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './components/home/home';
import { Aboutpage } from './components/About/about';
import { Admissionpage } from './components/Admissions/admission';
import { Gallerypage } from './components/Gallery/gallery';
import { Eventpage } from './components/Events/events';
import { Assignnmentpage } from './components/assignnment/assignnment';
import { Teacherpage } from './components/Teacher/teacher';
import { Studentpage } from './components/Student/student.jsx';
import { HomeworkPage } from './components/Homework/homework.jsx';
import { Achivementpage } from './components/Achivement/achivement.jsx';
import { Attendancepage } from './components/Attendance/attendance.jsx';
import { Stprofile } from './components/student_profile/profile.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path='/home' element={<Homepage/>} />
          <Route path='/About' element={<Aboutpage/>} />
          <Route path='/Admission' element={<Admissionpage/>} />
          <Route path='/Gallery' element={<Gallerypage/>} />
          <Route path='/Events' element={<Eventpage/>} /> 
          <Route path='/Assignment/:class/:section' element={<Assignnmentpage/>} />
          <Route path='/' element={<Teacherpage/>} />
          <Route path='/Homework/:class/:section' element={<HomeworkPage/>} />
          <Route path='/Achievement/:class/:section/:RoolNumber' element={<Achivementpage/>} />
          <Route path='/Student/:class/:section/:RoolNumber' element={<Studentpage/>} />
          {/* <Route path='/st' element={<Stprofile/>} /> */}
          <Route path='/GetAttendance/:class/:section/:RoolNumber' element={<Attendancepage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
