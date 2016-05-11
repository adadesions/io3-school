import React from 'react';
export default class Container extends React.Component{
  // mixins: [ReactMeteorData],

  render(){
    return(
      <div>
        {this.props.content}
      </div>
    )
  }
}
