import React from 'react';

const styleFont = {
  fontSize: '20px',
  fontWeight: 'bold',
}

export default class Menu extends React.Component {
  render() {
    return(
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a style={styleFont} href="">All Course</a></li>
        <li><a style={styleFont} href="">Support Us</a></li>
      </ul>
    )
  }
}
