import React from 'react';
import SocialLinksList from './SocialLinksList';

export function SocialLinks({}) {
  const list = SocialLinksList.map(l => <SocialLinkItem {...l} key={l.href} />);
  return <ul className="list-inline list-social-icons mb-0">{list}</ul>;
}

interface SocialLinkItemProps {
  href: string;
  class: string;
}

function SocialLinkItem(props: SocialLinkItemProps) {
  return (
    <li className="list-inline-item">
      <a href={props.href} target="_blank">
        <span className="fa-stack fa-lg">
          <i className="fa fa-circle fa-stack-2x" />
          <i className={`fa ${props.class} fa-stack-1x fa-inverse`} />
        </span>
      </a>
    </li>
  );
}
