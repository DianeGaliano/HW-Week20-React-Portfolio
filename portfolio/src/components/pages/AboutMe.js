import React from 'react';
import me from '../../assets/me.jpg'

export default function About() {
  return (
    <div className="ribbon l-box-lrg pure-g" id="me">
    <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
        <img width="300" alt="File Icons" className="pure-img-responsive" src={me}></img>
    </div>
    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

        <h2 className="content-head content-head-ribbon" >About Me.</h2>

        <p>
            I am a web developer currently located in Killeen, TX. 
            I am a graduate of The Art Institute of Austin, and as a Media Arts and Animation major, I have a strong background in media production such as animation, graphic design, audio production and more. 
            <br></br>
            <br></br>
            Seeking to broaden my horizon I am always pushing myself to learn the latest technology skills. 
            It is my goal to use my skills to create intuitive and dynamic content.
        </p>
    </div>
</div>
  );
}
