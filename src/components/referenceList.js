import React, { Component } from 'react'
import ReferenceCard from './referenceCard'

class ReferenceList extends Component {
    render() {
        return (
            <div className="referenceListClass" id={this.props.id}>
                <div className="flex-column">
                    <ReferenceCard name="Michelle Thomas" profession="H&R Block Software Developer Manager" email="mthomas@compiledit.com"/>
                    <ReferenceCard name="Joe Salazar" profession="Software Developer" email="joe.m.slzr@gmail.com" />
                    <ReferenceCard name="Mimi Tan" profession="Bextle Company Founder" email="bextlemimi@gmail.com" phone="403-861-1588" />
                </div>
            </div>    
        );
    }
}

export default ReferenceList;