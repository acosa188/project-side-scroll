import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../css/referenceCard.css'

class ReferenceCard extends Component {
    render() {
        return (
            <div className="referenceCardClass">
                <FontAwesomeIcon icon={faUser} size="lg" />
                <div className="flex-column">
                    <p>{this.props.name}</p>
                    <p>{this.props.profession}</p>
                    <div className="d-inline-block">
                        <span>E: {this.props.email}</span>
                        <span>P: {this.props.phone}</span>
                    </div>
                </div>
            </div>    
        );
    }
}

export default ReferenceCard;