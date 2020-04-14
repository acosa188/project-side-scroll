import React, { Component } from 'react'

class Intro extends Component {
    render() {
        return (
            <div className="introClass p-5">
                <p className="display-2 text-light ac-intro-name">
                    Hello, I'm Sarah Dayan
                </p>
                <p className="text-muted ac-intro-summary">
                    Sr. Software Engineer currently working as Tech Lead of the Doc Squad at <a className="text-light" href="#">Algolia</a>. I mostly do front-end
                    development, and I'm a Vue.js and CSS nerd. I can't shut up about test-driven development and utility-first CSS. I also share 
                    share what I learn on my blog <a className="text-light" href="#">frontstuff.io</a>, or at meetups and conferences.
                </p>
            </div>
        );  
    }
}

export default Intro;