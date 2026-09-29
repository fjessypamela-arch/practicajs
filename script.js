// MOSTRAR UN EJERCICIO DEL MENÚ

function mostrarEjercicio(numero) {

    // Ocultar todos los ejercicios
    let ejercicios = document.querySelectorAll(".ejercicio");

    ejercicios.forEach(function(ejercicio) {
        ejercicio.classList.remove("activo");
    });

    // Mostrar el ejercicio seleccionado
    let ejercicioSeleccionado =
        document.getElementById("ejercicio" + numero);

    ejercicioSeleccionado.classList.add("activo");
}

// EJERCICIO 1

function operaciones() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;

    let division;

    if (num2 !== 0) {
        division = num1 / num2;
    } else {
        division = "No se puede dividir entre cero";
    }

    document.getElementById("resultado1").innerHTML = `
        <strong>Suma:</strong> ${suma}<br>
        <strong>Resta:</strong> ${resta}<br>
        <strong>Multiplicación:</strong> ${multiplicacion}<br>
        <strong>División:</strong> ${division}
    `;
}


// EJERCICIO 2

function numeroMayor() {

    let num1 = Number(document.getElementById("mayor1").value);
    let num2 = Number(document.getElementById("mayor2").value);
    let num3 = Number(document.getElementById("mayor3").value);

    let mayor = Math.max(num1, num2, num3);

    document.getElementById("resultado2").innerHTML =
        "El número mayor es: <strong>" + mayor + "</strong>";
}


// EJERCICIO 3

function vocalConsonante() {

    let letra = document.getElementById("letra").value.toLowerCase();

    let vocales = "aeiouáéíóú";

    if (vocales.includes(letra)) {

        document.getElementById("resultado3").innerHTML =
            "La letra <strong>" + letra + "</strong> es una vocal.";

    } else {

        document.getElementById("resultado3").innerHTML =
            "La letra <strong>" + letra + "</strong> es una consonante.";
    }
}


// EJERCICIO 4

function diaSemana() {

    let dia = Number(document.getElementById("dia").value);

    let dias = [
        "",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ];

    if (dia >= 1 && dia <= 7) {

        document.getElementById("resultado4").innerHTML =
            "El día es: <strong>" + dias[dia] + "</strong>";

    } else {

        document.getElementById("resultado4").innerHTML =
            "Ingrese un número del 1 al 7.";
    }
}


// EJERCICIO 5

function calcularFactorial() {

    let numero = Number(
        document.getElementById("factorial").value
    );

    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById("resultado5").innerHTML =
        "El factorial de " + numero +
        " es: <strong>" + factorial + "</strong>";
}


// EJERCICIO 6

function mostrarTabla() {

    let numero = Number(
        document.getElementById("tabla").value
    );

    let resultado = "<strong>Tabla del " + numero + "</strong><br>";

    for (let i = 1; i <= 12; i++) {

        resultado +=
            numero + " × " + i +
            " = " + (numero * i) + "<br>";
    }

    document.getElementById("resultado6").innerHTML =
        resultado;
}


// EJERCICIO 7

function calcularPromedio() {

    let nota1 = Number(
        document.getElementById("nota1").value
    );

    let nota2 = Number(
        document.getElementById("nota2").value
    );

    let nota3 = Number(
        document.getElementById("nota3").value
    );

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 10.5) {

        document.getElementById("resultado7").innerHTML =
            "Promedio: <strong>" +
            promedio.toFixed(2) +
            "</strong><br>APROBADO";

    } else {

        document.getElementById("resultado7").innerHTML =
            "Promedio: <strong>" +
            promedio.toFixed(2) +
            "</strong><br>DESAPROBADO";
    }
}


// EJERCICIO 8

function calcularArea() {

    let radio = Number(
        document.getElementById("radio").value
    );

    let area = Math.PI * Math.pow(radio, 2);

    document.getElementById("resultado8").innerHTML =
        "El área del círculo es: <strong>" +
        area.toFixed(2) +
        "</strong>";
}


// EJERCICIO 9

function comprobarCapicua() {

    let numero =
        document.getElementById("capicua").value;

    if (numero.length !== 3) {

        document.getElementById("resultado9").innerHTML =
            "Ingrese un número de 3 cifras.";

        return;
    }

    if (numero[0] === numero[2]) {

        document.getElementById("resultado9").innerHTML =
            "El número <strong>" +
            numero +
            "</strong> es capicúa.";

    } else {

        document.getElementById("resultado9").innerHTML =
            "El número <strong>" +
            numero +
            "</strong> no es capicúa.";
    }
}


// EJERCICIO 10

function comprobarPrimo() {

    let numero = Number(
        document.getElementById("primo").value
    );

    if (numero < 2) {

        document.getElementById("resultado10").innerHTML =
            "El número no es primo.";

        return;
    }

    let esPrimo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {

        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {

        document.getElementById("resultado10").innerHTML =
            "El número <strong>" +
            numero +
            "</strong> es primo.";

    } else {

        document.getElementById("resultado10").innerHTML =
            "El número <strong>" +
            numero +
            "</strong> no es primo.";
    }
}


// MOSTRAR EL EJERCICIO 1 AL ABRIR LA PÁGINA

mostrarEjercicio(1);