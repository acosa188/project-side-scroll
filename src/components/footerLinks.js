import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

class FooterLinks extends Component {
    render() {
        return (
            <div className="footerLinksClass d-flex justify-content-start text-light p-5">
                <a className="text-light mr-5" href="#">
                    <FontAwesomeIcon className="mr-3" icon={faTwitter} size="lg" />
                    <span className="mr-3"> Twitter </span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                    
                </a>
                <a className="text-light mr-5" href="#">
                    <FontAwesomeIcon className="mr-3" icon={faGithub} size="lg" /> 
                    <span className="mr-3" > Github </span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                </a>
            </div>    
        );
    }
}

export default FooterLinks;