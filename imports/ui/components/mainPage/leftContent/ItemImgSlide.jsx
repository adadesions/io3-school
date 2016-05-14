import React from 'react';

const listImgSlide = {
  width: '21.45em',
  height: '35em',
}

export default class ItemImgSlide extends React.Component {
  render() {
    return (
      <li className="list-img-slide">
        <img src="/images/mainPage/test.jpg"/>
        <div className="caption center-align">
          <h5>This is our big Tagline!</h5>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
    )
  }
}
