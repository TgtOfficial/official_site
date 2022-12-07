import Header1 from '../components/headers/header1'
import WhyHire from '../components/cards/whyhire'
import LearnersProfile from '../components/cards/lerarnersprofile'
import HireForm from '../components/hireContact'
import FAQ2 from '../components/footers/faq2'
import Footer from '../components/footers/footer'

function Hire() {

    return (
        <>
            <div className="main_c_hfus">
                <Header1 />
                <div className="main mt-5">
                    <div className="container homebanner">
                        <div className="left">
                            <h1 className="title">Best Talent. Zero Cost. Easy Hiring.</h1>
                            <p>SimpliRecruit is the one stop platform to hire job ready, industry trained talent for your organization. Hire the best candidates for Digital Marketing, Data Science, Full Stack Java Developer &amp; more with one click &amp; at zero cost.</p>
                            <div className="btn hbtn btn-primary">Start Hiring</div>
                        </div>
                        <div className="ri8">
                        <img src="https://sl-blog.simplilearn.com/wp-content/uploads/2022/10/Group-76511.png" alt="" />
                        </div>
                    </div>
                    <div className="rowdiv">
                        <div className="row container hbc m-auto bg">
                            <div className="col"><span className="bigtxt">2.2+</span><span className="stxt">Million Learners</span></div>
                            <div className="col"><span className="bigtxt">400+</span><span className="stxt">Hiring Partners</span></div>
                            <div className="col"><span className="bigtxt">300+</span><span className="stxt">Core skills</span></div>
                        </div>
                        <WhyHire />
                        <LearnersProfile />
                        <div className="learners pb-5">
                            <div className="titlediv  pb-5 container">
                                <h2 className="mtitle pt-5 mb-5">Learners Highlights</h2>
                            </div>
                            <div className="cardsdiv container">
                                <div className="cards">
                                    <div className="citem">
                                        <span className="topcircle">73%</span>
                                        <span className="mtext">of our learners fall under 0-3 years of experience.</span>
                                    </div>
                                    <div className="citem">
                                        <span className="topcircle">90%</span>
                                        <span className="mtext">of our learners achieve positive career outcomes.</span>
                                    </div>
                                    <div className="citem">
                                        <span className="topcircle">80%</span>
                                        <span className="mtext">of our learners can join immediately after hiring.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <HireForm/>
                        <FAQ2/>
                        <Footer/>


                    </div>

                </div>
            </div>

            <style jsx>
                {
                    `
.left, .ri8{
    width:50%;
}
.learners{
    background:#F6F6FF;
}
.mtitle{
    font-weight:bold;
    
}
.cards{
    display:flex;
    justify-content:space-between;
}
.topcircle{
    background: #013584;
    color: white;
    font-size: 24px;
    font-weight: 700;
    padding: 18px 12px;
    border-radius: 66px;
    position: relative;
    top: -38px;
}
@media(max-width:992px){
    .cards, .hbc{
        display:flex;
        flex-direction:column !important;
    }
    .col{
        flex:unset !important;
    }
    .left, .ri8{
     width:100%;
    }
    .ri8 img{
        width:96% !important;
    }
    .hbtn{
        margin-bottom:22px;
    }
    .citem{
        margin-top:44px !important;
    }
    .hbc{
        margin:1px !important;
    }
}
.mtext{
    color: #797979;
    font-size: 16px;
    font-weight: normal;
    text-align:center;
    position:relative;
    top:-22px;
}
.citem{
    border-radius:10px;
    background:white;
    padding:22px;
    margin:14px;
    height:120px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.left .title{
    color: #1C2843;
    font-family: "Roboto", Sans-serif;
    font-size: 48px;
    line-height: 60px;
    margin-top:14px;
}
.hbc{
    border-radius:10px;
    color:white;
    padding:24px;
    text-align:center;
}
.hbc .bigtxt{
    font-size: 50px;
    font-weight:bold;
}
.hbc .stxt{
    color:#98B8E9;
    font-size:18px;
    position:relative;
    top:-12px;
    left:12px;
}

.bg{
    background:#013584;
}
.hbtn{
    font-size: 18px;
    padding: 14px 40px;
    border-radius: 5px;
}
.left p{
    color: #797979;
    font-size: 16px;
    line-height: 30px;
    margin: 22px auto;
}
.homebanner{
    display:flex;
}
@media(max-width:992px){
    .homebanner{
        flex-direction:column-reverse;
    }
    .homebanner .ri8 img{
        width:100%;
    }

}
    `
                }

            </style>


        </>
    )
}

export default Hire