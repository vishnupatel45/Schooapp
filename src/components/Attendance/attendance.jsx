
import axios from 'axios'
import './attendance.css'
import { useState } from 'react'
import { useEffect } from 'react'

export function Attendancepage(){
    const [attendances,setattendance] = useState([])

    const fetcheAttendance = async()=>{
        await axios.get('http://127.0.0.1:7000/GetAttendance/10/B/31')
        .then(res => setattendance(res.data))
    }
    
    useEffect(()=>{
        fetcheAttendance()
    },[])

    return(
        <div className="Attendancepage"> 
            <div className="heading">
                <div className='fw-bold fs-1 alert alert-danger'>Geethanjali High School</div>
                <span className='fw-bold fs-3'>Attendance of - Vishnu Patel</span>
            </div>
            <div className='pt-3 d-flex justify-content-between px-3 text-center flex-row-reverse overflow-auto'>
                {
                    attendances.map(attendance =>{
                        const date = new Date(attendance.Date);
                        const datestring = date.toLocaleDateString()
                        return (<div className={(attendance.Boolean)?'present':'upsend'}>
                            <div>{datestring}</div>
                            <div>{(attendance.Boolean)?'Present':'Appsent'}</div>
                            </div>)
                    }
                        
                )}
            </div>
            
        </div>
    )
}