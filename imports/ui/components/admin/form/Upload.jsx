import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// Collections
import { Playlists } from '../../../../apis/models/Playlists.js';

// Components
import ChipKeyword from '../ChipKeyword.jsx';

const styleForm = {
  width: '80%'
}
const styleDropdown = {
  paddingLeft: '1em',
  paddingRight: '1em',
}
const itemKeyword = {
  marginTop: '3em',
}


export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.onClickSave = this.onClickSave.bind(this);
    this.renderPlaylists = this.renderPlaylists.bind(this);
  }

  componentDidMount(){
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });

    $(document).ready(function() {
      $('select').material_select();
    });
  }

  onClickSave() {
    const videoName = this.refs.videoName.value;
    const videoLink = this.refs.videoLink.value;
    const playlist = this.refs.playlist.value;
    const keywords = $('#chipOutput').val();
  }

  renderPlaylists() {
    const generateOption = (playlists) => {
      return playlists.map( (playlist, index) => {
        return (
          <option key={index} value={playlist.playlistName} >{playlist.playlistName}</option>
        )
      })
    };

    return (
      <select ref="playlist" id="playlist">
        { generateOption(this.props.playlists) }
      </select>
    )

  }

  render() {
    return (
      <div>
        <div className="col s1 l2"><br/></div>
        <form className="col s10 l8">
          <div className="row">
            <div className="input-field col s12 l12">
              <input ref="videoName" type="text" id="videoName" type="text" className="validate" />
              <label for="videoName">Video Name</label>
            </div>
            <div className="input-field col s12">
              <textarea ref="description" id="description" className="materialize-textarea validate"></textarea>
              <label for="description">Description</label>
            </div>
            <div className="input-field col s12 l12">
              <input ref="videoLink" id="videoLink" type="text" className="validate" />
              <label for="videoLink">Video Link</label>
            </div>
            <div style={styleDropdown} className="input-field col s12 l6 drop-down">
              { this.renderPlaylists() }
              <label>Playlist</label>
            </div>
            <div style={styleDropdown} className="input-field col s12 l6 drop-down">
              <select ref="catagory" defaultValue="0" id="catagory">
                <option value="0" disabled>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label>Catagory</label>
            </div>
            <div className="input-field col s12 l12">
              <label for="keyword">Keyword</label>
              <div style={itemKeyword} id="keyword">
                <ChipKeyword />
              </div>
            </div>
          </div>
          <div className="button-group">
            <button
              type="button"
              className="waves-effect waves-light btn green"
              onClick={ this.onClickSave }
            >Save
            </button>
            <button type="button" className="waves-effect waves-light btn red">Cancel</button>
          </div>
        </form>
        <div className="col s1 l2"><br/></div>
      </div>
    )
  }
}

export default createContainer(() => {
  const isPlaylistsReady = Meteor.subscribe('allPlaylists');
  const playlists = Playlists.find().fetch();
  return {
    playlists,
  }
}, Upload);
