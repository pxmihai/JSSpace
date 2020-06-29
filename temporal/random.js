//https://frontnet.eu/javascript-async-await-introduction-to-asynchronous-javascript-programming/
if(0){
    let primes = [2, 3, 5, 7, 11];

    primes.forEach(prime => {

        console.log(prime ** 2);

    });

// => 4, 9, 25, 49, 121

    primes.map(prime => {

        console.log(prime ** 2);

    });
// => 4, 9, 25, 49, 121

    primes.forEach(prime => {

        console.log(prime ** 2);

    });


    console.log('done');


// => 4, 9, 25, 49, 121, done
}

if(0){
    setTimeout(() => {

        console.log('World')

    }, 10);


    console.log('Hello');
    // => Hello, World
}

if(0){
    const https = require('https');


    https.get('https://www.thenativeweb.io', res => {

        console.log(res.statusCode); // => 200

    });


    console.log('Requesting...');
}

if(1){
    const https = require('https');
    try {

        https.get('https://www.thenativeweb.local', res => {
            console.log(res.statusCode);
        });
    } catch (e) {
        console.log('Error', e);
    }


// =&gt; Unhandled 'error' event

//      getaddrinfo ENOTFOUND www.thenativeweb.local www.thenativeweb.local:80
}


