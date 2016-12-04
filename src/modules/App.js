import React, { Component } from 'react';
import $ from 'jquery';
import startpage from '../assets/duck-hunt1.png';
var patos = ['pato1','pato2','pato3','pato4','malo1','malo2','malo3'];
var globalX = 0;
var globalY = 0;
var score = 100000;
var malo1_;
var malo2_;
var malo3_;
class App extends Component {
/* Matar pato y actualizar el score */
matar(patoObj,pato){
    this.setState({score:this.state.score+1});
    patoObj.css({left:patoObj.position().left,top:patoObj.position().top});
    patoObj.removeClass('pato'+(Number(pato)+1)+'Anim');
      patoObj.animate({
        opacity: 0.25,
        top: "+=250"
      },800, function() {
        $('#pato'+(Number(pato)+1)).remove();
        $('.patos').prepend('<div id="pato'+(Number(pato)+1)+'" class="pato'+(Number(pato)+1)+'Anim">'+(Number(pato)+1)+'</div>');
      });
            
}
/* Detectar colisiones entre pato y pistola */
colision(){
  var that = this;
    for(var pato in patos){
      var patoObj = $('#'+patos[pato]);
      var trigger = $('#trigger');
      var rangoX = [Math.round(patoObj.position().left),Math.round(patoObj.position().left+patoObj.width())];
      var rangoY = [Math.round(patoObj.position().top),Math.round(patoObj.position().top+patoObj.height())];
      var triggerX = [Math.round(globalX),Math.round(globalX+trigger.width())];
      var triggerY = [Math.round(globalY),Math.round(globalY+trigger.height())];
      var colisionar = 0;
     //console.log(triggerY[0]+" "+triggerY[1]);
      //console.log(triggerX[0]+" "+triggerX[1]);
      for(var colX = triggerX[0];colX<triggerX[1]; colX++){
        if(colX==rangoX[0] || colX==rangoX[1]){
            colisionar = 1;
            console.log(colX+' '+rangoX[0]+' '+colX+' '+rangoX[1]);
             console.log(patos[pato]);
            break;
        }
      }
      for(var colY = triggerY[0];colY<triggerY[1]; colY++){
        if(colY==rangoY[0] || colY==rangoY[1]){
          if(colisionar==1){
            colisionar = 2;
           console.log(patos[pato]);
            that.matar(patoObj,pato);
            break;
          }
        }

      }
    }
}
/* Estados iniciales */
  constructor(props) {
  	super(props);
  	this.state = {
  	  disparo: false,
      score:score
  	};
  }

/* Establecer eventos al cargar, botones y posición de la pistola */


  componentDidMount(){
     var that = this;
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
       globalX = event.clientX-xAdd;
       globalY = event.clientY-yAdd;
      $("#trigger").css({left:globalX,top:globalY});
    }).click(function(){
      that.colision();
    });
    /* Cargar malos */
    setTimeout(function(){ 
        $("#malo1").css('visibility','visible');
        malo1_ = setInterval(function(){
          that.setState({score:that.state.score-1});
         }, 50);

       }, 4000);

      setTimeout(function(){ 
       $("#malo2").css('visibility','visible');
        malo2_ = setInterval(function(){
          that.setState({score:that.state.score-1});
         }, 50);
       }, 7000);

      setTimeout(function(){ 
        $("#malo3").css('visibility','visible');
        malo3_ = setInterval(function(){
          that.setState({score:that.state.score-1});
         }, 50);
       }, 11000);
    


  }
//{this.function.bind(this)}
  render() {
    return (
      <div id="app-js">
            <div id="splashpage"><img src={startpage} /><div id="entrar">Entrar</div></div>
            <div id="niveles">Selector de nivel<div id="seleccionNivel">Primer nivel</div></div>
            <div id="duckHunt">
              <div id="trigger"></div>
              <div id="ducksScore"></div>
              <div id="globalScore" className="fuente1">{this.state.score}</div>
              <div id="cieloAzul"></div>
              <div id="pasto"></div>
              <div className="patos">
                <div id="malo1"></div>
                 <div id="malo2"></div>
                <div id="malo3"></div>
                <div id="pato1" className="pato1Anim">1</div>
                <div id="pato2" className="pato2Anim">2</div>
                <div id="pato3" className="pato3Anim">3</div>
                <div id="pato4" className="pato4Anim">4</div>
              </div>
            </div>
      			<div id="arma"></div>
      </div>
    );
  }
}
export default App;
