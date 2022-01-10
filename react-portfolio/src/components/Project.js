import React from 'react';
import '../styles/Section.css';

const styles = {
    sectionStyles: {
        background: 'white',
    },
};

function Project() {
    return(
        <div class="content">
        <h2 class="content-head is-center" id="project">Projects</h2>
        
        <div class="pure-g">
            
            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 class="content-subhead">
                    Project 1: Game Finder
                </h3>
                <a href="https://dianegaliano.github.io/project1_videoGameFinder/">
                    <img width="300" alt="File Icons" class="pure-img-responsive" src="./image/ProjectOne.png"></img>
                </a>

                <p>
                    In this project the goal is to build a game finder using 3rd party APIs.
                </p>
            </div>
            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 class="content-subhead">
                    Project 2: Automotive Repair Tracker
                </h3>
                <a href="https://automotive-tracker.herokuapp.com/">
                <img width="300" alt="File Icons" class="pure-img-responsive" src="./image/ProjectTwo.png"></img>
                </a>

                <p>
                    In this project the goal is to bild a company auto repairs tracker web page.                
                </p>
            </div>
            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 class="content-subhead">
                    E-Commerce Back End
                </h3>
                <a href="https://watch.screencastify.com/v/ZnSlZUvkeU3x2yMgdViw">
                <img width="300" alt="File Icons" class="pure-img-responsive" src="./image/ECom.png"></img>
                </a>

                <p>
                    In this project the goal is to bild the back end for an e-commerce site.                
                </p>
            </div>
            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 class="content-subhead">
                    Professional README Generator
                </h3>
                <a href="https://drive.google.com/file/d/1BOLI_bstK1lgmSE6zfKGx5YaQmwUDzK_/view">
                <img width="300" alt="File Icons" class="pure-img-responsive" src="./image/README.png"></img>
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
