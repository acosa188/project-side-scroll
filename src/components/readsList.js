import React, { Component } from 'react'
import ReadsCard from './readsCard'

class ReadsList extends Component {
    render() {
        return (
            <div className="talkListClass" id={this.props.id}>
                <div className="card-columns">
                    <ReadsCard eventName="vueconf us" place="Austin, TX, USA" date="Mar. 2, 2020" topic="Test-Drive Development with Vue.js" />
                    <ReadsCard eventName="dotcss" place="Paris, France" date="Dec. 4, 2019" topic="In Defense of Utility-First CSS" videoLink="#" slideLink="#" />
                    <ReadsCard eventName="vue conf toronto" place="Toronto, Canada" date="Nov. 11, 2019" topic="Test-Drive Development with Vue.js" videoLink="#" slideLink="#" />
                    <ReadsCard eventName="vue.js pairs #20" place="Paris, France" date="Jun. 5 2019" topic="An Introduction to TDD with Vue.js" videoLink="#" slideLink="#" />
                </div>
            </div>    
        );
    }
}

export default ReadsList;