import React from 'react';

const sizeTabMenu = {
  width: '50% !important',
}

export default class Menu extends React.Component {

  componentDidMount(){
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });
  }

  render() {
    return(
      <ul style={sizeTabMenu} id="nav-mobile" className="menu-nav tabs">
        <li className="tab col l6"><a href="">All Course</a></li>
        <li className="tab col l6"><a href="">Buy Me A Beer</a></li>
      </ul>
    )
  }
}
