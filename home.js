import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
const Home = () => {
  return (
    <div className='home-container'>
      <h1>Welcome to Home Page</h1>
      <div className='home'>
      <small class="form-text text-muted">already have an account?</small>
      <Link to="/login">
        <button>Sign In</button><br></br><br></br>
      </Link>
      <small class="form-text text-muted">Dont have an account.</small>
      <Link to="/signup">
        <button>Sign Up</button><br/><br/>
      </Link>
      <small class="form-text text-muted">Registration Form.</small>
      <Link to="/hello">
      <button >Register</button>
      </Link>
      </div>
      
    </div>
  );
};

export default Home;