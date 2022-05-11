import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import './NavMenu.scss';
import { useState } from 'react';

function NavMenu() {
  const [animatePosition, setAnimatePosition] = useState('position3');
  console.log(animatePosition)

  return (
    <nav className="nav-menu">
      <ul className='list-menu'>
        <NavLink to="/about" className={({ isActive }) => 
          isActive ? setAnimatePosition('position1') : console.log('non')
        }
        >A propos</NavLink>
        <NavLink to="/skills" className={({ isActive }) => 
          isActive ? setAnimatePosition('position2') : console.log('non')
        }
        >Compétences</NavLink>
        <NavLink to="/" className={({ isActive }) => 
          isActive ? setAnimatePosition('position3') : console.log('non')
        }
        ><AiFillHome /></NavLink>
        <NavLink to="/works" className={({ isActive }) => 
          isActive ? setAnimatePosition('position4') : console.log('non')
        }
        >Projets</NavLink>
        <NavLink to="/contact" className={({ isActive }) => 
          isActive ? setAnimatePosition('position5') : console.log('non')
        }
        >Contact</NavLink>
        <div className={`animation start-home ${animatePosition}`}></div>
      </ul>
    </nav>
  );
}

export default NavMenu;
