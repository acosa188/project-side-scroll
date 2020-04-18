import React, { Component } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProjectCard extends Component {
    render() {
        return (
            <div className="projectCard ac-card-bgcolor p-5 mb-2">
                <p className="ac-project-card-lang-font text-uppercase ac-orange-color">{this.props.languages}</p>
                <p className="ac-project-card-title-font text-light">{this.props.title}</p>

                <p className="ac-project-card-summary-font text-muted">{this.props.summary}</p>
                <FontAwesomeIcon className="text-muted" icon={faStar} size="xs" />
                <span className="ac-project-card-lang-size text-muted">&nbsp;{this.props.likes}</span>
            </div>    
        );
    }
}

export default ProjectCard;