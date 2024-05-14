
import { ResponsiveContainer, LineChart, Line,XAxis, YAxis,Tooltip, CartesianGrid, Legend,BarChart,Bar } from "recharts"
import './student.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

export function Studentpage(){

    const [profiles,setprofile] = useState([]);
    const [marks, setmarks] = useState([])
    const Rnum=31
    // const [clsscookie,setclasscookie,removeclsscookie] = useCookies('studentclass');   setall cookie form login (or) sign page
    // const [namecookie,setnamecookie,removenamecookie] = useCookies('studentname');
    // const [sectioncookie,setsectioncookie,removesectioncookie] = useCookies('studentsection')
    
    const fetchProfile = async () =>{
         await axios.get(`http://127.0.0.1:7000/studentprofile/10/B/31`)
        .then(res => setprofile(res.data));
    }

    const fetchMarks = () =>{
        axios.get('http://127.0.0.1:7000/studentMarks/10/B/31')
        .then(res => setmarks(res.data) );
    }

    useEffect(()=>{
        fetchProfile()
        fetchMarks()
    },[])

    return(
        <div className="studentbody">
            <div>
                {
                    profiles.map(profile => 
                    <div key={profile.RollNumber}>
                        <div className="profilesection"> 
                                    <h2 className="text-center fw-b fw-bold bg-warning rounded-4 p-1">Profile</h2>
                            <div className="text-center pt-4">
                                <img src="/images/admission-icon.png" style={{height:'100px',width:'100px',borderRadius:'50%'}}/>
                                <div>
                                  <b>{profile.Name}</b>
                                </div>
                            </div>
                            
                        </div>
                        <div className="bg-light rounded-3 m-3 p-2 row">
                                <dl className="col-6">
                                    <dt>Date Of Birth</dt>
                                    <dd>{profile.DateofBirth}</dd>
                                    <dt>Class/Section</dt>
                                    <dd>{profile.Class}/{profile.Section}</dd>
                                    <dt>Roll Number</dt>
                                    <dd>{profile.RollNumber}</dd>
                                    <dt>Age</dt>
                                    <dd>{profile.Age}</dd>
                                    <dt>Phone Number</dt>
                                    <dd>{profile.Phone}</dd>
                                </dl>
                                <dl className="col-6 text-center pt-1" id="studentIcon" >
                                    <Link to='/Homework/10/B' className=" btn btn-outline-danger p-2 mb-3 fw-bold" title="Homework">
                                        Home wrok 
                                    </Link>
                                    <Link to='/GetAttendance/10/B/31' className=" btn btn-outline-danger p-2 mb-3 fw-bold" title="Attendence">
                                        Attendence
                                    </Link>
                                    <Link to='/Assignnment/10/B' className=" btn btn-outline-danger p-2 mb-3 fw-bold" title="Assignnment">
                                        Assignnmetn
                                    </Link>
                                    <Link to='/Achivement/10/B/31' className=" btn btn-outline-danger p-2 mb-3 fw-bold" title="Homework">
                                        Achivements
                                    </Link>
                                    <Link to='/Event' className=" btn btn-outline-danger px-4 py-2mb-3 fw-bold" title="Homework">
                                        Events
                                    </Link>
                                </dl>
                        </div>
                    </div>)
                }
            </div>
            <div className="chartsection">
                <div className="text-center fw-medium fs-2">Half Yearly Exam Result</div>
                <ResponsiveContainer width='100%' aspect={1}>
                    <LineChart data={marks} width={100} height={300} className="pe-3 pt-3 rounded-3" style={{backgroundColor:'#D6DAC8'}} >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='Subject' interval={'preserveStartEnd'} />
                        <YAxis/>
                        <Legend />
                        <Line type='monotone' dataKey="Marks" fill="#51829B"/>
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <hr />
                <ResponsiveContainer width='100%' aspect={1} >
                    <BarChart width={100} height={300} data={marks} className="pe-3 pt-3" style={{backgroundColor:'#D6DAC8'}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Subject" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Marks" fill="#EFBC9B" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}