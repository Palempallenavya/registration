import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import SignUp from './signup';
import './App.css';

import Hello from './hello';
import LoginForm from './login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/hello' element={<Hello></Hello>}/>
      </Routes>
    </Router>
  );
}

export default App;


