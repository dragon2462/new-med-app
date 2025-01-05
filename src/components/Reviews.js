import React, { useState } from 'react';
import './Reviews.css';

const DoctorReviews = ({ doctors }) => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState(
    doctors.reduce((acc, doctor) => {
      acc[doctor.name] = []; // Initialize empty reviews for each doctor
      return acc;
    }, {})
  );

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (selectedDoctor && newReview) {
      setReviews({
        ...reviews,
        [selectedDoctor]: [...reviews[selectedDoctor], newReview],
      });
      setNewReview('');
    }
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
            className="form-control"
            required
          >
            <option value="">-- Choose a Doctor --</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="review">Leave a Review</label>
          <textarea
            id="review"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            className="form-control"
            placeholder="Write your review here..."
            rows="3"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      {selectedDoctor && reviews[selectedDoctor].length > 0 && (
        <div className="reviews-list">
          <h3>Reviews for {selectedDoctor}</h3>
          <ul>
            {reviews[selectedDoctor].map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DoctorReviews;
