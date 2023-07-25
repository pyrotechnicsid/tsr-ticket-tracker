// src/TicketTracker.js
import React, { useState } from 'react';
import axios from 'axios';

const TicketTracker = () => {
  const [ticketNumber, setTicketNumber] = useState('');
  const [techName, setTechName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/add-ticket', {
        ticketNumber,
        techName,
      });
      console.log(response.data);
      // Perform any additional actions or display success messages as needed.
    } catch (error) {
      console.error('Error adding ticket:', error);
    }
  };

  return (
    <div>
      <h1>Ticket Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ticketNumber}
          onChange={(e) => setTicketNumber(e.target.value)}
          placeholder="Ticket Number"
        />
        <input
          type="text"
          value={techName}
          onChange={(e) => setTechName(e.target.value)}
          placeholder="Tech Name"
        />
        <button type="submit">Add Ticket</button>
      </form>
    </div>
  );
};

export default TicketTracker;
