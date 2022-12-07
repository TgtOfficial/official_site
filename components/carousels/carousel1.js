import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

function UncontrolledExample() {
  return (
    <>
      <Carousel>
        <Carousel.Item className='bg-primary'>
          <div className=" text-white container minflex  d-flex p-4 bg-primary">
            <div className="left">
              <span className="ey-title">9/10 of our learners</span>
              <p>
                <span   className='text-warning'>achieve </span>
                their learning objectives after successful
                <span className='text-warning'>course completion</span>
                *
              </p>
              <div className="ey-process">
                <span>Process Advisors</span>
                <br />
              </div>
              <a href="#" className="btn btn-warning"> Explore Programs</a>

            </div>
            <div className="right">
              <div className="imgdiv">
                <img src="/slide1.png" alt="" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className='bg-primary'>
          <div className=" text-white container minflex  d-flex p-4 bg-primary">
            <div className="left">
              <span className="ey-title">9/10 of our learners</span>
              <p>
                <span  className='text-warning'>achieve </span>
                their learning objectives after successful
                <span className='text-warning'>course completion</span>
                *
              </p>
              <div className="ey-process">
                <span>Process Advisors</span>
                <br />
              </div>
              <a href="#" className="btn btn-warning"> Explore Programs</a>


            </div>
            <div className="right">
              <div className="imgdiv">
                <img src="/slide1.png" alt="" />
              </div>
            </div>
          </div>

        </Carousel.Item>
      </Carousel>
      <style jsx>
        {
          `
      .left{
        font-size:24px;
      }
      p{
        font-size:54px;
        line-height:44px;
      }
      @media(max-width:900px){
        p{
          font-size:16px;
          line-height:22px;
        }
        .minflex{
          flex-direction:column;
        }
        .imgdiv img{
          width:90%;
          margin:22px;
        }
      }
      `
        }
      </style>
    </>
  );
}

export default UncontrolledExample;