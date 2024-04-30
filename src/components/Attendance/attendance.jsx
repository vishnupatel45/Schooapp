
import './attendance.css'

export function Attendancepage(){
    const date = new Date()
    const month = date.getMonth()
    const arraymonths = ['Jan','Feb','March','April','May','Jun','July','Aug','Sep','Oct','Nov','Dec']
    return(
        <div className="Attendancepage"> 
            <div className="heading">
                <span className='fw-bold fs-1 text-decoration-underline'>Attendance of - {arraymonths[month]}</span>
                <div className='fw-bold fs-4'>-Vishnu Patel-</div>
            </div>
            <div className='calander'>

            </div>
        </div>
    )
}