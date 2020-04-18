import React from 'react';
import Intro from './components/intro'
import Navigation from './components/navigation'
import FooterLinks from './components/footerLinks'
import ProjectList from './components/projectList'
import TalksList from './components/talksList'

function App() {
  return (
      <div className="App">
          <div className="row no-gutters ac-main-wrapper">
              <div className="col-4 ">
                  <div className="ac-intro-wrapper">
                      <Intro />
                      <Navigation />
                      <FooterLinks />
                  </div>
                  
              </div>
              <div className="col-8 ">
                  <div className="ac-content-wrapper" data-spy="scroll" data-target="#ac-navigation" data-offset="0">
                      <ProjectList id="projectID" />
                      <TalksList id="coursesID" />
                  </div>
              </div>
          </div>

    </div>
  );
}

export default App;
