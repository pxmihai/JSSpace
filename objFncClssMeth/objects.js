console.log('Hello');
let box={
        keep:1,
        much :function(){
            let value =10;
            console.log( value );
            return value;
        },

        toast :function(){
            let value=18;
            console.log( value );
            return value;
        },

        display:function(){
            console.log( this.keep );/*value is 1 and shown*/
            this.keep=this.much()+this.toast();/*called this.much and this roast, displays 10 and 18 then returns them, they are added and placed inside keep */
            return this.keep /*the value is returned*/
        }
}

console.log(box.display());/* the returned value is displayed*/
console.log('World!');

let inside={
    some: function stuff(){return '1'},
    stuff(){return '2'},
}

// console.log(inside.some()+inside.stuff());
console.log(`${inside.some()} ${inside.stuff()}`);




