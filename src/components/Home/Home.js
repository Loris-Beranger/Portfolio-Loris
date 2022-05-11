import { NavLink } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './Home.scss';
import { motion } from "framer-motion";

function Home() {
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
      <NavLink to='/skills'><BsChevronLeft className='btn-left btn-nav-lr'/></NavLink>
      <NavLink to='/works'><BsChevronRight className='btn-right btn-nav-lr'/></NavLink>
    </motion.div>
  );
}

export default Home;
