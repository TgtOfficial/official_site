import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Styles from '../../styles/header.module.css';
import Image from 'next/image';


function BasicExample() {

  return (
    <>
    <div className="main">
      <div className="ps-5">
        <div className="hcontent">
          <div className="logodiv"><img src="/tgt.png" alt="" /></div>
        </div>
      </div>
    </div>
    <style>
      {
        `
.logodiv img{
  width:150px;
}
.main{
  background:white;
  padding:10px 0px;
}
        `
      }
    </style>
    </>
  );
}

export default BasicExample