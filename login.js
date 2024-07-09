import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './sign.css';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log('Username:', username);
      console.log('Password:', password);
      
    };
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='username'
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          required
        />
      </div>
      
        <button type="submit" >Sign In</button>
        <div>
        <small class="form-text text-muted">dont have an account?</small>
        <Link to="/signup"> signup</Link>
      </div>
      </form>
    </div>
  );
};

export default LoginForm;