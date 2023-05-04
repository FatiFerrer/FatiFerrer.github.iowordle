let intento = 5;
//let palabra = "PUERTA";//
let diccionario = ['CIELO', 'ALTAR', 'ANGEL', 'ACTOR', 'AVION'];

Math.floor(Math.random() * 10) + 1;
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);

    const INTENTO = leerIntento();
    console.log(INTENTO)

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
         terminar("<h1>GANASTE!😀</h1>");
        return
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = "row";
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'leter';
        if (INTENTO[i]===palabra[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';

        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW);
		intento--;
    if (intento==0){
      
   terminar("<h1>PERDISTE!😖</h1>")
}
    }

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}



 