import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ClientPage from './pages/ClientPage';
import BookingPage from './pages/BookingPage';
import Footer from './components/Footer';
import './app.css'; 

const App = () => {
  return (
    <Router>
      <div id="root">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/clients" element={<ClientPage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </main>
        <section className="image-section">
          <img src="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Cleaning Service" />
        </section>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
