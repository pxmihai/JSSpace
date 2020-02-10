let method1={
    smack1(){return 'smack';},
    my1(){return 'my';},
    bitch1(){return 'bitch';},
    up1(){return 'up';}
}

console.log(method1.smack1(),method1.my1(),method1.bitch1(),method1.up1());

const method2 = {
    smack1: () => 'smack',
    my1: () => 'my',
    bitch1: () => 'bitch',
    up1: () => 'up',
}

console.log(`${method2.smack1()} ${method2.my1()} ${method2.bitch1()} ${method2.up1()}`)


