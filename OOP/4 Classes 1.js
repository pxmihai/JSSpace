// Defining class using es6
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        return (`The name of the bike is ${this.name}.`)
    }
}
// Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name); // Hayabusa
console.log(bike2.maker); // Kawasaki
console.log(bike1.getDetails());

//Definim clase folosind es6
class Vehicul{
    constructor(nume, fabricant,motor){
        this.nume=nume;
        this.fabricant=fabricant;
        this.motor=motor;
    }
    obtineDetalii(){
        return (`Numele acestei biciclete este ${this.nume}.`)
    }
}

//construim un obiect cu ajutorul unui constructor.

let bici1=new Vehicul('Motoreta','Suzuki','Benzina 1234cc');
let bici2=new Vehicul('Tricicleta','CUBE','tractiune Umana');
console.log(bici1.obtineDetalii());
console.log(bici2.obtineDetalii());