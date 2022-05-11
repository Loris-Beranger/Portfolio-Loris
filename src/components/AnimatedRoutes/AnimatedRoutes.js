import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Skills from '../Skills/Skills';
import Works from '../Works/Works';
import './Home.scss';
import { AnimatePresence } from "framer-motion"

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
