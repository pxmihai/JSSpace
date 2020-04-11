//Defining object
let person = {
    first_name:'Mukul',
    last_name: 'Latiyan',

    //method
    getFunction : function(){
        return (`The name of the person is 
		${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number : {
        mobile:'12345',
        landline:'6789'
    }
}
console.log(person.getFunction());
console.log(person.phone_number.landline);

let persoana={
    nume:'Toparceanu',
    prenume:'George',
    //metoda
    afiseazaNume:function(){
        return(`numele persoanei este 
            '${persoana.nume} ${person.last_name}`)
    },
    // obiect in obiect
    numar_telefoon:{
        mobil:'0774/123/123',
        fix:'#9999'
    }
}
console.log(persoana.afiseazaNume());
console.log(persoana.numar_telefoon.mobil);