// Defining class in a Traditional Way.
function Vehicle(name,maker,engine){
        this.name = name,
        this.maker = maker,
        this.engine = engine
};

Vehicle.prototype.getDetails = function(){
    return('The name of the bike is '+ this.name);
}

let bike1 = new Vehicle('Hayabusa','Suzuki','1340cc');
let bike2 = new Vehicle('Ninja','Kawasaki','998cc');

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());
console.log('------');

//Definirea clasei in sensul traditional
function Vehicul(nume,fabricant,motor){
        this.nume=nume,
        this.fabricant=fabricant,
        this.motor=motor
};

Vehicul.prototype.extrageDetalii=function(){
    return('Numele vehicolului este ' + this.nume);
}

let masina1=new Vehicul("Trabant","PrrPrr","da");
let masina2=new Vehicul("BMW X6","BMW","4.3.2");
console.log(masina1.nume);
console.log(masina2.fabricant);
console.log(masina1.extrageDetalii());
