import React from 'react';
import { SocialLinks } from './SocialLinks';
export function About({}) {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <h1 className="mb-0">
          Ankit
          <span className="text-primary">Soni</span>
        </h1>
        <div className="subheading mb-5">
          <a href="mailto:ankitprahladsoni@gmail.com">
            ankitprahladsoni@gmail.com
          </a>{' '}
          · (352) 745-9208
        </div>
        <p className="mb-5">
          Graduate student at University of Florida. Formerly full stack senior
          software developer with 6 years’ experience developing applications
          for Insurance and Banking domain using Java and Spring. Introduced and
          implemented new frontend framework to improve team’s productivity.
          Built up better coding practices within the team.
        </p>
        <SocialLinks />
      </div>
    </section>
  );
}




