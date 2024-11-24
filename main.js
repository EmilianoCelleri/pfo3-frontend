/* 1. Calcular el área de un rectángulo
Escribe una función que reciba la longitud y el ancho de un rectángulo y devuelva su área.
La funcion no debe devolver un console.log() sino retornar un valor, llamaremos a la funcion dentro de un
console.log() .
La idea de esto es comprender que algunas funciones retornan un valor y otras simplemente hacen otras cosas, como
imprimir un mensaje por consola. Las que retornan algo, deberán incluir la palabra clave return
console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15
*/

function calcularAreaRectangulo(base, altura)  {
    return base * altura;
};
console.log("Solucion 1:")
console.log(calcularAreaRectangulo(5,3));
console.log(calcularAreaRectangulo(10,3));
console.log(calcularAreaRectangulo(4,2));
console.log("Fin Solucion 1")
console.log("----------------------------")

/* En este ejercicio bastaba con retornar el calculo de base por altura, por lo tanto solo habia que recibir por parametros
 2 numeros (base, altura) y hacer el return con el calculo resuelto
 */

// -----------------------------------------------------------------------------------------------------------------------

/* 2. Contar palabras en una cadena
Escribe una función que reciba una cadena de texto (string) y devuelva la cantidad de palabras en la cadena.
console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 4
*/

function contarPalabras(string) {
    console.log(`String recibido: ${string}`);
    const palabras = string.split(' ');
    return palabras.length;
}

console.log("Solucion 2:")
console.log(contarPalabras("Humahuaca es un lugar copado"));
console.log(contarPalabras("Esta materia es FrontEnd"));
console.log(contarPalabras("Aprendimos HTML CSS y Javascript"));
console.log("Fin Solucion 2")
console.log("----------------------------")

/* En este ejercicio habia que contar las palabras que tenia un string, un metodo que se puede utilizar es convertirlo a 
un array separado en los espacios en blanco (' ') para lugar medir la longitud de ese array y devolver esa longitud
ya que la cantidad de elementos de ese array es la cantidad de palabras */

// -----------------------------------------------------------------------------------------------------------------------

/* 3. Invertir una cadena
Escribe una función que tome una cadena como parámetro y devuelva la cadena invertida.
console.log(invertirCadena("hola")); // Resultado: "aloh" */

const invertirCadena = (string) => string.split('').reverse().join('');

console.log("Solucion 3:")
console.log(invertirCadena("hola"));
console.log(invertirCadena("javascript"));
console.log(invertirCadena("frontend"));
console.log("Fin Solucion 3")
console.log("----------------------------")

/* Aca utilice una funcion flecha que recibe como parametro un string y lo devuelve luego de pasar por los metodos split
para convertirlo en un array 'h' 'o' 'l' 'a', al ser un array se puede aplicar el metodo reverse por lo tanto 
el array en este momento seria aloh pero si se retorna de esta manera saldria con las comas respectivas del array
por lo tanto lo vuelvo a juntar en un string con join('')
*/

// -----------------------------------------------------------------------------------------------------------------------

/* 4. Encontrar el palíndromo
Escribe una función que reciba un string y devuelva true o false si el string es un palíndromo.
// Ejemplos, neuquen, reconocer, rallar
console.log(esPalindromo("neuquen")); // true */

function esPalindromo (string) {
    console.log(`String recibido: ${string}`);
    return invertirCadena(string) === string;
}
console.log("Solucion 4:")
console.log(esPalindromo("neuquen"));
console.log(esPalindromo("aerea"));
console.log(esPalindromo("javascript"));
console.log("Fin Solucion 4")
console.log("----------------------------")

/* Para este ejercicio aprovecho que ya tengo armada un funcion para invertir una cadena, por lo tanto simplemente hago
la comparacion de si el string que recibo es el mismo que el string que recibo luego de pasar por la funcion para 
invertirlo, por lo tanto solo me quedaba devolver true o false que se hace solo cuando en el return pones 
una comparacion */

// -----------------------------------------------------------------------------------------------------------------------

/* 5. Crear un programa para convertir la edad de un perro a años humanos
Escribe una función que tome un valor de un usuario, utilizando una ventana emergente prompt y calcule la edad
canina, que equivale a 7 veces la edad humana.
Esta funcion no debe devolver un valor sino mostrar por consola un mensaje como el del ejemplo.
edadCanina(7); // Tu perro tiene 49 años humanos */

function edadCanina() {
    const edadHumana = prompt("Ingrese la edad humana para calcular la edad canina: ");
    console.log(`Tu perro tiene ${edadHumana * 7} años humanos.`);
}

edadCanina();

/* Aca utilizo una funcion que no recibe parametros porque los tengo que recibir en un prompt por lo tanto lo guardo en
 una variable y como el ejercicio solicita que se devuelva en un console.log aprovecho el mismo para hacer la 
 operacion solicitada */

// -----------------------------------------------------------------------------------------------------------------------