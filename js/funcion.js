const boton = document.getElementById("boton");
const botonAcercaDe = document.getElementById("botonAcercaDe");
const botonInicio = document.getElementById("botonInicio");
const botonNuestroTrabajo = document.getElementById("botonNuestroTrabajo");
const botonContactanos = document.getElementById("botonContactanos");


const botonAcercaDeM = document.getElementById("botonAcercaDeM");
const botonInicioM = document.getElementById("botonInicioM");
const botonNuestroTrabajoM = document.getElementById("botonNuestroTrabajoM");
const botonContactanosM = document.getElementById("botonContactanosM");

boton.addEventListener("click", function(){
	document.getElementById("sidebar").classList.toggle("active");
	document.getElementById("contenedor").classList.toggle("contenedor__active");
	document.getElementById("fondo").classList.toggle("fondo__active");
});

botonAcercaDe.addEventListener("click", function(e){
	window.scroll(0,678);
});

botonInicio.addEventListener("click", function(e){
	window.scroll(0,0);
});

botonNuestroTrabajo.addEventListener("click", function(e){
	window.scroll(0,865);
});

botonContactanos.addEventListener("click", function(e){
	window.scroll(0,1460);
});



botonAcercaDeM.addEventListener("touchstart", function(e){
	window.scroll(0,678);
});

botonInicioM.addEventListener("touchstart", function(e){
	window.scroll(0,0);
});

botonNuestroTrabajoM.addEventListener("touchstart", function(e){
	window.scroll(0,865);
});

botonContactanosM.addEventListener("touchstart", function(e){
	window.scroll(0,1460);
});

//678