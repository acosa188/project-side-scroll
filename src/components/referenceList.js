import React, { Component } from 'react'
import ReferenceCard from './referenceCard'

class ReferenceList extends Component {
    render() {
        return (
            <div className="referenceListClass" id={this.props.id}>
                <div className="flex-column">
                    <ReferenceCard name="Michelle Thomas" profession="H&R Block Software Developer Manager" email="mthomas@compiledit.com" phone="403-xxx-xxxx" />
                    <ReferenceCard name="Joe Salazar" profession="Software Developer" email="email@email.com" phone="403-xxx-xxxx" />
                    <ReferenceCard name="Name" profession="profession" email="email@email.com" phone="403-xxx-xxxx" />
                </div>
            </div>    
        );
    }
}

export default ReferenceList;