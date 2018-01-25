$(document).ready(function(){



var divCalculadora = document.createElement("div");
divCalculadora.setAttribute('id','calculadora');
// console.log(divCalculadora);

	var divPantalla = document.createElement("div");
	divPantalla.setAttribute('id','pantalla');
	
	var inputPantalla = document.createElement("input");
	inputPantalla.setAttribute('value','0');
	inputPantalla.setAttribute('id','pantallaResultado');
	divPantalla.appendChild(inputPantalla);

	divCalculadora.appendChild(divPantalla);






	var divBotones = document.createElement("div");
	divBotones.setAttribute('id','botones');

	var divContenedor1= document.createElement("div");
	divContenedor1.setAttribute('id','contenedor1');


   
   var bUno = document.createElement("button");
	bUno.setAttribute('class','numeros');
	bUno.setAttribute('id','uno');
	var textoUno = document.createTextNode('1');
	bUno.appendChild(textoUno);
	divContenedor1.appendChild(bUno);

	var bDos = document.createElement("button");
	bDos.setAttribute('class','numeros');
	bDos.setAttribute('id','dos');
	var textoDos = document.createTextNode('2');
	bDos.appendChild(textoDos);
	divContenedor1.appendChild(bDos);

	var bTres = document.createElement("button");
	bTres.setAttribute('class','numeros');
	bTres.setAttribute('id','tres');
	var textoTres = document.createTextNode('3');
	bTres.appendChild(textoTres);
	divContenedor1.appendChild(bTres);

	var bCuatro = document.createElement("button");
	bCuatro.setAttribute('class','numeros');
	bCuatro.setAttribute('id','cuatro');
	var textoCuatro = document.createTextNode('4');
	bCuatro.appendChild(textoCuatro);
	divContenedor1.appendChild(bCuatro);

	var bCinco = document.createElement("button");
	bCinco.setAttribute('class','numeros');
	bCinco.setAttribute('id','cinco');
	var textoCinco = document.createTextNode('5');
	bCinco.appendChild(textoCinco);
	divContenedor1.appendChild(bCinco);

	var bSeis = document.createElement("button");
	bSeis.setAttribute('class','numeros');
	bSeis.setAttribute('id','seis');
	var textoSeis = document.createTextNode('6');
	bSeis.appendChild(textoSeis);
	divContenedor1.appendChild(bSeis);

	var bSiete = document.createElement("button");
	bSiete.setAttribute('class','numeros');
	bSiete.setAttribute('id','siete');
	var textoSiete = document.createTextNode('7');
	bSiete.appendChild(textoSiete);
	divContenedor1.appendChild(bSiete);

	var bOcho = document.createElement("button");
	bOcho.setAttribute('class','numeros');
	bOcho.setAttribute('id','ocho');
	var textoOcho = document.createTextNode('8');
	bOcho.appendChild(textoOcho);
	divContenedor1.appendChild(bOcho);

	var bNueve = document.createElement("button");
	bNueve.setAttribute('class','numeros');
	bNueve.setAttribute('id','nueve');
	var textoNueve = document.createTextNode('9');
	bNueve.appendChild(textoNueve);
	divContenedor1.appendChild(bNueve);

	var bCero = document.createElement("button");
	bCero.setAttribute('class','numeros');
	bCero.setAttribute('id','cero');
	var textoCero = document.createTextNode('0');
	bCero.appendChild(textoCero);
	divContenedor1.appendChild(bCero);

	var bIgual = document.createElement("button");
	bIgual.setAttribute('class','numeros');
	bIgual.setAttribute('id','igual');
	var textoIgual = document.createTextNode('=');
	bIgual.appendChild(textoIgual);
	divContenedor1.appendChild(bIgual);

	var bPunto = document.createElement("button");
	bPunto.setAttribute('class','numeros');
	var textoPunto = document.createTextNode('.');
	bPunto.appendChild(textoPunto);
	divContenedor1.appendChild(bPunto);

	divBotones.appendChild(divContenedor1);
	










	var divContenedor2 = document.createElement("div");
	divContenedor2.setAttribute('id','contenedor2');

	var bSuma = document.createElement("button");
	bSuma.setAttribute('class','operaciones');
	bSuma.setAttribute('id','suma');
	var textoSuma = document.createTextNode("+");
	bSuma.appendChild(textoSuma);
	divContenedor2.appendChild(bSuma);

	var bResta = document.createElement("button");
	bResta.setAttribute('class','operaciones');
	bResta.setAttribute('id','resta');
	var textoResta = document.createTextNode("-");
	bResta.appendChild(textoResta);
	divContenedor2.appendChild(bResta);

	var bDivision = document.createElement("button");
	bDivision.setAttribute('class','operaciones');
	bDivision.setAttribute('id','dividir');
	var textoDividir = document.createTextNode("/");
	bDivision.appendChild(textoDividir);
	divContenedor2.appendChild(bDivision);

	var bMulti = document.createElement("button");
	bMulti.setAttribute('class','operaciones');
	bMulti.setAttribute('id','multiplicar');
	var textoMulti = document.createTextNode("*");
	bMulti.appendChild(textoMulti);
	divContenedor2.appendChild(bMulti);

	var bBorrar = document.createElement("button");
	bBorrar.setAttribute('class','operaciones');
	bBorrar.setAttribute('id','borrar');
	var textoBorrar = document.createTextNode("Borrar");
	bBorrar.appendChild(textoBorrar);
	divContenedor2.appendChild(bBorrar);

	divBotones.appendChild(divContenedor2);
	divCalculadora.appendChild(divBotones);


	document.getElementsByTagName('body')[0].appendChild(divCalculadora);


/*-Operandos---*/
var operando1;
var operando2;
var operacion;


// function init(){

// console.log('init');

// var uno = $('#uno');
// // console.log(uno);
// var dos = $('#dos');
// var tres = $('#tres');
// var cuatro = document.getElementById('cuatro');
// var cinco = document.getElementById('cinco');
// var seis = document.getElementById('seis');
// var siete = document.getElementById('siete');
// var ocho = document.getElementById('ocho');
// var nueve = document.getElementById('nueve');
// var cero = document.getElementById('cero');

// var suma = document.getElementById('suma');
// var resta = document.getElementById('resta');
// var dividir = document.getElementById('dividir');
// var multiplicar = document.getElementById('multiplicar');
// var borrar = document.getElementById('borrar');
// var igual = document.getElementById('igual');

var pantallaResultado = document.getElementById('pantallaResultado');














/* Codigo JQuery*/


$('#uno').on('click', function (e){
pantallaResultado.value ="1";

});

$('#dos').on('click', function (e){
pantallaResultado.value ="2";

});

$('#tres').on('click', function (e){
pantallaResultado.value ="3";

});

$('#cuatro').on('click', function (e){
pantallaResultado.value ="4";

});

$('#cinco').on('click', function (e){
pantallaResultado.value ="5";

});

$('#seis').on('click', function (e){
pantallaResultado.value ="6";

});

$('#siete').on('click', function (e){
pantallaResultado.value ="7";

});

$('#ocho').on('click', function (e){
pantallaResultado.value ="8";
console.log('jhjgjhg');
});

$('#nueve').on('click', function (e){
pantallaResultado.value ="9";

});

$('#cero').on('click', function (e){
pantallaResultado.value ="0";

});
















// uno.onclick = function(e){
	
// 	pantallaResultado.value = "1";
// 	console.log('jhjgjhg');
// }
// dos.onclick = function(e){
// 	pantallaResultado.value = "2";
// }
// tres.onclick = function(e){
// 	pantallaResultado.value = "3";
// }
// cuatro.onclick = function(e){
// 	pantallaResultado.value = "4";
// }
// cinco.onclick = function(e){
// 	pantallaResultado.value = "5";
// }
// seis.onclick = function(e){
// 	pantallaResultado.value = "6";
// }
// siete.onclick = function(e){
// 	pantallaResultado.value = "7";
// }
// ocho.onclick = function(e){
// 	pantallaResultado.value = "8";
// }
// nueve.onclick = function(e){
// 	pantallaResultado.value = "9";
// }
// cero.onclick = function(e){
// 	pantallaResultado.value = "0";
// }


$('#suma').on('click', function(e){
	operando1 = pantallaResultado.value;
	operacion="+";
	limpiarPantalla();
});


$('#suma').hover(function(){
	$('#suma').css("background", "rgba(0,0,0,0)", "color", "#3a7999");
}, function(){
   
	$('#suma').css("width", "100%");

});





$('#resta').on('click', function(e){
	operando1 = pantallaResultado.value;
	operacion="-";
	limpiarPantalla();
});

$('#dividir').on('click', function(e){
	operando1 = pantallaResultado.value;
	operacion="/";
	limpiarPantalla();
});

$('#multiplicar').on('click',function(e){
	operando1 = pantallaResultado.value;
	operacion="*";
	limpiarPantalla();
});

$('#igual').on('click',function(e){
	operando2 = pantallaResultado.value;
	resolver();
});







// suma.onclick = function(e){
// 	operando1 = pantallaResultado.value;
// 	operacion="+";
// 	limpiarPantalla();
// }
// resta.onclick = function(e){
// 	operando1 = pantallaResultado.value;
// 	operacion="-";
// 	limpiarPantalla();
// }
// dividir.onclick = function(e){
// 	operando1 = pantallaResultado.value;
// 	operacion="/";
// 	limpiarPantalla();
// }
// multiplicar.onclick = function(e){
// 	operando1 = pantallaResultado.value;
// 	operacion="*";
// 	limpiarPantalla();
// }
// igual.onclick = function(e){
// 	operando2 = pantallaResultado.value;
// 	resolver();
// }




function limpiarPantalla(){
	pantallaResultado.value="";
}
function resetear(){
	pantallaResultado.textContent="";
	operando1=0;
	operando2=0;
	operacion="";
}




function resolver(){
	var resultado= 0;


	switch(operacion){
		case "+":
		resultado= parseInt(operando1) + parseInt(operando2);
		break;


		case "-":
		resultado= parseInt(operando1) - parseInt(operando2);
		break;


		case "/":
		resultado= parseInt(operando1) / parseInt(operando2);
		break;


		case "*":
		resultado= parseInt(operando1) * parseInt(operando2);
		break;
	}
	
	pantallaResultado.value=resultado;

}










});