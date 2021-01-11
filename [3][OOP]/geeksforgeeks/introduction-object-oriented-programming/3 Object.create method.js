
// Object.create() example a
// simple object with some properties
const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I  
          studying??!?!!?!: ${this.isStudying}.`)
    }
}
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = 'Mukul';

// Inherited properties can be overwritten
me.isStudying = 'True';

me.printIntroduction();

//Object.create() exemplu
// obiect simplu cu cateva proprietati

const programator={
    elStudiaza:true,

    printeazaIntro:function(){
        console.log(`Numele meu este ${this.nume} Eu 
        studiez?: ${this.elStudiaza}. `)
    }
}

//Metoda Object.create()
const eu=Object.create(programator);

//'nume' e o proprietate a eu dar nu si a "programator"
eu.nume='Ion Creanga';
eu.elStudiaza='False';

eu.printeazaIntro();


let uite1=true;
let uite2=false;