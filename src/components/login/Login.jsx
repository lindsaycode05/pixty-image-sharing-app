import React from 'react';
import '../../helpers/_utils.scss';
import './login.scss';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../../assets/share.mp4';
import logo from '../../assets/logo.png';

const Login = () => {
  return (
    <div className='login'>
      <div className="video-overlay"></div>
      <video
        src={shareVideo}
        type='video/mp4'
        loop
        controls={false}
        muted
        autoPlay
      ></video>
      <div className='login__form flex-col'>
        <img src={logo} alt='logo' />
        <GoogleLogin 
        clientId=''
        render={(renderProps) => (
         <button
         className='flex' >
            <FcGoogle/> Sign in with Google
         </button>
        )}
        />
      </div>
    </div>
  );
};

export default Login;
