import React, { Component } from 'react'
import ReferenceCard from './referenceCard'

class ReferenceList extends Component {
    render() {
        return (
            <div className="referenceListClass" id={this.props.id}>
                <div className="flex-column">
                    <ReferenceCard name="Name" profession="Profession" email="Email@mail.com" phone="403-xxx-xxxx"/>
                </div>
            </div>    
        );
    }
}

export default ReferenceList;