import NavMenu from '../NavMenu/NavMenu';
import { BsChevronLeft } from "react-icons/bs";
import './Contact.scss';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div 
      className="contact"
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <NavMenu />
      <motion.div 
        className='contact-text'
        initial={{y: -50, opacity:0}}
        animate={{y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 1 },
        }}
      >
        <h1>Contact</h1>
        <h2>envoyer</h2>
      </motion.div>
      <NavLink to='/works'><BsChevronLeft className='btn-left btn-nav-lr'/></NavLink>
    </motion.div>
  );
}

export default Contact;
