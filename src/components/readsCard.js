import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import '../css/readsCard.css'

class ReadsCard extends Component {
    render() {
        return (
            <div className="card ac-card-bgcolor talkCardClass">
                <div className="card-body">
                    <div className="d-flex flex-column p-4 ">
                        <div className="mb-5">
                            <p className="ac-talks-card-lang-font text-uppercase ac-orange-color mb-0">
                                {this.props.eventName}
                            </p>
                            <p className="mb-0">
                                <small className="ac-talks-card-lang-size text-muted">
                                    {this.props.place}
                                </small>
                            </p>
                            <p>
                                <small className="ac-talks-card-lang-size text-muted">
                                    {this.props.date}
                                </small>
                            </p>

                        </div>

                        <div className="pt-5 mb-2 align-items-end">
                            <p className="ac-talks-card-topic-font font-weight-normal text-light">
                                {this.props.topic}
                            </p>
                            <div className="d-inline-block">
                                {this.props.moreinfoLink &&
                                    <a className="ac-link mr-4" href={this.props.moreinfoLink} target="_blank">
                                        <small className="font-weight-bold">
                                            MoreInfo &nbsp;
                                        </small>
                                        <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                                    </a>
                                }

                                {this.props.websiteLink &&
                                    <a className="ac-link" href={this.props.websiteLink} target="_blank">
                                        <small className="font-weight-bold">
                                            Website &nbsp;
                                        </small>
                                        <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                                    </a>
                                }

                            </div>
                        </div>
                    </div>
                </div>
                
              
            </div>    
        );
    }
}

export default ReadsCard;