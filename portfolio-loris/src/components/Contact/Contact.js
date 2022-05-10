import NavMenu from '../NavMenu/NavMenu';
import { BsChevronLeft } from "react-icons/bs";
import './Contact.scss';
import { NavLink } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact">
      <NavMenu />
      <NavLink to='/works'><BsChevronLeft className='btn-left btn-nav-lr'/></NavLink>
    </div>
  );
}

export default Contact;
