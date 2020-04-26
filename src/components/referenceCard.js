import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../css/referenceCard.css'

class ReferenceCard extends Component {
    render() {
        return (
            <div className="refrenceCardClass row my-5">
                <div className="rounded-circle ac-card-bgcolor ac-circle d-flex justify-content-center">
                    <FontAwesomeIcon className="align-self-center text-light ac-person-icon" icon={faUser} />
                </div>
                <div className="py-2 px-5">
                    <p className="h2 text-light">{this.props.name}</p>
                    <p className="h7 font-weight-normal text-muted">{this.props.profession}</p>
                    <div className="d-inline-block">
                        <small className="ac-orange-color mr-5">
                            E: {this.props.email}
                        </small>
                        {
                            this.props.phone ? 
                                <small className="ac-orange-color">
                                    P: {this.props.phone}
                                </small> : <div></div>
                        }
                        
                    </div>
                </div>
                
            </div>    
        );
    }
}

export default ReferenceCard;