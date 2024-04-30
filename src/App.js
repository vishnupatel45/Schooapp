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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Homepage/>} />
          <Route path='/About' element={<Aboutpage/>} />
          <Route path='/Admission' element={<Admissionpage/>} />
          <Route path='/' element={<Gallerypage/>} />
          <Route path='/Event' element={<Eventpage/>} />
          <Route path='/Assignnment' element={<Assignnmentpage/>} />
          <Route path='/Teacher' element={<Teacherpage/>} />
          <Route path='/Homework/:class/:section' element={<HomeworkPage/>} />
          <Route path='/Achivement/:class/:section/:RoolNumber' element={<Achivementpage/>} />
          <Route path='/Student' element={<Studentpage/>} />
          <Route path='/Attendance' element={<Attendancepage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
