/*console.log("inicio de programa");
alert("hola mundo");
document.write("<h1>Hola JavaScript</h1>");
alert("Gracias por visitar");
console.log("Fin de programa");*/

/*var equipo=prompt("Cual es tu equipo de futbol favorito");
console.log("El equipo es:"+equipo);*/

/*var clave=prompt("Ingrese su clave!");
console.log("La longitud de la clave es:" + clave.length);*/
/*document.write("<h1>Hola JavaScript</h1>" + clave);*/
/*console.log("Su clave es:" + clave.toUpperCase());
console.log("El valor original de la clave es:" + clave);*/

/*var adjetivo=prompt("Adejtivo");
var sustantivo=prompt("Sustantivo");
var verbo=prompt("Verbo");
console.log("La frase:>" + adjetivo + sustantivo + verbo);
document.write("<h1><p>Caminaba en el malecón cuando el " + adjetivo + " " + sustantivo + " " + verbo + " por la playa</p></h1>");
document.write("<h1><p>Me paré en la orilla cuando " + adjetivo + " " + sustantivo + " " + verbo + " dentro del mar</p></h1>");
document.write("<h1><p>El " + adjetivo + " " + sustantivo + " " + verbo + " cerca de los yates</p></h1>");*/

/*var minutosPorHora = 60;
var horasPorDia = 24;
var segundosPorDia = segundosPorMinuto*minutosPorHora*horasPorDia;
var edad=prompt("Ingrese su edad");
var diasVida = edad*segundosPorDia;

document.write("<h1>Calculadora del Tiempo</h1><p>Hay "+segundosPorDia +" en un día</p>");
document.write("<h1>Dias vividos</h1><p>Tienes "+diasVida +" días de vida</p>");*/

/*console.log("inicio de programa");

var peliculasVistas=prompt("Peliculas vistas por mes");
var seriesVistas=prompt("Series vistas por mes");
var tiempoPantalla=parseInt(peliculasVistas) + parseInt(seriesVistas);
alert('Wow! Has visto ' +tiempoPantalla+ " veces minimo la pantalla");

console.log("Fin de programa");*/


/*alert("BIENVENIDOS AL CUENTA CUENTOS Emoticón smile");
var pregutas = 3;
var pregtasFaltantes = ("Quedan " + pregutas + " preguntas.");
alert("Este es el juego del cuenta cuentos. Siga las instrucciones.");
var sustantivo = prompt("Inserte un sustantivo! " +  pregtasFaltantes);
pregutas = pregutas - 1;
pregtasFaltantes = ("Quedan "+pregutas+" preguntas.");
var adjetivo = prompt("Ahora ingresa un adjetivo!" +  pregtasFaltantes);
pregutas = pregutas - 1;
pregtasFaltantes = ("Quedan "+pregutas+" preguntas.");
var verbo = prompt("Por último ingresa un verbo!"+  pregtasFaltantes);
document.write("<h1>EL CUENTA CUENTOS</h1>");
document.write("<p>EL " + adjetivo + " " + sustantivo + " solía " + verbo +" los domingos en la tarde.</p>");
document.write("<p>Un sabado en la mañana, el " + adjetivo + " " + sustantivo + " deseaba " + verbo +" junto con su familia.</p>");
document.write("<p>Cada vez que el " + adjetivo + " " + sustantivo + " " + verbo +" todos se divertían.</p>");*/


/*console.log("Inicio del programa");
var dado = Math.floor(Math.random()*6)+1;
alert("Dado dice:"+dado);
console.log("Programa completado");*/


/*var numero = prompt("Ingrese un numero");
var aleatorio = Math.floor((Math.random() * 10) + 1);
if(parseInt(numero)==aleatorio){
		alert("El número es correcto");
		document.write("bien");
}else{
		alert("El número es INcorrecto");
		document.write("mal");
}*/



/*var numero = prompt("Ingrese un numero");
var aleatorio = Math.floor(Math.random() * 10) + 1;
if(parseInt(numero)<aleatorio){
		alert("El número "+numero+ " es INFERIOR a "+ aleatorio);
	}else if(parseInt(numero)>aleatorio){
		alert("El número"+numero+" es SUPERIOR a "+ aleatorio);
		}else {
			alert("GANASTE!!");
		}*/
		
/********FUNCIONES***********/

/*function tiraDados(){
	var dado = Math.floor(Math.random()*6)+1;
}	
alert ("Tiramos 3 dados:");
tiraDados();
tiraDados();
tiraDados();*/



/*function tiraDados(){
	var dado = Math.floor(Math.random()*6)+1;
	return dado;
}	

alert ("Tiramos 3 dados:");
alert("El dado dice:" +tiraDados());
var multiplo = 2 * tiraDados();
alert("El multiplo de bonus es:" +multiplo);*/


/*function numeroAlAzarHastaLimite(limite){
	var num = Math.floor(Math.random()*limite) + 1;
	return num;		}
var numAzar = numeroAlAzarHastaLimite(100);
alert("#: " + numAzar);*/

/*function numeroMax(dos){
	var numero1 = prompt("Ingrese un valor 1");
	var numero2 = prompt("Ingrese un valor 2");
	var num = Math.max(numero1,numero2);
	return num;		}
var numDos = numeroMax(2);
alert("Numero mayor es: " + numDos);*/



/*function saludo(){
	var mensaje = "Hola a todos";
	alert(mensaje);
}
var mensaje = "Chao";
saludo();
alert(mensaje);
saludo();*/

/***********MANEJO DE ERRORES**********/

/*var num = prompt("aaa");
if (isNaN(num)) {

	throw newError("No es un número válido");
}
else {
	num = num * 0.5;
	alert(num);
}*/

/********DESAFIO***********/



/*function aleatorio(num1,num2){ 
	if (isNaN(num1)||isNaN(num2)) {

	throw newError("No es un número válido");
}
       var resAleatorio = Math.floor((Math.random() * (num2 - num1)) + num1);
      return resAleatorio;
}
var num1 = prompt("Valor 1:");
var num2 = prompt("Valor 2:");
alert("#: " + aleatorio(parseInt(num1),parseInt(num2)));


var contador = 0;
	while(contador<10){
		var randomico = aleatorio(parseInt(num1), parseInt(num2));
		document.write(randomico+"");
		contador++;
	}*/


/*********ADIVINA ADIVINADOR*************/
function aleatorio(limite){
	var num = Math.floor(Math.random()*limite) + 1;
	return num;		}
var numAzar = aleatorio(100);
alert("# al azar: " + numAzar);

var contador = 0;
	while(true){
		var randomico = aleatorio(100);
		if(randomico==numAzar)
		{
			break;
		}
		//document.write(contador+"");
		contador++;
	}
alert("#: adivinado " + randomico);
alert("# intentos: " + contador);