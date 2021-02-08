import React from 'react';

// Style
import './sidebarStyle.scss';

interface SidebarProps {}

const SidebarView: React.FC<SidebarProps> = (props) => {
  return (
    <div className="sidebar home__sidebar">
      <h2 className="sidebar__header">DevGroups</h2>
      <input id="sidebar__groupSearchInput" placeholder="Search Groups" />
      <h3 className="sidebar__groupHeader">Favorites</h3>
      <p className="sidebar__groupName">Unit 1</p>
      <p className="sidebar__groupName">Unit 2</p>
      <p className="sidebar__groupName">Unit 3</p>
      <p className="sidebar__groupName">Unit 4</p>
      <p className="sidebar__groupName">Data Science</p>
      <p className="sidebar__groupName">Labs</p>
      <p className="sidebar__groupName">Super Secret Group</p>
    </div>
  );
};

export default SidebarView;
