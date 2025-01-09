import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Reviews from './components/Reviews';
import Navbar from './pages/Navbar';
import Appointments from './components/Appointment';
import SignUp from './pages/Sign_Up';
import Login from './pages/Login';
import Home from './Home';
import Consultations from './components/Consultations';

const doctors = [
  { name: 'Dr. Alice Smith', specialty: 'Cardiology', location: 'New York' },
  { name: 'Dr. Bob Jones', specialty: 'Dermatology', location: 'Chicago' },
  { name: 'Dr. Charlie Brown', specialty: 'Pediatrics', location: 'San Francisco' },
  { name: 'Dr. Dana White', specialty: 'Neurology', location: 'Houston' },
];

const App = () => {
  useEffect(() => {
    console.log('App component rendered');
  }, []);

  return (
    <Router>
      <div className="app">
        <div className="header">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/appointments" element={<Appointments doctors={doctors} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/consultation" element={<Consultations doctors={doctors} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;