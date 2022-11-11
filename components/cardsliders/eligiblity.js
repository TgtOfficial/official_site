import Carousel from 'react-bootstrap/Carousel';

import React from "react";

function certificationCourses() {
    return (
        <><div className="main bg-white">
            <div className="container mc  bg-white">
                <div className="text m-3 mb-5">
                    <h3 className="head">Eligibility Criteria</h3>
                </div>
                <div className="cdiv">

                    <Carousel variant='dark' className='maxview' interval={40044}>
                        <Carousel.Item>

                            <div className="cards bg-white d-flex">
                                <div className="card ds1">
                                    <a className="cr-4 cr " href="agile-and-scrum/csm-certification-training" >
                                        <h4><span>Certified ScrumMaster<sup>®</sup> (CSM)</span></h4>
                                    </a>
                                    <div className="ptext"><p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ut libero tempore unde sit sed corrupti pariatur, eos hic aliquam animi neque eius eum?</p></div>
                                </div>
                                <div className="card ds1">
                                    <a className="cr-4 cr " href="agile-and-scrum/csm-certification-training" >
                                        <h4><span>Certified ScrumMaster<sup>®</sup> (CSM)</span></h4>
                                    </a>
                                    <div className="ptext"><p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ut libero tempore unde sit sed corrupti pariatur, eos hic aliquam animi neque eius eum?</p></div>
                                </div>
                                <div className="card ds1">
                                    <a className="cr-4 cr " href="agile-and-scrum/csm-certification-training" >
                                        <h4><span>Certified ScrumMaster<sup>®</sup> (CSM)</span></h4>
                                    </a>
                                    <div className="ptext"><p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ut libero tempore unde sit sed corrupti pariatur, eos hic aliquam animi neque eius eum?</p></div>
                                </div>
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>

                            <div className="cards bg-white d-flex">
                                <div className="card ds1">
                                    <a className="cr-4 cr " href="agile-and-scrum/csm-certification-training" >
                                        <h4><span>Certified ScrumMaster<sup>®</sup> (CSM)</span></h4>
                                    </a>
                                    <div className="ptext"><p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ut libero tempore unde sit sed corrupti pariatur, eos hic aliquam animi neque eius eum?</p></div>
                                </div>
                                <div className="card ds1">
                                    <a className="cr-4 cr " href="agile-and-scrum/csm-certification-training" >
                                        <h4><span>Certified ScrumMaster<sup>®</sup> (CSM)</span></h4>
                                    </a>
                                    <div className="ptext"><p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ut libero tempore unde sit sed corrupti pariatur, eos hic aliquam animi neque eius eum?</p></div>
                                </div>
                                <div className="card d1s">
                                    <a className="cr-4 cr " href="agile-and-scrum/csm-certification-training" >
                                        <h4><span>Certified ScrumMaster<sup>®</sup> (CSM)</span></h4>
                                    </a>
                                    <div className="ptext"><p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ut libero tempore unde sit sed corrupti pariatur, eos hic aliquam animi neque eius eum?</p></div>
                                </div>                            </div>

                        </Carousel.Item>
                    </Carousel>
                    <Carousel variant='dark' className='minview' interval={40044}>
                        <Carousel.Item>

                            <div className="cards bg-white d-flex">
                                <div className="card ds1">
                                    <a className="cr-4 cr " href="agile-and-scrum/csm-certification-training" >
                                        <h4><span>Certified ScrumMaster<sup>®</sup> (CSM)</span></h4>
                                    </a>
                                    <div className="ptext"><p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ut libero tempore unde sit sed corrupti pariatur, eos hic aliquam animi neque eius eum?</p></div>
                                </div>
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="cards bg-white d-flex">
                                <div className="card ds1">
                                    <a className="cr-4 cr " href="agile-and-scrum/csm-certification-training" >
                                        <h4><span>Certified ScrumMaster<sup>®</sup> (CSM)</span></h4>
                                    </a>
                                    <div className="ptext"><p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ut libero tempore unde sit sed corrupti pariatur, eos hic aliquam animi neque eius eum?</p></div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    <div className="disc text-center mt-5"><p>Get shortlisted for the program based on your performance on the qualifying test. For more details, please read the applicable Frequent Asked Questions (FAQs) and <a href="https://www.simplilearn.com/terms-and-conditions" target="_blank">Terms and Conditions</a> <span>(T&amp;Cs).</span></p></div>

                </div>
            </div></div>
            <style jsx>
                {
                    `
.mc{
    padding-top:72px;
    line-height:22px;
}
.disc p{
    font-size:12px;
    color:gray;
}
.ds1{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}
h4 div {
    font-size: 18px;
    line-height: 1.44;
    min-height: 52px;
}
.card{
    width: 336px;
    margin: 12px;
    padding: 10px;
}
.cards{
    display:flex;
    flex-wrap:wrap;
}
.card a::before{
    content: "";
    width: 5px;
    height: 35px;
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 0;
}
.cr{
    padding:8px 12px;
}

.cr::before{
    background:blue;
}


.card h4{
    font-size:22px;
    font-weight:600;
}
.card p{
    font-size:14px;
    line-height:22px;
    padding:12px;
}


.type {
    display: inline-block;
    top: -12px;
    background: #e2edf9;
    line-height: 22px;
    padding: 0px 10px;
    font-size: 12px;
    color: #6c7480;
    text-transform: uppercase;
    position: relative;
}
 .rating-wrap span {
    font-size: 12px;
    color: #636363;
    margin-right: 12px;
}
 .rating-wrap .rating::before {
    content: "";
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url(/icons1.svgz) no-repeat;
    background-position: -183px -21px;
    vertical-align: middle;
    margin-top: -2px;
    margin-right: 5px;
}
.type::after {
    content: "";
    display: inline-block;
    width: 15px;
    height: 22px;
    background: url(/icons1.svgz) no-repeat;
    background-position: -309px -57px;
    position: absolute;
    right: -15px;
}


    `
                }

            </style>



        </>
    )

}
export default certificationCourses