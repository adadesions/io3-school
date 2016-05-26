import React from 'react';

export default class MenuItemAdmin extends React.Component {

  onClickSchool() {
    FlowRouter.go('upload');
    const idMenu = document.getElementById("upload-menu");
    idMenu.click()
  }

  onClickOverview() {
    FlowRouter.go('overview');
    const idMenu = document.getElementById("overview-menu");
    idMenu.click()
  }

  render() {
    return (
      <div className="menu-item-admin-group">
        <li className="menu-item-admin" onClick={this.onClickOverview}>Overview</li>
        <div className="divider"></div>
        <li className="menu-item-admin" onClick={this.onClickSchool}>School</li>
        <div className="divider"></div>
        <li className="menu-item-admin">Info</li>
        <div className="divider"></div>
      </div>
    )
  }
}
