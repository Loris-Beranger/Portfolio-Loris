import NavMenu from '../NavMenu/NavMenu';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './Works.scss';
import { NavLink } from 'react-router-dom';

function Works() {
  return (
    <div className="works">
      <NavMenu />
      <NavLink to='/'><BsChevronLeft className='btn-left btn-nav-lr'/></NavLink>
      <NavLink to='/contact'><BsChevronRight className='btn-right btn-nav-lr'/></NavLink>
    </div>
  );
}

export default Works;
