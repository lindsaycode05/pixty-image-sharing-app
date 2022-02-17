import '../../helpers/_utils.scss';
import './sidebar.scss';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import logo from '../../assets/logo.png';

const Sidebar = ({ user, closeToggle }) => {
  const categories = [
    {
      name: 'Animals',
    },
    {
      name: 'Wallpapers',
    },
    {
      name: 'Photography',
    },
    {
      name: 'Gaming',
    },
    {
      name: 'Coding',
    },
  ];

  const handleCloseSidebar = () => {
    closeToggle(false);
  };

  return (
    <div className='sidebar flex-col'>
      <div className='sidebar__title flex-col'>
        <Link to='/' onClick={handleCloseSidebar}>
          <img src={logo} alt='logo' />
        </Link>
        <div className='sidebar__title-home flex'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'active flex' : 'inactive flex'
            }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill /> Home
          </NavLink>
        </div>
      </div>
      <div className='sidebar__links flex-col'>
        <h3>Discover categories</h3>
        {categories.slice(0, categories.length - 1).map((category) => (
          <NavLink
            to={`/category/${category.name}`}
            className={({ isActive }) =>
              isActive ? 'active flex' : 'inactive flex'
            }
            onClick={handleCloseSidebar}
            key={category.name}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
