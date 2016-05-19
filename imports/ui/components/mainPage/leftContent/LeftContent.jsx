import React from 'react';

import ItemImgSlide from './ItemImgSlide.jsx';

const marginSlide = {
  marginTop: '1.2em',
}
const styleList = {
  paddingLeft: 'none',
}

export default class LeftContent extends React.Component {
  render() {
    return (
      <div className="slider z-depth-1">
        <ul style={styleList} className="slides">
          <ItemImgSlide />
            <li className="list-img-slide">
              <img src="/images/mainPage/test.jpg"/>
              <div className="caption center-align">
                <h5>This is our big Tagline!</h5>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
        </ul>
      </div>
    )
  }
}
