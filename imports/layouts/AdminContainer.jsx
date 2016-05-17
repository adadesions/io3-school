import React from 'react';

import AdminNavigator from '../ui/components/navBarAdmin/AdminNavigator.jsx';

export default class AdminContainer extends React.Component{
  // mixins: [ReactMeteorData],

  render(){
    return(
      <div>
        <AdminNavigator />
        <br/><br/><br/>
        {this.props.content}
      </div>
    )
  }
}
