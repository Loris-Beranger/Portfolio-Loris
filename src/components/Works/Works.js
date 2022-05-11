import NavMenu from '../NavMenu/NavMenu';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './Works.scss';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { useState } from 'react';

function Works() {
  const [labelLeftIsActive, setLabelLeftIsActive] = useState(false);
  const [labelRightIsActive, setLabelRightIsActive] = useState(false);
  return (
    <motion.div 
      className="works"
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <NavMenu />
      <motion.div 
        className='works-text'
        initial={{y: -50, opacity:0}}
        animate={{y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 1 },
        }}
      >
        <h1>Projets</h1>
        <h2>Horloge</h2>
      </motion.div>
      <NavLink 
        to='/'
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
        to='/contact'
        onMouseEnter={() => {
          setLabelRightIsActive(true);
        }}
        onMouseLeave={() => {
          setLabelRightIsActive(false);
        }}
      >
          <BsChevronRight className='btn-right btn-nav-lr'/>
      </NavLink>
      <span className={labelLeftIsActive ? 'page-name left active' : 'page-name left'}>Accueil</span>
      <span className={labelRightIsActive ? 'page-name right active' : 'page-name right'}>Contact</span>
    </motion.div>
  );
}

export default Works;
