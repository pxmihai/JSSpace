// https://javascript.info/async-await

async function f(x) {

    console.log('x')
    return 1;
}
f().then(console.log("called"));

