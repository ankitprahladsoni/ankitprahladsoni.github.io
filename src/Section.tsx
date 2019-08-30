import React, { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  id: string;
  children: ReactNode;
}

export function Section(props: SectionProps) {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id={props.id}
    >
      <div className="my-auto">
        {props.title && <h2 className="mb-5">{props.title}</h2>}
        {props.children}
      </div>
    </section>
  );
}
