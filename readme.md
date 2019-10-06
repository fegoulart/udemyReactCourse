#Section 2 - Javascript

##Arrow functions

###Benefício 
é que nunca se confundira com o this


`const myFunc = () => {
    return "eu"
};`

`const myFunc2 = name => {
    return name
};`

`const myFunc3 = number => number * 2;
`
##Exports and Imports

###person.js (default export - can choose name in import)

`const person = {
  name = 'Max'
}
export default person`

###utility.js (named export - cannot choose name in import)

`export const clean = () => { ... }
export const baseData = 10;`

###app.js

`import person from './person.js'
import prs from './person.js'
import { baseData } from './utility.js'
import { clean } from './utility.js'`

###other options for importing named exports
`import { smth as Smth } from './utility.js'
import * as bundled from './utility.js'`

##Classes

Can have properties and methods

`class Person {
name='Max'
call = () => {...}
}
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)`

Inheritance
`class Person extends Master`

Constructor method
`class Person extends Human{
    constructor() {
        //necessario chamar super se esta estendendo e tem constructor
        super();
        this.name='Max';
        this.gender = 'female';
    }
    printMyName() {
        console.log(this.name);
   }
}`

###ES7 (precisa de Babel)
Nao precisa mais declarar o constructor
Basta tratar como variavel
`myProperty = 'value'`

Mais idiomatico usar arrow functions para os métodos da classe
`myMethod = () => { ... }`

##Spread and Rest Operators

###Spread
Split up array or object elements 
`const newArray = [...oldArray,1,2]
const newObject={...oldObject,newProp:5}`

`const numbers = [1,2,3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);`

`const person = {
    name: 'Max'
};
const newPerson = {
    ...person,
    age: 28
}
console.log(newPerson);`

###Rest
Merge a list of function arguments into an array
`function sortArgs(...args) {
    return args.sort()
}`

`const filter = (...args) => {
    return args.filter(el => el === 1);
}
console.log(filter(1,2,3));`

##Destructuring
Extract array or object elements / properties and store them in variables

`const numbers = [1, 2, 3];
[num1, num2] = numbers;
[, ,num3] = numbers;
console.log(num1, num2); //1 2`

##Reference and Primitive Types
Cuidado pois objetos e arrays sao passados por referencia
Nao é gerado uma nova variavel, mas sim so mais um ponteiro
`const person = {
    name: 'Max'
};
const secondPerson = person;
console.log(secondPerson);`

Para criar mesmo um novo objeto / array, usamos o spread operator
`const person = {
    name: 'Max'
};
const secondPerson = {
    ...person
};
console.log(secondPerson);`

##Array functions

Map

`const numbers = [1, 2, 3];
const doubleNumArray = numbers.map(num) => {
    return num * 2;
});
console.log(numbers);
console.log(doubleNumArray);`

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

