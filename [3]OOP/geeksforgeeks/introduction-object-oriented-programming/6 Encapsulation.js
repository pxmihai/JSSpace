//encapsulation example
class person{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    add_Address(add){
        this.add = add;
    }
    getDetails(){
        console.log(`Name is: ${this.name},Address is: ${this.add}`);
    }
}

let person1 = new person('Mukul',21);
person1.add_Address('Delhi');
person1.getDetails();

//exemplu incapsulare

class persoana{

    constructor(nume,id){
        this.nume=nume;
        this.id=id;

    }
    adaug_Adresa(adaug){
        this.adaug=adaug;
    }
    obtineDetalii(){
        console.log(`Numele este: ${this.nume}, Adresa este: ${this.adaug}`);
    }

}

let persoana1=new persoana('Stefan cel Mare',99);
persoana1.adaug_Adresa('Marasesti');
persoana1.obtineDetalii();