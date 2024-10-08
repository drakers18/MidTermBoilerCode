import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const accessQuiz = (e) => {
    e.preventDefault();

    //hard coded username and password
    if (username === 'rakers18' && password === 'VeryComplexPassW0rd$5000') {
    //if correct the quiz is accessable
      navigate('/quiz'); 
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login Here</h1>
      <form onSubmit={accessQuiz}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
