//Existe una funcion que que pueda arrastar a las imagenes 
//usando la funcion dragelement para darle propiedades de arrastre a las plantas 
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
//CREANDO LA FUNCION DRAGELEMENT 
function dragElement(terrariumElement){
//crear variables de posicion 
let despX = 0, despY=0, initPosX=0, initPosY =0;
//funcion elementdrag
function elementDrag(e){
//se calcula el desplazamiento 
despX=e.clientX-initPosX;
despY=e.clientY-initPosY;
//asignando nuesva posicion inical 
initPosX = e.clientX;
initPosY = e.clientY;
//se le aplica el desplazamiento a la planta
terrariumElement.style.left = `${terrariumElement.offsetLeft+despX}px`;
terrariumElement.style.top = `${terrariumElement.offsetTop+despY}px`;
}
//parando la funcionalidad de arraste 
function stopElementDrag(){
document.onpointerup=null;
document.onpointermove=null;
}
//funcion pointerdrag
function pointerDrag(event){
    //previene el funcionamiento por defecto
event.preventDefault();
initPosX = event.clientX;
initPosY = event.clientY;
//console.groupCollapsed(`initPosX> ${initPosX}`);
//console.groupCollapsed(`initPosY> ${initPosY}`);
//Realizando funcion de arrastre
document.onpointermove=elementDrag;
//Funcion que se ejecuta cuando el usuario suelta el boton
document.onpointerup = stopElementDrag; 
}
//detectando el evento de sujetar
terrariumElement.onpointerdown = pointerDrag;
}