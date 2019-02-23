import React from 'react';

interface WorkPointsProps {
  work: string[];
}

export function WorkPoints(props: WorkPointsProps) {
  const work = props.work.map(w => <li key={w}>{w}</li>);
  return <ul>{work}</ul>;
}
