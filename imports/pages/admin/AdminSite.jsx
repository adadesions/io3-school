import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// Collections
import { Playlists } from '../../apis/models/Playlists.js';

// Components
import TabMenuItemAdmin from '../../ui/components/admin/TabMenuItemAdmin.jsx';
import MenuItemAdmin from '../../ui/components/admin/MenuItemAdmin.jsx';
import Upload from '../../ui/components/admin/form/Upload.jsx';

const leftContent = {
  marginTop: '-0.2em',
  backgroundColor: '#28395d',
  height: '100vh',
}
const rightContent = {
  marginTop: '0.1em',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '1em',
}
const center = {
  textAlign: 'center',
  padding: '3em',
}
const styleRow = {
  marginLeft: 'none',
  marginRight: 'none',
}
const container = {
  width:'95%',
  backgroundColor: '#fff',
  padding: '1em',
}
const styleHeader = {
  margin: '0px',
  marginBottom: '0.25em',
}

class AdminSite extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });

    $(document).ready(function() {
      $('select').material_select();
    });
  }

  render() {
    return (
      <div className="row admin-site">
        <div style={leftContent} className="col s12 l2 z-depth-1 left-menu-admin">
          <div className="row">
            <ul className="menu-admin">
              <MenuItemAdmin />
            </ul>
          </div>
        </div>
        <div style={rightContent} className="col s12 l10">
          <div style={container} className="z-depth-1">
            <div style={styleRow} className="row">
              <ul className="tabs tab-menu-admin">
                <TabMenuItemAdmin />
              </ul>
              </div>
            <div style={styleRow} className="row">
              <Upload playlists={this.props.playlists} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  const isPlaylistsReady = Meteor.subscribe('allPlaylists').ready();
  playlists = Playlists.find().fetch();
  console.log(playlists);
  return {
    playlists,
  }
}, AdminSite);
