import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class ARScannerScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elArbutton = (ev) => {
    // Go to screen 'AR Scanner'
    this.props.appActions.goToScreen('arscanner');
  
  }
  
  
  onClick_elInventorybutton = (ev) => {
    // Go to screen 'Inventory'
    this.props.appActions.goToScreen('inventory');
  
  }
  
  
  onClick_elLeaderbutton = (ev) => {
    // Go to screen 'Leaderboard'
    this.props.appActions.goToScreen('leaderboard');
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elEmbed = {
        pointerEvents: 'auto',
     };
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "<iframe id=\"iframeXRCanvas\" scrolling=\"yes\" width=\"100%\" height=\"100%\" align=\"right\" allow=\"gyroscope; accelerometer; microphone; camera;\" allowfullscreen=\"true\" src=\"https://ipfs.dlux.io/ipfs/QmRsAPvgES5GstfR83aApLPYmXDFEohm8YrTYNGFvcHHTk?undefined\"></iframe>";
    
    
    const style_elArbutton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elInventorybutton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elLeaderbutton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen ARScannerScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
          <div className='embeddedContent containerMinHeight elEmbed' style={style_elEmbed}>
            <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
          </div>
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont elArbutton' style={style_elArbutton}  color="accent" onClick={this.onClick_elArbutton} >
              {this.props.locStrings.arscanner_button_747870}
            </Button>
            <Button className='actionFont elInventorybutton' style={style_elInventorybutton}  color="accent" onClick={this.onClick_elInventorybutton} >
              {this.props.locStrings.arscanner_buttoncopy_205650}
            </Button>
            <Button className='actionFont elLeaderbutton' style={style_elLeaderbutton}  color="accent" onClick={this.onClick_elLeaderbutton} >
              {this.props.locStrings.arscanner_inventorybuttoncopy_675644}
            </Button>
          </div>
        </div>
      </div>
    )
  }
  

}
