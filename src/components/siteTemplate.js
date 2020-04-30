import React, { Component } from 'react'
import '../css/siteTemplate.css'
import { Link } from 'react-router-dom'

class SiteTemplate extends Component {
    render() {
        return (
            <div className="siteTemplateClass">
                <div className="container my-5">
                    <div className="row px-5">
                        <div className="imgClass col-lg-6 mb-lg-5">
                            <img className="img-thumbnail mt-lg-5" src={this.props.image} alt="" height="500px" />
                        </div>
                        <div className="summaryClass col-lg-6 p-lg-5 mb-5 mb-lg-0">
                            <p className="display-3 text-light">{this.props.title}</p>
                            <small className="text-muted font-weight-bold">{this.props.date}</small>
                            <p className="ac-summary text-light mt-4">{this.props.summary}</p>
                        </div>
                        <div className="problemClass mb-5 px-lg-0 col-12">
                            <div className="d-inline-flex">
                                <span className="h5 ac-heading mr-2">Problem</span>
                                <hr className="ac-hr-design-lighter" align="left"></hr>
                            </div>
                            <p className="ac-summary text-light">{this.props.problem}</p>
                        </div>  
                       
                        <div className="techClass mb-5 px-lg-0 col-12">
                            <div className="d-inline-flex">
                                <span className="h5 ac-heading mr-2">Technologies</span>
                                <hr className="ac-hr-design-lighter" align="left"></hr>
                            </div>
                            <ul className="mt-4 text-light">
                                {
                                    this.props.languages.map((lang, k) => {
                                        return (
                                            <li className="ac-list-item mb-3" key={k}>{lang}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="planClass mb-5 px-lg-0 col-12">
                            <div className="d-inline-flex mb-3">
                                <span className="h5 ac-heading mr-2">Planning Stage</span>
                                <hr className="ac-hr-design-lighter" align="left"></hr>
                            </div>
                            <div>
                                <img className="img-fluid" src={this.props.planImage} alt="" />
                            </div>
                            <p className="text-light mt-3">{this.props.planSummary}</p>

                        </div>

                        <div className="codeClass mb-5 px-lg-0 col-12">
                            <div className="d-inline-flex">
                                <span className="h5 ac-heading mr-2">Code</span>
                                <hr className="ac-hr-design-lighter" align="left"></hr>
                            </div>
                            <p className="h6 text-light">Github</p>
                            <p className="text-muted">
                                Github repository:&nbsp;
                                {
                                    this.props.gitLink ? 
                                        <a className="ac-link" href={this.props.gitLink} target="_blank" rel="noopener noreferrer">{this.props.gitLink}</a> :
                                        <span className="text-light">No github repository because of propriety reasons.</span>
                                }
                            
                            </p>
                        </div>

                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <Link className="h5 ac-link" to="/">
                                    &lt; Back
                                </Link>
                            </div>  

                        </div>
                       
                    </div>

                    
                </div>
            </div>    
        );
    }
}

export default SiteTemplate;