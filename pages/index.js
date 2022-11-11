import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header1 from '../components/headers/header1'
import Header2 from '../components/headers/header2'
import CarouselHome from '../components/carousels/carousel1'
import Partnercompanies from '../components/cards/partnercompanies'
import MasterProgram from '../components/cards/masterprogram'
import CertificationCourses from '../components/cards/certificationCourses'
import LearningExperience from '../components/cards/learningExperience'
import Allumini from '../components/cards/allumini'
import Modal from '../components/modals/modal1'
import Footer from '../components/footers/footer'

export default function Home() {
  return (
<>

    <div className="main_container_index">
      <Header1/>
      <CarouselHome/>
      <Partnercompanies/>
      <MasterProgram/>
      <CertificationCourses/>
      <LearningExperience/>
      <Allumini/>
      <Footer/>
    </div>

</>

  )
}
