import NavMenu from '../NavMenu/NavMenu';
import { BsChevronRight } from "react-icons/bs";
import './About.scss';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <NavMenu />
      <NavLink to='/skills'><BsChevronRight className='btn-right btn-nav-lr'/></NavLink>
    </div>
  );
}

export default About;
