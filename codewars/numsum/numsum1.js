// digital_root(8912734);

digital_root(12345);
function digital_root(n) {
    let num=n;

    while(num>9)num=num.toString().split('').map(Number).reduce((p,c)=>p+c);
    console.log(num);
}