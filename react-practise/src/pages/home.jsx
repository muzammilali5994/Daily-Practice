import React from 'react'
import { Link } from 'react-router-dom';

function home() {
  return (
    <div>

      <nav>
        <ul>
          <li>
            <Link to="/about">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">Contact</Link>
          </li>
          <li>
            <Link to="/about">Sign In</Link>
          </li>
          <li>
            <Link to="/about">Sign Up</Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default home