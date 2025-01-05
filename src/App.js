import './App.css';
import React from 'react';
import AppointmentSetter from './components/Appointment';
import DoctorReviews from './components/Reviews';
import Navbar from './pages/Navbar';

const doctors = [
  { name: 'Dr. Alice Smith', specialty: 'Cardiology', location: 'New York' },
  { name: 'Dr. Bob Jones', specialty: 'Dermatology', location: 'Chicago' },
  { name: 'Dr. Charlie Brown', specialty: 'Pediatrics', location: 'San Francisco' },
  { name: 'Dr. Dana White', specialty: 'Neurology', location: 'Houston' },
];

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <Navbar/>
        </div>
        <h1>Doctor Appointment App</h1>
      <AppointmentSetter doctors={doctors} />
      <DoctorReviews doctors={doctors} />
    </div>
  );
};

export default App;
