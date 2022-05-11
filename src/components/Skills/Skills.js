import NavMenu from '../NavMenu/NavMenu';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './Skills.scss';
import { NavLink } from 'react-router-dom';

function Skills() {
  return (
    <div className="skills">
      <NavMenu />
      <NavLink to='/about'><BsChevronLeft className='btn-left btn-nav-lr'/></NavLink>
      <NavLink to='/'><BsChevronRight className='btn-right btn-nav-lr'/></NavLink>
    </div>
  );
}

export default Skills;
