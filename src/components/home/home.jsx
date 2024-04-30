
import { useEffect, useState } from 'react';
import './home.css';
import axios from 'axios';

export function Homepage(){

    const [homealert,setHomealert] = useState([])

    function Homealert(){
        axios.get('http://127.0.0.1:7000/Home-alert')
        .then(res => setHomealert(res.data))
        .catch(error => console.error('Error fetching home alerts:', error));
    }
    useEffect(()=>{
        Homealert()
    })
    return(
        <div className='p-2' style={{backgroundColor:'#3C5B6F', height:'150vh'}}>
            <div style={{backgroundImage:'url(/images/school-img.jpg)',backgroundSize:"cover",backgroundRepeat:"no-repeat",height:'250px',width:'100%', borderRadius:'5px'}}>
            </div>
            <div className="schoolName">
                <div className='h2'>GEETANJALI HIGH SCHOOL</div>
                <div className='schoolHeadline'> -- Where Dreams Take Flight!</div>
            </div>
            <section>
                <div className='schoolcontent'>“Welcome to our <b>Geetanjalin High School</b>, where we believe in nurturing young minds into bright futures. We are a community of learners, educators, and innovators. Our school is a place where curiosity is cultivated, knowledge is shared, and learning transforms lives. We are committed to providing an environment that fosters growth, encourages exploration, and inspires future leaders. Join us on this exciting journey of discovery and development.”</div>
                <hr />
                <b>“The highest education is that which does not merely give us information but makes our life in harmony with all existence.”<br />
                <div className=' text-end pe-2'>- Rabindranath Tagore</div>
                </b>
            </section>
            <div>
                {
                    homealert.map(alerts =><div className='alert alert-success' id='alert._id'>
                        <h1>New updates</h1>
                        <hr />
                        <ol>
                            <li className='fs-1'><b>{alerts.alertTitle}</b></li>
                            <dd><b>{alerts.alertText}</b></dd>
                        </ol>
                    </div>)
                }
            </div>

        </div>
    )
}