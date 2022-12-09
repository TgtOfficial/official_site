
import Dright from './right';
import { useState } from "react";
import axios from 'axios';
import Link from 'next/link';


function DropDirectioExample() {

    const [isActivedd, setIsActivedd] = useState(false)

    const dd = () => {
        setIsActivedd(!isActivedd);
        setIsActive(!isActive)

    }
    // isactive categories

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



    const ddc1 = () => {
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




    const [courses, setCourses] = useState([]);

    const [isCoursesApi, setIsCoursesApi] = useState(false)

    let courss = 0;

    const coption = () => {
        setIsActive(!isActive)
        alert("testing")
    }

    if (isCoursesApi == false) {

        const resposse = axios.get("/api/courses")
            .then(
                data => {
                    setCourses(data)
                    courss = data;
                    setIsCoursesApi(!isCoursesApi)
                    coption
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    const [isActive, setIsActive] = useState(false)




    return (
        <>
            <div className="mb-2">
                <div className="nav-item dropdown">
                    <div onMouseEnter={dd} onClick={dd} className="nav-divnk btn   topbtn btn-primary " >
                        <i className="fa fa-bars"></i>
                        <span className="btnname">All Courses</span>
                    </div>
                    {isActivedd && (
                        <div onMouseLeave={dd} className="topddc">
                            {/* <div className='ditemdiv' >
                                <div className="dmg p-3">
                                    <div className="ci1 title dropdown-item"><h4 className="h">COURSE CATEGORIES</h4></div>
                                    <div onMouseOut={ddc1} onClick={ddc1} className="ci2 dropdown-item clight "><h4 className="h">Data Science {'&'} Business Analytics</h4></div>
                                    <div onMouseOut={ddc2} onClick={ddc2} className="ci3 dropdown-item clight "><h4 className="h">AI {'&'} Machine Learning</h4></div>
                                    <div onMouseOut={ddc3} onClick={ddc3} className="ci4 dropdown-item clight "><h4 className="h">Project Management</h4></div>
                                    <div onMouseOut={ddc4} onClick={ddc4} className="ci5 dropdown-item clight "><h4 className="h">Cyber Security</h4></div>
                                    <div onMouseOut={ddc5} onClick={ddc5} className="ci6 dropdown-item clight "><h4 className="h">Cloud Computing</h4></div>
                                    <div onMouseOut={ddc6} onClick={ddc6} className="ci10 dropdown-item clight "><h4 className="h">Software Development</h4></div>
                                    <div onMouseOut={ddc7} onClick={ddc7} className="ci12 dropdown-item clight "><h4 className="h">IT Service and Architecture</h4></div>
                                    <div onMouseOut={ddc8} onClick={ddc8} className="ci13 dropdown-item clight "><h4 className="h">Digital Marketing</h4></div>
                                    <div onMouseOut={ddc9} onClick={ddc9} className="ci14 dropdown-item clight "><h4 className="h">Big Data</h4></div>

                                </div>
                                <div className="dmr p-3 d-flex">
                                    {isActiveddc1 && (
                                        <div className="dflexr cc1">
                                            <div className="dmc1">
                                                <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 1</h4></div>
                                                <div className="dropdown-item clight "><h4 className="h">Applied Data Science with Python</h4></div>
                                                <div className="dropdown-item clight "><h4 className="h">Data Science with R Programming</h4></div>
                                                <div className="dropdown-item clight "><h4 className="h">Tableau Certification Training</h4></div>
                                                <div className="dropdown-item clight "><h4 className="h">Power BI</h4></div>
                                            </div>
                                        </div>
                                    )}
                                    {isActiveddc2 && (
                                        <div className="dflexr cc1">
                                            <div className="dmc1">
                                                <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 2</h4></div>
                                                <div className="dropdown-item clight "><h4 className="h">Available soon ...</h4></div>
                                            </div>
                                        </div>
                                    )}
                                    {isActiveddc3 && (
                                        <div className="dflexr cc1">
                                            <div className="dmc1">
                                                <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 3</h4></div>
                                                <div className="dropdown-item clight "><h4 className="h">Available soon ...</h4></div>
                                            </div>
                                        </div>
                                    )}
                                    {isActiveddc4 && (
                                        <div className="dflexr cc1">
                                            <div className="dmc1">
                                                <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 4</h4></div>
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
                                                <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 5</h4></div>
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
                                                <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 6</h4></div>
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
                                                <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 3</h4></div>
                                                <div className="dropdown-item clight "><h4 className="h">Available soon ...</h4></div>
                                            </div>
                                        </div>
                                    )}
                                    {isActiveddc8 && (
                                        <div className="dflexr cc1">
                                            <div className="dmc1">
                                                <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 8</h4></div>
                                                <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/digital-marketing/search-engine-optimization-seo-certification-training" title="Advanced Search Engine Optimization (SEO) Program" data-category-id="18" data-category-name="Digital Marketing">Advanced Search Engine Optimization {'(SEO)'} Program</a></h4></div>
                                                <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/digital-marketing/social-media-certification-training" title="Advanced Social Media Program" data-category-id="18" data-category-name="Digital Marketing">Advanced Social Media Program</a></h4></div>
                                                <div className="dropdown-item clight "><h4 className="h">Advanced Pay Per Click {'(PPC)'} Program</h4></div>
                                            </div>
                                        </div>
                                    )}
                                    {isActiveddc9 && (
                                        <div className="dflexr cc1">
                                            <div className="dmc1">
                                                <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 9</h4></div>
                                                <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/big-data-and-analytics/big-data-and-hadoop-training" title="Big Data Hadoop and Spark Developer" data-category-id="35" data-category-name="Big Data">Big Data Hadoop and Spark Developer</a></h4></div>
                                                <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/big-data-and-analytics/mongodb-certification-training" title="MongoDB Developer and Administrator" data-category-id="35" data-category-name="Big Data">MongoDB Developer and Administrator</a></h4></div>
                                                <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/aws-big-data-certification-training-course" title="AWS Data Analytics Certification Training" data-category-id="35" data-category-name="Big Data">AWS Data Analytics Certification Training</a></h4></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div> */}
                            <div className="ditemdiv">

                                {isActive && (<div className="list-group">

                                    {
                                        courses.data.map((course) => (
                                            <Link className='item' key={course.title} href={`/courses/${course.title}`}><div className='list-group-item list-group-item-primary' key={course.title}>{course.title}</div></Link>
                                        ))
                                    }
                                </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <style jsx>
                {
                    `
                    .topddc{
                        position: absolute;
                        background: white;
                        top: 54px;
                        z-index:2;
                        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
                        border-radius: 4px;
                        width:50vw;
                        padding:12px;
                    }
                    .list-group{
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                    }
                    .list-group .item{
                        width:30%; margin:12px;
                        cursor: pointer;
                    }
                    .a{
                        color:#272c37ad!important;
                    }
                    .dropdiv{
                        width: 55vw;
                        top: 59px;
                    }
                    .topbtn{
                        margin:auto 22px;
                        width:144px;
                    }
                    .btnname{
                        margin-left:8px;
                    }
                    .ditemdiv{
                        display:flex;
                    }
                    .dropdown-item{
                        padding:4px;
                    }
                    .dmg{
                        background:#f1f6fa;
                    }
                    .h{
                        font-size:12px;
                        color:#272c37;
                    }
                    .dropdown-item:hover{
                        color:blue !important;
                        background:white;
                        cursor:pointer;
                    }
                    .clight h4{
                        color:#272c37ad !important;
                    }
                    .h:hover{
                        color:blue;
                        
                    }
                    
                    `
                }
            </style>
        </>
    );
}

export default DropDirectioExample;