import React from 'react';
import { SocialLinks } from './SocialLinks';
import Info from './Info';
import { Section } from 'src/Section';

export function About({}) {
  return (
    <Section id="about">
      <h1 className="mb-0">
        {Info.fname} <span className="text-primary">{Info.lname}</span>
      </h1>
      <div className="subheading mb-5">
        <a href={`mailto:${Info.email}`}>{Info.email}</a> · {Info.phone}
      </div>
      <p className="mb-5">{Info.bio}</p>
      <SocialLinks />
    </Section>
  );
}
