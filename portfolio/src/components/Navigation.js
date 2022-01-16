import React from 'react';


function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="header">
    <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <a className="pure-menu-heading" href="#home">Diane's Portfolio</a>

        <ul className="pure-menu-list">
          <li className="pure-menu-item pure-menu-selected">
            <a
              href="#home" 
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                
              Home
            </a>
          </li>

            <li className="pure-menu-item">
            <a 
              href="#me"
              onClick={() => handlePageChange('About')} 
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
              
              About Me
            </a>
          </li>

          <li className="pure-menu-item">
            <a
              href="#project" 
              onClick={() => handlePageChange('Project')}
              className="pure-menu-link">
              
              Projects
            </a>
          </li>

          <li className="pure-menu-item">
            <a
              href="#contact"  
              onClick={() => handlePageChange('Contact')}
              className="pure-menu-link">
              
              Contact
            </a>
          </li>

        </ul>
    </div>
</div>
  );
}

export default Navbar;
