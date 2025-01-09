import React, { useState, useEffect } from 'react';
import './Reviews.css';

const DoctorReviews = ({ doctors = [] }) => {
  const initialReviews = {};
  const initialDisabled = {};
  doctors.forEach(doctor => {
    initialReviews[doctor.name] = [];
    initialDisabled[doctor.name] = false;
  });

  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState(initialReviews);
  const [disabled, setDisabled] = useState(initialDisabled);

  useEffect(() => {
    const updatedReviews = {};
    const updatedDisabled = {};
    doctors.forEach(doctor => {
      updatedReviews[doctor.name] = reviews[doctor.name] || [];
      updatedDisabled[doctor.name] = disabled[doctor.name] || false;
    });
    setReviews(updatedReviews);
    setDisabled(updatedDisabled);
  }, [doctors]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (selectedDoctor && newReview && !disabled[selectedDoctor]) {
      setReviews({
        ...reviews,
        [selectedDoctor]: [...reviews[selectedDoctor], newReview],
      });
      setNewReview('');
      console.log(`Review added for ${selectedDoctor}: ${newReview}`);
    }
  };

  const toggleDisable = (doctorName) => {
    setDisabled({
      ...disabled,
      [doctorName]: !disabled[doctorName],
    });
    console.log(`Toggled disable for ${doctorName}: ${!disabled[doctorName]}`);
  };

  return (
    <div className="doctor-reviews">
      <h2>Doctor Reviews</h2>

      {/* Review Submission Form */}
      <form onSubmit={handleReviewSubmit}>
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
              <option key={index} value={doctor.name} disabled={disabled[doctor.name]}>
                {doctor.name} - {doctor.specialty}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            required
            className="form-control"
            placeholder="Enter your review"
            disabled={disabled[selectedDoctor]}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={disabled[selectedDoctor]}>
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div className="reviews-list">
        <table>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Specialty</th>
              <th>Reviews</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={index}>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>
                  {reviews[doctor.name].length > 0 ? (
                    <ul>
                      {reviews[doctor.name].map((review, reviewIndex) => (
                        <li key={reviewIndex}>{review}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No reviews yet.</p>
                  )}
                </td>
                <td>
                  <button onClick={() => toggleDisable(doctor.name)}>
                    {disabled[doctor.name] ? 'Enable Reviews' : 'Disable Reviews'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorReviews;