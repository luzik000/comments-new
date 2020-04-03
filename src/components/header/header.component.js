import React from 'react';

import './header.styles.css';
import { Link } from 'react-router-dom';

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