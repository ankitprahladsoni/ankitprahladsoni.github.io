import React from 'react';
import { Section } from '../Section';
import ExperienceData from './ExperienceData';
import { WorkDetails } from '../WorkDetails';

export function Experience({}) {
  const list = ExperienceData.map(e => <WorkDetails {...e} key={e.company} />);

  return (
    <Section id="experience" title="Experience">
      {list}
    </Section>
  );
}
