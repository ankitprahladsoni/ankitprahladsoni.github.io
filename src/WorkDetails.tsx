import React from 'react';
import { WorkPoints } from './WorkPoints';

interface WorkDetailsProps {
  title: string;
  company?: string;
  date?: string;
  work: string[];
  link?: string;
}

export function WorkDetails(props: WorkDetailsProps) {
  return (
    <div className="resume-item d-flex flex-column flex-md-row mb-5">
      <div className="resume-content mr-auto">
        <h3 className="mb-0">{props.title}</h3>
        {props.company && (
          <div className="subheading mb-3">
            {props.company}
            <span className="resume-date text-primary">( {props.date} )</span>
          </div>
        )}

        <WorkPoints work={props.work} />
        {props.link && <a href={props.link}>Link to project</a>}
      </div>
    </div>
  );
}
