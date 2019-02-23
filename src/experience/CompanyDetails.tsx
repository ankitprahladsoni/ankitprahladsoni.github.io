import React from 'react';
import { WorkPoints } from './WorkPoints';

interface CompanyDetailsProps {
  title: string;
  company: string;
  date: string;
  work: string[];
}

export function CompanyDetails(props: CompanyDetailsProps) {
  return (
    <div className="resume-item d-flex flex-column flex-md-row mb-5">
      <div className="resume-content mr-auto">
        <h3 className="mb-0">{props.title}</h3>
        <div className="subheading mb-3">
          {props.company}
          <span className="resume-date text-primary">( {props.date} )</span>
        </div>

        <WorkPoints work={props.work} />
      </div>
    </div>
  );
}
