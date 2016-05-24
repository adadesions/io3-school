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

    $(document).ready(function() {
      $('select').material_select();
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
              <h4 className="annountment-header" style={styleHeader}>Become our sponsors</h4>
              <div className="divider"></div>
              <div style={styleRowImg}>
                <img className="topic-logo" src="/images/login/logo.png"/>
              </div>
              <div className="topic">
                <span>

                </span>
              </div>
              <div className="donate-form">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick"/>
                  <input type="hidden" name="hosted_button_id" value="2AA9KDKMMSC5J"/>
                  <div className="input-field col s12">
                    <select name="os0">
                      <option value="Friendship">Friendship ฿315.00 THB</option>
                      <option value="Sliver Sponsorship">Sliver Sponsorship ฿1,024.00 THB</option>
                      <option value="Gold Sponsorship">Gold Sponsorship ฿3,500.00 THB</option>
                      <option value="Vibranium Sponsorship">Vibranium Sponsorship ฿20,000.00 THB</option>
                    </select>
                  </div>
                  <input type="hidden" name="currency_code" value="THB"/>
                  <button className="waves-effect waves-light btn yellow darken-2" name="submit" type="submit">Donate</button>
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
                </form>
              </div>
            </div>
            <div style={styleRow} className="row">
              <h4 className="annountment-header" style={styleHeader}>Donate by Transfer</h4>
              <div className="divider"></div>
                <div className="card-panel">
                  <div className="row valign-wrapper bank-account">
                    <div className="col s2 m2 l3 tumbnail-bank-account">
                      <img className="bank-logo" src="images/mainPage/bank-pic.jpg"/>
                    </div>
                    <div className="col s10 m10 l9">
                      <span className="black-text text-bank-account">
                        <h5>Bank Name : ธนาคารกสิกรไทย ( Kasikorn Bank ) </h5>
                      </span>
                      <span className="black-text text-bank-account">
                        <h5>Account Name : นายอาคาเณย์ ขมิ้นเครือ ( Mr.Arkane Kaminkure )</h5>
                      </span>
                      <span className="black-text text-bank-account">
                        <h5>Bank Account : 630-2-18386-2</h5>
                      </span>
                      <span className="black-text text-bank-account">
                        <h5>Branch : จามจุรีสแควร์ ( Chamchuri Square )</h5>
                      </span>
                      <span className="black-text text-bank-account">
                        <h5>Type Account : ออมทรัพย์ ( Saving )</h5>
                      </span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
