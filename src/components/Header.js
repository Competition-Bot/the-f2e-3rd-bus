import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
      <nav>
  
        <div>
          <ul className="flex">
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/news/1'>
                News
              </Link>
            </li>
            <li>
              <Link to='/bussearch'>
                search
              </Link>
            </li>
          </ul>
        </div>
        
      </nav>
    );
  };
  
  export default Header;