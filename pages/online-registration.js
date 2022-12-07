import React from 'react'
import Header1 from '../components/headers/header1'
import { useState } from 'react'
import axios from 'axios';
import { useRef } from 'react';
import FormData from 'form-data';


const online = () => {


    // const form = useRef()
    // const formdata = form.current
    // console.log(formdata)

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Course, setCourse] = useState("");
    // console.log("courses data ", courses)

    const formdata = {
        name: Name,
        email: Email,
        mobile: Mobile,
        course: Course
    }

    const [courses, setCourses] = useState([]);

    const [isCoursesApi, setIsCoursesApi] = useState(false)

    let courss = 0;

    if (isCoursesApi == false) {

        const resposse = axios.get("/api/courses")
            .then(
                data => {
                    setCourses(data)
                    courss = data;
                    setIsCoursesApi(!isCoursesApi)
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    const [isActive, setIsActive] = useState(false)


    const coption = () => {

        setIsActive(!isActive)




    }
    // console.log(formdata)

    // const formData = new FormData();
    // formData.append("name", Name);
    // formData.append("email", Email);
    // formData.append('mobile', Mobile);
    // formData.append("course", Course);

    // console.log(formData)


    const submitEnquiry = () => {
      
        // e.preventDefault()

        if (Name == "" || Email == "" || Mobile == "") {
            alert('Please fill all the required fields !!!')
        }
        else {
            let response = fetch('https://srconst.000webhostapp.com/test.php', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(formdata),
            });
            alert('Registration Details sent')
        }
        
    }





    return (
        <>
            <div className="main_div">
                <Header1 />
                <div className="formdiv">
                    <div className="text-center p-5 pb-0">
                        <p className="text-secondary">Register to Your Dream Course. We will get back to you soon...</p>
                    </div>
                    <form  className="form p-5 pt-2">
                        <div className="form-group">
                            <label htmlFor="name" className="name pt-4 form-label">Name</label>
                            <input onChange={(e) => {setName(e.target.value)}} onClick={coption} className='form-control' type="text" placeholder='Enter your name' name='name' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name" className="name pt-4 form-label">Email</label>
                            <input onChange={(e) => {setEmail(e.target.value)}} onClick={coption} className='form-control' type="text" placeholder='Enter your email' name='email' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name" className="name pt-4 form-label">Mobile</label>
                            <input onChange={(e) => {setMobile(e.target.value)}} onClick={coption} className='form-control' type="text" placeholder='Enter your mobile number' name='mobile' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name" className="name pt-4 form-label">Course</label>
                            <select onChange={(e) => {setCourse(e.target.value)}} name="course" id="" className="form-select">
                                <option value="default">Choose your courses</option>
                                {isActive && (<>{
                                    courses.data.map((course) => (
                                        <option key={course.title} value={course.title}>{course.title}</option>
                                    ))
                                }</>)}


                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name" className="name pt-4 form-label"></label>
                            <div onClick={submitEnquiry}  className='btn mt-5 btn-primary w-100' >Register</div>
                        </div>
                    </form>
                </div>
                <div className="dmc1 ">

                </div>
                <div className="footer w-100 p-4 bg-black pb-1">
                    <div className="text-center"><p className="text-white">© 2022 - The Generic Technology</p></div>
                </div>
            </div>
            <style>
                {
                    `
            .footer{
                position:absolute;
                bottom:0px;
            }
            `
                }
            </style>


        </>
    )
}

export default online