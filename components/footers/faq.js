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
                        <li onClick={list1} className="list-group-item bold lsd"><span>What are the financing options I can opt for to enroll in a Job Guarantee courses?</span></li>
                        {
                            isActive1 && (
                                <li className="list-group-item">We have the following finance options for our Job Guarantee courses:

                                    Zero Cost EMI - We have partnered with Zest, Bajaj Finserv, and Eduvanz to provide 0 cost EMI options to our learners.

                                    Standard EMI - Learners can avail standard EMI options with credit cards. The interest rates will be as per respective bank policies.

                                    Debit Card/Internet Banking - Learners who wish not to avail EMI services are also open to paying through standard internet banking and Debit card options.</li>
                            )
                        }
                        <li onClick={list2} className="list-group-item bold lsd"><span>What are the financing options I can opt for to enroll in a Job Guarantee courses?</span></li>
                        {
                            isActive2 && (
                                <li className="list-group-item">We have the following finance options for our Job Guarantee courses:

                                    Zero Cost EMI - We have partnered with Zest, Bajaj Finserv, and Eduvanz to provide 0 cost EMI options to our learners.

                                    Standard EMI - Learners can avail standard EMI options with credit cards. The interest rates will be as per respective bank policies.

                                    Debit Card/Internet Banking - Learners who wish not to avail EMI services are also open to paying through standard internet banking and Debit card options.</li>
                            )
                        }
                        <li onClick={list3} className="list-group-item bold lsd"><span>What are the financing options I can opt for to enroll in a Job Guarantee courses?</span></li>
                        {
                            isActive3 && (
                                <li className="list-group-item">We have the following finance options for our Job Guarantee courses:

                                    Zero Cost EMI - We have partnered with Zest, Bajaj Finserv, and Eduvanz to provide 0 cost EMI options to our learners.

                                    Standard EMI - Learners can avail standard EMI options with credit cards. The interest rates will be as per respective bank policies.

                                    Debit Card/Internet Banking - Learners who wish not to avail EMI services are also open to paying through standard internet banking and Debit card options.</li>
                            )
                        }
                        <li onClick={list4} className="list-group-item bold lsd"><span>What are the financing options I can opt for to enroll in a Job Guarantee courses?</span></li>
                        {
                            isActive4 && (
                                <li className="list-group-item">We have the following finance options for our Job Guarantee courses:

                                    Zero Cost EMI - We have partnered with Zest, Bajaj Finserv, and Eduvanz to provide 0 cost EMI options to our learners.

                                    Standard EMI - Learners can avail standard EMI options with credit cards. The interest rates will be as per respective bank policies.

                                    Debit Card/Internet Banking - Learners who wish not to avail EMI services are also open to paying through standard internet banking and Debit card options.</li>
                            )
                        }
                        <li onClick={list5} className="list-group-item bold lsd"><span>What are the financing options I can opt for to enroll in a Job Guarantee courses?</span></li>
                        {
                            isActive5 && (
                                <li className="list-group-item">We have the following finance options for our Job Guarantee courses:

                                    Zero Cost EMI - We have partnered with Zest, Bajaj Finserv, and Eduvanz to provide 0 cost EMI options to our learners.

                                    Standard EMI - Learners can avail standard EMI options with credit cards. The interest rates will be as per respective bank policies.

                                    Debit Card/Internet Banking - Learners who wish not to avail EMI services are also open to paying through standard internet banking and Debit card options.</li>
                            )
                        }
                        <li onClick={list6} className="list-group-item bold lsd"><span>What are the financing options I can opt for to enroll in a Job Guarantee courses?</span></li>
                        {
                            isActive6 && (
                                <li className="list-group-item">We have the following finance options for our Job Guarantee courses:

                                    Zero Cost EMI - We have partnered with Zest, Bajaj Finserv, and Eduvanz to provide 0 cost EMI options to our learners.

                                    Standard EMI - Learners can avail standard EMI options with credit cards. The interest rates will be as per respective bank policies.

                                    Debit Card/Internet Banking - Learners who wish not to avail EMI services are also open to paying through standard internet banking and Debit card options.</li>
                            )
                        }
                        <li onClick={list7} className="list-group-item bold lsd"><span>What are the financing options I can opt for to enroll in a Job Guarantee courses?</span></li>
                        {
                            isActive7 && (
                                <li className="list-group-item">We have the following finance options for our Job Guarantee courses:

                                    Zero Cost EMI - We have partnered with Zest, Bajaj Finserv, and Eduvanz to provide 0 cost EMI options to our learners.

                                    Standard EMI - Learners can avail standard EMI options with credit cards. The interest rates will be as per respective bank policies.

                                    Debit Card/Internet Banking - Learners who wish not to avail EMI services are also open to paying through standard internet banking and Debit card options.</li>
                            )
                        }
                        <li onClick={list8} className="list-group-item bold lsd"><span>What are the financing options I can opt for to enroll in a Job Guarantee courses?</span></li>
                        {
                            isActive8 && (
                                <li className="list-group-item">We have the following finance options for our Job Guarantee courses:

                                    Zero Cost EMI - We have partnered with Zest, Bajaj Finserv, and Eduvanz to provide 0 cost EMI options to our learners.

                                    Standard EMI - Learners can avail standard EMI options with credit cards. The interest rates will be as per respective bank policies.

                                    Debit Card/Internet Banking - Learners who wish not to avail EMI services are also open to paying through standard internet banking and Debit card options.</li>
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