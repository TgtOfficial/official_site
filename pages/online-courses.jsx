import React from 'react'
import Header1 from '../components/headers/header1'
import axios from 'axios';
import { useState, useEffect } from 'react';



const Onlinecourses = () => {

    const [courses, setCourses] = useState([]);




    console.log("courses data ", courses)




    const [isActiveddc1, setIsActiveddc1] = useState(false)
    const [isActiveddc2, setIsActiveddc2] = useState(false)
    const [isActiveddc3, setIsActiveddc3] = useState(false)
    const [isActiveddc13, setIsActiveddc13] = useState(false)
    const [isActiveddc4, setIsActiveddc4] = useState(false)
    const [isActiveddc5, setIsActiveddc5] = useState(false)
    const [isActiveddc6, setIsActiveddc6] = useState(false)
    const [isActiveddc7, setIsActiveddc7] = useState(false)
    const [isActiveddc8, setIsActiveddc8] = useState(false)
    const [isActiveddc9, setIsActiveddc9] = useState(false)
    const [isActiveddc10, setIsActiveddc10] = useState(false)
    const [isActiveddc11, setIsActiveddc11] = useState(false)
    const [isActiveddc12, setIsActiveddc12] = useState(false)
    const [isCoursesApi, setIsCoursesApi]=useState(false)



    if (isCoursesApi==false) {

        const resposse = axios.get("/api/courses")
            .then(
                data => {
                    setCourses(data)
                    setIsCoursesApi(!isCoursesApi)
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    const ddc1 = () => {


        console.log("courses data", courses)
        if (isActiveddc1 == false) {
            setIsActiveddc1(!isActiveddc1);

        } if (isActiveddc2 == true) {
            setIsActiveddc2(!isActiveddc2);

        }
        if (isActiveddc3 == true) {
            setIsActiveddc3(!isActiveddc3);
        }
        if (isActiveddc4 == true) {
            setIsActiveddc4(!isActiveddc4);

        }
        if (isActiveddc5 == true) {
            setIsActiveddc5(!isActiveddc5);

        }
        if (isActiveddc6 == true) {
            setIsActiveddc6(!isActiveddc6);

        }
        if (isActiveddc7 == true) {
            setIsActiveddc7(!isActiveddc7);

        }
        if (isActiveddc8 == true) {
            setIsActiveddc8(!isActiveddc8);

        }
        if (isActiveddc9 == true) {
            setIsActiveddc9(!isActiveddc9);

        }
        if (isActiveddc10 == true) {
            setIsActiveddc10(!isActiveddc10);

        }
        if (isActiveddc11 == true) {
            setIsActiveddc11(!isActiveddc11);

        }
        if (isActiveddc12 == true) {
            setIsActiveddc12(!isActiveddc12);

        }
        if (isActiveddc13 == true) {
            setIsActiveddc13(!isActiveddc13);

        }
    }
    const ddc2 = () => {
        if (isActiveddc1 == true) {
            setIsActiveddc1(!isActiveddc1);

        } if (isActiveddc2 == false) {
            setIsActiveddc2(!isActiveddc2);

        }
        if (isActiveddc3 == true) {
            setIsActiveddc3(!isActiveddc3);
        }
        if (isActiveddc4 == true) {
            setIsActiveddc4(!isActiveddc4);

        }
        if (isActiveddc5 == true) {
            setIsActiveddc5(!isActiveddc5);

        }
        if (isActiveddc6 == true) {
            setIsActiveddc6(!isActiveddc6);

        }
        if (isActiveddc7 == true) {
            setIsActiveddc7(!isActiveddc7);

        }
        if (isActiveddc8 == true) {
            setIsActiveddc8(!isActiveddc8);

        }
        if (isActiveddc9 == true) {
            setIsActiveddc9(!isActiveddc9);

        }
        if (isActiveddc10 == true) {
            setIsActiveddc10(!isActiveddc10);

        }
        if (isActiveddc11 == true) {
            setIsActiveddc11(!isActiveddc11);

        }
        if (isActiveddc12 == true) {
            setIsActiveddc12(!isActiveddc12);

        }
        if (isActiveddc13 == true) {
            setIsActiveddc13(!isActiveddc13);

        }
    }
    const ddc3 = () => {
        if (isActiveddc1 == true) {
            setIsActiveddc1(!isActiveddc1);

        } if (isActiveddc2 == true) {
            setIsActiveddc2(!isActiveddc2);

        }
        if (isActiveddc3 == false) {
            setIsActiveddc3(!isActiveddc3);
        }
        if (isActiveddc4 == true) {
            setIsActiveddc4(!isActiveddc4);

        }
        if (isActiveddc5 == true) {
            setIsActiveddc5(!isActiveddc5);

        }
        if (isActiveddc6 == true) {
            setIsActiveddc6(!isActiveddc6);

        }
        if (isActiveddc7 == true) {
            setIsActiveddc7(!isActiveddc7);

        }
        if (isActiveddc8 == true) {
            setIsActiveddc8(!isActiveddc8);

        }
        if (isActiveddc9 == true) {
            setIsActiveddc9(!isActiveddc9);

        }
        if (isActiveddc10 == true) {
            setIsActiveddc10(!isActiveddc10);

        }
        if (isActiveddc11 == true) {
            setIsActiveddc11(!isActiveddc11);

        }
        if (isActiveddc12 == true) {
            setIsActiveddc12(!isActiveddc12);

        }
        if (isActiveddc13 == true) {
            setIsActiveddc13(!isActiveddc13);

        }
    }
    const ddc4 = () => {
        if (isActiveddc1 == true) {
            setIsActiveddc1(!isActiveddc1);

        } if (isActiveddc2 == true) {
            setIsActiveddc2(!isActiveddc2);

        }
        if (isActiveddc3 == true) {
            setIsActiveddc3(!isActiveddc3);
        }
        if (isActiveddc4 == false) {
            setIsActiveddc4(!isActiveddc4);

        }
        if (isActiveddc5 == true) {
            setIsActiveddc5(!isActiveddc5);

        }
        if (isActiveddc6 == true) {
            setIsActiveddc6(!isActiveddc6);

        }
        if (isActiveddc7 == true) {
            setIsActiveddc7(!isActiveddc7);

        }
        if (isActiveddc8 == true) {
            setIsActiveddc8(!isActiveddc8);

        }
        if (isActiveddc9 == true) {
            setIsActiveddc9(!isActiveddc9);

        }
        if (isActiveddc10 == true) {
            setIsActiveddc10(!isActiveddc10);

        }
        if (isActiveddc11 == true) {
            setIsActiveddc11(!isActiveddc11);

        }
        if (isActiveddc12 == true) {
            setIsActiveddc12(!isActiveddc12);

        }
        if (isActiveddc13 == true) {
            setIsActiveddc13(!isActiveddc13);

        }
    }
    const ddc5 = () => {
        if (isActiveddc1 == true) {
            setIsActiveddc1(!isActiveddc1);

        } if (isActiveddc2 == true) {
            setIsActiveddc2(!isActiveddc2);

        }
        if (isActiveddc3 == true) {
            setIsActiveddc3(!isActiveddc3);
        }
        if (isActiveddc4 == true) {
            setIsActiveddc4(!isActiveddc4);

        }
        if (isActiveddc5 == false) {
            setIsActiveddc5(!isActiveddc5);

        }
        if (isActiveddc6 == true) {
            setIsActiveddc6(!isActiveddc6);

        }
        if (isActiveddc7 == true) {
            setIsActiveddc7(!isActiveddc7);

        }
        if (isActiveddc8 == true) {
            setIsActiveddc8(!isActiveddc8);

        }
        if (isActiveddc9 == true) {
            setIsActiveddc9(!isActiveddc9);

        }
        if (isActiveddc10 == true) {
            setIsActiveddc10(!isActiveddc10);

        }
        if (isActiveddc11 == true) {
            setIsActiveddc11(!isActiveddc11);

        }
        if (isActiveddc12 == true) {
            setIsActiveddc12(!isActiveddc12);

        }
        if (isActiveddc13 == true) {
            setIsActiveddc13(!isActiveddc13);

        }
    }
    const ddc6 = () => {
        if (isActiveddc1 == true) {
            setIsActiveddc1(!isActiveddc1);

        } if (isActiveddc2 == true) {
            setIsActiveddc2(!isActiveddc2);

        }
        if (isActiveddc3 == true) {
            setIsActiveddc3(!isActiveddc3);
        }
        if (isActiveddc4 == true) {
            setIsActiveddc4(!isActiveddc4);

        }
        if (isActiveddc5 == true) {
            setIsActiveddc5(!isActiveddc5);

        }
        if (isActiveddc6 == false) {
            setIsActiveddc6(!isActiveddc6);

        }
        if (isActiveddc7 == true) {
            setIsActiveddc7(!isActiveddc7);

        }
        if (isActiveddc8 == true) {
            setIsActiveddc8(!isActiveddc8);

        }
        if (isActiveddc9 == true) {
            setIsActiveddc9(!isActiveddc9);

        }
        if (isActiveddc10 == true) {
            setIsActiveddc10(!isActiveddc10);

        }
        if (isActiveddc11 == true) {
            setIsActiveddc11(!isActiveddc11);

        }
        if (isActiveddc12 == true) {
            setIsActiveddc12(!isActiveddc12);

        }
        if (isActiveddc13 == true) {
            setIsActiveddc13(!isActiveddc13);

        }
    }
    const ddc7 = () => {
        if (isActiveddc1 == true) {
            setIsActiveddc1(!isActiveddc1);

        } if (isActiveddc2 == true) {
            setIsActiveddc2(!isActiveddc2);

        }
        if (isActiveddc3 == true) {
            setIsActiveddc3(!isActiveddc3);
        }
        if (isActiveddc4 == true) {
            setIsActiveddc4(!isActiveddc4);

        }
        if (isActiveddc5 == true) {
            setIsActiveddc5(!isActiveddc5);

        }
        if (isActiveddc6 == true) {
            setIsActiveddc6(!isActiveddc6);

        }
        if (isActiveddc7 == false) {
            setIsActiveddc7(!isActiveddc7);

        }
        if (isActiveddc8 == true) {
            setIsActiveddc8(!isActiveddc8);

        }
        if (isActiveddc9 == true) {
            setIsActiveddc9(!isActiveddc9);

        }
        if (isActiveddc10 == true) {
            setIsActiveddc10(!isActiveddc10);

        }
        if (isActiveddc11 == true) {
            setIsActiveddc11(!isActiveddc11);

        }
        if (isActiveddc12 == true) {
            setIsActiveddc12(!isActiveddc12);

        }
        if (isActiveddc13 == true) {
            setIsActiveddc13(!isActiveddc13);

        }
    }
    const ddc8 = () => {
        if (isActiveddc1 == true) {
            setIsActiveddc1(!isActiveddc1);

        } if (isActiveddc2 == true) {
            setIsActiveddc2(!isActiveddc2);

        }
        if (isActiveddc3 == true) {
            setIsActiveddc3(!isActiveddc3);
        }
        if (isActiveddc4 == true) {
            setIsActiveddc4(!isActiveddc4);

        }
        if (isActiveddc5 == true) {
            setIsActiveddc5(!isActiveddc5);

        }
        if (isActiveddc6 == true) {
            setIsActiveddc6(!isActiveddc6);

        }
        if (isActiveddc7 == true) {
            setIsActiveddc7(!isActiveddc7);

        }
        if (isActiveddc8 == false) {
            setIsActiveddc8(!isActiveddc8);

        }
        if (isActiveddc9 == true) {
            setIsActiveddc9(!isActiveddc9);

        }
        if (isActiveddc10 == true) {
            setIsActiveddc10(!isActiveddc10);

        }
        if (isActiveddc11 == true) {
            setIsActiveddc11(!isActiveddc11);

        }
        if (isActiveddc12 == true) {
            setIsActiveddc12(!isActiveddc12);

        }
        if (isActiveddc13 == true) {
            setIsActiveddc13(!isActiveddc13);

        }
    }
    const ddc9 = () => {
        if (isActiveddc1 == true) {
            setIsActiveddc1(!isActiveddc1);

        } if (isActiveddc2 == true) {
            setIsActiveddc2(!isActiveddc2);

        }
        if (isActiveddc3 == true) {
            setIsActiveddc3(!isActiveddc3);
        }
        if (isActiveddc4 == true) {
            setIsActiveddc4(!isActiveddc4);

        }
        if (isActiveddc5 == true) {
            setIsActiveddc5(!isActiveddc5);

        }
        if (isActiveddc6 == true) {
            setIsActiveddc6(!isActiveddc6);

        }
        if (isActiveddc7 == true) {
            setIsActiveddc7(!isActiveddc7);

        }
        if (isActiveddc8 == true) {
            setIsActiveddc8(!isActiveddc8);

        }
        if (isActiveddc9 == false) {
            setIsActiveddc9(!isActiveddc9);

        }
        if (isActiveddc10 == true) {
            setIsActiveddc10(!isActiveddc10);

        }
        if (isActiveddc11 == true) {
            setIsActiveddc11(!isActiveddc11);

        }
        if (isActiveddc12 == true) {
            setIsActiveddc12(!isActiveddc12);

        }
        if (isActiveddc13 == true) {
            setIsActiveddc13(!isActiveddc13);

        }
    }



    return (
        <div>
            <Header1 />

            <div className="main-index">

                <div id="skillupBanner">
                    <div className="banner" data-test="Banner">
                        <div className="container heading">
                            <h1 className="ban-header">Learn today{"’"}s most in-demand<br />
                                skills with our free online <br />courses</h1>
                        </div>
                        <div className="container">
                            <a href="#recommendations" className="btn btn-primary cbtn">Explore Free Courses</a>

                        </div>
                    </div>
                </div>
                <div id="skillupPartner">
                    <div className="container partner">
                        <p className='text-center mt-4'>Employees from leading companies worldwide have enrolled with us</p>
                        <img id="partner-image" className="" width="16" height="9" src="https://www.simplilearn.com/ice9/assets/freemium/company-sprite-d.png" />
                    </div>
                </div>
                <div id="careergrowthId">
                    <div className="career-growth" data-test="CareerGrowth">
                        <div className="container ccdiv ">
                            <div className="left-video">
                                <div className="gif-img">
                                    <img className="blend-mode" width="16" height="9" src="https://www.simplilearn.com/ice9/assets/skill-certificate_1.gif" alt="SkillUpCertificate" />
                                </div>
                                <div className="image-tag">
                                    <span>Completion certificate awarded on every course completion</span>
                                </div>
                            </div>
                            <div className="key-feature">
                                <h2 className="career-growth-heading">Courses focused on building strong foundational skills for career growth</h2>
                                <ul>
                                    <li className="learn-from-experts"><span>Learn from Industry Experts</span> <br />  <p> Comprehensive self-paced courses created with top practitioners </p>  </li>
                                    <li className="free-resources"><span>Free Resources</span> <br /> <p>  Free guides on career paths, salaries, interview tips, and more</p> </li>
                                    <li className="learn-own-pace"><span>Skill-based Learning</span> <br /> <p>  600+ job-ready skills on offer in today{"'"}s most in-demand domains</p> </li>
                                    <li className="learn-anytime"><span>Learn Anytime, Anywhere</span> <br />  <p> Learn while working or studying from any place, across any device</p> </li>
                                </ul>
                            </div>
                        </div>
                        <div id="getRecommendedCourses">
                            <div className="container recommendation-container">
                                <div className="get-recommendation-block">
                                    <div className="parent-block">
                                        <div className="extra-block"></div>
                                        <div className="left-block text-center">
                                            <p>Let{"’"}s find the right course for you!</p>
                                            <a className="get-recommendation-btn">Get Recommendations</a>
                                        </div>

                                        <div className="right-block">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coursesbar">

                    <div className="topddc  container">
                        <h2 className="head">Explore Free Online Courses</h2>
                        <div className='ditemdiv' >
                            <div className="dmg p-3">
                                <div className="ci1 title hh dropdown-item"><h4 className="h hhh">COURSE CATEGORIES</h4></div>
                                <div onClick={ddc1} className="ci2 dropdown-item clight "><h4 className="h">Data Science {'&'} Business Analytics</h4></div>
                                <div onClick={ddc2} className="ci3 dropdown-item clight "><h4 className="h">AI {'&'} Machine Learning</h4></div>
                                <div onClick={ddc3} className="ci4 dropdown-item clight "><h4 className="h">Project Management</h4></div>
                                <div onClick={ddc4} className="ci5 dropdown-item clight "><h4 className="h">Cyber Security</h4></div>
                                <div onClick={ddc5} className="ci6 dropdown-item clight "><h4 className="h">Cloud Computing</h4></div>
                                <div onClick={ddc6} className="ci10 dropdown-item clight "><h4 className="h">Software Development</h4></div>
                                <div onClick={ddc7} className="ci12 dropdown-item clight "><h4 className="h">IT Service and Architecture</h4></div>
                                <div onClick={ddc8} className="ci13 dropdown-item clight "><h4 className="h">Digital Marketing</h4></div>
                                <div onClick={ddc9} className="ci14 dropdown-item clight "><h4 className="h">Big Data</h4></div>

                            </div>
                            <div className="dmr p-3 d-flex">
                                {isActiveddc1 && (
                                    <div className="dflexr cc1">
                                        <div className="dmc1 ">
                                            {
                                                courses.data.map((course) => (
                                                    <div key={course.title} className="box">
                                                        <h2>{course.title}</h2>
                                                        <br />
                                                        <span>{course.duration}</span>
                                                        <br />
                                                        <p>{course.categories}</p>
                                                        <br />
                                                        <span className="bold">Course Fee : {course.fee}</span>
                                                        <hr />
                                                        <a href={`/courses/${course.title}`}>View Course</a>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                )}
                                {isActiveddc2 && (
                                    <div className="dflexr cc1">
                                        <div className="dmc1">
                                            <div className="title dropdown-item"><h4 className="h hhh">POPULAR COURSES 2</h4></div>
                                            <div className="dropdown-item clight "><h4 className="h">Available soon ...</h4></div>
                                        </div>
                                    </div>
                                )}
                                {isActiveddc3 && (
                                    <div className="dflexr cc1">
                                        <div className="dmc1">
                                            <div className="title dropdown-item"><h4 className="h hhh">POPULAR COURSES 3</h4></div>
                                            <div className="dropdown-item clight "><h4 className="h">Available soon ...</h4></div>
                                        </div>
                                    </div>
                                )}
                                {isActiveddc4 && (
                                    <div className="dflexr cc1">
                                        <div className="dmc1">
                                            <div className="title dropdown-item"><h4 className="h hhh">POPULAR COURSES 4</h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a className='clight' href="https://www.simplilearn.com/cyber-security/ceh-certification" title="CEH (v12)- Certified Ethical Hacker" data-category-id="3" data-category-name="Cyber Security">CEH {'(v12)'}- Certified Ethical Hacker</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a className='clight' href="https://www.simplilearn.com/cyber-security/cissp-certification-training" title="CISSP®- Certified Information Systems Security Professional" data-category-id="3" data-category-name="Cyber Security">CISSP<sup>®</sup>- Certified Information Systems Security Professional</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a className='clight' href="https://www.simplilearn.com/cyber-security/cisa-certification-training" title="CISA®- Certified Information Systems Auditor" data-category-id="3" data-category-name="Cyber Security">CISA<sup>®</sup>- Certified Information Systems Auditor</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a className='clight' href="https://www.simplilearn.com/cyber-security/cism-certification-training" title="CISM®" data-category-id="3" data-category-name="Cyber Security">CISM<sup>®</sup></a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a className='clight' href="https://www.simplilearn.com/comptia-security-plus-certification-training" title="CompTIA Security+ 601" data-category-id="3" data-category-name="Cyber Security">CompTIA Security+ 601</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a className='clight' href="https://www.simplilearn.com/ccsp-certification-training" title="CCSP-Certified Cloud Security Professional" data-category-id="3" data-category-name="Cyber Security">CCSP-Certified Cloud Security Professional</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a className='clight' href="https://www.simplilearn.com/cyber-security/cobit-certification-training" title="COBIT®2019- Control Objectives for Information and Related Technologies" data-category-id="3" data-category-name="Cyber Security">COBIT<sup>®</sup>2019- Control Objectives for Information and Related Technologies</a></h4></div>
                                        </div>
                                    </div>
                                )}
                                {isActiveddc5 && (
                                    <div className="dflexr cc1">
                                        <div className="dmc1">
                                            <div className="title dropdown-item"><h4 className="h hhh">POPULAR COURSES 5</h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/cloud-computing/aws-solution-architect-associate-training" title="AWS Solutions Architect" >AWS Solutions Architect</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/cloud-computing/aws-developer-certification-training" title="AWS Developer Associate" >AWS Developer Associate</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/cloud-computing/aws-sysops-certification-training" title="AWS SysOps Associate" >AWS SysOps Associate</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/microsoft-azure-architect-design-certification-training-course" >Designing Microsoft Azure Infrastructure Solutions AZ-305</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/microsoft-azure-architect-design-certification-training-course" >Google Cloud Platform Architect Training</a></h4></div>
                                        </div>
                                    </div>
                                )}
                                {isActiveddc6 && (
                                    <div className="dflexr cc1">
                                        <div className="dmc1">
                                            <div className="title dropdown-item"><h4 className="h hhh">POPULAR COURSES 6</h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/mobile-and-software-development/python-development-training" title="Python Training" >Python Training</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/node-js-certification-training" title="Node.js Training" data-category-id="25" data-category-name="Software Development">Node.js Training</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/selenium-certification-training" title="Selenium 3.0 Training" data-category-id="25" data-category-name="Software Development">Selenium 3.0 Training</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/mobile-and-software-development/java-javaee-soa-development-training" title="Java Certification Training">Java Certification Training</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/mobile-and-software-development/java-javaee-soa-development-training" title="Java Certification Training">Salesforce Administrator & App Builder</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/mobile-and-software-development/java-javaee-soa-development-training" title="Java Certification Training">Angular Training</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/mobile-and-software-development/java-javaee-soa-development-training" title="Java Certification Training">.NET Programming</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/mobile-and-software-development/java-javaee-soa-development-training" title="Java Certification Training">SQL Training</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/mobile-and-software-development/java-javaee-soa-development-training" title="Java Certification Training">Introduction to IoT</a></h4></div>
                                        </div>
                                    </div>
                                )}
                                {isActiveddc7 && (
                                    <div className="dflexr cc1">
                                        <div className="dmc1">
                                            <div className="title dropdown-item"><h4 className="h hhh">POPULAR COURSES 3</h4></div>
                                            <div className="dropdown-item clight "><h4 className="h">Available soon ...</h4></div>
                                        </div>
                                    </div>
                                )}
                                {isActiveddc8 && (
                                    <div className="dflexr cc1">
                                        <div className="dmc1">
                                            <div className="title dropdown-item"><h4 className="h hhh">POPULAR COURSES 8</h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/digital-marketing/search-engine-optimization-seo-certification-training" title="Advanced Search Engine Optimization (SEO) Program" data-category-id="18" data-category-name="Digital Marketing">Advanced Search Engine Optimization {'(SEO)'} Program</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/digital-marketing/social-media-certification-training" title="Advanced Social Media Program" data-category-id="18" data-category-name="Digital Marketing">Advanced Social Media Program</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h">Advanced Pay Per Click {'(PPC)'} Program</h4></div>
                                        </div>
                                    </div>
                                )}
                                {isActiveddc9 && (
                                    <div className="dflexr cc1">
                                        <div className="dmc1">
                                            <div className="title dropdown-item"><h4 className="h hhh">POPULAR COURSES 9</h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/big-data-and-analytics/big-data-and-hadoop-training" title="Big Data Hadoop and Spark Developer" data-category-id="35" data-category-name="Big Data">Big Data Hadoop and Spark Developer</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/big-data-and-analytics/mongodb-certification-training" title="MongoDB Developer and Administrator" data-category-id="35" data-category-name="Big Data">MongoDB Developer and Administrator</a></h4></div>
                                            <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/aws-big-data-certification-training-course" title="AWS Data Analytics Certification Training" data-category-id="35" data-category-name="Big Data">AWS Data Analytics Certification Training</a></h4></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="dmc">



                        </div>
                    </div>
                </div>

            </div>
            <style jsx>
                {
                    `
.banner {
    width: 100%;
    background: url(https://www.simplilearn.com/ice9/assets/freemium/freemium-banner.jpg);
    background-position: top center;
    background-size: cover;
    background-height:100%;
    padding:74px;
    color:white;
}
.head{
    font-size:32px;
}

.recommendation-container .get-recommendation-block {
    padding: 16px 18px;
    background: linear-gradient(283.48deg, #ABDAF4 6.37%, #83D2D7 91.35%);
    border-radius: 16px;
    margin-top:24px;
}
.parent-block{
    display:flex;
    justify-content: center;
}
.left-block p{
    color:#044c74;
    font-size:26px;
    line-height:26px;
}
.get-recommendation-btn {
    background: #fff;
    border-radius: 6px;
    margin-top: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #044c74;
    padding: 5px 8px;
    max-width: 160px;
}
.extra-block {
    width: 20%;
    text-align: left;
    background-image: url(https://www.simplilearn.com/ice9/assets/recommedations_reverse.svgz);
    background-repeat: no-repeat;
    position:relative;
}
.key-feature ul li span {
    color: #272c37;
    font-size: 18px;
    margin-left:12px;
}
.key-feature ul li p {
    margin-left:28px;
}
.ccdiv{
    display:flex;
}
.career-growth {
    padding-bottom: 48px;
    padding-top: 48px;
}
.key-feature h2{
    font-size:24px;
    margin:auto 32px;
    color:#272c37;
    margin-top:22px;
}
.key-feature ul{
    list-style:none;
    display:flex;
    flex-wrap: wrap;
    margin-top:22px;
}
.dmg .clight{
    line-height: 42px;
    font-size: 14px;
    color: #51565e;
    display: block;
    padding-left: 15px;
    font-weight: 500;
    cursor: pointer;
    background: #eff7ff;
    border-radius: 4px;
    padding-bottom: 10px;
}
.clight h4{
    line-height: 14px;
    font-size: 14px;
    color:#51565e;
}
.key-feature li{
    width:50%;
    padding-right: 8px;
    color: #6c7480;
    max-width: 540px;

}
.left-video img{
    height: 100%;
    width:100%;
}
.dmc1{
    display:flex;
    flex-wrap: wrap;
}
.gif-img{
    width:452px;
    height:352px;
}
.partner img{
    width: 100%;
    height: 100%;
    margin: 34px auto;
}
.cbtn{
    padding:12px 62px;
    margin-top:42px;
}
.key-feature li:before {
    content: "";
    width: 16px;
    height: 16px;
    display: inline-block;
    background: url(https://www.simplilearn.com/ice9/assets/freemium-sprite_v7.svgz) no-repeat;
    position: relative;
    top: 2px;
    left: 0;
    background-position: -132px -374px;
}
 .image-tag::before {
    content: "";
    width: 15px;
    height: 15px;
    display: inline-block;
    background-size: cover;
    background: url(https://www.simplilearn.com/ice9/assets/tick_v2.svgz) no-repeat;
    position: relative;
    left: 10px;
}
.image-tag span{
    font-size:14px;
    color:#707070;
    margin-left:12px;
}
.ditemdiv{
    display:flex;
}
.hhh{
    font-size:16px;
}
.clight{
    padding:12px;
}
.clight:hover{
    background: #dcebfa !important;
}
.bso{
    box-shadow: 0px 2px 5px rgb(17 121 239 / 15%);
}
.card{
    margin:16px;
}







.box{
    width: 254px;
    height: 385px;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    padding-top: 60px;
    margin: 20px;
    text-align: center;
    letter-spacing: 1px;
    box-shadow: 0 3px 5px rgba(0,0,0,.3);
    overflow:hidden;
    position:relative;
    z-index: 0;
}

.box h3{
    font-size: 35px;
    padding: 20px 0;
    color: #444;
}

.box p{
    font-size: 15px;
    color: #777;
}

.box button{
    width:140px;
    height: 40px;
    background-color: #333;
    color: #fff;
    border:none;
    outline:none;
    font-size: 17px;
    cursor: pointer;
    border-radius: 50px;
    margin-top: 40px;
}

.box button:hover{
    letter-spacing: 2px;
    opacity: .8;
}

.box::before{
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.box::after{
    width: 100%;
    height: 100%;
    background-color: #6abd6b;
    background-image: linear-gradient(45deg, #b4ea90 0%, #6cdde6 100%);
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    clip-path: circle(20% at 90%);
    transition: .2s;
}

.box .count{
    position: absolute;
    top: 15px;
    right: 30px;
    font-size: 50px;
    font-weight: border;
    color: #fff;
}


.box:nth-child(2):after{
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80D0c7 100%);
}

.box:nth-child(3):after{
    background-color: #08AEEA;
    background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
}

.box:hover::after{
    clip-path:circle(100%);
}

.box:hover h3{
    color: #fff;
}

.box:hover p{
    color: #fff;
}

.box:hover button{
    color: #333;
    background-color: #fff;
}

.box:hover::before{
    background-color: rgb(red, green,blue,alpha);
}
                    `
                }

            </style>



        </div>

    )
}

export default Onlinecourses