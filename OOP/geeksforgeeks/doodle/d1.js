const log =log=> console.log(log);

console.log("scriu aici")
// log()
// show(log)


let eu={
    a:2,
    3:4,
    5:function(){
        log(eu["1"])
    }
}

// log(eu);
eu["5"]()

// console.log (function(){console.log} )


let crazy=[
    {
        a:1,
        b:2,
        c:[9,9,9,9]
    },
    {d:12,
     e:3012,
     f:[9,9,[1,2,3],{1:21}]}
]
log(crazy.length)
log(crazy[0])



let you={
    a: {a: {},
    b:{},
    c:{}},

    b:{a: {},
        b:{},
        c:{}},

    c:{a: {},
    b:{},
    c:{}}
}
log(you)
log("--------------");

one(10)

function one(a){
    a++;
    two(a);
    function two(a){
        a++;
        log(a)
    }

    function three(){log("b")}
    function four(){log("c")}
    function five(){log("d")}
}

let forever=[
    function a(){},
    function b(){},
    function c(){}
    ]


export default {
    computed:{
        ...mapState('robots',{robotsFoo:'foo'}),
        ...mapGetters({rootGetterFoo:'foo'}),
        ...mapGetters({robotsGetterFoo:'foo'}),

        cart(){
            return  this.$store.state.robots.cart;
        },
    },
    name: 'app',
}