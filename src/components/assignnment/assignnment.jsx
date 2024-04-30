
import axios from 'axios'
import './assignnment.css'
import { useEffect, useState } from 'react'

export function Assignnmentpage(){

    const [events, setevents] = useState([]);

    function featchEvents(){
        axios.get('http://127.0.0.1:7000/Assignnment')
        .then(res => setevents(res.data))
        .catch(error => console.error('Error fetching home alerts:', error));
    }
    useEffect(()=>{
        featchEvents()
    },[])

    return(
        <div className="assignnmentbody">
            <div className=' bg-warning p-2 fs-2 text-center fw-bold rounded-4 mb-3'>Assignnment Section</div>
            {
               events.map( event => <div className='alert alert-danger rounded-4'>
                <b className='d-flex justify-content-between '><span className='bi-pen-fill bg-light p-2 me-2 rounded-3'> {event.assignnmentTitle}</span> <span><span className='bi-trash-fill bg-light p-2 rounded-3' title='Delete'></span> <span className='bi-plus-circle-dotted bg-light p-2 rounded-3 ms-1' title='update'></span></span></b>
                <hr />
                <dd>{event.assignnmentText}</dd>
                <dd>{event.Date}</dd>
               </div>)
            }
        </div>
    )
}