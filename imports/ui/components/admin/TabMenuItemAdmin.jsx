import React from 'react';

export default class TabMenuItemAdmin extends React.Component {

  componentDidMount() {
    const idMenu = document.getElementById("upload-menu");
    idMenu.click()
  }

  onClickUpload() {
    FlowRouter.go('upload');
  }

  onClickOverview() {
    FlowRouter.go('overview');
  }

  render() {
    return (
      <div className="tab-menu-item-admin">
        <li className="tab col s2 l2" onClick={this.onClickUpload}><a id="upload-menu" href="#">Upload</a></li>
        <li className="tab col s2 l2" onClick={this.onClickOverview}><a id="overview-menu" href="#">Overview</a></li>
      </div>
    )
  }
}
