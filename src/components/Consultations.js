import React, { useState } from 'react';

const InstantConsultation = ({ doctors }) => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Message to ${selectedDoctor}: ${message}`);
    // Here you would typically send the message to your backend
    alert(`Message sent to ${selectedDoctor}`);
    setSelectedDoctor('');
    setMessage('');
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <h1>Instant Consultation</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="doctor">Select Doctor</label>
          <select
            id="doctor"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
            className="form-control"
          >
            <option value="" disabled>Select a doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor.name}>{doctor.name} - {doctor.specialty}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="form-control"
            placeholder="Enter your message"
          />
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default InstantConsultation;