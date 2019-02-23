import React from 'react';
import ProjectDetails from './ProjectDetails';
import { Section } from 'src/Section';
import { WorkDetails } from 'src/WorkDetails';

export function Projects({}) {
  const list = ProjectDetails.map(p => <WorkDetails {...p} key={p.title} />);
  return (
    <Section id="projects" title="Personal Projects">
      {list}
    </Section>
  );
}
