import React from 'react';
import { Link } from 'react-router-dom';
// import notfound from '../../Assets/404.jpg';
import './NotFound.css';

function NotFound() {
  return (
    <div className='notfound'>
        <h1>404 Page NotFound</h1>
        <Link to="/" className='backHome'>Home</Link>
    </div>
  )
}

export default NotFound;