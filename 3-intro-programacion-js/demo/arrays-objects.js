/**
 * const num1 = 23;
 * const num2 = 33;
 * ...
 *
 * const num10 = 732;
 *
 *
 * const sum = num1+num2+....num10;
 *
 * YO con el dato sólo puedo realizar 4 operaciones:
 *
 * - Creación del dato (C)
 * - Obtención o Lectura del dato (R)
 * - Actualización (parcial o total) del dato (U)
 * - Borrado del dato (D)
 *
 * A esto se le conoce como CRUD
 *
 *
 * a- Cómo creo una lista
 * b- Cómo añado elementos a la lista
 * c- Cómo consulto una posición
 * d- Cómo modifico un elemento
 * e- Cómo elmino un elemento
 * f- Cómo recorro la lista
 * g- Cómo busco un elemento de la lista
 *
 */
const adios = "demo";
const myNumericList = [29, 45, 44, 10, 89, 73]; // lista de 3 elementos numéricos
const myStringsList = ["hola", adios.toUpperCase()]; // genera una lista con dos elementos ['hola', 'DEMO']
const myBooleanList = [true, true];

// ¿Puedo mezclar en una lista tipos de datos? num y strings
const mixedList = [55, "hola"]; // NO DEBEMOS MEZCLAR TIPOS EN UNA LISTA

// como añado un elemento

myNumericList.push(90); // añadir al final de la lista. Ahora la lista tendrá [29, 44, 10, 90]
// [29, 44, 10] --> length=3 y la última posición existente es 2
myNumericList[myNumericList.length] = 90; // Hace exactamente lo mismo que el push
myNumericList.unshift(80); // añade al principio de la lista. Ahora la lista tendrá [80, 29, 44, 10, 90]
myNumericList.splice(3, 0, 70); // añade un elemento en la posición 3. (las posiciones empiezan por 0). Ahora la lista tendrá [80, 29, 44,70, 10, 90] (Se inserta en la posición 3)

// como consulto una posición

myNumericList[4]; // devuelve o hace referencia al quinto elemento de la lista o la posición 4. En este caso sería el número 10
myNumericList[10]; //acceso a una posición inexistente. Esto devuelve `undefined`
myStringsList[4]; // esto devuelve undefined

myNumericList.length; // esto devuelve la longitud TOTAL del array (lista). En este caso sería 6
// [80, 29, 44,70, 10, 90] --> 0, 1, 2 ..., 5
myNumericList[myNumericList.length - 1]; // acceder a la última posición de manera genérica

// como modifico un elemento existente
myNumericList[1] = 267; // Cambio el valor del segundo elemento (posición 1). La lista queda Ahora la lista tendrá [80, 267, 44,70, 10, 90]

// como elimino un elemento
myNumericList.splice(3, 1); // Elimino el elemento de la posición 3. [80, 267, 44, 10, 90] (Se elimina el 70)

// cómo busco o recorro un elemento. Necesito un criterio de búsqueda.

// EJ: Pintar los números número impar
console.log("Lista: ", myNumericList);
for (let i = 0; i < myNumericList.length; i++) {
  // Esto da tantas vueltas como elementos tiene la lista
  const currentValue = myNumericList[i];
  const isOdd = currentValue % 2 === 1; // devuelve un boolean
  if (isOdd) {
    console.log(currentValue);
  }
}

// EJ: Crear una nuva lista solo con los impares y pointar toda la lista de una vez
console.log("Lista: ", myNumericList);
const myOddList = []; // Creo una lista sin datos
for (let i = 0; i < myNumericList.length; i++) {
  // Esto da tantas vueltas como elementos tiene la lista
  const isOdd = myNumericList[i] % 2 === 1; // devuelve un boolean
  if (isOdd) {
    myOddList.push(myNumericList[i]); // añade al final de la lista `myOddList` el elemento `i` de `myNumericList`.
  }
}

console.log(`La lista de impares es ${myOddList}`);

/// OBJECTOS

// Objetivo: ¿Quiero definir/modelar al usuario de la vida real en mi aplicación¿ ==> POO (Porgramación orientada a objetos)

const name = "Alex";
const email = "alejandro@comomolalaprogramacion.com";
const age = 23;

// PAra evitar ue todas estas variables estén desperdigadas, Exite el tipo de datos Object
const user = {
  name: "Alex",
  email: "alejandro@comomolalaprogramacion.com",
  age: 23,
  hairColor: "Es calvo",
  isUnderAge: true,
};

const otherUser = {
  name: "Alex",
  email: "alejandro@comomolalaprogramacion.com",
  age: 23,
  hairColor: "Es calvo",
  isUnderAge: true,
};

user.age; // Esto hace referncia a la propiedad age del user: 23
user.email; // Esto hace referncia a la propiedad email del user: alejandro@comomolalaprogramacion.com

// Otra alternativa
user["age"];
user["email"];

user.name = "Max Power"; // Ahora el user como name ya no tiene Alex sino Max Power
// tres formas equivalentes de sumar uno a una propiedad
user.age = user.age + 1;
user.age += 1;
user.age++;

// añadir propiedad inexistente a un objeto
user.height = 180; //El objeto tiene ahora una nueva propiedad llamada height

delete user.height; //Borra la propiedad height

//Otra ventaja Traduccion directa a un formato llamado JSON
