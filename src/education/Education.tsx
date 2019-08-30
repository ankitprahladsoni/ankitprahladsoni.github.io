import React from 'react';
import { Section } from 'src/Section';
import EducationDetails from './EducationDetails';
export function Education({}) {
  const list = EducationDetails.map(e => <UniDetails key={e.uni} {...e} />);
  return (
    <Section id="education" title="Education">
      {list}
    </Section>
  );
}

interface UniDetailsProps {
  uni: string;
  degree: string;
  date: string;
  branch: string;
  gpa: string;
}

export function UniDetails(props: UniDetailsProps) {
  return (
    <div className="resume-item d-flex flex-column flex-md-row mb-5">
      <div className="resume-content mr-auto">
        <h3 className="mb-0">{props.uni}</h3>
        <div className="subheading mb-1">
          {props.degree}
          <span className="resume-date text-primary">( {props.date} )</span>
        </div>
        <div>{props.branch}</div>
        <p>GPA: {props.gpa}</p>
      </div>
    </div>
  );
}
