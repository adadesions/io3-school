import React from 'react';

export default class MenuItemAdmin extends React.Component {
  render() {
    return (
      <div className="menu-item-admin-group">
        <li className="menu-item-admin">Overview</li>
        <div className="divider"></div>
        <li className="menu-item-admin">School</li>
        <div className="divider"></div>
        <li className="menu-item-admin">Info</li>
        <div className="divider"></div>
      </div>
    )
  }
}
