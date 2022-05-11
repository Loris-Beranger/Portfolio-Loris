import NavMenu from '../NavMenu/NavMenu';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './Skills.scss';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div 
      className="skills"
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <NavMenu />
      <motion.div 
        className='skills-text'
        initial={{y: -50, opacity:0}}
        animate={{y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 1 },
        }}
      >
        <h1>Compétences</h1>
        <h2>Réact</h2>
      </motion.div>
      <NavLink to='/about'><BsChevronLeft className='btn-left btn-nav-lr'/></NavLink>
      <NavLink to='/'><BsChevronRight className='btn-right btn-nav-lr'/></NavLink>
    </motion.div>
  );
}

export default Skills;
