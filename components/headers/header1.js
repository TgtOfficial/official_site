import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import Styles from '../../styles/header.module.css';
import CloseButton from 'react-bootstrap/CloseButton';
import DownD from "./dropdown/down";
import MultiDrop from './dropdown/nestdropdown';
import Image from "next/image";
import Topbar from "./topbar";





const Nav = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const confirm_modal = () => {
    console.log('modal is working ...')
    setShow(false)
  }

  const [isActive, setIsActive] = useState(false)
  const sidebar = () => {
    setIsActive(!isActive)
  }
  const [isActivefull, setIsActivefull] = useState(false)
  const sidebarfull = () => {
    setIsActivefull(!isActivefull)
  }
  const [isActiveSearch, setIsActiveSearch] = useState(false)
  const searchbar = () => {
    setIsActiveSearch(!isActiveSearch)
  }

  //top max dropdown

  const [isActiveTopbtn, setIsActiveTopbtn] = useState(false)
  const csbtn = () => {
    setIsActiveTopbtn(!isActiveTopbtn)
  }
  const [isActivec2, setIsActivec2] = useState(false)
  const c2 = () => {
    setIsActivec2(!isActivec2)
  }
  const [isActivec3, setIsActivec3] = useState(false)
  const c3 = () => {
    setIsActivec2(!isActivec2)
  }
  const [isActivec4, setIsActivec4] = useState(false)
  const c4 = () => {
    setIsActivec1(!isActivec1)
  }


  // courses categories section oncick events
  const [isActivemcc1, setIsActivemcc1] = useState(false)
  const mcc1 = () => {
    setIsActivemcc1(!isActivemcc1)
  }
  const [isActivemcc2, setIsActivemcc2] = useState(false)
  const mcc2 = () => {
    setIsActivemcc2(!isActivemcc2)
  }
  const [isActivemcc3, setIsActivemcc3] = useState(false)
  const mcc3 = () => {
    setIsActivemcc3(!isActivemcc3)
  }
  const [isActivemcc4, setIsActivemcc4] = useState(false)
  const mcc4 = () => {
    setIsActivemcc4(!isActivemcc4)
  }
  const [isActivemcc5, setIsActivemcc5] = useState(false)
  const mcc5 = () => {
    setIsActivemcc5(!isActivemcc5)
  }
  const [isActivemcc6, setIsActivemcc6] = useState(false)
  const mcc6 = () => {
    setIsActivemcc6(!isActivemcc6)
  }
  const [isActivemcc7, setIsActivemcc7] = useState(false)
  const mcc7 = () => {
    setIsActivemcc7(!isActivemcc7)
  }
  const [isActivemcc8, setIsActivemcc8] = useState(false)
  const mcc8 = () => {
    setIsActivemcc8(!isActivemcc8)
  }
  const [isActivemcc9, setIsActivemcc9] = useState(false)
  const mcc9 = () => {
    setIsActivemcc9(!isActivemcc9)
  }
  const [isActivemcc10, setIsActivemcc10] = useState(false)
  const mcc10 = () => {
    setIsActivemcc10(!isActivemcc10)
  }
  const [isActivemcc11, setIsActivemcc11] = useState(false)
  const mcc11 = () => {
    setIsActivemcc11(!isActivemcc11)
  }
  const [isActivemcc12, setIsActivemcc12] = useState(false)
  const mcc12 = () => {
    setIsActivemcc12(!isActivemcc12)
  }
  const [isActivemcc13, setIsActivemcc13] = useState(false)
  const mcc13 = () => {
    setIsActivemcc13(!isActivemcc13)
  }


  return (
    <>


      <style jsx>
        {

          `
    .dropdown a{
      margin-left:6px;
    }
    .navbar-toggler:focus{
      box-shadow:none;
    }
    .acbtn svg{
      height:22px;
      width:22px;
    }
    .acbtn{
      width:142px;
    }
    .sinput{
      border: none;
      width: 100%;
  }
  .sbtn{
    border: none;
    background-color: white;
    color: #118aef;
}
.sform{
  width: 415px;
  height:38px;
  display: flex;
  flex-direction: row-reverse;
  border:1px solid #118aef;
  border-radius:4px;
}
.loginbtndiv{
  width:48%;
}
.loginbtndiv a{
  float:right;
}
.mt-12{
  margin-top:14px;
}
.headc{
  width:100%;
  display: flex;
  justify-content: space-between;
}
::placeholder{
  color:#118aef;
}
.sidebarmin{
  position: fixed;
    background: white;
    top: 0;
    left: 0;
    right: 10%;
    z-index:2;
    height: 100vh;
}
.sidebarminfull{
  position:fixed;
    background: white;
    top: 0;
    left: 0;
    right: 0;
    z-index:2;
    height: 100vh;
}
.sidebarmin ul, .sidebarminfull ul{
  list-style:none;
  line-height: 34px;
}
.sbarm{
  display: flex;
    justify-content: space-between;
    line-height: 44px;
    justify-content: center;
}
.backico{
  position:absolute;
  left:8px;
}
.xclose{
  position:absolute;
  right:8px;
}
.searchdiv{
  position:absolute;
  right:40px;
  left:0;
  top:0;
  height:74px;
  background:white;
}
.searchdiv input{
  border:1px solid #00000054 !important;
  width:96%;
  margin: 16px auto
}

@media(max-width:900px){
  .mnavitems , .loginbtndiv{
      display: none;
  }
  .sform{
    display:none !important;
  }
}
    
    `
        }
      </style>


      <Topbar />
      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${Styles.header}`}>
        <div className="container">
          <div className="headc">
            <button onClick={sidebar} className={Styles.minnavbtn} type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            {isActive && (
              <div className="sidebarmin"  >
                <div className="list-group-item sb-head-bg sbarm text-center list-group-item-dark"><span onClick={sidebar} className="backico"><i className="fa  fa-arrow-left"></i></span><span className="menuname text-center">Menu</span></div>
                <ul className={Styles.navlists}>
                  <li onClick={sidebarfull} className="items">All Courses</li>
                  <li className="items"><a href={"/job-guarantee-programs"}>Job Guarantee</a></li>
                  <li className="items"><a href={"/online-courses"}>Free Online Courses</a></li>
                  <li className="items"><a href={"/qualifications"} >Resources</a></li>
                  <li className="items"><a href={"/corporate-training"} >Corporate Training</a></li>
                  <li className="items"><a href={"/become-an-instructor"}>Become an Instructor</a></li>
                  <li className="items"><a href={"/hire-from-us"}>Hire From Us</a></li>
                  <li className="items"><a href={"#"}>Digital transformation</a></li>
                </ul>
              </div>
            )}
            {isActivefull && (
              <div className="sidebarminfull"  >
                <div className="list-group-item sbarm sb-head-bg text-center list-group-item"><span onClick={sidebarfull} className="backico"><i className="fa  fa-arrow-left"></i></span><span className="menuname text-center">All Courses</span> <div onClick={() => { sidebarfull(); sidebar(); }} className="xclose"><CloseButton /></div></div>
                <ul className={Styles.navlists}>
                  <li onClick={mcc1} className="items"><a href="#" className="hh">Data1 Science {'&'} Business Analytics</a></li>
                  <li onClick={mcc2} className="items"><a href="#" className="hh">AI {'&'} Machine Learning</a></li>
                  <li onClick={mcc3} className="items"><a href="#" className="hh">Project Management</a></li>
                  <li onClick={mcc4} className="items"><a href="#" className="hh">Cyber Security</a></li>
                  <li onClick={mcc5} className="items"><a href="#" className="hh">Cloud Computing</a></li>
                  <li onClick={mcc6} className="items"><a href="#" className="hh">Software Development</a></li>
                  <li onClick={mcc7} className="items"><a href="#" className="hh">IT Service and Architecture</a></li>
                  <li onClick={mcc8} className="items"><a href="#" className="hh">Digital Marketing</a></li>
                  <li onClick={mcc9} className="items"><a href="#" className="hh">Big Data</a></li>

                </ul>
              </div>
            )}
            {/************************* Courses categories onClick section ******************************/}

            {isActivemcc1 && (
              <div className="sidebarminfull"  >
                <div className="list-group-item sbarm  ds text-center list-group-item"><span onClick={mcc1} className="backico"><i className="fa  fa-arrow-left"></i></span><span className="menuname text-center">Data Science {'&'} Business Analytics</span> <div onClick={() => { sidebarfull(); sidebar(); }} className="xclose"><CloseButton /></div></div>
                <div className="ccmin">
                  <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 1</h4></div>
                  <div className="dropdown-item clight "><h4 className="h">Applied Data Science with Python</h4></div>
                  <div className="dropdown-item clight "><h4 className="h">Data Science with R Programming</h4></div>
                  <div className="dropdown-item clight "><h4 className="h">Tableau Certification Training</h4></div>
                  <div className="dropdown-item clight "><h4 className="h">Power BI</h4></div>
                </div>
              </div>
            )}
            {isActivemcc2 && (
              <div className="sidebarminfull"  >
                <div className="list-group-item sbarm ds text-center list-group-item"><span onClick={mcc2} className="backico"><i className="fa  fa-arrow-left"></i></span><span className="menuname text-center">AI {'&'} Machine Learning</span> <div onClick={() => { sidebarfull(); sidebar(); }} className="xclose"><CloseButton /></div></div>
                <div className="ccmin">
                  <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 2</h4></div>
                  <div className="dropdown-item clight "><h4 className="h">Available soon ...</h4></div>
                </div>
              </div>
            )}
            {isActivemcc3 && (
              <div className="sidebarminfull"  >
                <div className="list-group-item sbarm ds text-center list-group-item"><span onClick={mcc3} className="backico"><i className="fa  fa-arrow-left"></i></span><span className="menuname text-center">Project Management</span> <div onClick={() => { sidebarfull(); sidebar(); }} className="xclose"><CloseButton /></div></div>
                <div className="ccmin">
                  <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 3</h4></div>
                  <div className="dropdown-item clight "><h4 className="h">Available soon ...</h4></div>
                </div>
              </div>
            )}
            {isActivemcc4 && (
              <div className="sidebarminfull"  >
                <div className="list-group-item sbarm ds text-center list-group-item"><span onClick={mcc4} className="backico"><i className="fa  fa-arrow-left"></i></span><span className="menuname text-center">Cyber Security</span> <div onClick={() => { sidebarfull(); sidebar(); }} className="xclose"><CloseButton /></div></div>
                <div className="ccmin">
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
            {isActivemcc5 && (
              <div className="sidebarminfull"  >
                <div className="list-group-item sbarm ds text-center list-group-item"><span onClick={mcc5} className="backico"><i className="fa  fa-arrow-left"></i></span><span className="menuname text-center">Cloud Computing</span> <div onClick={() => { sidebarfull(); sidebar(); }} className="xclose"><CloseButton /></div></div>
                <div className="ccmin">
                  <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 5</h4></div>
                  <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/cloud-computing/aws-solution-architect-associate-training" title="AWS Solutions Architect" >AWS Solutions Architect</a></h4></div>
                  <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/cloud-computing/aws-developer-certification-training" title="AWS Developer Associate" >AWS Developer Associate</a></h4></div>
                  <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/cloud-computing/aws-sysops-certification-training" title="AWS SysOps Associate" >AWS SysOps Associate</a></h4></div>
                  <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/microsoft-azure-architect-design-certification-training-course" >Designing Microsoft Azure Infrastructure Solutions AZ-305</a></h4></div>
                  <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/microsoft-azure-architect-design-certification-training-course" >Google Cloud Platform Architect Training</a></h4></div>
                </div>
              </div>
            )}
            {isActivemcc6 && (
              <div className="sidebarminfull"  >
                <div className="list-group-item sbarm ds text-center list-group-item"><span onClick={mcc6} className="backico"><i className="fa  fa-arrow-left"></i></span><span className="menuname text-center">DevOps</span> <div onClick={() => { sidebarfull(); sidebar(); }} className="xclose"><CloseButton /></div></div>
                <div className="ccmin">
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
            {isActivemcc7 && (
              <div className="sidebarminfull"  >
                <div className="list-group-item sbarm ds text-center list-group-item"><span onClick={mcc7} className="backico"><i className="fa  fa-arrow-left"></i></span><span className="menuname text-center">Business and Leadership</span> <div onClick={() => { sidebarfull(); sidebar(); }} className="xclose"><CloseButton /></div></div>
                <div className="ccmin">
                  <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 3</h4></div>
                  <div className="dropdown-item clight "><h4 className="h">Available soon ...</h4></div>
                </div>
              </div>
            )}
            {isActivemcc8 && (
              <div className="sidebarminfull"  >
                <div className="list-group-item sbarm ds text-center list-group-item"><span onClick={mcc8} className="backico"><i className="fa  fa-arrow-left"></i></span><span className="menuname text-center">Quality Management</span> <div onClick={() => { sidebarfull(); sidebar(); }} className="xclose"><CloseButton /></div></div>
                <div className="ccmin">
                  <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 8</h4></div>
                  <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/digital-marketing/search-engine-optimization-seo-certification-training" title="Advanced Search Engine Optimization (SEO) Program" data-category-id="18" data-category-name="Digital Marketing">Advanced Search Engine Optimization {'(SEO)'} Program</a></h4></div>
                  <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/digital-marketing/social-media-certification-training" title="Advanced Social Media Program" data-category-id="18" data-category-name="Digital Marketing">Advanced Social Media Program</a></h4></div>
                  <div className="dropdown-item clight "><h4 className="h">Advanced Pay Per Click {'(PPC)'} Program</h4></div>
                </div>
              </div>
            )}
            {isActivemcc9 && (
              <div className="sidebarminfull"  >
                <div className="list-group-item sbarm ds text-center list-group-item"><span onClick={mcc9} className="backico"><i className="fa  fa-arrow-left"></i></span><span className="menuname text-center">Software Development</span> <div onClick={() => { sidebarfull(); sidebar(); }} className="xclose"><CloseButton /></div></div>
                <div className="ccmin">
                  <div className="title dropdown-item"><h4 className="h">POPULAR COURSES 9</h4></div>
                  <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/big-data-and-analytics/big-data-and-hadoop-training" title="Big Data Hadoop and Spark Developer" data-category-id="35" data-category-name="Big Data">Big Data Hadoop and Spark Developer</a></h4></div>
                  <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/big-data-and-analytics/mongodb-certification-training" title="MongoDB Developer and Administrator" data-category-id="35" data-category-name="Big Data">MongoDB Developer and Administrator</a></h4></div>
                  <div className="dropdown-item clight "><h4 className="h"><a href="https://www.simplilearn.com/aws-big-data-certification-training-course" title="AWS Data Analytics Certification Training" data-category-id="35" data-category-name="Big Data">AWS Data Analytics Certification Training</a></h4></div>
                </div>
              </div>
            )}
            {/************************* Courses categories onClick section ******************************/}

            <a className="navbar-brand" href="/"><img className={Styles.logo} src="/tgt.png" alt="LOGO" /></a>

            <button className={Styles.minnavbtn} onClick={searchbar} type="submit"><i className="bi bi-search"></i></button>
            {isActiveSearch && (
              <form className="searchdiv"  >
                <input className="form-control ms-2 sinput " type="search" placeholder="What do you want to learn?" />
              </form>
            )}
            <div className={Styles.mnavitems}>
              <DownD />
            </div>
            <form className="d-flex btn mt-12 sform">
              <input className="form-control ms-2 sinput " type="search" placeholder="What do you want to learn?" aria-label="Search" />
              <button className="sbtn " type="submit"><i className="bi bi-search"></i></button>
            </form>
            <div className="loginbtndiv mt-12"><a className="btn btn-outline-secondary" href="/login">Log in</a></div>

          </div>
        </div>
      </nav>
      <style jsx>
        {
          `
          .dm{
            list-style:none;
            padding-left:4px;
          }
          .items a {
            color:black;
          }
          .hbtn{
            width: 126px;
            margin: auto 22px;
        }
          .mdm{
            position:absolute;
            width:55vw;
            
          }
          .h{
              font-size:16px;
              color:#272c37;
              line-height:32px;
            }
          .csdiv{
            position: absolute;
            width: 50vw;
            height: 20vh;
            top: 84px;
            background: white;
          }
          .ccmin{
            margin:44px;
          }          
          `
        }


      </style>

    </>
  )
}

export default Nav
