import React from 'react';

interface SocialLinkItemProps {
  href: string;
  class: string;
}
export function SocialLinkItem(props: SocialLinkItemProps) {
  return (
    <li className="list-inline-item">
      <a href={props.href}>
        <span className="fa-stack fa-lg">
          <i className="fa fa-circle fa-stack-2x" />
          <i className={`fa ${props.class} fa-stack-1x fa-inverse`} />
        </span>
      </a>
    </li>
  );
}
