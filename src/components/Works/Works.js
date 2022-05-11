import NavMenu from '../NavMenu/NavMenu';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './Works.scss';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

function Works() {
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
      <NavLink to='/'><BsChevronLeft className='btn-left btn-nav-lr'/></NavLink>
      <NavLink to='/contact'><BsChevronRight className='btn-right btn-nav-lr'/></NavLink>
    </motion.div>
  );
}

export default Works;
