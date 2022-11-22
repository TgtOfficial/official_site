import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

function UncontrolledExample() {
  return (
    <> <div className="bg-white"> <h4 className="heading text-center text-secondary">Partnering with world{"'"}s leading  companies</h4>
      <div className="container justify-content-center p-3  d-flex ">
        <div className="img1  bg-white  mauto">
        <img src="/c1.png" alt="" />
        </div>
        <div className="img2  bg-white mauto">
            <img src="/c2.png" alt="" />
        </div>
        <div className="img3 bg-white mauto">
        <img src="/c3.png" alt="" />

        </div>
      </div></div>
      <style jsx>
        {
          `
          .img2 img{
            width:164px;
          }
          .img1 img{
            width:164px;
            height:62px;

          }
          .img3 img{
            width:164px;
          }
          @media(max-width:900px){
            .img2 img{
            width:94px;
          }
          .img1 img{
            width:94px;
            height:34px;

          }
          .img3 img{
            width:94px;
          }
          }
          .mauto{
            margin:auto 12px;
          }
      `
        }
      </style>
    </>
  );
}

export default UncontrolledExample;