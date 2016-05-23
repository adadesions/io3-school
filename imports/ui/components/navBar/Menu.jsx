import React from 'react';

import Mainpage from '../../../pages/MainPage.jsx';

const sizeTabMenu = {
  width: '50% !important',
}
export default class Menu extends React.Component {

  componentDidMount(){
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });
  }

  onClickAllCourse() {
    FlowRouter.go('course');
  }

  onClickDonate() {
    FlowRouter.go('bankaccount');
  }

  render() {
    return(
      <ul style={sizeTabMenu} id="nav-mobile" className="menu-nav tabs">
        <li className="tab col l6 go-all-course"><a onClick={this.onClickAllCourse} href="">All Course</a></li>
        <li className="tab col l6 go-donate"><a onClick={this.onClickDonate} href="">Buy Me A Beer</a></li>
      </ul>
    )
  }
}
