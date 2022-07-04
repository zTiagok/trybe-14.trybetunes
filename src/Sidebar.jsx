import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <nav className="navigation">
        {/* <Link to="/">Home</Link> */}
        <Link to="/search">Search</Link>
        <Link to="/album/:id">Albums</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/profile/editor">Edit Profile</Link>
      </nav>
    );
  }
}

export default Sidebar;
