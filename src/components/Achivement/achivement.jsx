
import { useEffect, useState } from 'react'
import axios from 'axios'
import './achivement.css'
import { Stprofile } from '../student_profile/profile';
export function Achivementpage(){

    const [achivement, setachivement] = useState([]);

    function fetchachivement(){
        axios.get('http://127.0.0.1:7000/Achivement/10/B/31')
        .then(res => setachivement(res.data))
        .catch(error => console.error('Error fetching home alerts:', error));
    }
    useEffect(()=>{
        fetchachivement()
    },)

    return(
        <div className="achivementbody">
            <Stprofile/>
            <div className=' bg-info p-2 fs-2 text-center fw-bold rounded-4 mb-3'>Achivement Section</div>
            {
               achivement.map(achive => <div className='alert alert-danger rounded-3'>
                <b><span className='bi-pen-fill bg-light p-2 me-2 rounded-3 '> My class{achive.class} Achivements</span></b>
                <hr />
                <dl>
                    <dt>{achive.title}</dt>
                    <dd>{achive.text}</dd>
                </dl>
               </div>)
            }
        </div>
    )
}