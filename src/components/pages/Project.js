import React from "react";
import ECom from '../../assets/ECom.png';
import ProjectTwo from '../../assets/ProjectTwo.png';
import ProjectOne from '../../assets/ProjectOne.png';
import README from '../../assets/README.png';

function Project() {
    return(
        <div className="content">
        <h2 className="content-head is-center" id="project">Projects</h2>
        
        <div className="pure-g">
            
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                    Project 1: Game Finder
                </h3>
                <a href="https://dianegaliano.github.io/project1_videoGameFinder/">
                    <img width="300" alt="File Icons" className="pure-img-responsive" src={ProjectOne}></img>
                </a>

                <p>
                    In this project the goal is to build a game finder using 3rd party APIs.
                </p>
            </div>
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                    Project 2: Automotive Repair Tracker
                </h3>
                <a href="https://automotive-tracker.herokuapp.com/">
                <img width="300" alt="File Icons" className="pure-img-responsive" src={ProjectTwo}></img>
                </a>

                <p>
                    In this project the goal is to bild a company auto repairs tracker web page.                
                </p>
            </div>
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                    E-Commerce Back End
                </h3>
                <a href="https://watch.screencastify.com/v/ZnSlZUvkeU3x2yMgdViw">
                <img width="300" alt="File Icons" className="pure-img-responsive" src={ECom}></img>
                </a>

                <p>
                    In this project the goal is to bild the back end for an e-commerce site.                
                </p>
            </div>
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                    Professional README Generator
                </h3>
                <a href="https://drive.google.com/file/d/1BOLI_bstK1lgmSE6zfKGx5YaQmwUDzK_/view">
                <img width="300" alt="File Icons" className="pure-img-responsive" src={README}></img>
                </a>

                <p>
                    This project was created to test my knowledge of node js. The README Generator uses node to create a README file using prompts.                
                </p>
            </div>
        </div>
    </div>
    );
    
}

export default Project;
