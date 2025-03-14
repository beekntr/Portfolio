import React, { useState } from 'react';
import './contact-form.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000 , https://auditorium.api.kshitijsinghbhati.in';

export function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      console.log('Sending form data:', formData);

      const url = `${process.env.REACT_APP_API_URL}/api/contact`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Server response:', data);

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ email: '', message: '' });
      } else {
        console.error('Server error:', data);
        setStatus(`Failed to send message: ${data.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            required
            name="email" 
            id="email" 
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">How Can We Help You?</label>
          <textarea 
            required
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-submit-btn">Submit</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
}
