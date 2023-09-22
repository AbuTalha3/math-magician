import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <h1>Calculator App</h1>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
