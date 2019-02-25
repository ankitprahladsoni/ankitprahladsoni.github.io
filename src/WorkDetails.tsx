import React from 'react';
import WorkPoints from './WorkPoints';

interface WorkDetailsProps {
  title: string;
  company?: string;
  date?: string;
  work: string[];
  link?: string;
}

export function WorkDetails(props: WorkDetailsProps) {
  const { title, company, date, work, link } = props;

  const companyDetails = company && (
    <div className="subheading mb-3">
      {company}
      <span className="resume-date text-primary">({date} )</span>
    </div>
  );

  const projectLink = link && (
    <a href={link} target="_blank">
      Link to project
    </a>
  );

  return (
    <div className="resume-item d-flex flex-column flex-md-row mb-5">
      <div className="resume-content mr-auto">
        <h3 className="mb-0">{title}</h3>
        {companyDetails}
        <WorkPoints work={work} />
        {projectLink}
      </div>
    </div>
  );
}
