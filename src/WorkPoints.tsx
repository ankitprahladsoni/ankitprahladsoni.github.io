import React from 'react';

interface WorkPointsProps {
  work: string[];
}

export default function WorkPoints(props: WorkPointsProps) {
  const work = props.work.map(w => <li key={w}>{w}</li>);
  return <ul>{work}</ul>;
}
