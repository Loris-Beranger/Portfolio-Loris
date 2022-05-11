import { NavLink } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './Home.scss';
import { motion } from "framer-motion";
import { useState } from 'react';

function Home() {
  const [labelLeftIsActive, setLabelLeftIsActive] = useState(false);
  const [labelRightIsActive, setLabelRightIsActive] = useState(false);

  return (
    <motion.div 
      className="home"
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <NavMenu />
      <motion.div 
        className='home-text'
        initial={{y: -50, opacity:0}}
        animate={{y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 1 },
        }}
      >
        <h1>Loris beranger</h1>
        <h2>Développeur Web Junior</h2>
        <NavLink to='contact' className='btn-contact'>Contactez moi</NavLink>
      </motion.div>
      <NavLink 
        to='/skills'
        onMouseEnter={() => {
          setLabelLeftIsActive(true);
        }}
        onMouseLeave={() => {
          setLabelLeftIsActive(false);
        }}
      >
        <BsChevronLeft className='btn-left btn-nav-lr'/>
      </NavLink>
      <NavLink 
        to='/works'
        onMouseEnter={() => {
          setLabelRightIsActive(true);
        }}
        onMouseLeave={() => {
          setLabelRightIsActive(false);
        }}
      >
          <BsChevronRight className='btn-right btn-nav-lr'/>
      </NavLink>
      <span className={labelLeftIsActive ? 'page-name left active' : 'page-name left'}>Compétences</span>
      <span className={labelRightIsActive ? 'page-name right active' : 'page-name right'}>Projets</span>
    </motion.div>
  );
}

export default Home;
