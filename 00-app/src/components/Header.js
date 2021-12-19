import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  header: {
    background: 'blue'
  },
  h1: {
    justifyContent: 'flex-end'
  },
};
function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header style={style.header} className="header">
      <h1 style={style.h1} >Portfolio</h1>
    </header>
  );
}

export default Header;