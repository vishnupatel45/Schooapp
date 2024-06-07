
import axios from 'axios'
import './assignnment.css'
import { useEffect, useState } from 'react'
import { Stprofile } from '../student_profile/profile';

export function Assignnmentpage(){

    const [events, setevents] = useState([]);

    const featchEvents = async ()=>{
        try{
            const assignment = await axios.get('http://127.0.0.1:7000/Assignnment/10/B')
            setevents(assignment.data)
        }catch (error) {
            console.error("Error fetching marks", error);
        }
    }

    useEffect(()=>{
        featchEvents()
    },[])

    return(
        <div className="assignnmentbody">
            <div className=' bg-warning p-2 fs-2 text-center fw-bold rounded-4 mb-3'>Assignnment Section</div>
            <Stprofile/>
            {
               events.map( event => <div className='alert alert-danger rounded-4'>
                <b className='d-flex justify-content-between '><span className='bi-pen-fill bg-light p-2 me-2 rounded-3'> {event.assignnmentTitle}</span> </b>
                <hr />
                <dd>{event.assignnmentText}</dd>
                <dd>{event.Date}</dd>
               </div>)
            }
        </div>
    )
}