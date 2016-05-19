import React from 'react';

const stylePlayer = {
  width: '58.688em',
  height: '33rem',
  border: '0px',
}

export default class VideoItemEmbed extends React.Component {
  render() {
    return (
        <iframe style={stylePlayer} className="style-player" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" allowFullScreen></iframe>
    )
  }
}
