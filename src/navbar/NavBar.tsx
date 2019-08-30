import { NavBarMenu } from './NavBarMenu';
import { NavBarToggleButton } from './NavBarToggleButton';
import * as React from 'react';
import { Avatar } from './Avatar';

export function NavBar({}) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <Avatar />
      <NavBarToggleButton />
      <NavBarMenu />
    </nav>
  );
}
