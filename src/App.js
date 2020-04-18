import React from 'react';
import Intro from './components/intro'
import Navigation from './components/navigation'
import FooterLinks from './components/footerLinks'
import ProjectList from './components/projectList'
import ReadsList from './components/readsList'
import ReferenceList from './components/referenceList'

function App() {
  return (
      <div className="App container-fluid">
          <div className="row no-gutters">
              <div className="col-4 ">
                  <div className="ac-intro-wrapper">
                      <Intro />
                      <Navigation />
                      <FooterLinks />
                  </div>
                  
              </div>
              <div className="col-8 ">                
                  <div className="ac-content-wrapper p-5 px-lg-3" data-spy="scroll" data-target="#ac-navigation" data-offset="0">
                      <ProjectList id="projectID" />
                      <ReadsList id="coursesID" />
                  </div>
              </div>
          </div>

    </div>
  );
}

export default App;
