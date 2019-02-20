import React, { Component } from 'react';
import './App.css';
import img_state0_elThinkingicon from './images/Thinking_state0_elThinkingicon.png';
import img_state1_elThinkingicon from './images/Thinking_state1_elThinkingicon.png';


export default class Thinking extends Component {

  // Properties used by this component:
  // visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state0_elBackground710099 = {
        width: '100%',
        height: '100%',
     };
    const style_state0_elBackground710099_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state0_elThinkingicon = {
        backgroundImage: 'url('+img_state0_elThinkingicon+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Thinking" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state0_elBackground710099' style={style_state0_elBackground710099_outer}>
            <div style={style_state0_elBackground710099} />
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='containerMinHeight state0_elThinkingicon' style={style_state0_elThinkingicon} />
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state1_elBackground710099 = {
        width: '100%',
        height: '100%',
     };
    const style_state1_elBackground710099_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state1_elThinkingicon = {
        backgroundImage: 'url('+img_state1_elThinkingicon+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Thinking" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state1_elBackground710099' style={style_state1_elBackground710099_outer}>
            <div style={style_state1_elBackground710099} />
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='containerMinHeight state1_elThinkingicon' style={style_state1_elThinkingicon} />
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
