
import axios from 'axios'
import './events.css'
import { useEffect, useState } from 'react'

export function Eventpage(){

    const [events, setevents] = useState([]);

    function featchEvents(){
        axios.get('https://schoolbackend-plx3.onrender.com/Events')
        .then(res => setevents(res.data))
        .catch(error => console.error('Error fetching home alerts:', error));
    }
    useEffect(()=>{
        featchEvents()
    },)

    return(
        <div className="eventbody">
            <div className=' bg-info p-2 fs-2 text-center fw-bold rounded-4 mb-3'>Events Section</div>
            {
               events.map( event => <div className='alert alert-danger rounded-3' key={event.Title} >
                <b className='d-flex justify-content-between '><span className='bi-pen-fill bg-light p-2 me-2 rounded-3 '> {event.Title}</span> 
                </b>
                <hr />
                <dd>{event.Text}</dd>
                <dd>{event.EventDate}</dd>
               </div>)
            }
        </div>
    )
}