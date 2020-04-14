import React from 'react';
import Intro from './components/intro'
import Navigation from './components/navigation'

function App() {
  return (
      <div className="App">
          <div className="row">
              <div className="col-4">
                  <Intro />
                  <Navigation />
              </div>
              <div className="col-8">
              </div>
          </div>
      
    </div>
  );
}

export default App;
