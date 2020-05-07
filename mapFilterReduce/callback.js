// credit https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
console.log("~~Callbacks~~")
{/*Simple example*/
    function first(){
        console.log(1);
    }
    function second(){
    console.log(2);
    }
    first();
    second();
}/*EOF*/

{/*Code delayed*/
    function first(){
        // Simulate a code delay
        console.log("original 500, normal flow 1")
        setTimeout( function(){
            console.log("waiting 500 over original 500, abnormal flow 2");
        }, 500 );
    }
    function second(){
    console.log("normal flow 2");
    }
    first();
    second();
}/*EOF*/

{/*adding a time buffer*/
    console.log("original 498");
    setTimeout(function () {
        console.log("waiting 498 over original 498, spacer between {}");
    }, 498);
}/*EOF*/

{/*create callback*/
    function doHomework(subject) {
        console.log(`Starting my ${subject} homework.`);
    }
    doHomework('physics');
}/*EOF*/

{/*add callback*/
    function doHomework(subject, callback) {
        console.log(`Starting my ${subject} homework.`);
        callback();
    }

    doHomework('math', function() {
        console.log('Finished my homework');
    });
}/*EOF*/


