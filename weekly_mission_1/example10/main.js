/* Ejercicio
    Crea un archivo pokemon.js, ahí crea la clase que necesitas para correr el archivo main.js. Deberás exportarla usando ESM.
        Necesitarás usar export default.
        La clase tiene la misma implementación que el ejercicio anterior.
        Finalmente corre: node main.js
**/

import MyPokemon from './pokemon.js'

const pikachu = new MyPokemon('Pikachu')
pikachu.sayHello()