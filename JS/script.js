/* Simulador de creditos */

function ingresopersona() {
    for (let i = 0; i < 1; i++) {
        nombrePersona = prompt("Nombre")
        edadPersona = parseInt(prompt("Edad"));
        nacionalidad = prompt("Nacionalidad");
        razonSocial = prompt("Razon social");
    }
}

function ingresardinero(dineroprestado) {
    alert("Te prestaremos $" + dineroprestado);
    return dineroprestado
}

function cuotas(cuotasapagar) {
    for (let i = 0; i = cuotasapagar; i++) {
        if (cuotasapagar <= 12) {
            alert("Elegiste devolver el dinero en " + cuotasapagar + " meses. El interes es de 10% por cuota");
            break;
        } else {
            alert("ERROR. Solo puedes devolverlo en 12 meses");
            cuotasapagar = parseInt(prompt("¿En cuantas cuotas quieres devolver el dinero? Puede hasta 12 meses"));
        }
    }
    return cuotasapagar
}

function devolucion(dineroconinteres, porcuota) {
    alert("Tendras que devolver $" + dineroconinteres + " en total.");
    alert("Tu cuota mensual es de $" + porcuota);
}
class PersonaSolicitante {
    constructor(nombre, edad, nacionalidad, razonSocial) {
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.razonSocial = razonSocial;
    }
}

class cantidadPrestada {
    constructor(dineroprestado, cuotasapagar, dineroconinteres, porcuota) {
        this.dineroprestado = dineroprestado;
        this.cuotasapagar = cuotasapagar;
        this.dineroconinteres = dineroconinteres;
        this.porcuota = porcuota;
    }
}

ingresopersona();
const clientes = [];
clientes.push( personaIngresada = new PersonaSolicitante(nombrePersona, edadPersona, nacionalidad, razonSocial));
console.log(personaIngresada);

let dineroprestado = parseInt(prompt("Cuanto dinero quieres?"));
ingresardinero(dineroprestado);

let cuotasapagar = parseInt(prompt("¿En cuantas cuotas quieres devolver el dinero? Puede hasta 12 meses"));
cuotas(cuotasapagar);

const interes = cuotasapagar * 10;
let dineroconinteres = dineroprestado + (dineroprestado * (interes / 100));
let porcuota = dineroconinteres / cuotasapagar;
devolucion(dineroconinteres, porcuota);

clientes.push(prestamoPersonal = new cantidadPrestada(dineroprestado, cuotasapagar, dineroconinteres, porcuota));
console.log(prestamoPersonal);

console.log(clientes);