import * as React from 'react';

export function Avatar({}) {
  return (
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none" />
      <span className="d-none d-lg-block">
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="https://avatars2.githubusercontent.com/u/8023641"
        />
      </span>
    </a>
  );
}
