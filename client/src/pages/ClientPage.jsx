import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientPage = () => {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ name: '', email: '' });

  useEffect(() => {
    // Fetch clients from API
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/clients');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching clients', error);
      }
    };

    fetchClients();
  }, []);

  const handleAddClient = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5050/api/clients', newClient);
      setClients([...clients, response.data]);
      setNewClient({ name: '', email: '' });
    } catch (error) {
      console.error('Error adding client', error);
    }
  };

  return (
    <div className="client-container">
      <h1>Client Management</h1>
      <form onSubmit={handleAddClient}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={newClient.name}
            onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={newClient.email}
            onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
            required
          />
        </div>
        <button type="submit">Add Client</button>
      </form>
      <h2>Client List</h2>
      <ul>
        {clients.map((client) => (
          <li key={client._id}>
            {client.name} - {client.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
