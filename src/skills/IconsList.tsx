import React from 'react';
import IconListData from './IconListData';
export function IconsList({}) {
  const list = IconListData.map(i => <IconItem key={i.name} {...i} />);

  return <div className="list-inline list-icons">{list}</div>;
}

interface IconItemProps {
  name: string;
  class: string;
}
export function IconItem(props: IconItemProps) {
  return (
    <span className="img-span">
      <i className={`${props.class} colored`} />
      <span className="img-text">{props.name}</span>
    </span>
  );
}
