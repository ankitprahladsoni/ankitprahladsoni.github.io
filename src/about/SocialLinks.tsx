import React from 'react';
import SocialLinksList from './SocialLinksList';
import { SocialLinkItem } from "./SocialLinkItem";
export function SocialLinks({ }) {
  const list = SocialLinksList.map(l => <SocialLinkItem {...l} key={l.href}/>);
  return <ul className="list-inline list-social-icons mb-0">{list}</ul>;
}
