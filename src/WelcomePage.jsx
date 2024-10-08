import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
//this import deals with HTPP requests
import axios from 'axios';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
  });

  const goToHomePage = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Sends data to the server
    axios.post('http://localhost:8080/send-email', formData)
      .then((response) => {
        alert('Registration information submitted! An email will be sent to jowen22@murraystate.edu.');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('There was an issue sending the email. Please try again later.');
      });
  };

  return (
    <div>
      <h1>Welcome to HackerCon</h1>
      <p>Welcome SuperHacker! You Are In.</p>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={formData.username} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          value={formData.firstName} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={formData.lastName} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Register</button>
      </form>

      <button onClick={goToHomePage}>HOME</button>
    </div>
  );
};

export default WelcomePage;
