import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AvailableSeats = ({ theaterId }) => {
    console.log(theaterId);
  const [availableSeats, setAvailableSeats] = useState([]);

  useEffect(() => {
    const fetchAvailableSeats = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/api/theaters/1/seats/available`);
        console.log(response.data);
        setAvailableSeats(response.data);
      } catch (error) {
        console.error('Error fetching available seats:', error);
      }
    };
    fetchAvailableSeats();
  }, [theaterId]);

  const handleSeatClick = async (seatId) => {
    try {
      // Assuming you have the movieId and bookingTime available
      const bookingRequest = {
        movieId: 1,
        theaterId:1,
        bookingTime: "33",
        seatNumbers: [1]
      };
      const response = await axios.post('http://localhost:9090/bookings', bookingRequest);
      console.log('Seat booked:', seatId);
      // You can update UI here as per your requirement, e.g., remove the booked seat from availableSeats
    } catch (error) {
      console.error('Error booking seat:', error);
    }
  };

  return (
    <div>
      <h2>Available Seats:</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {availableSeats.map(seatId => (
          <div
            key={seatId}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: 'green',
              margin: '5px',
              textAlign: 'center',
              lineHeight: '50px',
              cursor: 'pointer' // Make the seat clickable
            }}
            onClick={() => handleSeatClick(seatId)} // Handle seat click
          >
            {seatId}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableSeats;
