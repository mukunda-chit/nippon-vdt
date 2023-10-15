import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/observ">Observations</Link></li>
        <li><Link to="/tintingdet">Tinting-Banco</Link></li>
        <li><Link to="/colourantsbancodet">Colourants-Banco</Link></li>
        <li><Link to="/tintingnoomdet">Tinting noombal</Link></li>
        <li><Link to="/colourantsnoomdet">Colourants noombal</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
