# Ejercicios de introducción a JS

El objetivo consiste en crear un sitio web que contenga una cabecera con un menú de navegación que contenga los links a cada uno de los ejercicios. Cada ejercicio debe estar en una página diferente, es decir, en un archivo HTML diferente.

Por ejemplo la estructura podría ser algo así:

```plaintext
.
├── index.html
├── exercise-1
│   ├── index.html
│   └── script.js
├── exercise-2
│   ├── index.html
│   └── script.js
└──...
```

Para solicitar datos al usuario se puede utilizar la función `prompt` de JavaScript. Por ejemplo:

```javascript
const name = prompt("¿Cuál es tu nombre?");
```

Para mostrar mensajes al usuario se utilizará la función `render` vista en clase, pasando como argumento el HTML con el resultado del ejercicio.

## Ejercicios

1. Request to strings to the user and print the length of concatenated result string.
2. Request a number of celsius degrees to the user and print the Farenheit degrees.
3. Request two number (Weight and Height) and calculate the IMC of two variables and print if it is 'Obesidad de clase II'.
4. A road has 90km/h speed limits. If the pollution is greater than 65% the speed limit must be 70km/h. Build an algorithm to print what is the road speed limits depending on the pollution.
5. A traffic light can be 'green', 'flashing amber', 'amber' or 'red'. Build and algorithm that request the current traffic light and prints if a car must stop or can go on. If the user inputs a different value, print an error message.
   - PD: flashing amber you can go on
   - PD: amber you must stop

## Entrega

El ejercicio se debe entregar en classroom para ello, indicando la URL del repositorio de GitHub donde se encuentre el código fuente del ejercicio, la url de SonarCloud y la url de Netlify.
