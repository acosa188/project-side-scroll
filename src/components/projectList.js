import React, { Component } from 'react'
import ProjectCard from './projectCard'

class ProjectList extends Component {
    render() {
        return (
            <div className="projectListClass nav p-5 mx-5 mb-5" id={this.props.id}>
                <nav className="nav d-flex flex-column w-100">
                    <a className="nav-item nav-link p-0" href="#">
                        <ProjectCard languages="typescript" title="snippets.js" summary="Extract code snippets from source files." likes="10" />
                    </a>
                    <a className="nav-item nav-link p-0" href="#">
                        <ProjectCard languages="javascript" title="dinero.js" summary="An immutable library to create, calculate and format money." likes="3,221" />
                    </a>
                    <a className="nav-item nav-link p-0" href="#">
                        <ProjectCard languages="javascript" title="browserstore.js" summary="Persist data into various browser-based storage systems." likes="3,221" />
                    </a>
                           
                </nav>
                
            </div>    
        );
    }
}

export default ProjectList;