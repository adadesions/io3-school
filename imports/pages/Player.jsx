import React from 'react';

import VideoItem from '../ui/components/player/VideoItem.jsx';
import VideoItemEmbed from '../ui/components/player/VideoItemEmbed.jsx';
import VideoDetail from '../ui/components/player/VideoDetail.jsx';
import VideoRelatesItem from '../ui/components/player/VideoRelatesItem.jsx';

const playerPage = {
  marginTop: '-0.2em',
}
const styleContainerPlayer = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#000',
  height: '33em',
}
const styleDetailAndRelates = {
  backgroundColor: '#eceff5',
}
const styleDetail = {
  backgroundColor: '#fff',
  paddingTop: '1em',
  paddingLeft: '1em',
  paddingRight: '1em',
  paddingBottom: '1em',
  WebkitBoxShadow: '0px 0px 2px 0px rgba(189,187,189,1)',
  MozBoxShadow: '0px 0px 2px 0px rgba(189,187,189,1)',
  boxShadow: '0px 0px 2px 0px rgba(189,187,189,1)',
}
const styleRelates = {
  backgroundColor: '#fff',
  paddingTop: '1em',
  paddingLeft: '1em',
  paddingRight: '1em',
  paddingBottom: '1em',
  WebkitBoxShadow: '0px 0px 2px 0px rgba(189,187,189,1)',
  MozBoxShadow: '0px 0px 2px 0px rgba(189,187,189,1)',
  boxShadow: '0px 0px 2px 0px rgba(189,187,189,1)',
}
const styleRow = {
  backgroundColor: '#F1F1F1',
}
const styleFontRelates = {
  fontWeight: 'bold',
}
export default class Player extends React.Component {
  render() {
    return (
      <div className="player-page" style={playerPage}>
        <div style={styleContainerPlayer}>
          {/*<VideoItem />*/}
          <VideoItemEmbed />
        </div>
        <div style={styleRow} className="row">
          <div className="col m8 videos-detail">
            <div style={styleDetail}>
              <VideoDetail />
            </div>
          </div>
          <div className="col m4 videos-relates">
            <div style={styleRelates}>
              <h5 style={styleFontRelates}>Relates Videos</h5>
              <div className="divider"></div>
              <VideoRelatesItem />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
