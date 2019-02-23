import React from 'react';
import Menu from './Menu';

export function NavBarMenu({}) {
  const list = Menu.map(m => <MenuItem {...m} key={m.name} />);
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">{list}</ul>
    </div>
  );
}

interface MenuItemProps {
  href: string;
  name: string;
}

export function MenuItem(props: MenuItemProps) {
  return (
    <li className="nav-item">
      <a className="nav-link js-scroll-trigger" href={props.href}>
        {props.name}
      </a>
    </li>
  );
}
