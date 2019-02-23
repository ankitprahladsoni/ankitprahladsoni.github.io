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
          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="education"
          >
            <div className="my-auto">
              <h2 className="mb-5">Education</h2>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">University of Florida</h3>
                  <div className="subheading mb-1">
                    Masters in Science
                    <span className="resume-date text-primary">
                      ( Jan 2018 - Dec 2019 )
                    </span>
                  </div>
                  <div>Computer and Information Science</div>
                  <p>GPA: 3.33</p>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">
                    Vellore Institute of Technology, India
                  </h3>
                  <div className="subheading mb-1">
                    Bachelor of Technology
                    <span className="resume-date text-primary">
                      ( July 2008 - May 2012 )
                    </span>
                  </div>
                  <div>Information Technology</div>
                  <p>GPA: 3.56</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default App;
