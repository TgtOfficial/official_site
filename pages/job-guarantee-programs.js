import Header1 from '../components/headers/header1'
import JobGuaranteeProgram from '../components/cardsliders/jobGuaranteeProgram';
import Eligiblity from '../components/cardsliders/eligiblity';
import Alluminiworks from '../components/cards/alluminiworks'
import StartYourCareer from '../components/carousels/startYourCareer'
import FAQ from '../components/footers/faq'

function Job() {
    return (
        <>

            <div className="main_container_index">
                <Header1 />
                <div className="maindiv banner ">
                    <div className="homediv container  d-flex ">
                        <div  className="contentdiv container w-50">
                            <div className="lft-clm">
                                <h1>
                                    <span>Learn with Simplilearn <br /> Get a Job - guaranteed*</span>
                                </h1>
                                <ul>
                                    <li>
                                        <img  alt="Job Guarantee*" src="https://www.simplilearn.com/ice9/jg-insta/60455585-0-Group-2927.png" width="24" height="24" />
                                        <span>Job Guarantee*
                                        </span>
                                    </li>
                                    <li>
                                        <img alt="Career Mentoring and Interview Preparation" src="https://www.simplilearn.com/ice9/jg-insta/60455585-0-Group-2927.png" width="24" height="24" /><span>Career Mentoring and Interview Preparation
                                        </span>
                                    </li>
                                    <li>
                                        <img alt="316% - Maximum Salary Hike* (Till date)" src="https://www.simplilearn.com/ice9/jg-insta/60455585-0-Group-2927.png" width="24" height="24" />
                                        <span>316% - Maximum Salary Hike* (Till date)</span>
                                    </li>
                                    <li>
                                        <img alt="200+ Hiring Partners" src="https://www.simplilearn.com/ice9/jg-insta/60455585-0-Group-2927.png" width="24" height="24" /><span>200+ Hiring Partners</span></li></ul></div> </div>
                        <div className="imagediv w-50">
                            <img src="/jobs.png" alt="" />
                        </div>
                    </div>
                    <div className=" text-gray bgc p-3 "><p className='container small'>*Disclaimer: Valid only for Simplilearn Job Guarantee Programs. Please read the applicable Frequently Asked Questions (FAQs) and <a href="https://www.simplilearn.com/terms-and-conditions" target="_blank"> Terms and Conditions </a> (T&amp;Cs) carefully prior to enrolment. Past record is no guarantee of future prospects.</p></div>
                    <div className=" bg-white  ">
                        <div className="container pt-5 pb-5 career-launch d-flex">
                            <div className="heading">
                                <h2>Launch your career in the hottest fields of the century <br />
                                    <b> PROGRAMMING, DATA &amp; DIGITAL MARKETING <b>

                                    </b>
                                    </b>
                                </h2>
                            </div>
                            <div className="item">
                                <img src="https://www.simplilearn.com/ice9/jg-insta/60500615-0-shape.png" alt="graph line" width="75" height="60" />
                                <p>2+ million data, programming &amp; digital marketing jobs are in India
                                    <span>(As per Linkedin)</span></p></div><div className="item">
                                <img src="https://www.simplilearn.com/ice9/jg-insta/60500615-0-shape.png" alt="graph line" width="75" height="60" />
                                <p>Now guarantee* yours and get the career kickstart you deserve.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <JobGuaranteeProgram/>
                <Eligiblity/>
                <Alluminiworks/>
                <StartYourCareer/>
                <FAQ/>
            </div>
            <style>
                {
                    `
.homediv,.maindiv{
    background:#00376d;
}
.bgc{
    background:#f5fafe;
}
.lft-clm h1 span {
    line-height: 42px;
    font-size: 34px;
    color:white;
}
.lft-clm h1 span::after {
    
    display: inline-block;
    width: 210px;
    height: 10px;
    background: url(https://www.simplilearn.com/ice9/jg-insta/60502510-0-orange-line.png) no-repeat;
    background-size: contain;
    margin-right: 140px;
    float: right;
    margin-top: 10px;
}
.lft-clm ul{
    list-style:none;
    margin:34px auto;
    padding-left: 0px;
    color:white;

}
.lft-clm ul span{
    line-height: 40px;
    font-size: 16px;
    padding-left:19px;
}
.lft-clm{
    margin-top:54px;
}
.career-launch .heading h2 b {
    color: #f29b20;
    font-size: 20px;
    line-height: 24px;
}
.career-launch .heading h2  {
    line-height:26px;
    font-size: 20px;
    max-width:346px;
}
.career-launch .item img {
    width: 97px;
    height: 76px;
    position:absolute;
}
.career-launch .item p {
    font-size: 16px;
    line-height: 24px;
    padding:22px;
    font-weight:500;
    max-widht:246px;
}
.career-launch .item  {
    max-width:246px;
}
@media(max-width:992px){
    .homediv{
        flex-direction:column-reverse;
    }
    .homediv .w-50{
        width:100%!important;
    }
    .homediv .imagediv img{
        width:100%!important;
    }
    .career-launch{
        flex-direction:column;
    }
    .career-launch .item{
        max-width:100%;
    }
    .lft-clm h1 span{
        font-size:26px;
    }
    .lft-clm h1 span::after{
        width:128px;
        margin-right:60px;
    }
    .lft-clm ul span {
        font-size:14px;
    }
}
                `
                }
            </style>

        </>
    )
}

export default Job