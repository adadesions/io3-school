import React from 'react';

const closeSign = {
  fontWeight: 'bold',
  fontSize: '1.5em',
  cursor: 'pointer',
  marginLeft: '0.5em',
}

export default class ChipKeyword extends React.Component {
  constructor() {
    super();
    this.state = {
      keywords: [],
    };
    this.setKeyWordChips = this.setKeyWordChips.bind(this);
    this.getKeyWordChips = this.getKeyWordChips.bind(this);
    this.clearKeyWordChips = this.clearKeyWordChips.bind(this);
  }

  setKeyWordChips(e) {
    const isSpacebar = ( e.keyCode === 32 );
    if( isSpacebar ) {
      let newKeyWord = this.refs.chipInput.value,
          keywords = this.state.keywords;
      keywords.push( newKeyWord );

      this.setState({
        keywords,
      });
      this.refs.chipInput.value = "";
    }
  }

  getKeyWordChips() {
    const keywords = this.state.keywords;
    return keywords.map( (keyword, index) => {
      return (
        <div key={index} className="chip keyword">
          { keyword }
          <i style={ closeSign } onClick={ () => this.removeKeyWordChip(keyword) } >x</i>
        </div>
      )
    })
  }

  removeKeyWordChip(keyword) {
    let keywords = this.state.keywords,
        eleIndex = keywords.indexOf(keyword);
    if( eleIndex === 0 ) { // Remove first element
      keywords.shift();
    }
    else if( eleIndex === keywords.length ) { // Remove last element
      keywords.pop();
    }
    else { // Remove any element
      keywords.splice(eleIndex, 1);
    }

    if( keywords.length < 1 ) { // Set as empty array
      keywords = []
    }
    this.setState({
      keywords,
    });
  }

  clearKeyWordChips(e) {
    const isSpacebar = ( e.keyCode === 32 );
    if( isSpacebar ) {
      this.refs.chipInput.value = "";
    }
  }

  render() {
    return (
      <div className="chip-keyword-component">
        <input
          ref="chipOutput"
          id="chipOutput"
          type="hidden"
          value={ this.state.keywords }
        />
        { this.getKeyWordChips() }
        <input
          className="validate"
          ref="chipInput"
          type="text"
          onKeyDown={ this.setKeyWordChips }
          onKeyUp={ this.clearKeyWordChips }
        />
      </div>
    )
  }
}
