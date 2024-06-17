
//CALCULO INVITADOS
let invitados = parseInt(prompt("¿Qué cantidad de personas asitirán a la reunión?"));
let abstemios = parseInt(prompt("¿Cuántas personas no toman alcohol?"));
let totalDrinkers = (invitados - abstemios);


//PREGUNTAR QUÉ TOMAN
function quetoman(bebida) {
    let respuesta;
    while (respuesta != "SI" && respuesta != "NO") {
        let textoBebida = "¿Van a tomar " + bebida + "?\nIngrese SI o NO\n";
        respuesta = prompt(textoBebida);
    }
    return respuesta;
}

let tomancerveza = quetoman("cerveza");
let tomanvino = quetoman("vino");
let tomancola = quetoman("bebida cola");
let tomanagua = quetoman("agua");


//CALCULO LITROS
function calculoLitros(bebida, bebedor, mililitros, vasos) {
    let bebidaTotal = 0;
    if (bebida == "SI") {
        bebidaTotal = parseFloat(mililitros * vasos * bebedor);
    }
    return bebidaTotal;
}

let cervezalitros = (calculoLitros(tomancerveza, totalDrinkers, 0.50, 2));
let vinolitros = (calculoLitros(tomanvino, totalDrinkers, 0.18, 3));
let colalitros = (calculoLitros(tomancola, abstemios, 0.25, 2));
let agualitros = (calculoLitros(tomanagua, abstemios, 0.25, 2));

alert("Para " + invitados + " invitados (" + abstemios + " abtemios) tenés que comprar:\n"
    + "• Cerveza: " + cervezalitros.toFixed(2) + " lt\n"
    + "• Vino: " + vinolitros.toFixed(2) + " lt\n"
    + "• Bebida cola: " + colalitros.toFixed(2) + " lt\n"
    + "• Agua: " + agualitros.toFixed(2));