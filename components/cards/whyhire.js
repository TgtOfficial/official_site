function whyhire() {

    return (
        <>
            <div className="main ">
                <div className="titlediv pt-5 mb-5 container">
                    <h2 className="whytt">Why Hire from SimpliRecruit?</h2>
                </div>
                <div className="cardsdiv container">
                    <div className="cards">
                        <div className="carditem">
                            <div className="image"><img src="/hfus1.jfif" alt="cards image" /></div>
                            <div className="title">Job Ready Candidates</div>
                            <div className="desc"><p className="txt">Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.</p></div>
                        </div>
                        <div className="carditem">
                            <div className="image image2"><img src="/hfus2.jfif" alt="cards image" /></div>
                            <div className="title">	Diverse Talent Pool		</div>
                            <div className="desc"><p className="txt">Pick the right talent based on skills and experience and aligned to the projects you are hiring for.					</p></div>
                        </div>
                        <div className="carditem">
                            <div className="image"><img src="/hfus3.jfif" alt="cards image" /></div>
                            <div className="title">Dedicated Support</div>
                            <div className="desc"><p className="txt">Our relationship managers are trained to understand your needs and will help you in the hiring process	</p></div>
                        </div>
                        <div className="carditem">
                            <div className="image"><img src="/hfus4.png" alt="cards image" /></div>
                            <div className="title">Zero Hiring Cost</div>
                            <div className="desc"><p className="txt">Hire the best job ready talent directly from SimpliRecruit at zero cost to your organization</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {
                    `
.main{
    background:#fef7ec;
}
.cards{
    display:flex;
    justify-content:space-between;
}
.carditem{
    background:white;
    margin:22px;
    padding:14px;
    text-align:center;
    box-shadow: 0px 4px 14px 0px rgb(0 0 0 / 14%);
    border-radius:6px;
}
.image2 img{
    width:225px;
    height:225px;
}
.title{
    font-size: 20px;
    font-weight: bold;
    line-height: 26px;
    margin:14px auto;
}
.desc p{
    color: #797979;
    font-family: "Roboto", Sans-serif;
    font-size: 15px;
    line-height: 24px;
}
@media(max-width:992px){
    .cards{
        flex-direction:column;
    }
}

                    `
                }
            </style>
        </>
    )
}
export default whyhire