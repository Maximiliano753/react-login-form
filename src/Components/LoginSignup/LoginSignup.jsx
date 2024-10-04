// src/MyComponent.jsx
import React, { useState } from 'react';
import './LoginSignup.css'

import user_icon from 'C:/Users/Admin/Desktop/ЧистаяВерстка/login-form-react/src/Components/Assets/user.png'
import password_icon from 'C:/Users/Admin/Desktop/ЧистаяВерстка/login-form-react/src/Components/Assets/pass.png'
import email_icon from 'C:/Users/Admin/Desktop/ЧистаяВерстка/login-form-react/src/Components/Assets/email.png'


const LoginSignup = () => {

const [action, setAction] = useState("Sign Up");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name'/>
        </div>}
        
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email'/>
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password'/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
      
      <div className="sumbit-container">
        <div className={action==="Login"? "sumbit gray":"sumbit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"sumbit gray":"sumbit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;