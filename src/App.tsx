import { Education } from './education/Education';
import { Projects } from './projects/Projects';
import { Experience } from './experience/Experience';
import { Skills } from './skills/Skills';
import { About } from './about/About';
import * as React from 'react';
import './App.css';
import { NavBar } from './navbar/NavBar';

class App extends React.Component {
  public render() {
    return (
      <>
        <NavBar />
        <div className="container-fluid p-0">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </div>
      </>
    );
  }
}

export default App;
