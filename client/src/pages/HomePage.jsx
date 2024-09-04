import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Service Management System</h1>
      
      <nav>
        <ul>
          <li>
            <Link to="/book">Book an Appointment</Link>
          </li>
          <li>
            <Link to="/clients">Client Management</Link>
          </li>
          <li>
            <Link to="/services">Our Services</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;