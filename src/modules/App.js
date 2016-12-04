import React, { Component } from 'react';
import $ from 'jquery';
import startpage from '../assets/duck-hunt1.png';
class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  disparo: false
  	};
  }
  componentDidMount(){
    $('#entrar').on('click',function(e){
      $('#splashpage').hide();
      $('#niveles').show();
    })

  }




/*

$(document).on( "mouseup", function( event ) {

}

arma(){

}
 */

//{this.function.bind(this)}


  render() {
    return (
      <div className="app-js">
            <div id="splashpage"><img src={startpage} /><div id="entrar">Entrar</div></div>
            <div id="niveles">Selector de nivel</div>
      			<div id="arma"></div>
      </div>
    );
  }
}

export default App;
