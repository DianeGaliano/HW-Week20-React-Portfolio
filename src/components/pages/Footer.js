import React from 'react';

function Footer() {
    return(
        <div className="ribbon l-box-lrg pure-g">
        <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
        </div>
        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

            <h2 className="content-head content-head-ribbon" id="contact">Contact Me.</h2>
        <button className="button is-primary">
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
    <button className="button is-primary">
        <span class="icon-text">
            <span class="icon">
                <i class="fas fa-home"></i>
            </span>
            <a href="#home">Home</a>
        </span>
    </button>
    </div>
    </div>
    );
}

export default Footer;
