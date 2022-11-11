function alluminiworks() {
    return (
        <>


            <div className="container main mb-5 pb-5 justify-content-between d-flex">
                <div className="placement mt-5">
                    <h3>Our Placement Stats</h3>
                    <div className="cardd">
                        <p>Maximum Salary Hike</p>
                        <span>316%<sup>***</sup>
                        </span></div>
                    <div className="cardd">
                        <p>Average salary hike</p>
                        <span>85%<sup>***</sup></span>
                    </div>
                    <div className="cardd">
                        <p>Hiring Partners</p>
                        <span>200+</span>
                    </div>
                </div>
                <div className="companies ds2  w-100 mt-5">
                    <h3>Our Alumni Work in Top Companies</h3>
                    <div className="company-cards d-flex  row cards">
                        <div className="fsd-company-logo  col">
                            <img className="blend-mode" src="https://www.simplilearn.com/ice9/JG/Amazon.svgz" alt="Supporting Enterprises Around the Globe" />
                        </div>
                        <div className="fsd-company-logo  col">
                            <img className="blend-mode" src="https://www.simplilearn.com/ice9/JG/Capgemini.svgz" alt="Supporting Enterprises Around the Globe" />

                        </div><div className="fsd-company-logo  col">
                            <img className="blend-mode" src="https://www.simplilearn.com/ice9/JG/HCL.svgz" alt="Supporting Enterprises Around the Globe" />

                        </div>
                    </div>
                    <div className="company-cards d-flex row cards">
                        <div className="fsd-company-logo  col">
                            <img className="blend-mode" src="https://www.simplilearn.com/ice9/jg-insta/60047980-0-Deloitte.png" alt="Supporting Enterprises Around the Globe" />

                        </div>
                        <div className="fsd-company-logo  col">
                            <img className="blend-mode" src="https://www.simplilearn.com/ice9/jg-insta/60047385-0-Bosch---Manufacturin.png" alt="Supporting Enterprises Around the Globe" />

                        </div><div className="fsd-company-logo  col">
                            <img className="blend-mode" src="https://www.simplilearn.com/ice9/JG/Unilever.svgz" alt="Supporting Enterprises Around the Globe" />

                        </div>
                    </div>
                    <div className="company-cards d-flex row cards">
                        <div className="fsd-company-logo  col">
                            <img className="blend-mode" src="https://www.simplilearn.com/ice9/jg-insta/60048045-0-Accenture.png" alt="Supporting Enterprises Around the Globe" />

                        </div>
                        <div className="fsd-company-logo  col">
                            <img className="blend-mode" src="https://www.simplilearn.com/ice9/jg-insta/KPMG.png" alt="Supporting Enterprises Around the Globe" />

                        </div>
                        <div className="fsd-company-logo  col">
                            <img className="blend-mode" src="https://www.simplilearn.com/ice9/jg-insta/60048010-0-Infosys.png" alt="Supporting Enterprises Around the Globe" />

                        </div>
                    </div>
                    <div className="company-cards d-flex row cards">

                        <div className="fsd-company-logo  col">
                            <img className="blend-mode" src="https://www.simplilearn.com/ice9/JG/Cognizant.svgz" alt="Supporting Enterprises Around the Globe" />

                        </div>
                        <div className="fsd-company-logo  col">
                            <img className="blend-mode" src="https://www.simplilearn.com/ice9/jg-insta/TCS_Tata_Consultancy_Services.png" alt="Supporting Enterprises Around the Globe" />

                        </div>
                        <div className="fsd-company-logo  col">
                            <img className="blend-mode" src="https://www.simplilearn.com/ice9/assets/tech-mahindra.svgz" alt="Supporting Enterprises Around the Globe" />

                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {
                    `
.fsd-company-logo   img{
    width:96px;
    height:29px;
}
.ds2{
    box-shadow: 0px 2px 10px rgb(17 121 239 / 10%);
}
.placement h3, .companies h3{
    font-size:22px;
    font-weight:700;
}
.placement{
    width:622px;
}
.cardd{
    padding: 20px 25px;
    border-radius: 4px;
    margin-top: 16px;
    position: relative;
    box-shadow: 0px 2px 10px rgb(17 121 239 / 10%);
    overflow: hidden;
    width: 100%;
    margin-right: 0;
    margin-top: 20px;
}
.cardd:nth-child(2)::before {
    background: #5ca047;
}
.cardd:nth-child(3)::before {
    background: #f09448;
}
.cardd::before{
    content: "";
    width: 5px;
    height: 100%;
    background: #447fba;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .4;
}
.cardd p{
    font-size: 16px;
    line-height: 19px;
}
.cardd span{
    font-size: 30px;
    line-height: 35px;
    color: #37465a;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
}
.fsd-company-logo{
    padding:34px;
}
@media(max-width:992px){
    .main{
        flex-direction:column;
    }
    .placement{
        width:100%;
    }
    .fsd-company-logo{
         padding:34px 14px;
    }

}
    `
                }
            </style>

        </>
    )
}
export default alluminiworks