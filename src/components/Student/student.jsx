import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, BarChart, Bar } from "recharts";
import './student.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Stprofile } from "../student_profile/profile";

export function Studentpage() {
    const [profiles, setProfile] = useState([]);
    const [marks, setMarks] = useState([]);

    const fetchProfile = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:7000/studentprofile/10/B/31`);
            setProfile(res.data);
        } catch (error) {
            console.error("Error fetching profile", error);
        }
    }

    const fetchMarks = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:7000/studentMarks/10/B/31');
            setMarks(res.data);
        } catch (error) {
            console.error("Error fetching marks", error);
        }
    }

    useEffect(() => {
        fetchProfile();
        fetchMarks();
    }, []);

    return (
        <div className="student-body">
            <Stprofile/>
            <div className="profile-details">
                {profiles.map(profile => (
                    <div key={profile.RollNumber} className="details-section">
                        <dl className="details-list">
                            <dt>Date Of Birth</dt>
                            <dd>{profile.DateofBirth}</dd>
                            <dt>Age</dt>
                            <dd>{profile.Age}</dd>
                            <dt>Phone Number</dt>
                            <dd>{profile.Phone}</dd>
                        </dl>
                        <div className="action-links">
                            <Link to='/Homework/10/B' className="btn btn-outline-danger">Homework</Link>
                            <Link to='/GetAttendance/10/B/31' className="btn btn-outline-danger">Attendance</Link>
                            <Link to='/Assignment/10/B' className="btn btn-outline-danger">Assignment</Link>
                            <Link to='/Achievement/10/B/31' className="btn btn-outline-danger">Achievements</Link>
                            <Link to='/Event' className="btn btn-outline-danger">Events</Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="subject-section">
                <h3>My Subjects</h3>
                <div className="subjects">
                    <div className="subject-card">English</div>
                    <div className="subject-card">Mathematics</div>
                    <div className="subject-card">Physical Education</div>
                    <div className="subject-card">Science</div>
                    <div className="subject-card">History</div>
                    <div className="subject-card">Geography</div>
                </div>
            </div>
            <div className="chart-section">
                <div className="chart-title">Half Yearly Exam Result</div>
                <ResponsiveContainer width='100%' aspect={1}>
                    <LineChart data={marks} className="chart">
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='Subject' />
                        <YAxis />
                        <Legend />
                        <Line type='monotone' dataKey="Marks" stroke="#51829B"/>
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <hr />
                <ResponsiveContainer width='100%' aspect={1}>
                    <BarChart data={marks} className="chart">
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
    );
}
