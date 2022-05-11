import { NavLink } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <NavMenu />
      <div className='home-text'>
        <h1>Loris beranger</h1>
        <h2>Développeur Web Junior</h2>
        <NavLink to='contact' className='btn-contact'>Contactez moi</NavLink>
      </div>
      <NavLink to='/skills'><BsChevronLeft className='btn-left btn-nav-lr'/></NavLink>
      <NavLink to='/works'><BsChevronRight className='btn-right btn-nav-lr'/></NavLink>
    </div>
  );
}

export default Home;
