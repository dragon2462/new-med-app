import React, { useState } from 'react';
import './Appointment.css';

const AppointmentSetter = ({ doctors }) => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    if (selectedDoctor && appointmentDate && appointmentTime) {
      setConfirmation(
        `Your appointment with ${selectedDoctor} has been scheduled for ${appointmentDate} at ${appointmentTime}.`
      );
      setSelectedDoctor('');
      setAppointmentDate('');
      setAppointmentTime('');
    } else {
      setConfirmation('Please fill out all fields to set an appointment.');
    }
  };

  return (
    <div className="appointment-setter">
      <h2>Set an Appointment</h2>
      <form onSubmit={handleAppointmentSubmit}>
        <div className="form-group">
          <label htmlFor="doctor">Select Doctor</label>
          <select
            id="doctor"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="form-control"
            required
          >
            <option value="">-- Choose a Doctor --</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor.name}>
                {doctor.name} - {doctor.specialty}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Set Appointment
        </button>
      </form>

      {confirmation && <p className="confirmation-message">{confirmation}</p>}
    </div>
  );
};

export default AppointmentSetter;
