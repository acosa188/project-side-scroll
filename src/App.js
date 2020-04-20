import React from 'react';
import Intro from './components/intro'
import Navigation from './components/navigation'
import FooterLinks from './components/footerLinks'
import ProjectList from './components/projectList'
import ReadsList from './components/readsList'
import ReferenceList from './components/referenceList'

function App() {
  return (
      <div className="App">
          <div className="row no-gutters">
              <div className="col-5 col-xl-4 ">
                  <div className="ac-intro-wrapper">
                      <Intro />
                      <Navigation />
                      <FooterLinks />
                  </div>
                  
              </div>
              <div className="col-7 col-xl-8 ">
                  <div className="ac-content-wrapper p-5 px-lg-3" data-spy="scroll" data-target="#ac-navigation" data-offset="80">
                      <ProjectList id="projectID" />
                      <ReadsList id="coursesID" />
                      <ReferenceList id="referenceID"/>
                  </div>
              </div>
          </div>

    </div>
  );
}

export default App;
