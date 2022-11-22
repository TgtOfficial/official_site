import Header1 from '../components/headers/header1'


function Ct() {

    return (
        <>
            <div className="main">
                <Header1 />
                <div className="banner">
                    <div className="container">
                        <h1 data-test="banner-title">Upskill Your Organization</h1>
                        <span className="banner-info" data-test="banner-subtitle">with the World's #1 Online Bootcamp</span>
                        <div className="btndiv">
                            <a href="#" className="btn btn-primary btnc">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="globalbrands">
                    <h2>Trusted by enterprises across the globe</h2>
                    <img className="mobile" width="313" height="156" src="https://www.simplilearn.com/ice9/assets/ct-page/companylogosmobile.svgz" alt="Partners" />
                    <img className="tab" width="519" height="108" src="https://www.simplilearn.com/ice9/assets/ct-page/companylogostab.svgz" alt="Partners" />
                    <img className="desktop" width="1045" height="102" src="https://www.simplilearn.com/ice9/assets/ct-page/companylogosdesktop.svgz" alt="Partners" />
                </div>
                <div className="container pb-5 mt-5 btcamp">
                    <div className="key-feature">
                        <h2 data-test="bootcampTitle">The Power of <b>Simplilearn's Bootcamp</b></h2>
                        <p data-test="bootcampSubtitle">Research shows that hands-on, interactive learning is
                            <span className="highlight">7X more effective</span>
                            than simply reading or watching course material.
                        </p>
                        <span data-test="bootcampHeading">That{"’"}s why Simplilearn{"’"}s Bootcamp provides:</span>
                        <ul>
                            <li>Live virtual classes taught by industry experts</li>
                            <li>Cohort based learning with peer-to-peer interaction</li>
                            <li>Capstone projects involving real world data sets with virtual labs for hands-on learning</li>
                            <li>24/7 teaching assistance with access to learner social forums</li>
                        </ul>
                    </div>
                    <div className="bootcamp-img mt-5">
                        <img className="blend-mode " width="16" height="9" src="https://www.simplilearn.com/ice9/assets/ct-page/ct-bootcamp.gif" alt="corporate bootcamp gif" />
                    </div>
                </div>
                <div className="potential">
                    <div className="container">
                        <dv className="head">
                            <h2 data-test="potential-title">
                                <b>Unlock</b> Your Team's Potential</h2>
                        </dv>
                        <span data-test="potential-subtitle">Role-aligned learning paths that map digital skills to desired learner outcomes.</span>
                        <div className="teams">
                            <div className="team">
                                <h3>Technology</h3>
                                <ul>
                                    <li><a target="_blank" href="/cloud-computing">Cloud Computing</a></li>
                                    <li><a target="_blank" href="/devops">Devops </a></li>
                                    <li><a target="_blank" href="/cyber-security">Cyber Security </a></li>
                                    <li><a target="_blank" href="/mobile-and-software-development">Software Development </a></li>
                                </ul>
                            </div>
                            <div className="team">
                                <h3>Data and AI</h3>
                                <ul>
                                    <li><a target="_blank" href="/data-science-and-business-analytics">Data Science &amp; Business Intelligence </a></li>
                                    <li><a target="_blank" href="/ai-and-machine-learning">AI &amp; Machine Learning </a></li>
                                    <li><a target="_blank" href="/big-data-certification-courses">Big Data </a></li>
                                </ul>
                            </div>
                            <div className="team">
                                <h3>Digital Business</h3>
                                <ul>
                                    <li><a target="_blank" href="/digital-marketing">Digital Marketing </a></li>
                                    <li><a target="_blank" href="/business-and-leadership-certification-training-courses">Business and Leadership </a></li>
                                </ul>
                            </div>
                            <div className="team">
                                <h3>Digital Operations</h3>
                                <ul>
                                    <li><a target="_blank" href="/agile-and-scrum">Agile &amp; Scrum </a></li>
                                    <li><a target="_blank" href="/it-service-management">IT Service &amp; Architecture </a></li>
                                    <li><a target="_blank" href="/project-management">Project Management </a></li>
                                    <li><a target="_blank" href="/quality-management">Quality Management </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ct-partner">
                            <p data-test="potential-subheading">Comprehensive programs aligned with leading certification bodies, universities, and corporate partners.</p>
                            <div className="ct-logo">
                                <img className="mobile blend-mode" width="16" height="9" src="https://www.simplilearn.com/ice9/assets/ct-page/partnerlogosmobile_1.svgz" alt="Partners" />
                                <img className="tab blend-mode" width="16" height="9" src="https://www.simplilearn.com/ice9/assets/ct-page/partnerlogostab_1.svgz" alt="Partners" />
                                <img className="desktop blend-mode" width="16" height="9" src="https://www.simplilearn.com/ice9/assets/ct-page/partnerlogosdesktop_1.svgz" alt="Partners" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {
                    `

.banner {
    background: url(https://www.simplilearn.com/ice9/assets/ct-page/Banner.jpg) no-repeat;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    width: 100%;
    height:410px;
}
.potential span {
    margin-bottom: 40px;
    color: #51565e;
    font-size: 14px;
    margin-top: 16px;
}
.ct-partner p{
    margin:24px auto;
    text-align: center;
    color: #51565e;
}
.teams{
    margin-top:24px;
}
.potential .team h3{
    border-left:3px solid #f5ab40;
    padding:0px 16px;
}
.team ul{
    padding:0;
    list-style:none;
    margin-top:34px;
}
.potential .team ul li {
    font-size: 14px;
    color: #1179ef;
    line-height: 16px;
    font-weight: 500;
    text-transform: capitalize;
    background-color: #fff;
    margin-top: 16px;
    border: 1px solid #e6ecef;
    box-shadow: 0px 2px 5px rgb(17 121 239 / 10%);
    border-radius: 4px;
    padding:14px;
    width:264px;
}
.teams{
    display:flex;
    justify-content: space-between;
}
.potential h2 {
    padding-top: 64px;
    font-size: 32px;
    line-height: 38px;
}
.potential{
    background:#f8fbff;
}
.key-feature h2 {
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 1px;
}
.key-feature p{
    margin-top:20px;
    line-height: 22px;
    font-weight: normal;
    color: #51565e;
}
.key-feature ul{
    margin-top:30px;
    padding-left:0;
}
.key-feature ul li {
    color: #51565e;
    font-size: 14px;
    padding-left: 35px;
    position: relative;
    margin-bottom: 20px;
    display: inline-block;
    width: 100%;
    min-height: 22px;
    vertical-align: middle;
}
.key-feature ul li::before {
    content: "";
    width: 20px;
    height: 24px;
    display: inline-block;
    background: url(https://www.simplilearn.com/ice9/assets/ct-page/Assets.svgz) no-repeat;
    background-position: -38px -34px;
    position: absolute;
    left: 0;
    top: 0px;
}
.key-feature span{
    color: #6c7480;
    line-height: 16px;
    font-weight: 500;
    margin-top:50px;
}
.bootcamp-img img {
    width:100%;
    height:100%;
}
.bootcamp-img {
    display: inline-block;
    max-height: 320px;
    overflow: hidden;
    vertical-align: top;
}
.globalbrands h2 {
    font-size: 16px;
    line-height: 18px;
    color: #51565e;
}
.btcamp div{
    width:50%;
}
.btcamp{
    display:flex;
}
.btnc{
    width: 244px;
    padding: 8px;
    margin-top: 54px;
    font-size: 26px;
    color: white !important;

}
.banner h1 {
    font-size: 44px;
    line-height: 52px;
    letter-spacing: 1.5px;
    font-weight: 600;
    margin-top: 64px;
}
.banner .banner-info {
    margin-top: 30px;
    font-size: 26px;
    line-height: 30px;
    letter-spacing: 1px;
}
.globalbrands {
    margin-top: -76px !important;
    padding: 32px 34px 32px 20px;
    margin:auto;
}
.ct-partner .ct-logo {
    background: #fff;
    mix-blend-mode: normal;
    opacity: .99;
    border: 1px solid #e6ecef;
    border-radius: 4px;
    padding: 32px 20px 32px 20px;
    margin-top: 24px;
    text-align: center;
}
.ct-partner .ct-logo img {
    width: 100%;
    height:100%;
}
.globalbrands {
    width: 1140px;
    text-align: center;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 5px rgb(17 121 239 / 15%);
    border: 1px solid #e6ecef;
    position: relative;
}
.tab, .mobile{
    display:none;
}
@media(max-width:992px){
    .tab{
        display:block;
        margin:auto;

    }
    .globalbrands{
        width:90%;
    }
    .globalbrands img{
        width:100%;
    }
    .desktop{
        display:none;
    }
    .teams{
        flex-direction:column;
    }
    .btcamp{
        flex-direction:column-reverse;

    }
    .btcamp div{
        width:100%;
    }
    .key-feature{
        margin-top:24px;
    }
    .potential .team ul li{
        width:100%;
    }
}
@media(max-width:662px){
    .mobile{
        display:block;
        margin:auto;

    }
    .tab{
        display:none;
    }
    .globalbrands {
        margin-top: 76px !important;
        padding: 32px 34px 32px 20px;
        margin:auto;
    }
}
                `
                }
            </style>


        </>
    )
}

export default Ct; ``