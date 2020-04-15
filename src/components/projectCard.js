import React, { Component } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProjectCard extends Component {
    render() {
        return (
            <div className="projectCard ac-project-card-bgcolor p-5 mb-2">
                <p className="ac-project-card-lang-size ac-project-card-lang-spacing text-uppercase text-light">{this.props.languages}</p>
                <p className="h2 ac-project-card-title-spacing text-light">{this.props.title}</p>

                <p className="h7 text-muted">{this.props.summary}</p>
                <FontAwesomeIcon className="text-muted" icon={faStar} size="xs" />
                <span className="ac-project-card-lang-size text-muted">&nbsp;{this.props.likes}</span>
            </div>    
        );
    }
}

export default ProjectCard;