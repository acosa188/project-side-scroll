import React, { Component } from 'react'
import '../css/intro.css'

class Intro extends Component {
    render() {
        return (
            <div className="introClass p-5">
                <p className="display-2 text-light ac-intro-name-weight">
                    Hello, I'm Arjun Cosare
                </p>
                <p className="text-muted ac-intro-summary-line-height">
                    Fresh graduate in computer science at <a className="ac-link" href="https://www.ucalgary.ca/">University of Calgary</a>. Recently, I do a lot of front-end
                    development, and got into react.js and a bit of bootstrap. I do brush up my back-end skills with node.js and C# from time to time. I can't shut up
                    about test-driven development. Oh how easily we can catch those nasty bugs.
                </p>
            </div>
        );  
    }
}

export default Intro;