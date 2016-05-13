import React from 'react';

import Navigator from '../ui/components/navBar/Navigator.jsx';

export default class Container extends React.Component{
  // mixins: [ReactMeteorData],

  render(){
    return(
      <div>
        <Navigator />
        <br/><br/><br/>  
        {this.props.content}
      </div>
    )
  }
}
