import Header1 from '../components/headers/header1'
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import Footer from '../components/footers/footer'



function instructor() {
    return (
        <>
            <div className="main">
                <Header1 />

                <div className="homediv mh">
                    <div className="container"><h1 className='bold text-white'>Teach. Create. Earn.</h1></div>
                </div>
                <div className="container mt-5 txt-color mdflex d-flex">
                    <div className="left-text wc">
                        <p className="first-para">Passionate about teaching? Looking for a platform where you can share your knowledge, connect with professionals, and enrich careers, all while earning supplemental income?</p>
                        <div className="txtctn txt-color">
                            <div className="c1">
                                <h3 className="head1">You{"'"}ve come to the right place.</h3>
                                <p className="desc1">At Simplilearn, our constant endeavour is to create a network of world-class trainers and industry-experts who, in turn, create high-quality courseware that resonates with professionals the world over, cutting across domains, especially Full Stack, DevOps, Cloud Computing, Big Data, Deep Learning and NLP.</p>
                            </div>
                            <div className="c1">
                                <h3 className="head1">What{"'"}s in it for me?</h3>
                                <p className="desc1">We{"'"}re glad you asked! The material you produce will be used to train professionals worldwide, meaning increased visibility, a larger audience for your content, and the chance to become a part of an elite worldwide training community!</p>
                            </div>
                            <div className="c1">
                                <h3 className="head1">Show me the money!</h3>
                                <p className="desc1">At Simplilearn, we know the value of your time and effort, and also understand that offering fair and flexible compensation is a part of your business ethos. With our revenue-sharing model, you have the opportunity to earn tens of thousands of dollars every month!</p>
                            </div>
                            <div className="c1">
                                <h3 className="head1">What does it take?</h3>
                                <ul className="ists">
                                    <li className="itm">A great deal of passion for teaching and sharing knowledge</li>
                                    <li className="itm">Domain expertise with relevant certifications</li>
                                    <li className="itm">Strong communication and presentation skills required</li>
                                    <li className="itm">A commitment to developing and delivering best-in-class training to a global audience</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rri8">
                        <div className="formdiv">
                            <div className="titlediv">
                                <h3 className="titleform">INTERESTED IN WORKING WITH US?</h3>
                                <p className="desform text-center">Please submit this form and a Simplilearn representative will reach out to you.</p>
                            </div>
                            <form >
                                <div className="form-group mb-3">
                                    <label htmlFor="input" className="form-label">Name</label>
                                    <input type="text" className='form-control name ' placeholder='enter name' />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="input" className="form-label">email</label>
                                    <input type="email" className='form-control email ' placeholder='enter email' />
                                </div>
                                <div className='form-group  mb-3 '>
                                    <label htmlFor="select" className="form-label">Department</label>
                                    <select name="selectform" id="idselect" className="form-select">
                                        <option value="1">Full Stack Developers</option>
                                        <option value="2">Automation testing</option>
                                        <option value="3">Others</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3 ">
                                    <label htmlFor="input" className="form-label">Mobile No.</label>
                                    <input type="text" className='form-control name ' placeholder='enter phone number' />
                                </div>
                                <div className="form-group mb-3 ">
                                    <label htmlFor="input" className="form-label">Resume</label>
                                    <input type="file" className='form-control profileurl ' placeholder='enter Linkedln url' />
                                </div>
                                <div className="form-group text-center ">
                                    <label htmlFor="button" className=''>-</label>
                                    <button type='submit' className='btn w-100 btn-primary'>Submit</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
                <div className="cmaindiv">
                    <div className="container">
                        <div className="titlediv">
                            <h2 className="expsys">Experts Says</h2>
                        </div>
                        <div className="carouseldiv">
                            <Carousel variant='dark' interval={8000}>
                                <Carousel.Item>
                                    <div className="cards">
                                        <div className="carditem d-flex">
                                            <div className="imgdiv">
                                                <img src="/instructor1.avif" alt="" />
                                            </div>
                                            <div className="contents">
                                                <h2 className="name">example name</h2>
                                                <h3 className="subhead">designation and Company</h3>
                                                <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui earum fuga, fugiat maxime eius reprehenderit nemo, voluptates, voluptatem officiis beatae obcaecati itaque!</p>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>


            </div>
            <Footer/>
            <style jsx>
                {
                    `
.mh{
    background: linear-gradient(90deg, #153E7C 0.26%, #147FA0 100%);
    padding:56px;
    
}
@media(max-width:992px){
    .mh{
        padding:56px 16px;
    }
    .cards{
        width:100% !important;
        padding:12px !important ;
        margin:12px !important;
    }
}
.carditem{
    background:white;
    border-radius:4px;
    border-bottom:8px solid blue;
}
.imgdiv img{
    width:124px;
    border: 4px solid #fff;
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
    border-radius: 8px;
}
.cards{
    width: 738px;
    margin-top: 0px;
    margin-left: 92px;
    padding-top: 56px;
    padding-bottom: 56px;
    display: inline-block;
}
.cmaindiv{
    background:#ebf1f8;
}
.expsys{
    padding-top:56px;
    margin-bottom:34px;
}
.first-para {
    font-size: 16px;
    line-height: 154%;
    margin-top: 0;
    color: #51565e;
}
.head1{
    font-weight:600;
    color:#272c37;
    margin-top:34px;
}
.formdiv{
    border:1px solid gray;
    padding:22px;
    border-radius:4px;
    margin:auto 64px;
}
.txt-color{
    color:#51565e;
}
.titleform{
    font-size:16px;
    margin-top:32px;
    font-weight:600;
    text-align:center;
}
.desform{
    font-size:12px;
    color:gray;
}
.wc{
    width:70%;

}
@media(max-width:992px){
    .mdflex{
        flex-direction:column;
    }
    .wc{
        width:100%;
    }
    .formdiv{
        margin:0;
    }
}

        `
                }

            </style>

        </>
    )
}
export default instructor