import React from 'react';

const styleFontName = {
  fontWeight: 'bold',
}
const styleFontView = {
  fontWeight: 'bold',
  color: '#6679AD',
  fontSize: '22px',
}
export default class VideoDetail extends React.Component {
  render() {
    return (
      <div>
        <h5 style={styleFontName} className="video-name">Video Name</h5>
        <h6 style={styleFontView} className="video-view">View : </h6>
        <h6 className="video-description">Discription : </h6>
      </div>
    )
  }
}
