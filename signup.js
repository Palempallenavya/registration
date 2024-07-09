import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';
const SignUp = () => {
return(
    <div class="form-container">
    <h2 class="text-center mb-4">SignUp</h2>
    <form>
        <input type="text" placeholder="Username" required/>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required/>
        <button type="submit">Sign Up</button>
      
      <div>
      <small class="form-text text-muted">already have an account?</small>
        <Link to="/login">Login</Link>
      </div>
      
    </form>
  </div>
  );
};

export default SignUp;