import React from 'react';
import '../styles/Navbar.css';

const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};


function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
       <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <h1> Diane's Portfolio</h1>

        <ul class="pure-menu-list">
            <li class="pure-menu-item"><a href="#me" class="pure-menu-link">About Me</a></li>
            <li class="pure-menu-item"><a href="#project" class="pure-menu-link">Projects</a></li>
            <li class="pure-menu-item"><a href="/Resume.pdf" class="pure-menu-link">Resume</a></li>
            <li class="pure-menu-item"><a href="#contact" class="pure-menu-link">Contact</a></li>

        </ul>
    </div>
    </nav>
  );
}

export default Navbar;
