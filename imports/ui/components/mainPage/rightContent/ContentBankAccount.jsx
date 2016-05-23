import React from 'react';

import LeftContent from '../leftContent/LeftContent.jsx';

const rightContent = {
  marginTop: '0.1em',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '1em',
}
const styleRow = {
  marginLeft: 'none',
  marginRight: 'none',
}
const container = {
  width:'80%',
  backgroundColor: '#fff',
  padding: '1em',
}
const styleHeader = {
  margin: '0px',
  marginBottom: '0.25em',
}
const styleRowImg = {
  display: 'flex',
  justifyContent: 'center',
}
export default class ContentBankAccount extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('.slider').slider({
                            full_width: true,
                            Transition: 1,
                            Interval: 0.1
                          });
    });
  }

  render() {
    return (
      <div className="row main-page">
        <div className="col s12 l3 z-depth-1 column-news">
          <div className="row">
            <LeftContent />
          </div>
        </div>
        <div style={rightContent} className="col s12 l9 column-annountment">
          <div style={container} className="z-depth-1 annountment-container">
            <div style={styleRow} className="row">
              <h4 className="annountment-header" style={styleHeader}>Annountment</h4>
              <div className="divider"></div>
              <div style={styleRowImg}>
                <img src="/images/login/logo.png"/>
              </div>
            </div>
            <div style={styleRow} className="row">
              <h4 className="annountment-header" style={styleHeader}>Bank Account</h4>
              <div className="divider"></div>
                <div className="card-panel">
                  <div className="row valign-wrapper bank-account">
                    <div className="col m3 tumbnail-bank-account">
                      <img src="images/mainPage/bank-pic.png" className="responsive-img"/>
                    </div>
                    <div className="col m9">
                      <span className="black-text text-bank-account">
                        <h5>Bank Name : </h5>
                      </span>
                      <span className="black-text text-bank-account">
                        <h5>Bank Account : </h5>
                      </span>
                      <span className="black-text text-bank-account">
                        <h5>Branch : </h5>
                      </span>
                      <span className="black-text text-bank-account">
                        <h5>Type Account : </h5>
                      </span>
                      <span className="black-text text-bank-account">
                        <h5>Account Name : </h5>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="donate-btn">
                  <a className="waves-effect waves-light btn yellow darken-2">Donate</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
