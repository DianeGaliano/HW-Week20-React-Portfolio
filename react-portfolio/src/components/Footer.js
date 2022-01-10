import React from 'react';

import '../styles/Footer.css';

const styles = {
    card: {
      margin: 20,
      background: '#e8eaf6',
    },
    heading: {
      background: '#9a74db',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
  };

function Footer() {
    return (
        <section style={styles.footerStyle} className="footer">
        <button class="button is-primary">
            <span className="icon-text">
                <span className="icon">
                    <i className="fab fa-linkedin"></i>
                </span>
                <a href="https://www.linkedin.com/in/diane-galiano-1064341ba/">LinkedIn</a>
            </span>
        </button>
        <button className="button is-primary">
        <span className="icon-text">
            <span className="icon">
                <i className="fab fa-github-alt"></i>
            </span>
            <a href="https://github.com/DianeGaliano">Github</a>
        </span>
        </button>
        </section>
        
    );
    
}

export default Footer;

