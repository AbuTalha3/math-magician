import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <h1>Math Magicians</h1>
      <div>
        <ul className="list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
