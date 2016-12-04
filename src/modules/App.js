import React, { Component } from 'react';
import $ from 'jquery';
import startpage from '../assets/duck-hunt1.png';
/* Variables iniciales */

var patos = ['pato1','pato2','pato3','pato4','malo1','malo2','malo3'];
var globalX = 0;
var globalY = 0;
var score = 100000;
var malo1Time;
var malo1Vidas=4;
var malo2Vidas=4;
var malo2Time;
var malo3Vidas=4;
var malo3Time;
var puntos=50;

class App extends Component {
/* Matar patos y enemigos, actualizar el score */
matar(patoObj,pato){
    this.setState({score:this.state.score+puntos});
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
      var rangoX = [patoObj.position().left,patoObj.position().left+patoObj.width()];
      var rangoY = [patoObj.position().top,patoObj.position().top+patoObj.height()];
      var triggerX = [globalX,globalX+70];
      var triggerY = [globalY,globalY+70];
      var colisionar = 0;
      /* Localizar contacto en X */
     var encontradoX=false;
     
      for(var buscarX = triggerX[0];buscarX<triggerX[1]; buscarX++){
          for(var buscarX2 = rangoX[0];buscarX2<rangoX[1]; buscarX2++){
            if(Math.round(buscarX)==Math.round(buscarX2)){
               //console.log("bingo X");
               encontradoX = true;
               break;
             }
          }
          if(encontradoX){
             break;
          }
       };

      /* Localizar contacto en X */
    if(encontradoX){
     var encontradoY=false;
      for(var buscarY=triggerY[0];buscarY<triggerY[1]; buscarY++){
          for(var buscarY2=rangoY[0];buscarY2<rangoY[1]; buscarY2++){
            if(Math.round(buscarY)==Math.round(buscarY2)){
               console.log("bingo");
               encontradoY = true;
               console.log(patoObj);
               if(patoObj.attr('id')=='malo1'){
                if(malo1Vidas){
                  malo1Vidas--;
                }else{
                  clearInterval(malo1Time);
                  that.matar(patoObj,pato);
                }
               }else if(patoObj.attr('id')=='malo2'){
                 if(malo2Vidas){
                  malo2Vidas--;
                }else{
                  clearInterval(malo2Time);
                  that.matar(patoObj,pato);
                }

               }else if(patoObj.attr('id')=='malo3'){
                 if(malo3Vidas){
                  malo3Vidas--;
                }else{
                  clearInterval(malo3Time);
                  that.matar(patoObj,pato);
                }
               }else{
                that.matar(patoObj,pato);
               }
               break;
             }
          }
          if(encontradoY){
             break;
          }
       };
      } 
      /* Comment */
      
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
       globalX = event.clientX-xAdd-(add);
       globalY = event.clientY-yAdd-(add);
      $("#trigger").css({left:globalX,top:globalY});
    }).click(function(){
      that.colision();
    });
    /* Cargar malos */
    setTimeout(function(){ 
        $("#malo1").css('visibility','visible');
         malo1Time = setInterval(function(){
          that.setState({score:that.state.score-1});
         }, 50);

       }, 1000);

      setTimeout(function(){ 
       $("#malo2").css('visibility','visible');
        malo2Time = setInterval(function(){
          that.setState({score:that.state.score-1});
         }, 50);
       }, 2000);

      setTimeout(function(){ 
        $("#malo3").css('visibility','visible');
        malo3Time = setInterval(function(){
          that.setState({score:that.state.score-1});
         }, 50);
       }, 3000);
    


  }
//{this.function.bind(this)}
  render() {
    return (
      <div id="app-js">
            <div id="splashpage"><img src={startpage} /><div id="entrar">Entrar</div></div>
            <div id="niveles">Selector de nivel<div id="seleccionNivel">Primer nivel</div></div>
            <div id="duckHunt">
              <div id="trigger"></div>
             
              
              <div id="cieloAzul"></div>
              <div id="pasto">
                   <div id="ducksScore"></div>
                   <div id="globalScore" className="fuente1">{this.state.score}</div>
              </div>
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
