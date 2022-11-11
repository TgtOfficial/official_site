import { useState } from "react"


function faq() {

    const [isActive1, setIsActive1] = useState(false)
    const list1 = () => {
        setIsActive1(!isActive1)
    }
    const [isActive2, setIsActive2] = useState(false)
    const list2 = () => {
        setIsActive2(!isActive2)
    }
    const [isActive3, setIsActive3] = useState(false)
    const list3 = () => {
        setIsActive3(!isActive3)
    }
    const [isActive4, setIsActive4] = useState(false)
    const list4 = () => {
        setIsActive4(!isActive4)
    }
    const [isActive5, setIsActive5] = useState(false)
    const list5 = () => {
        setIsActive5(!isActive5)
    }
    const [isActive6, setIsActive6] = useState(false)
    const list6 = () => {
        setIsActive6(!isActive6)
    }
    const [isActive7, setIsActive7] = useState(false)
    const list7 = () => {
        setIsActive7(!isActive7)
    }
    const [isActive8, setIsActive8] = useState(false)
    const list8 = () => {
        setIsActive8(!isActive8)
    }

    return (
        <>

            <div className="main pt-5 container">
                <div className="title pb-5">
                    <h2 className="titlename">Frequently Asked Questions</h2>
                </div>
                <div className="colbar pb-5">
                    <ul className="list-group">
                        <li onClick={list1} className="list-group-item bold lsd"><span>How much does it cost to hire a candidate?</span></li>
                        {
                            isActive1 && (
                                <li className="list-group-item">You can hire great talent at zero cost to your organizations.</li>
                            )
                        }
                        <li onClick={list2} className="list-group-item bold lsd"><span>How to hire the right candidate?</span></li>
                        {
                            isActive2 && (
                                <li className="list-group-item">We have a pool of trained candidates with hands on experience, and have worked on industry relevant capstones. Hiring companies can review, shortlist, assess and interview the candidates based on their requirements and hire the best candidates.</li>
                            )
                        }
                        <li onClick={list3} className="list-group-item bold lsd"><span>How to post job vacancies online for free at SimpliRecruit?</span></li>
                        {
                            isActive3 && (
                                <li className="list-group-item">Organisations just need to fill a form with their requirement and the job will be posted by the career services team.</li>
                            )
                        }
                        <li onClick={list4} className="list-group-item bold lsd"><span>What is the benefit of hiring employees from SimpliRecruit?</span></li>
                        {
                            isActive4 && (
                                <li className="list-group-item">Organisations will get trained and certified candidates with hands on experience from Simplirecruit at zero cost. We also offer dedicated hiring support so hiring becomes easier.</li>
                            )
                        }
                        <li onClick={list5} className="list-group-item bold lsd"><span>Can I hire candidates on hourly or project-based requirements?</span></li>
                        {
                            isActive5 && (
                                <li className="list-group-item">No, the hiring requirement should be for a full time roles only.</li>
                            )
                        }
                        <li onClick={list6} className="list-group-item bold lsd"><span>Can I screen candidates before placing my requirement?</span></li>
                        {
                            isActive6 && (
                                <li className="list-group-item">Yes, you can.</li>
                            )
                        }
                        <li onClick={list7} className="list-group-item bold lsd"><span>Is there any limit to hiring employees from SimpliRecruit?</span></li>
                        {
                            isActive7 && (
                                <li className="list-group-item">You can hire as many candidates as you want from us.</li>
                            )
                        }
                        <li onClick={list8} className="list-group-item bold lsd"><span>For which locations can I hire candidates from SimpliRecruit?</span></li>
                        {
                            isActive8 && (
                                <li className="list-group-item">Candidates are available across India.</li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <style>
                {
                    `
.lsd{
    padding-top:12px  !important;
    padding-bottom:12px;
    background:#ecf4ff;
}

                    `
                }
            </style>
        </>
    )

}
export default faq