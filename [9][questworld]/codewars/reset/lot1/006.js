function persistence(num){
    let result=0;
    while (num>9){
        num = multi(split(num));
        result++;
    }


    return result;
}

function split(x){
    let result;
    result = x.toString().split('');
    return result;

}

function multi(x){
    let result=x.reduce((x,y)=>x*y);
    return result;
}


console.log(persistence(999));
//expected  999>729>126>12>2