import React, { useState } from 'react';
import './login2.css';
const LoginForm = () => {
  // State to manage user input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Username:', username);
    console.log('Password:', password);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class='o'>
      <h1>LOGIN </h1>
      </div>
      
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;