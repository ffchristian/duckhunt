import React, { Component } from 'react';
import $ from 'jquery';
class App extends Component {
//import logo from './assets/logo.svg'

constructor(props) {
	super(props);
	this.state = {
	  disparo: false
	};
}
/*
componentDidMount(){

}

$(document).on( "mouseup", function( event ) {

}

arma(){

}
*/
//{this.function.bind(this)}


  render() {
    return (
      <div className="app-js">
      Personajes, armas, experiencia
      </div>
    );
  }
}

export default App;
