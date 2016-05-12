import React from 'react';

import ItemImgSlide from './ItemImgSlide.jsx';

const styleList = {
  paddingLeft: 'none',
}

export default class LeftContent extends React.Component {
  render() {
    return (
      <div className="slider">
        <ul style={styleList} className="slides">
          <ItemImgSlide />
        </ul>
      </div>
    )
  }
}
