import React from 'react';

/////Components/////
import AdminNavigator from '../ui/components/navBarAdmin/AdminNavigator.jsx';
import MenuItemAdmin from '../ui/components/admin/MenuItemAdmin.jsx';
import TabMenuItemAdmin from '../ui/components/admin/TabMenuItemAdmin.jsx';

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

export default class AdminContainer extends React.Component{
  render(){
    return(
      <div>
        <AdminNavigator />
        <br/><br/><br/>
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
                  {this.props.content}
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
