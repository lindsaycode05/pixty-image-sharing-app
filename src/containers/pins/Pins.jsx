import './pins.scss';
import '../../helpers/_utils.scss';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Feed, PinDetail, CreatePin, Search } from '../../components';

const Pins = ({user}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return <div className='pins'>
    <div className="pins__navbar">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
    <div className="pins__routes">
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/category/:categoryId' element={<Feed/>}/>
        <Route path='/pin-detail/:pinId' element={<PinDetail user={user}/>}/>
        <Route path='/create-pin' element={<CreatePin user={user}/>}/>
        <Route path='/search' element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}/>
      </Routes>
    </div>
  </div>;
};

export default Pins;
