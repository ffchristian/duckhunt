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
    });
    $('#seleccionNivel').on('click',function(e){
      $('#niveles').hide();
      $('#duckHunt').show();
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
            <div id="niveles">Selector de nivel<div id="seleccionNivel">Primer nivel</div></div>
            <div id="duckHunt">
              <div id="ducksScore"></div>
              <div id="globalScore"></div>
              <div id="cieloAzul">cuelo</div>
              <div id="pasto"></div>
              <div id="perro"></div>
              <div id="patos">
                <div id="pato1"></div>
                <div id="pato2"></div>
                <div id="pato3"></div>
                <div id="pato4"></div>
              </div>
            </div>
      			<div id="arma"></div>
      </div>
    );
  }
}

export default App;
