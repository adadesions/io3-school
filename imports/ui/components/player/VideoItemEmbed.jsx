import React from 'react';

const stylePlayer = {
  width: '58.688em',
  height: '33em',
  border: '0px',
}

export default class VideoItemEmbed extends React.Component {
  render() {
    return (
      <div class="video-container">
        <iframe style={stylePlayer} src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" allowfullscreen></iframe>
      </div>
    )
  }
}
