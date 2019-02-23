import React from "react";
import { Section } from '../Section';
import { IconsList } from './IconsList';
import { CheckList } from './CheckList';
export function Skills({}) {
  return <Section title="Skills" id="skills">
          <div className="subheading mb-3">
                Programming Languages &amp; Tools
              </div>
              <IconsList />
              <div className="subheading mb-3">And...</div>
              <CheckList />
          </Section>;
}
  