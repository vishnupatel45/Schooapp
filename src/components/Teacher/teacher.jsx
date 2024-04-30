
import { Formik,Form, Field, ErrorMessage } from 'formik'
import *as yup from 'yup'
import './teacher.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

export function Teacherpage(){
    
    const [photo,setphoto] = useState(null)
    const [cookie,setcookie,removecookie] = useCookies('Photo');

    function handilechange(e){
        var file = e.target.files[0]
        setphoto(URL.createObjectURL(file));
        setcookie('Photo',photo)
        if(photo == cookie['Photo']){
            console.log('both are same')
            console.log(typeof cookie['Photo'])
            console.log(typeof photo)
            console.log(cookie['Photo'],'for cookie')
            console.log(photo,'for photo')
        }else{
            console.log('both are not same')
            console.log(typeof cookie['Photo'])
            console.log(typeof photo)
            console.log(cookie['Photo'],'for cookie')
            console.log(photo,'for photo')
        }

    }
    

    return(
        <div className='teacherbody'>
            <div>
                <div className='techerprofile'>
                    <div className='bg-info p-2 rounded-3'>
                    <div className='bg-light rounded-2 d-flex justify-content-around align-items-center'>
                        <div>
                        <button className='btn btn-light bi-person-fill-add fs-1 rounded-circle' title='Update Profile'></button>
                        </div>
                        <div>
                            <div className='text-center rounded-3 fw-bold fs-2'>TeacherName</div>
                        </div>
                        <div>
                            <div className='bi-card-list fs-2 rounded-3' title='Update'  data-bs-toggle="modal" data-bs-target="#profileupdate"></div>
                            <div className="modal fade" id="profileupdate"> 
                            <div className="modal-dialog" >
                                <div className="modal-content">
                                        <div className="modal-header">
                                            <span className='bi-person-fill'> <b> Update Profile</b></span>
                                            <button className="btn btn-close" data-bs-dismiss="modal"></button>
                                            <hr />
                                        </div>
                                        <div className="modal-body">
                                            <Formik
                                            initialValues={{techName:"",techSubject:'',techExpersion:'',techIntro:''}}
                                            validationSchema={yup.object({
                                                techName:yup.string().required('Enter you Full Name'),
                                                techSubject:yup.string().required('Give any Subject'),
                                                techExpersion:yup.string().required(),
                                                techIntro:yup.string().required().min(4,'min four')
                                            })}
                                            onSubmit={formdata =>{
                                                axios.post('http://127.0.0.1:7000/Addteacher-profile',formdata);
                                            }}
                                            >
                                                {
                                                    form=><Form>
                                                            <dl>
                                                                <dt>Teacher Name</dt>
                                                                <dd><Field type='input' className='form-control' name='techName' placeholder='Name' /></dd>
                                                                <dd><ErrorMessage name='techName'/></dd>
                                                                <dt>Teacher subject</dt>
                                                                <dd><Field type='input' className='form-control' name='techSubject'  placeholder='Subject' /></dd>
                                                                <dd><ErrorMessage name='techSubject'/></dd>
                                                                <dt>Teacher Expersion</dt>
                                                                <dd><Field type='input' className='form-control' name='techExpersion'  placeholder='Expersion' /></dd>
                                                                <dd><ErrorMessage name='techExpersion'/></dd>
                                                                <dt>About Your Self</dt>
                                                                <dd><Field type='input' className='form-control' name='techIntro'  placeholder='Tell me About your self' /></dd>
                                                                <dd><ErrorMessage name='techIntro'/></dd>
                                                                <button type='submit' className='btn btn-warning w-100' data-bs-dismiss='modal'>Submit</button>
                                                            </dl>
                                                    </Form>
                                                }
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
                    <div> 
                        <input type="file" accept='image/*' onChange={handilechange} />
                    </div>
                    <img src={cookie['Photo']} width='100%'  />
                <div>
                </div>
            </div>
        </div>
    )  
}