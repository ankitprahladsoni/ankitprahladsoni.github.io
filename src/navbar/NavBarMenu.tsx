import React from 'react';
import Menu from './Menu';

export function NavBarMenu({}) {
  const list = Menu.map(m => <MenuItem {...m} key={m.name} />);
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav navbar-nav" id="test">
        {list}
      </ul>
    </div>
  );
}

interface MenuItemProps {
  href: string;
  name: string;
}

export function MenuItem(props: MenuItemProps) {
  return (
    <li
      className="nav-item"
      data-toggle="collapse"
      data-target=".navbar-collapse.show"
    >
      <a href={props.href} className="nav-link js-scroll-trigger">
        {props.name}
      </a>
    </li>
  );
}
