import React from 'react';

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
  render() {
    return (
      <div>
        <div className="col s1 l2"><br/></div>
        <form className="col s10 l8">
          <div className="row">
            <div className="input-field col s12 l12">
              <input type="text" id="videoName" type="text" className="validate" />
              <label for="videoName">Video Name</label>
            </div>
            <div className="input-field col s12">
              <textarea id="description" className="materialize-textarea"></textarea>
              <label for="description">Description</label>
            </div>
            <div className="input-field col s12 l12">
              <input id="videoLink" type="text" className="validate" />
              <label for="videoLink">Video Link</label>
            </div>
            <div style={styleDropdown} className="input-field col s12 l6 drop-down">
              <select defaultValue="0" id="playlist">
                <option value="0" disabled>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label>Playlist</label>
            </div>
            <div style={styleDropdown} className="input-field col s12 l6 drop-down">
              <select defaultValue="0" id="catagory">
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
            <button type="button" className="waves-effect waves-light btn green">Save</button>
            <button type="button" className="waves-effect waves-light btn red">Cancel</button>
          </div>
        </form>
        <div className="col s1 l2"><br/></div>
      </div>
    )
  }
}
