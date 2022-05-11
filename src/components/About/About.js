import NavMenu from '../NavMenu/NavMenu';
import { BsChevronRight } from "react-icons/bs";
import './About.scss';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { useState } from 'react';

function About() {
  const [labelRightIsActive, setLabelRightIsActive] = useState(false);
  return (
    <motion.div 
      className="about"
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <NavMenu />
      <motion.div
       className='about-text'
       initial={{y: -50, opacity:0}}
        animate={{y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 1 },
        }}
      >
        <h1>A propos</h1>
      </motion.div>
      <NavLink 
        to='/skills'
        onMouseEnter={() => {
          setLabelRightIsActive(true);
        }}
        onMouseLeave={() => {
          setLabelRightIsActive(false);
        }}
      >
          <BsChevronRight className='btn-right btn-nav-lr'/>
      </NavLink>
      <span className={labelRightIsActive ? 'page-name right active' : 'page-name right'}>Compétences</span>
    </motion.div>
  );
}

export default About;
