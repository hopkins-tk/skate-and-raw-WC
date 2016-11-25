import React from '../jsx';
import { Component, prop, h, define } from 'skatejs';

// NOTE: This api doesn't work
class XCounter extends Component {

  static get is(){ return 'x-counter' }

  static get observedAttributes() {
    return ['test'];
  }

  static attributeChanged() {
    console.log("Called static");
    console.log( arguments );
  }

  renderCallback(){
    return (<div>Hello WITH test attr.</div>)
  }
}
// NOTE: This registration will throw
window.customElements.define( XCounter.is, XCounter );

define('x-hello', {
  props: {
    name: { attribute: true }
  },
  render (elem) {
    return <div>Hello, {elem.name}</div>
  }
});