import React, { Component } from 'react'
import ProjectCard from './projectCard'
import '../css/projectList.css'

class ProjectList extends Component {
    render() {
        return (
            <div className="projectListClass nav mb-5" id={this.props.id}>
                <div className="ac-list-header mb-5 d-lg-none">Projects</div>
                <nav className="nav d-flex flex-column w-100">
                    <a className="nav-item nav-link p-0" href="/project/IvaraTheMerchant">
                        <ProjectCard languages="Node.js, Javascript, discord.js" title="ivara the merchant" summary="A discord bot that lets user to query the warframe market place." likes="10" />
                    </a>
                    <a className="nav-item nav-link p-0" href="/project/HCAP">
                        <ProjectCard languages="java" title="hcap" summary="A history base capability system for IoT devices." likes="3,221" />
                    </a>
                    <a className="nav-item nav-link p-0" href="/project/CanadaLive">
                        <ProjectCard languages="sql server, node.js, react.js, leaflet.js, c#, redux.js, saga.js, css" title="canadalive map" summary="An interactive map that compares last year's tax returns and current year's tax return." likes="3,221" />
                    </a>
                    <a className="nav-item nav-link p-0" href="/project/EasyGrading">
                        <ProjectCard languages="mvc, razor, c#, mysql" title="easy grading" summary="An application that let students check and measure their needed grade on future projects and exams." likes="3,221" />
                    </a>
                           
                </nav>
                
            </div>    
        );
    }
}

export default ProjectList;