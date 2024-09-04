import { Link } from 'react-router-dom';
import '../app.css'; 

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/booking">Book Appointment</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
