import React from 'react';
import '../../helpers/_utils.scss';
import './login.scss';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../../assets/share.mp4';
import logo from '../../assets/logo.png';

const Login = () => {
  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));

    const { name, googleId, imageUrl } = response.profileObj;

    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    };
  };

  return (
    <div className='login'>
      <div className='video-overlay'></div>
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
          clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
          render={(renderProps) => (
            <button
              className='flex'
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FcGoogle /> Sign in with Google
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy='single_host_origin'
        />
      </div>
    </div>
  );
};

export default Login;
