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

          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="experience"
          >
            <div className="my-auto">
              <h2 className="mb-5">Experience</h2>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">Senior Software Developer</h3>
                  <div className="subheading mb-3">
                    Talentica, Pune
                    <span className="resume-date text-primary">
                      ( Apr 2014 - Dec 2017 )
                    </span>
                  </div>

                  <ul>
                    <li>
                      Worked on migration and implemented new features of Java 8
                      (Streams, lambda expression) in the project and guided
                      team to follow the new convention.
                    </li>
                    <li>
                      Introduced an AngularJs alternative to existing JSF
                      dependent framework for easy product configuration using
                      Angular-formly, Webpack and Bootstrap.
                    </li>
                    <li>
                      Helped the team in breaking down the monolith application
                      into many microservices for better maintainability using
                      Spring Boot and Consul.
                    </li>
                    <li>
                      Took initiative in setting up Sonarqube for the project to
                      identify and fix code violation in the project.
                    </li>
                    <li>
                      Migrated all application modules from Maven to Gradle
                      effectively reducing the build time for CI.
                    </li>
                    <li>
                      Improved code coverage for existing legacy modules and
                      features using Spock and JUnit tests.
                    </li>
                    <li>
                      Actively contributed in sprint planning and retrospective
                      meetings.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">Programmer Analyst</h3>
                  <div className="subheading mb-3">
                    Cognizant, Chennai
                    <span className="resume-date text-primary">
                      ( May 2012 - Apr 2014 )
                    </span>
                  </div>
                  <ul>
                    <li>
                      Created a mass change template for party information
                      maintenance, an alternative to UI.
                    </li>
                    <li>
                      Prepared detailed requirement/design documents, following
                      the tele-calls with the onshore.
                    </li>
                    <li>
                      Performed code reviews and writing unit test on the
                      existing modules.
                    </li>
                    <li>Fixed code violations using PMD.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="projects"
          >
            <div className="my-auto">
              <h2 className="mb-5">Personal Projects</h2>
              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">Technical Blog</h3>

                  <ul>
                    <li>Created a blogpost using Vuejs and Bulma. </li>
                    <li>
                      {' '}
                      Aimed at providing easy explanation of various design
                      patterns.
                    </li>
                    <li>
                      Link:
                      https://ankitprahladsoni.github.io/blog-post/#/design-patterns/strategy{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

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
