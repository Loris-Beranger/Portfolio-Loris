import NavMenu from '../NavMenu/NavMenu';
import { BsChevronRight } from "react-icons/bs";
import './About.scss';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

function About() {
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
      <NavLink to='/skills'><BsChevronRight className='btn-right btn-nav-lr'/></NavLink>
    </motion.div>
  );
}

export default About;
