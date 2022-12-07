import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

function UncontrolledExample() {
  return (
    <>
      <Carousel>
        <Carousel.Item className='bgcolor'>
          <div className=" text-white container minflex   d-flex p-4 ">
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
                <br />
              </div>
              <a href="#" className="btn hb btn-"> Explore Programs</a>

            </div>
            <div className="right">
              <div className="imgdiv">
                <img src="/slide1.png" alt="" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className='bgcolor'>
          <div className=" text-white container minflex  d-flex p-4 ">
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
                <br />
              </div>
              <a href="#" className="btn hb btn-waring"> Explore Programs</a>


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
        line-height:64px;
      }
      .bgcolor{
        background:red !important;
      }
      .hb{
        background:#096810 !important;
      }
      @media(max-width:900px){
        p{
          font-size:16px;
          line-height:42px;
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