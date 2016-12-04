import React, { Component } from 'react';
import $ from 'jquery';
import startpage from '../assets/duck-hunt1.png';

var patos = ['pato1','pato2','pato3','pato4'];


function colision(){
    for(var pato in patos){
      var pato = $('#'+patos[pato]);
      var trigger = $('#trigger');
      var rangoX = [Math.round(pato.position().left),Math.round(pato.position().left+pato.width())];
      var rangoY = [Math.round(pato.position().top),Math.round(pato.position().top+pato.height())];
      var triggerY = [Math.round(trigger.position().left),Math.round(trigger.position().left+pato.width())];
      var triggerX = [Math.round(trigger.position().top),Math.round(trigger.position().top+pato.height())];
      if(triggerX[0]>rangoX[0] &&  triggerX[1]<rangoX[1]){
        console.log('Pato '+pato);
      }
      //console.log(rangoX,rangoY);
      //console.log(triggerY, triggerX);
    }
}

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
    }).click(function(){
      colision();
      //setTimeout(function(){ console.log(patos[0]); }, 1000);

    });

    
    /* Comment */

    


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
                <div id="pato1">1</div>
                <div id="pato2">2</div>
                <div id="pato3">3</div>
                <div id="pato4">4</div>
              </div>
            </div>
      			<div id="arma"></div>
      </div>
    );
  }
}

export default App;
