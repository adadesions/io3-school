import React from 'react';

const stylePlayer = {
  width: '58.688em',
  height: '33em',
  border: '0px',
}

export default class VideoItem extends React.Component {
  render() {
    return (
      <video style={stylePlayer} className="responsive-video" controls>
        <source src="/videos/test.mp4" type="video/mp4"/>
      </video>
    )
  }
}
