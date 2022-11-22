function whyhire() {

    return (
        <>
            <div className="main ">
                <div className="titlediv pt-5 mb-5 container">
                    <h2 className="whytt">Our Learner{"'"}s Profile</h2>
                </div>
                <div className="cardsdiv container">
                    <div className="cards">
                        <div className="carditem">
                            <div className="image"><img src="/icons/technology.png" alt="cards image" /></div>
                            <div className="title">700k+</div>
                            <div className="desc"><p className="txt">Data Scientist, Business Analyst, Machine Learning Engineer, Big Data Analyst.</p></div>
                        </div>
                        <div className="carditem">
                            <div className="image"><img src="/icons/promotion.png" alt="cards image" /></div>
                            <div className="title">200k+</div>
                            <div className="desc"><p className="txt">Digital Marketing Manager, Product Manager, Program Manager, Product Analyst.</p></div>
                        </div>
                        <div className="carditem">
                            <div className="image"><img src="/icons/wall-clock.png" alt="cards image" /></div>
                            <div className="title">300k+</div>
                            <div className="desc"><p className="txt">Project Manager, Technical Architect, Scrum Master, Project Quality Manager.	</p></div>
                        </div>
                        <div className="carditem">
                            <div className="image"><img src="/icons/web-programming.png" alt="cards image" /></div>
                            <div className="title">800k+</div>
                            <div className="desc"><p className="txt">JAVA Developer, Testing Engineer, Automation QA Devops Engineer, Cloud Architect.</p></div>
                        </div>
                    </div>
                    <div className="txt-center pb-5 pt-3 w-100"><div className="btn m-auto btn-h btn-primary">Start Hiring</div></div>
                </div>
            </div>
            <style jsx>
                {
                    `
.main{
    background:#013584;
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
.btn-h{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 144px;
    padding: 12px;
}

.title{
    font-size: 20px;
    font-weight: bold;
    line-height: 26px;
    margin:14px auto;
}
.image img{
    width:30%;
    margin-top:12px;
}
.desc p{
    color: #797979;
    font-family: "Roboto", Sans-serif;
    font-size: 15px;
    line-height: 24px;
}
.titlediv{
    font-weight:600;
    color:white;
}
@media(max-width:992px){
    .cards{
        flex-direction:column !important;
    }
}

                    `
                }
            </style>
        </>
    )
}
export default whyhire