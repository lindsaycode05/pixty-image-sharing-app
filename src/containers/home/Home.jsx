import React, { useState, useRef, useEffect } from 'react';
import '../../helpers/_utils.scss';
import './home.scss';
import logo from '../../assets/logo.png';
import { Link, Routes, Route } from 'react-router-dom';
import { client } from '../../client';

import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { CgCloseR } from 'react-icons/cg';
import { UserProfile, Sidebar } from '../../components';
import Pins from '../pins/Pins';
import { userQuery } from '../../utils/data';

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const scrollRef = useRef(null);

  const userInfo =
    localStorage.getItem('user') !== undefined
      ? JSON.parse(localStorage.getItem('user'))
      : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);

  return (
    <div className='home'>
      <div className='home__desktop'>
        <Sidebar user={user && user} />
      </div>
      <div className='home__mobile'>
        <div className='home__mobile-nav flex'>
          <HiOutlineMenuAlt2
            className='hamburger-menu'
            fontSize={30}
            onClick={() => setToggleSidebar(true)}
          />
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
          <Link to={`user-profile/${user?._id}`}>
            <img src={user?.image} alt='user' />
          </Link>
        </div>

        {toggleSidebar && (
          <div className='home__mobile-menu flex-col'>
            <div className='close-icon'>
              <CgCloseR fontSize={30} onClick={() => setToggleSidebar(false)} />
            </div>
            <Sidebar user={user && user} closeToggle={setToggleSidebar} />
          </div>
        )}
        <div className='home__mobile-links' ref={scrollRef}>
          <Routes>
            <Route path='/user-profile/:userId' element={<UserProfile />} />
            <Route path='/*' element={<Pins user={user && user} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
