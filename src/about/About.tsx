import React from 'react';
import { SocialLinks } from './SocialLinks';
import Info from './Info';

export function About({}) {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <h1 className="mb-0">
          {Info.fname}
          <span className="text-primary">{Info.lname}</span>
        </h1>
        <div className="subheading mb-5">
          <a href={`mailto:${Info.email}`}>{Info.email}</a> · {Info.phone}
        </div>
        <p className="mb-5">{Info.bio}</p>
        <SocialLinks />
      </div>
    </section>
  );
}
