
/* ==================================================== 
                        LIBRERÍAS
   ====================================================*/
//Importar librería
//const readline = require('readline'); --> No lo uso porque me daba comportamiento asíncrono
const rl = require('readline-sync');

/* ==================================================== 
                        RESPUESTAS
   ====================================================*/
//Cada registro de respuesta tendrá: nombre, edad, color, hobbie, lenguaje
//Definimos un array de respuestas
let answers = [];


/**
 * Función para mostrar las respuestas finales del usuario
 * @param {*} answers 
 */
function showAnswers(answers) {
    console.log("Hola, " + answers[0] + "!");
    console.log("Tienes", answers[1], "años, tu color favorito es el", answers[2] + ", te gusta",
        answers[3], "y te gustaría aprender sobre", answers[4] + ".");
}


/* ==================================================== 
                LECTURA DE DATOS - MENÚ 2
   ====================================================*/

/**
 * Función que muestra el menú de elección de color
 * @param {*} answers 
 */
function askColor(answers) {
    let option = rl.question("\n\n---Pregunta 1:\nElige un color (1-rojo, 2-azul, 3-verde, 4-negro): ");
    switch (parseInt(option)) {
        case 1:
            answers.push("rojo");
            break;
        case 2:
            answers.push("azul");
            break;
        case 3:
            answers.push("verde");
            break;
        case 4:
            answers.push("negro");
            break;
        default:
            console.log("'" + option + "'", " no es una opción válida, sólo 1-4.\n");
            askColor(answers);
            break;
    }
    //rl.close();

}

/**
 * Función que muestra el menú de elección de hobbies
 * @param {*} answers 
 */
function askHobbie(answers) {
    let option = rl.question("\n\n---Pregunta 2:\nEn tu tiempo libre te gusta...\n A- leer\n B- salir con amigos\n C- ir al cine\n D- jugar a videojuegos\n Tu respuesta: ");

    switch (option.toUpperCase()) {
        case 'A':
            answers.push("leer");
            break;
        case 'B':
            answers.push("salir con amigos");
            break;
        case 'C':
            answers.push("ir al cine");
            break;
        case 'D':
            answers.push("jugar a videojuegos");
            break;
        default:
            console.log("'" + option + "'", " no es una opción válida, sólo A-D.\n");
            askHobbie(answers);
            break;
    }
}

/**
 * Función que muestra el menú de elección de lenguajes de programación
 * @param {*} answers 
 */
function askLanguage(answers) {
    let option = rl.question("\n\n---Pregunta 3:\nQue lenguaje te gustaria aprender?\n A- Java\n B- C++\n C- JavaScript\n D- Python\n Tu respuesta: ");

    switch (option.toUpperCase()) {
        case 'A':
            answers.push("Java");
            break;
        case 'B':
            answers.push("C++");
            break;
        case 'C':
            answers.push("JavaScript");
            break;
        case 'D':
            answers.push("Python");
            break;
        default:
            console.log("'" + option + "'", " no es una opción válida, sólo A-D.\n");
            askLanguage(answers);
            break;
    }
}

/**
 * Función que representa el menú 2, que lleva a las preguntas del test
 * @param {*} answers 
 */
function menu2(answers) {
    askColor(answers);
    askHobbie(answers);
    askLanguage(answers);
}

/* ==================================================== 
                LECTURA DE DATOS - MENÚ 1
   ====================================================*/
/**
 * Función para comprobar que el/la encuestado/a es mayor de edad
 * @param {*} age 
 * @returns 
 */
function checkAge(age) {
    if (age < 18) {
        console.log("Eres menor de edad, no puedes continuar la encuesta:(.");
        //process.exit;
        return false;
    } else {
        answers.push(age);
        return true;
    }
}

/**
 * Método que pregunta al usuario si quiere repetir la encuesta
 * @param {*} answers 
 */
function repeat(answers) {
    let reply = rl.question("\n\n Quieres repetir el test? ('Si' para repetir): ");
    if (reply == "SI" || reply == "si" || reply == "Si" || reply == "SÍ" || reply == "sí" || reply == "Sí") {
        menu1(answers);
    } else {
        console.log("Gracias por rellenar nuestra encuesta!");
    }
}

/**
 * Menú principal del programa
 * @param {*} answers 
 */
function menu1(answers) {
    //Lectura del nombre:
    var name = rl.question("Introduce tu nombre: ");
    answers.push(name);

    //Lectura de la edad:
    var age = rl.question("Introduce tu edad: ");
    let validAge = checkAge(age);
    if (validAge) {
        menu2(answers);
        showAnswers(answers);
        repeat(answers);
    } else {
        console.log("Bye!!");
    }

}

/* ==================================================== 
                    LLAMADA PRINCIPAL
   ====================================================*/

menu1(answers);