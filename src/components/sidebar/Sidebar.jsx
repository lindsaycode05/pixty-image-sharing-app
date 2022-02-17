import '../../helpers/_utils.scss';
import './sidebar.scss';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
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
        <div className='sidebar__title-home flex-col'>
          <Link to='/' onClick={handleCloseSidebar}>
            <img src={logo} alt='logo' />
          </Link>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'active flex' : 'inactive flex'
            }
            onClick={handleCloseSidebar}
          >
            <TiHome /> Home
          </NavLink>
        </div>
        <div className='sidebar__title-links flex-col'>
          <h3>Browse categories</h3>
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

      {user && (
        <div className='sidebar__user'>
          <Link
            to={`/user-profile/${user._id}`}
            className='flex'
            onClick={handleCloseSidebar}
          >
            <img src={user.image} alt='user-profile' />
            <p>{user.userName}</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
