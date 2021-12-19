import React from 'react';
import '../styles/Header.css';

const styles = {
  headerStyle: {
    background: 'red',
  },
  headingStyle: {
    fontSize: '100px',
  },
};
t

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Portfolio</h1>
    </header>
  );
}

export default Header;
