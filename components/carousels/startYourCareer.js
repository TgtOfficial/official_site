import Carousel from 'react-bootstrap/Carousel';

function startYourCareer() {

    return (
        <>
            <div className="main pt-5 pb-5">
                <div className="head mt-5 mb-4">
                    <h2 className="htitle  text-center">Get a Guaranteed Start to Your Career!</h2>
                </div>
                <div className="carouseldiv">
                    <Carousel className='maxview' variant='dark' interval={4000}>
                        <Carousel.Item>
                            <div className="maincards container d-flex justify-content-between">
                                <div className="card1 bg-white ds2">
                                    <div className="image ">
                                        <img src="https://source.unsplash.com/random/?java" alt="sd" />
                                    </div>
                                    <div className="title ps-2 ">
                                    <a href="#" className="link bold ">Full Stack Developer Job Guarantee Program</a>
                                    </div>
                                </div>
                                <div className="card1 bg-white ds2">
                                    <div className="image ">
                                        <img src="https://source.unsplash.com/random/?java" alt="sd" />
                                    </div>
                                    <div className="title ps-2 ">
                                    <a href="#" className="link bold ">Full Stack Developer Job Guarantee Program</a>
                                    </div>
                                </div>
                                <div className="card1 bg-white ds2">
                                    <div className="image ">
                                        <img src="https://source.unsplash.com/random/?java" alt="sd" />
                                    </div>
                                    <div className="title ps-2 ">
                                    <a href="#" className="link bold ">Full Stack Developer Job Guarantee Program</a>
                                    </div>
                                </div>

                            </div>
                        </Carousel.Item>
                    </Carousel>
                    <Carousel className='minview' variant='dark' interval={4000}>
                        <Carousel.Item>
                            <div className="maincards container d-flex justify-content-between">
                                <div className="card1 bg-white ds2">
                                    <div className="image ">
                                        <img src="https://source.unsplash.com/random/?java" alt="sd" />
                                    </div>
                                    <div className="title ps-2 ">
                                    <a href="#" className="link bold ">Full Stack Developer Job Guarantee Program</a>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <style jsx>
            {
                `
.head h2{
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 1px;
    margin-bottom: 39px;
}
.card1{
    width:330px;
    border-radius:6px;
    display:flex;
    padding:22px;
}
.image img{
    width: 91px;
    height: 55px;
}
.main{
    background:#ecf4ff;
}
                `
            }

            </style>

        </>
    )
}
export default startYourCareer