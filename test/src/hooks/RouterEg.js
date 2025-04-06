import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '../component/Home';
import About from '../component/About';
import Contact from '../component/Contact';
import User from '../component/User';


const NotFound = () => {
  return <h1 className='text-danger text-center'>Not Found</h1>;
};

const RouterEg = () => {
  const name = 'john';

  return (
    <>
      <Router>
        {/* Navigation Links */}
        <Link to="/home" className='p-2 fs-3'>Home</Link>
        <Link to="/about" className='p-2 fs-3'>About</Link>
        <Link to="/contact" className='p-2 fs-3'>Contact</Link>
        <Link to={`/profile/${name}`} className='p-2 fs-3'>Profile</Link> 

        {/* Route Definitions */}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile/:username' element={<User />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouterEg;
