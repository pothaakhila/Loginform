import React, { useState } from 'react';
import { auth } from './firebase'; // Ensure this path is correct  import firebase authentication instance
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';//firebase auth methods 
import './Auth.css';

const UserAuth = () => {//state variables
  const [email, setEmail] = useState('');//holds the email on input value useing usestate hook
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);//here it is boolean determines the whether the form login andsignup
  const [message, setMessage] = useState('');//stores the message

  const handleSignUp = async (e) => {//event handlers
    e.preventDefault();//submission behaveior
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('Sign up successful!');
    } catch (error) {
      console.error(error);
      setMessage('Sign up failed. ' + error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);//attempts to sign in with email and password
      setMessage('Login successful!');
    } catch (error) {
      console.error(error);
      setMessage('Login failed. ' + error.message);
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setMessage('');
  };

  return (
    <div className="main">
      <input
        type="checkbox"
        id="chk"
        aria-hidden="true"
        checked={!isSignUp}
        onChange={toggleForm}
      />
      
      <div className="signup">
        <form onSubmit={handleSignUp}>
          <div id="signUpMessage" className="messageDiv" style={{ display: message ? 'block' : 'none' }}>{message}</div>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input
            type="text"
            id="uname"
            placeholder="User name"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            id="num"
            placeholder="Number"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
  
      <div className="login">
        <form onSubmit={handleSignIn}>
          <div id="logInMessage" className="messageDiv" style={{ display: message ? 'block' : 'none' }}>{message}</div>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
  
};

export default UserAuth;
