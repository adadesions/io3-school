import React from 'react';

import TabMenuItemAdmin from '../../ui/components/admin/TabMenuItemAdmin.jsx';
import MenuItemAdmin from '../../ui/components/admin/MenuItemAdmin.jsx';
import Upload from '../../ui/components/admin/form/Upload.jsx'

const leftContent = {
  position: 'fixed',
  marginTop: '-0.2em',
  backgroundColor: '#28395d',
  height: '41.5em',
}
const rightContent = {
  marginLeft: '16.66667%',
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
export default class AdminSite extends React.Component {
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
        <div style={leftContent} className="col s12 l2 z-depth-1">
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
              <Upload />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
