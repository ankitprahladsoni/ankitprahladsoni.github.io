import React from 'react';
import { Section } from '../Section';
import ExperienceData from './ExperienceData';
import { CompanyDetails } from './CompanyDetails';

export function Experience({}) {
  const list = ExperienceData.map(e => (
    <CompanyDetails {...e} key={e.company} />
  ));

  return (
    <Section id="experience" title="Experience">
      {list}
    </Section>
  );
}


