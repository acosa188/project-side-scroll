import React, { Component } from 'react'

class Navigation extends Component {
    render() {
        return (
            <div className="navigationClass p-5">
                <nav className="nav d-flex flex-column" id="ac-navigation">
                    <a className="nav-item  nav-link ac-nav-item h7 d-inline-flex mb-3 pl-0" href="#projectID">
                        01 <hr className="ac-w-15 ac-hr d-inline-flex mx-4" /> PROJECTS
                    </a>
                    <a className="nav-item nav-link ac-nav-item h7 d-inline-flex mb-3 pl-0" href="#talksID">
                        02 <hr className="ac-w-10 ac-hr d-inline-flex mx-4" /> TALKS
                    </a>
                    <a className="nav-item nav-link ac-nav-item h7 d-inline-flex mb-3 pl-0" href="#interviewID">
                        03 <hr className="ac-w-10 ac-hr d-inline-flex mx-4" /> INTERVIEWS
                    </a>
                </nav>
            </div>    
        );
    }
}

export default Navigation;