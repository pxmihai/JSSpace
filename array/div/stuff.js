let arr=[1,2,3,4,3,5,6,12,7,8,9,3,4,5,6,7,8,2];
function ok(arr){

    return [...new Set(
        arr.filter((value, index, self) => self.indexOf(value) !== index))]

}

console.log(ok(arr));



let test=[3,45,32,12,3,1,3,1]
// 45 45 45
let other=test.map(x=>((x*x*x)/x));
console.log(other)
let x=21;
console.log(x**2);

{
    function trebuie(){
        console.log("hei!")
    }
}
{
    let trebuie=0;
}

{
    function trebuie(){
        console.log("hei!")
    }
}

{
    let trebuie=0;
}

if (trebuie) trebuie();

{
    const trebuie = (trebuie) => {
        trebuie = "trebuie";
        if (trebuie) return trebuie;
    };
    console.log(trebuie());
}
{
    let me=(me)=>{
        me="ok"
        if (me)return me;
    }
    console.log(me());
}