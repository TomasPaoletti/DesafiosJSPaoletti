/* Simulador de creditos */

function ingresardinero(dineroprestado) {
    alert("Te prestaremos $" + dineroprestado);
    return dineroprestado
}

let dineroprestado = parseInt(prompt("Cuanto dinero quieres?"));

ingresardinero(dineroprestado);

function cuotas(cuotasapagar) {
    if (cuotasapagar <= 12) {
        alert("Elegiste devolver el dinero en " + cuotasapagar + " meses. El interes es de 10% por cuota");
    } else {
        alert("ERROR. Solo puedes devolverlo en 12 meses");
        let cuotasapagar = prompt("¿En cuantas cuotas quieres devolver el dinero? Puede hasta 12 meses");
    }
    return cuotasapagar
}

let cuotasapagar = parseInt(prompt("¿En cuantas cuotas quieres devolver el dinero? Puede hasta 12 meses"));
cuotas(cuotasapagar);

function devolucion(){
    const interes = cuotasapagar * 10;
    const dineroconinteres = dineroprestado + (dineroprestado * (interes / 100));
    alert("Tendras que devolver $" + dineroconinteres + " en total.");
    const porcuota = dineroconinteres / cuotasapagar;
    alert("Tu cuota mensual es de $" + porcuota);
}

devolucion();