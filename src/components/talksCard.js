import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

class TalksCard extends Component {
    render() {
        return (
            <div className="card ac-card-bgcolor talkCardClass">
                <div className="card-body">
                    <div className="d-flex flex-column p-4 ">
                        <div className="mb-5">
                            <p className="ac-talks-card-lang-size ac-talks-card-lang-spacing text-uppercase text-light mb-0">
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
                            <p className="h1 font-weight-normal text-light">
                                {this.props.topic}
                            </p>
                            <div className="d-inline-block">
                                {this.props.videoLink &&
                                    <a className="text-muted mr-4" href={this.props.videoLink}>
                                        <small className="font-weight-bold">
                                            Video &nbsp;
                                        </small>
                                        <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                                    </a>
                                }

                                {this.props.slideLink &&
                                    <a className="text-muted" href={this.props.slideLink}>
                                        <small className="font-weight-bold">
                                            Slides &nbsp;
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

export default TalksCard;