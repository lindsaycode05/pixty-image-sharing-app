import React, { useState, useRef, useEffect } from 'react';
import '../../helpers/_utils.scss';
import './home.scss';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Routes, Route } from 'react-router-dom';
import { UserProfile, Sidebar } from '../../components';
import { client } from '../../client';
import logo from '../../assets/logo.png';
import Pins from '../pins/Pins';

const Home = () => {
  return <div>Home</div>;
};

export default Home;
