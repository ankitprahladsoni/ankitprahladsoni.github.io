import React from 'react';
import CheckListData from './CheckListData';

export function CheckList({}) {
  const list = CheckListData.map(c => <CheckListItem key={c} name={c} />);
  return <ul className="fa-ul mb-0">{list}</ul>;
}
interface CheckListItemProps {
  name: string;
}

export function CheckListItem(props: CheckListItemProps) {
  return (
    <li>
      <i className="fa-li fa fa-check" />
      {props.name}
    </li>
  );
}
