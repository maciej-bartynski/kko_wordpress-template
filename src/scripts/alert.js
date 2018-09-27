import  axios from "axios";
import $ from 'jquery';

async function fetching(){
    let res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(res);
}
fetching();

let Testing = class {
    constructor(name, surname){
        this.name = name,
        this.surname= surname
    }
    testThisClass(){
        return `${this.name} ${this.surname}`
    }
}

let Person = new Testing("Imie", "Nazwisko");
console.log(Person.testThisClass());

$(".jquerytest").click(function () {
    alert("Handler for .click() called.");
});