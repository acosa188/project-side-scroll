import React, { Component } from 'react'
import Logo from '../images/dumpling.png'
import '../css/navigationMobile.css'

class NavigationMobile extends Component {
    render() {
        return (
            <div className="navigationMobileClass sticky-top d-lg-none">
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    <span className="navbar-brand" >
                        <img src={Logo} width="30" height="30" alt="" />
                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="#projectID">Projects</a>
                            <a className="nav-item nav-link" href="#coursesID">Courses&nbsp;&&nbsp;Reads</a>
                            <a className="nav-item nav-link" href="#referenceID">References</a>
                        </div>
                    </div>          
                </nav>
            </div>    
        );
    }
} 

export default NavigationMobile;