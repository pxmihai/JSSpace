isPrime(2);

function isPrime(num) {
//     for(var i = 2; i < num; i++) if(num % i === 0) return false; return num > 1;
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) console.log(false) ;
          else  (console.log (num > 1))  ;
}