
import { useState } from 'react'
import './about.css'

export function Aboutpage(){
    
    const now = new Date();
    const year = now.getFullYear();

    return(
        <div className="Aboutbody">
            <div className='alert alert-info fw-bold text-center fs-2 text-dark p-1' >About the school</div>
            <div className='alert alert-success'>
                <details><summary className='fw-bold'>School History:</summary>
                    <p>
                        <hr />
                    Geetanjali High School was founded in 1985 by Mr. and Mrs. Patel with the vision of providing quality education to the local community. Starting with just a handful of students, the school has grown over the years to become one of the most reputable institutions in the region. Its commitment to academic excellence and holistic development has been the cornerstone of its journey.
                    </p>
                </details>
            </div>
            <div className='alert alert-warning'>
                <details><summary className='fw-bold'>School Mission:</summary>
                    <p>
                        <hr />
                    Our mission at Geetanjali High School is to empower students with the knowledge, skills, and values they need to succeed in an ever-changing world. We strive to create a nurturing and inclusive environment where every child can reach their full potential academically, socially, and emotionally.
                    </p>
                </details>
            </div>
            <div className='alert alert-danger'>
                <details><summary className='fw-bold'>School Vision:</summary>
                    <p>
                    <hr />
                    Our vision is to be a premier educational institution known for fostering creativity, critical thinking, and global citizenship. We aim to inspire a lifelong love for learning and equip our students with the tools they need to become compassionate leaders and innovators who make a positive impact on society.
                    </p>
                </details>
            </div>
            <div className='alert alert-info'>
                <details><summary className='fw-bold'>School Values:</summary>
                    <p>
                    <hr />
                    <b>Excellence</b>: We uphold the highest standards of academic achievement and personal integrity in everything we do.
                    <br />
                    <b>Respect</b>: We foster a culture of respect, empathy, and understanding, valuing the uniqueness of each individual.
                    <br />
                    <br />
                    <b>Community</b>: We believe in the power of collaboration and actively engage with our local and global communities to create positive change.
                    <br />
                    <br />
                    <b>Innovation</b>: We encourage curiosity, creativity, and innovation, preparing students to adapt and thrive in a rapidly evolving world.
                    <br />
                    <br />
                    <b>Integrity</b>: We instill a sense of honesty, responsibility, and ethical behavior in our students, guiding them to make principled decisions in life
                    <br />
                    </p>
                </details>
            </div>
            <div className='alert alert-success'>
                <details><summary className='fw-bold'>School Rules and Regulations:</summary>
                    <p>
                        <hr />
                    <b>AttendancePolicy</b>: Regular attendance is essential for academic success. Schools often have policies outlining the procedures for reporting absences, tardiness, and the consequences for excessive absenteeism.
                    <br />
                    <b>Dress Code</b>: Many schools have dress codes to promote a safe and respectful learning environment. These codes typically specify acceptable attire, grooming standards, and restrictions on clothing with offensive symbols or messages.
                    <br />
                    <b>Behavior Expectations</b>: Schools have rules regarding behavior to ensure a positive and orderly environment conducive to learning. This may include guidelines on respect for teachers and peers, bullying prevention, and appropriate language and conduct.
                    <br />
                    <b>Culture</b>:"At our school, we honor and celebrate the rich tapestry of Indian culture, We believe in fostering an inclusive environment where every student is encouraged to embrace their cultural heritage, while also learning about and respecting the traditions of others."
                    </p>
                </details>
            </div>
            <div className='bg-light'>
                <div className='alert alert-success text-center fw-bold fs-2 p-1'>{year} Toper's</div>
                <div className='row p-2'>  
                    <div className='col-4 p-1 text-center'>
                        <div>
                            <img src="./images/admission-icon.png" style={{height:'80px', width:'80px',borderRadius:'50%'}} />
                            <span className=' fw-medium'>Harish Shiva</span>
                            <div className=' fw-bold text-danger'>
                                Marks: 9.3/10
                            </div>
                        </div>
                    </div>
                    <div className='col-4 p-1 text-center'>
                        <div>
                            <img src="./images/admission-icon.png" style={{height:'80px', width:'80px',borderRadius:'50%'}} />
                            <span className=' fw-medium'>Bharath</span>
                            <div className=' fw-bold text-danger'>
                                Marks: 9.5/10
                            </div>
                        </div>
                    </div>
                    <div className='col-4 p-1 text-center'>
                        <div>
                            <img src="./images/admission-icon.png" style={{height:'80px', width:'80px',borderRadius:'50%'}} />
                            <span className=' fw-medium'>Arun Kumar</span>
                            <div className=' fw-bold text-danger'>
                                Marks: 9.5/10
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}