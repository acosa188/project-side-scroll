import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import '../css/footerLinks.css'

class FooterLinks extends Component {
    render() {
        return (
            <div className="footerLinksClass d-flex justify-content-start text-light py-lg-3 p-5">
                <a className="ac-link mr-5" href="https://www.linkedin.com/in/arjun-cosare-350601154/">        
                    <span className="footer-font"> Linked </span>
                    <FontAwesomeIcon className="mr-3 ac-icon" icon={faLinkedin} size="lg" />
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                    
                </a>
                <a className="ac-link mr-5" href="https://github.com/acosa188">
                    <FontAwesomeIcon className="mr-3 ac-icon" icon={faGithub} size="lg" /> 
                    <span className="footer-font mr-3" > Github </span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                </a>
            </div>    
        );
    }
}

export default FooterLinks;