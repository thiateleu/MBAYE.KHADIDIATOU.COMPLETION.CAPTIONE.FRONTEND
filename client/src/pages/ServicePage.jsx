import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/services');
        setServices(response.data);
      } catch (error) {
        setError('Failed to fetch services');
      }
    };

    fetchServices();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p>${service.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicePage;
