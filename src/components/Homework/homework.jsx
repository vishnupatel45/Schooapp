
import './homework.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Stprofile } from '../student_profile/profile';

export function HomeworkPage(){
    const [homework, sethomework] = useState([]);

    function fetchhomework(){
        axios.get('http://127.0.0.1:7000/Homework/10/B')
        .then(res => sethomework(res.data))
        .catch(error => console.error('Error fetching home alerts:', error));
    }
    useEffect(()=>{
        fetchhomework()
    },[])

    return(
        <div className="homeworkbody">
            <div className=' bg-warning p-2 fs-2 text-center fw-bold rounded-4 mb-3'>Home work Section</div>
            <Stprofile/>
            {
               homework.map(work => <div className='alert alert-danger rounded-4'>
                <b className='d-flex justify-content-between '><span className='bi-book bg-light p-2 me-2 rounded-3'> class:{work.class}/section:{work.section} (homework)</span> </b>
                <hr />
                <dl>
                    <dt>{work.Subject}</dt>
                    <dd>{work.topic}</dd>
                </dl>
               </div>)
            }
        </div>
    )
}