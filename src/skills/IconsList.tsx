import React from 'react';
import iconListData from './IconListData';
const IconsList = ({}) => {
  const list = iconListData.map(i => <IconItem key={i.name} {...i} />);

  return <div className="list-inline list-icons">{list}</div>;
};

export default IconsList;

interface IconItemProps {
  name: string;
  class: string;
}

const IconItem = (props: IconItemProps) => (
  <span className="img-span">
    <i className={`${props.class} colored`} />
    <span className="img-text">{props.name}</span>
  </span>
);
