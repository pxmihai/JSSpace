// let me=()=>[9,8,7,6,5];
//     // return [9,8,7,6,5];
//
// const [marry,had,a,little,lamb]=me();
// console.log(marry,had,a,little,lamb)
// let us=[1,2,3,4,5]
// const[fleece,was,white,as,snow]=us;
// console.log(fleece,was,white,as,snow)
//
// console.log(typeof(me))
// console.log(typeof(us))

// const [water,fire]=[3,2,1];
// console.log(water);
// console.log(fire);

let spaceBucket = {
    value0: "pair",
    value1: {value00: "pair0"},
    value4: {value02: "pair2", value03: "pair3"},
    value5: [
        {value05: "pair5", value06: "pair6"},
        {value07: "pair7", value08: "pair8"}
    ],
    value6:[ [{a: "x"}],[{b: "y"}],[{c: "z"}],[{d: "x"}],[{e: "y"}],[{f: "z"}]
    ],


}

let objects ={pick:[{a:"abc"},{b:"bcd"},{c:"cde"},{d:"def"}]};
console.log(objects.pick.find((item) => item.hasOwnProperty('d')).d)

// console.log(spaceBucket.value)/*undefined*/
// console.log(spaceBucket.value0)/*pair*/
// console.log(spaceBucket.value1)/*{ value00: 'pair0' }*/
// console.log(spaceBucket.value1.value00)/*pair0*/
// console.log(spaceBucket.value5[0])/*{ value05: 'pair5', value06: 'pair6' }*/
// console.log(spaceBucket.value5[0].value05)/*pair5*/
// console.log(spaceBucket.value5[0].value06)/*pair6*/
// console.log(spaceBucket.value5[0].value05)/*pair5*/
// console.log(spaceBucket.value5[0].value06)/*pair6*/
// console.log(spaceBucket.value5[1].value07) /*pair6*/
// console.log(spaceBucket.value6[3][0].d) /* x */
console.log(spaceBucket.value6.find((item) => item.hasOwnProperty('d')))