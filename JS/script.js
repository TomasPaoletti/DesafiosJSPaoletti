/* Primera consigna */

let numeropedido = parseInt(prompt("ingrese un numero"));
let resultado = 0;
for (let i = 0; i < 20; (i = i + 2)) {
    let numeroasumar = parseInt(prompt("ingrese un numero para sumar"));
    resultado = numeropedido + numeroasumar;
    console.log(resultado);
}

/* segunda consigna */

/* let textopedido = prompt("ingrese un texto para concatenar con 'yo soy'");
let textoqueconcatena = "yo soy ";
while((textopedido != "ESC") && (textopedido != "esc")){
    alert(textoqueconcatena + textopedido);
    textopedido = prompt("ingrese algo mas (para terminar ingrese esc)");
} */

/* tercera consigna */

/* let numeroqueingreso = parseInt(prompt("ingrese un numero y se repetira un mensaje esa cantidad de veces"));

for (let i = 1; i <= numeroqueingreso; i++){
    alert("Aprobame Mati");
} */