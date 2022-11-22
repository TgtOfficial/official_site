function LearningExperience() {
    return (
        <>
            <div className="maindiv mt-3 mb-3">
                <div className="titlediv  p-3 container">

                    <p className="text">Our{"'"}s online Bootcamps</p>
                    <h2 className="heading">An immersive learning experience</h2>
                </div>
                <div className="carddiv">
                    <div className="cards container">
                        <div className="gitem">
                            <div className="bootcamp-img">
                                <img src="/icons/briefcase.png" alt="Online Bootcamp" loading="lazy" className="gm-loaded gm-observing gm-observing-cb" />
                            </div>
                            <div className="bootcamp-info">
                                <h4>Develop skills for real career growth</h4>
                                <p>Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills</p>
                            </div>
                        </div>
                        <div className="gitem">
                            <div className="bootcamp-img">
                                <img src="/icons/mgraph.jpg" alt="Online Bootcamp" loading="lazy" className="gm-loaded gm-observing gm-observing-cb" />
                            </div>
                            <div className="bootcamp-info">
                                <h4>Learn from experts active in their field, not out-of-touch trainers</h4>
                                <p>Leading practitioners who bring current best practices and case studies to sessions that fit into your work schedule.</p>
                            </div>
                        </div>
                        <div className="gitem">
                            <div className="bootcamp-img">
                                <img src="/icons/laptop.png" alt="Online Bootcamp" loading="lazy" className="gm-loaded gm-observing gm-observing-cb" />
                            </div>
                            <div className="bootcamp-info">
                                <h4>Learn by working on real-world problems</h4>
                                <p>Capstone projects involving real world data sets with virtual labs for hands-on learning</p>
                            </div>
                        </div>
                        <div className="gitem">
                            <div className="bootcamp-img">
                                <img src="/icons/clock.png" alt="Online Bootcamp" loading="lazy" className="gm-loaded gm-observing gm-observing-cb" />
                            </div>
                            <div className="bootcamp-info">
                                <h4>Structured guidance ensuring learning never stops</h4>
                                <p>24x7 Learning support from mentors and a community of like-minded peers to resolve any conceptual doubts</p>
                            </div>

                        </div>
                        {/* <div>
                            <div className="bootcamp-img">
                                <img width="16" height="9" src="/icons/clock.png"  alt="Online Bootcamp" loading="lazy" className="gm-loaded gm-observing gm-observing-cb" />
                            </div>
                            <div className="bootcamp-info">
                                <h4>Structured guidance ensuring learning never stops</h4>
                                <p>24x7 Learning support from mentors and a community of like-minded peers to resolve any conceptual doubts</p>
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>


            <style jsx>
                {
                    `

.bootcamp-img{
    height:82px;
}
.bootcamp-img img{
    width:50px;
}
h2{
    font-weight:300;
}
.gitem{
    width:262px;
    padding-right:22px;
}
.cards
{
    display:flex;
    justify-content:space-between;
}
.bootcamp-info p{
    font-size:14px;
    color:gray;
}
.bootcamp-info h4{
    font-size:16px;
    
}
@media(max-width:992px){
    .cards{
    flex-direction:column;
    }
    .gitem{
        display:flex;
        width:100%;
        margin-bottom:24px;
    }
    .gitem .bootcamp-info{
        width:100%;
        margin-left:22px;
    }
}


    `
                }

            </style>


        </>
    )
}

export default LearningExperience