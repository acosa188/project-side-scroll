import React from 'react';
import Intro from './components/intro'
import Navigation from './components/navigation'
import NavigationMobile from './components/navigationMobile'
import FooterLinks from './components/footerLinks'
import ProjectList from './components/projectList'
import ReadsList from './components/readsList'
import ReferenceList from './components/referenceList'


function App() {
  return (
      <div className="App">
          <NavigationMobile/>
          <div className="row no-gutters">
              <div className="col-12 col-lg-4 ">
                  <div className="ac-intro-wrapper">
                      <Intro />
                      <div className="d-none d-lg-block">
                          <Navigation />  
                      </div>
                      <FooterLinks />
                  </div>
                  
              </div>
              <div className="col-12 col-lg-8 ">
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
