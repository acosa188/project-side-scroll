import React, { Component } from 'react'
import ReadsCard from './readsCard'

class ReadsList extends Component {
    render() {
        return (
            <div className="talkListClass mb-5" id={this.props.id}>
                <div className="card-columns">
                    <ReadsCard eventName="Ehud Sharlin" place="University of Calgary" date="Fall 2017" topic="Human Computer Interaction" moreinfoLink="http://contacts.ucalgary.ca/info/cpsc/profiles/102-3264" websiteLink="http://www.cpsc.ucalgary.ca/~ehud"/>
                    <ReadsCard eventName="Carey Williamson" place="University of Calgary" date="Fall 2017" topic="Systems Modelling & Simulation" moreinfoLink="https://pages.cpsc.ucalgary.ca/~carey/" />
                    <ReadsCard eventName="Nelson Wong" place="University of Calgary" date="Winter 2017" topic="Database Management Systems" moreinfoLink="http://contacts.ucalgary.ca/info/cpsc/profiles/102-2540" />
                    <ReadsCard eventName="Ken Barker" place="University of Calgary" date="Fall 2019" topic="Design and Implementation Database System" moreinfoLink="https://www.ucalgary.ca/kbarker/" />
                    <ReadsCard eventName="Sasha Ivanov" place="University of Calgary" date="Fall 2019" topic="iProgramming Creative Minds" moreinfoLink="https://www.linkedin.com/in/madebysasha/?originalSubdomain=ca" />
                    <ReadsCard eventName="Steve Krug" place="Book" date="Revisited" topic="Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability" />
                </div>
            </div>    
        );
    }
}

export default ReadsList;