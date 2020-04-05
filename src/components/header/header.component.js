import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';

const Header = () => {
  return (
    <Link to="/">
      <div className="header d-flex bg-primary badge-dark">
        <h1>Comments Tree</h1>
      </div>
    </Link>
  )
}

export default Header;