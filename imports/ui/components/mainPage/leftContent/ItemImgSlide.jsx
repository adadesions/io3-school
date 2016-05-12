import React from 'react';

const listImgSlide = {
  width: '20em',
  height: '16em',
}

export default class ItemImgSlide extends React.Component {
  render() {
    return (
      <li style={listImgSlide}>
        <img src="/images/mainPage/test.jpg"/>
        <div className="caption center-align">
          <h5>This is our big Tagline!</h5>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
    )
  }
}
