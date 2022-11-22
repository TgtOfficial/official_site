import React from 'react'
import { useRouter } from 'next/router'
import Header1 from '../../components/headers/header1'



const Dynamic_url = () => {

    const router = useRouter()


    const dynamic_course = router.query.dynamic_url;

    return (
        <>
            <div className="main">
                <Header1 />
                <div className="home_banner">
                    <div className="container pb-4 pt-2">

                        <h1 className="course_title">{dynamic_course}</h1>
                        <p className="desc text-white">This {dynamic_course} course gives you a complete overview of {dynamic_course} that are required in coporate world. Learning {dynamic_course} is a crucial skill for many sectors in Information and Technologies, and you can develop it with this {dynamic_course} course. With a blended learning approach, you can learn {dynamic_course} along with corporate training , live industry projects and more. Unlock your career in {dynamic_course} with The Generic technology training programs.</p>

                    </div>
                </div>
                <div className="toption">
                    <div className="container">
                        <div className="card_group mt-5 mb-5">
                            <div className="card" >
                                <img className="card-img-top" src="https://source.unsplash.com/random/?technology" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Online Learning</h5>
                                    <p className="card-text">{dynamic_course} <br />
                                        Courses Fee : 8000 <br />
                                        <br />
                                        Course Duration : 12 month
                                    </p>
                                    <a href="#" className="btn text-white  btn-warning bold">Enroll Now</a>
                                </div>
                            </div>
                            <div className="card" >
                                <img className="card-img-top" src="https://source.unsplash.com/random/?online" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Physical Classes</h5>
                                    <p className="card-text">{dynamic_course} <br />
                                        Courses Fee : 8000 <br />
                                        <br />
                                        Course Duration : 12 month
                                    </p>
                                    <a href="#" className="btn text-white  btn-warning bold">Enroll Now</a>
                                </div>
                            </div>
                            <div className="card" >
                                <img className="card-img-top" src="https://source.unsplash.com/random/?programing" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Corporate Training</h5>
                                    <p className="card-text">{dynamic_course} <br />
                                        Courses Fee : 8000 <br />
                                        <br />
                                        Course Duration : 12 month
                                    </p>
                                    <a href="#" className="btn text-white  btn-warning bold">Enroll Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <style>
                {
                    `
.home_banner{
    background: #2a4967 url(https://www.simplilearn.com/ice9/assets/course-banner_ac_v1.jpg) no-repeat;
    background-position: top;
    background-size: cover;
}
.course_title{
    margin-top: 48px;
    font-size: 40px;
    line-height: 1.25;
    color:white
}
.card_group{
    display:flex;
    justify-content:space-evenly;
}
.desc{
    font-size:14px;
}
.card a{
    margin:10% auto ;
    width:100%;
}
.toption{
    background:#ebf1f8;
    padding:32px;
}
.card{
    width:200px;
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
}
.card img{
    width:200px;
    height:100px;
}
@media(min-width:992px){
    .desc{
        width:60%;
    }
}
@media(max-width:772px){
    .card_group{
        flex-direction:column;
    }
    .card{
        margin-top:24px;
    }
}
                    
                    `
                }
            </style>


        </>
    )
}

export default Dynamic_url