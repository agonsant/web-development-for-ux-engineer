function render(html) {
  const resultBox = document.getElementById("EXERCISE_RESULT");
  resultBox.innerHTML += html;
}

function clearExeciseResultOutput() {
  const resultBox = document.getElementById("EXERCISE_RESULT");
  resultBox.innerHTML = "";
}

/**
 * 1. Solicito el primer string y lo guardo en una variable
 * 2. Solicito el segundo string y lo guardo en otra variable
 * 3. Concateno los dos strings y el resultado lo guardo en una variable
 * 4. Obtengo la longitud de ese string y lo guardo en una variable
 * 5. Pinto la variable de la longitud
 * 6. Verifico que la longitud sea par o impar
 *      - Si es par ==> renderizar un cuadrado de 50px x 50px yellow
 *      - Si es impar ==> renderizar un cuadrado de 50px x 50px blue
 */
function exerciseExecutor_1() {
  const firstStr = prompt("Introduzca el primer string"); // paso 1
  const secondStr = prompt("Introduzca el segundo string"); // paso 2
  const concatResult = firstStr + secondStr; // pase 3
  render(`
    <style>
        .result__text {
           color: green;
        }
    </style>

    <p class="result__text">
        El resultado total es: ${concatResult.length}
    </p>
`); // paso 4 y paso 5

  // ¿Que tipo de dato me devuelve esta operación? --> concatResult.length % 2 --> Número
  const isLengthEven = concatResult.length % 2 === 0;
  if (isLengthEven) {
    // esto es par
    render(`<div class="square square--even"></div>`);
  } else {
    // esto es impar
    render(`<div class="square square--odd"></div>`);
  }
}

/**
 * 1. Solicito al usuario el número y lo guardo en una variable
 * 2. Me aseguro que el usuario ha introducido un número
 * 3. Calculo con la fórmula (F = (C × 9/5) + 32)
 * 4. Pinto el resultado
 */
function exerciseExecutor_2() {
  const userInput = prompt("Introduzca los grados celsius");
  // Como prompt siempre devuelve un string tengo que convertirlo a número para asegurarme.
  const celsiusDegrees = Number.parseFloat(userInput);
  if (!Number.isNaN(celsiusDegrees)) {
    // Si es un número finalmente, es decir, no es NaN. @see = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
    const farenheitDegrees = (celsiusDegrees * 9) / 5 + 32;
    render(
      `<p>${userInput} ºC serían igual a ${farenheitDegrees.toFixed(2)} ºF</p>`
    );
  } else {
    render(`<p>${userInput} no conseguimos reconocerlo como número</p>`);
  }
}

/**
 * 1. Solicitamos al usuario los dos datos y validamos que sean números
 * 2. Realizamos el cálculo con respecto a la fórmula peso IMC= (kg) / (altura (m))^2
 * 3. Sólo si es 'Obesidad de clase II', es decir, el IMC mayor o igual a 35.0 y menor que 40
 *    imprimir el resultado
 */
function exerciseExecutor_3() {
  const firstUserInput = prompt("Introduzca el peso en kg");
  const secondUserInput = prompt("Introduzca la altura en cm");
  const weight = Number.parseFloat(firstUserInput);
  const height = Number.parseFloat(secondUserInput) / 100; // convertir a metros
  if (!Number.isNaN(weight) && !Number.isNaN(height)) {
    const imc = weight / height ** 2; // también se puede usar weight/Math.pow(height,2)
    const isSecondObesityLevel = imc >= 35 && imc < 40;
    if (isSecondObesityLevel) {
      render(
        `<p>El ejercicio me obliga a indicarte que el IMC es ${imc} y según la <a href="https://www.seedo.es/index.php/herramientas-seedo/calculo-de-imc" target="_blank">Sociedad Española de Obesidad</a> se clasifica con: <strong>Obesidad de Clase II</strong></p>`
      );
    } else {
      render(`<p>El ejercicio no me indica decirte nada en este caso</p>`);
    }
  } else {
    render(
      `<p>${firstUserInput} o ${secondUserInput} no se pueden reconocer como número</p>`
    );
  }
}

/**
 * 1. Solicitamos al usuario el porcentaje de polución y validamos que sean números entre 0 y 100
 * 2. Si la polución es superior a 65% pintamos 70, sino 90
 */
function exerciseExecutor_4() {
  const userInput = prompt("Introduzca el porcentaje de polución");
  const pollution = Number.parseFloat(userInput);
  // NaN siempre da false cuando se compara con un número, por lo que no hace falta el
  // Number.isNaN, ya que si es NaN la expresión quedaría false&&false,
  // por lo que isValidPollution = false
  const isValidPollution = pollution >= 0 && pollution <= 100;

  if (isValidPollution) {
    const isRoadSpeedReduced = pollution > 65;
    if (isRoadSpeedReduced) {
      render(`<p>La velocidad máxima de la vía es 70 Km/h</p>`);
    } else {
      render(`<p>La velocidad máxima de la vía es 90 Km/h</p>`);
    }
    // Se puede hacer utilizando operador ternario (una forma simple de hacer if/else corto)
    // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
    // Todo el if quedaría así:
    // render(`<p>La velocidad máxima de la vía es ${isRoadSpeedReduced ? 70 : 90} Km/h</p>`);
  } else {
    render(`<p>${userInput} no es un porcentaje</p>`);
  }
}

/**
 * 1. Solicitamos al usuario estado actual del semáforo
 * 2. Comprobamos que es un valor conocido ('green', 'flashing amber', 'amber' or 'red')
 * 3. Si No es conocido mostramos el mensjae
 * 4. Si lo es le indicamos si tiene que parar ('red' o 'amber') o puede seguir ('green' o 'flashing amber')
 *
 */
function exerciseExecutor_5() {
  const userInput = prompt("Introduzca el estado del semáforo");
  const trafficLightState = userInput.toLowerCase(); // bajamos a minusculas para comparar el mismo string
  // Esta validación se puede hacer utilizando Expresiones regulares. @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
  // const isValidState = /^(green|(flashing\s)?amber|red)$/i.test(trafficLightState)
  const isValidState =
    trafficLightState === "green" ||
    trafficLightState === "flashing amber" ||
    trafficLightState === "amber" ||
    trafficLightState === "red";

  if (isValidState) {
    // con REGEX: const isStopState = /^(red|amber)$/i.test(trafficLightState)
    const isStopState =
      trafficLightState === "red" || trafficLightState == "amber";

    if (isStopState) {
      render(`<p>Pareee</p>`);
    } else {
      render(`<p>Puede pasar</p>`);
    }
  } else {
    render(`<p>${userInput} no es un estado válido para un semáforo</p>`);
  }
}

/**
 * 1. Solicitamos al usuario su nota
 * 2. Comprobamos que la nota sea un número y esté en el rango entre 0 y 10
 * 3. Comprobamos los diferentes rangos para cada nota
 *    - Si es menor que 5 renderizo SUSPENSA
 *    - Si está entre 5 y 7 renderizo APROBADA
 *    - ...
 * Hay una pregunta funcional que deberíamos decidir.
 * ¿Se permiten notas superiores al 10 como en la prueba de acceso a la universidad española?
 * En esta resolución asumiremos que no, por eso 10 será el límite superior de validación
 */
function exerciseExecutor_6() {
  const userInput = prompt("Introduzca la nota del examen");
  const numericSubjectResult = Number.parseFloat(userInput);
  const isValidSubjectResult =
    numericSubjectResult >= 0 && numericSubjectResult <= 10;

  if (isValidSubjectResult) {
    // creams una variable que vamos a ir cambiando en función del camino que siga el algoritmo
    let subjectResult = "";

    if (numericSubjectResult >= 0 && numericSubjectResult < 5) {
      subjectResult = "SUSPENSA";
    } else if (numericSubjectResult >= 5 && numericSubjectResult < 7) {
      subjectResult = "APROBADA";
    } else if (numericSubjectResult >= 7 && numericSubjectResult < 9) {
      subjectResult = "NOTABLE";
    } else if (numericSubjectResult >= 9 && numericSubjectResult < 10) {
      subjectResult = "SOBRESALIENTE";
    } else {
      subjectResult = "MATRICULA DE HONOR";
    }
    render(`<p>Su nota ${userInput} es: ${subjectResult}</p>`);
  } else {
    render(`<p>${userInput} no es una nota válida</p>`);
  }
}

/**
 * Otra versión del ejercicio utilizando arrays y algo de creatividad
 */
function exerciseExecutor_6_extra() {
  const SUBJECT_RESULTS = [
    // Guardamos en un array los resultados cuyo índice coincida con la parte entera de la nota
    "SUSPENSA",
    "SUSPENSA",
    "SUSPENSA",
    "SUSPENSA",
    "SUSPENSA",
    "APROBADA",
    "APROBADA",
    "NOTABLE",
    "NOTABLE",
    "SOBRESALIENTE",
    "MATRICULA DE HONOR",
  ];
  const userInput = prompt("Introduzca la nota del examen");
  const numericSubjectResult = Number.parseInt(userInput); // Obtenemos el número entero y no flotante
  const isValidSubjectResult =
    numericSubjectResult >= 0 && numericSubjectResult <= 10;

  if (isValidSubjectResult) {
    // Directamente renderizamos la posición del array que coincida con la nota
    render(
      `<p>Su nota ${userInput} es: ${SUBJECT_RESULTS[numericSubjectResult]}</p>`
    );
  } else {
    render(`<p>${userInput} no es una nota válida</p>`);
  }
}

/**
 * 1. Solicitamos al usuario la URL
 * 2. Comprobamos que el string incluya github.com e indicamos al usuario
 */
function exerciseExecutor_7() {
  const userInput = prompt("Introduzca una URL");
  const userURL = userInput.toLowerCase(); // bajamos a minusculas para normalizar la comparación
  // Esta validación se puede hacer utilizando Expresiones regulares.
  // @see (Docs): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
  // @see (Demo): https://regex101.com/r/iNv466/1
  // const isValidGithubURL = /^(https?:\/\/)?(\w*\.)*github\.com(\/|\/[a-zA-Z0-9_]{1,25})*$/igm.test(trafficLightState)
  const isValidGithubURL =
    userURL.startsWith("https://github.com/") ||
    userURL.includes(".github.com/");
  // Igualmente esta validación no nos asegura al 100% que la URL sea de GitHub. La expresión regular es lo más acertado para validar cadenas de texto

  if (isValidGithubURL) {
    render(`<p>Es una URL de Github Válida</p>`);
  } else {
    render(
      `<p>${userInput} no es una url con dominio o subdominio perteneciente a github</p>`
    );
  }
}

/**
 * CODE NOT FOR THE EXERCISES. ITS FOR EXERCISE SELECTOR FORM
 */

const MAX_EXERCISE = 15;

const NOT_EXERCISE_FOUND_EXECUTOR = () => {
  alert("No exersice found");
};

document
  .querySelector("#EXERCISE_SELECTION")
  .addEventListener("submit", (ev) => {
    ev.preventDefault(); // remove the browser's default behavior
    clearExeciseResultOutput();
    const chosenExercise = ev.target.exercise.value;
    const exerciseExecutor =
      window[`exerciseExecutor_${chosenExercise}`] ??
      NOT_EXERCISE_FOUND_EXECUTOR;
    exerciseExecutor.call();
  });
