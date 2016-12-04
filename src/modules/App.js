import React, { Component } from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
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
    });
    /* Alinear trigger */
    $('#app-js').mousemove(function( event ) {
      var add = 35;
      var xAdd = $('#app-js').position().left;
       var yAdd = $('#app-js').position().top;
      $("#trigger").css({left:event.clientX-xAdd-add,top:event.clientY-yAdd-add});
    });

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
      <div id="app-js">
            <div id="splashpage"><img src={startpage} /><div id="entrar">Entrar</div></div>
            <div id="niveles">Selector de nivel<div id="seleccionNivel">Primer nivel</div></div>
            <div id="duckHunt">
              <div id="trigger"></div>
              <div id="ducksScore"></div>
              <div id="globalScore" className="fuente1">100000</div>
              <div id="cieloAzul"></div>
              <div id="pasto"></div>
              <div id="perro"></div>
              <div className="patos">
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
