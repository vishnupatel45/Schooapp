
import { Formik,Form, Field, ErrorMessage } from 'formik'
import *as yup from 'yup'
import './teacher.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import img from '../../assets/Teachet-phots.png'

export function Teacherpage(){
    
    const [photo,setphoto] = useState(null)
    const [cookie,setcookie,removecookie] = useCookies('Photo');
    const [profile,setprofile]= useState([])

    const Fetchprofile = async ()=>{
        const get = await axios.get(`http://127.0.0.1:7000/teacher-profile`)
        setprofile(get.data)
    }


    // function handilechange(e){
    //     var file = e.target.files[0]
    //     setphoto(URL.createObjectURL(file));
    //     setcookie('Photo',photo)
    //     if(photo == cookie['Photo']){
    //         console.log('both are same')
    //         console.log(typeof cookie['Photo'])
    //         console.log(typeof photo)
    //         console.log(cookie['Photo'],'for cookie')
    //         console.log(photo,'for photo')
    //     }else{
    //         console.log('both are not same')
    //         console.log(typeof cookie['Photo'])
    //         console.log(typeof photo)
    //         console.log(cookie['Photo'],'for cookie')
    //         console.log(photo,'for photo')
    //     }

    // }

    useEffect(()=>{
        Fetchprofile()
    },[])

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
                {/* </div> // add img section need to Update
                    <div> 
                        <input type="file" accept='image/*' onChange={handilechange} />
                    </div>
                    <img src={cookie['Photo']} width='100%'  />
                <div> */}
                </div>
            </div>
            <div className='stdUpdates bg-light mt-4 pb-2'>
                <div className='mb-4'>
                    <img src={img} style={{width:"400px"}} />
                    <div>
                        <button className='btn btn-dark w-100 fw-bold'>profile section</button>
                        {
                            profile.map((prof,i) =><dl className='p-1'key={i}>
                                <dt>Name:{prof.techName}</dt>
                                <dt>Subject:{prof.techSubject}</dt>
                                <dt>Expersion:{prof.techExpersion}</dt>
                                <dt>About You:{prof.techIntro}</dt>
                            </dl>)
                        }
                    </div>
                </div>
                <div>
                    <div className='alert alert-info bi-person-fill text-center fw-medium fs-5'> Update Student Data</div>
                    <div className='updatesIcons d-flex justify-content-around'>
                        <div className='Teacherform' data-bs-toggle="modal" data-bs-target="#Homework">
                            <span>Home work</span>
                        </div>
                        <div className='modal fade' id='Homework'>
                            <div className=' modal-dialog'>
                                <div className=' modal-content'>
                                    <div className='modal-header'>
                                        <Formik 
                                            initialValues={{Class:'',Section:'',Subject:'',homeWork:''}}
                                            validationSchema={yup.object({
                                                Class:yup.number().required(),
                                                Section:yup.string().required(),
                                                Subject:yup.string().required(),
                                                homeWork:yup.string().required()
                                            })}
                                            onSubmit={async (homework) => {
                                                try {
                                                    await axios.post('http://127.0.0.1:7000/Add-homewrok', homework);
                                                    console.log('Homework is updated in the database');
                                                    // alert('home is Updated');

                                                } catch (error) {
                                                    console.error('Server side fetching is not done:', error);
                                                }
                                            }}
                                            >
                                            {
                                                form=> 
                                                <Form>
                                                    <div className=' alert alert-danger fw-bold fs-2'><span className=' bi-book-half'></span> Home work updates <span  className='btn btn-close'  data-bs-dismiss="modal"></span></div>
                                                    <dl>
                                                        <dt>Class</dt>
                                                        <dd><Field type='input' name='Class' className='form-control' placeholder='Enter class'/></dd>
                                                        <dd className='text-danger'><ErrorMessage name='Class' /></dd>
                                                        <dt>Section</dt>
                                                        <dd><Field type='input' name='Section' className='form-control' placeholder='Enter Section'/></dd>
                                                        <dd className='text-danger'><ErrorMessage name='Section'/></dd>
                                                        <dt>Subject</dt>
                                                        <dd><Field type='input' name='Subject' className='form-control' placeholder='Enter subject'/></dd>
                                                        <dd className='text-danger'><ErrorMessage name='Subject'/></dd>
                                                        <dt>Homework</dt>
                                                        <dd><Field type='input' name='homeWork' className='form-control' placeholder='Enter Homewok'/></dd>
                                                        <dd className='text-danger'><ErrorMessage name='homeWork'/></dd>
                                                        <dd><button type='submit'  className='btn btn-warning w-100'  data-bs-dismiss="modal">Submit</button></dd>
                                                    </dl>
                                                </Form>
                                            }
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Teacherform' data-bs-toggle="modal" data-bs-target="#Attendance">
                            <span>Atten dance</span>
                        </div>
                        <div className='modal fade' id='Attendance'>
                            <div className=' modal-dialog'>
                                <div className=' modal-content'>
                                    <div className='modal-header'>
                                        <Formik 
                                            initialValues={{}}
                                            validationSchema={yup.object({
                                                
                                            })}
                                            onSubmit={async (homework) => {
                                                try {
                                                    await 
                                                    console.log('Homework is updated in the database');

                                                } catch (error) {
                                                    console.error('Server side fetching is not done:', error);
                                                }
                                            }}
                                            >
                                            {
                                                form=> 
                                                <Form>
                                                    <div className=' alert alert-danger fw-bold fs-2'><span className=' bi-book-half'></span> Attendance<span  className='btn btn-close'  data-bs-dismiss="modal"></span></div>
                                                    <dl>
                                                        
                                                    </dl>
                                                </Form>
                                            }
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Teacherform' data-bs-toggle="modal" data-bs-target="#Achivements">
                            <span>Achive ments</span>
                        </div>
                        <div className='modal fade' id='Achivements'>
                            <div className=' modal-dialog'>
                                <div className=' modal-content'>
                                    <div className='modal-header'>
                                        <Formik 
                                            initialValues={{Class:'',Section:'',RollNumber:'',Title:'',Text:''}}
                                            validationSchema={yup.object({
                                                Class:yup.number().required(),
                                                RollNumber:yup.number().required(),
                                                Section:yup.string().required(),
                                                Title:yup.string().required(),
                                                Text:yup.string().required()
                                            })}
                                            onSubmit={async (homework) => {
                                                try {
                                                    await axios.post('http://127.0.0.1:7000/Add-Achivements', homework);
                                                    console.log('Homework is updated in the database');
                                                    // alert('home is Updated');
                                                } catch (error) {
                                                    console.error('Server side fetching is not done:', error);
                                                }
                                            }}
                                            >
                                            {
                                                form=> 
                                                <Form>
                                                    <div className=' alert alert-danger fw-bold fs-2'><span className=' bi-book-half'></span> Home work updates <span  className='btn btn-close'  data-bs-dismiss="modal"></span></div>
                                                    <dl>
                                                        <dt>Class</dt>
                                                        <dd><Field type='input' name='Class' className='form-control' placeholder='Enter class'/></dd>
                                                        <dd className='text-danger'><ErrorMessage name='Class' /></dd>
                                                        <dt>Section</dt>
                                                        <dd><Field type='input' name='Section' className='form-control' placeholder='Enter Section'/></dd>
                                                        <dd className='text-danger'><ErrorMessage name='Section'/></dd>
                                                        <dt>RollNumber</dt>
                                                        <dd><Field type='input' name='RollNumber' className='form-control' placeholder='Enter RollNumber'/></dd>
                                                        <dd className='text-danger'><ErrorMessage name='RollNumber'/></dd>
                                                        <dt>Title</dt>
                                                        <dd><Field type='input' name='Title' className='form-control' placeholder='Enter Title'/></dd>
                                                        <dd className='text-danger'><ErrorMessage name='Title'/></dd>
                                                        <dt>Text</dt>
                                                        <dd><Field type='input' name='Text' className='form-control' placeholder='Some Text about Achivemnts'/></dd>
                                                        <dd className='text-danger'><ErrorMessage name='Text'/></dd>
                                                        <dd><button type='submit'  className='btn btn-warning w-100'  data-bs-dismiss="modal">Submit</button></dd>
                                                    </dl>
                                                </Form>
                                            }
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Teacherform' data-bs-toggle="modal" data-bs-target="#Events">
                            <span>Events</span>
                        </div>
                        <div className='modal fade' id='Events'>
                            <div className=' modal-dialog'>
                                <div className=' modal-content'>
                                    <div className='modal-header'>
                                        <Formik 
                                            initialValues={{teacher:'',EventTitle:'',EventText:'',EventDate:''}}
                                            validationSchema={yup.object({
                                                EventTitle:yup.string().required(),
                                                EventText:yup.string().required(),
                                                EventDate:yup.string().required()
                                            })}
                                            onSubmit={async (Eventsdata) => {
                                                try {
                                                    await axios.post('http://127.0.0.1:7000/Add-Events', Eventsdata);
                                                    console.log('Eventsdata is updated in the database');
                                                    // alert('home is Updated');
                                                } catch (error) {
                                                    console.error('Server side fetching is not done:', error);
                                                }
                                            }}
                                            >
                                            {
                                                form=> 
                                                <Form>
                                                    <div className=' alert alert-danger fw-bold fs-2'><span className=' bi-book-half'></span> Update Events <span  className='btn btn-close'  data-bs-dismiss="modal"></span></div>
                                                    <dl>
                                                        <dt>EventTitle</dt>
                                                        <dd><Field type='input' name='EventTitle' className='form-control' placeholder='Enter EventTitle'/></dd>
                                                        <dd className='text-danger'><ErrorMessage name='EventTitle'/></dd>
                                                        <dt>EventText</dt>
                                                        <dd><Field type='inpu' name='EventText' className='form-control' placeholder='Enter EventTxt'/></dd>
                                                        <dd className='text-danger'><ErrorMessage name='EventText'/></dd>
                                                        <dt>EventDate</dt>
                                                        <dd><Field type='inpu' name='EventDate' className='form-control' placeholder='Enter EventDate'/></dd>
                                                        <dd className='text-danger'><ErrorMessage name='EventDate'/></dd>
                                                        <dd><button type='submit'  className='btn btn-warning w-100'  data-bs-dismiss="modal">Submit</button></dd>
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
    )  
}